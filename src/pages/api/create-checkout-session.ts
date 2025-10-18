import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const { priceId, productName, isSubscription } = await request.json();

    // Get Stripe Secret Key from environment - try both methods and sanitize
    const STRIPE_SECRET_KEY_RAW = process.env.STRIPE_SECRET_KEY || import.meta.env.STRIPE_SECRET_KEY;
    const STRIPE_SECRET_KEY = (STRIPE_SECRET_KEY_RAW || '')
      .trim()
      .replace(/^['"]|['"]$/g, '');

    if (!STRIPE_SECRET_KEY) {
      console.error('STRIPE_SECRET_KEY is not defined');
      return new Response(
        JSON.stringify({ 
          error: 'Stripe is not configured. Please add STRIPE_SECRET_KEY to your .env file.' 
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Import Stripe dynamically
    const stripe = (await import('stripe')).default;
    // Use account default API version (avoid mismatches)
    const stripeClient = new stripe(STRIPE_SECRET_KEY);

    // Create Checkout Session
    const session = await stripeClient.checkout.sessions.create({
      mode: isSubscription ? 'subscription' : 'payment',
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${request.headers.get('origin')}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.headers.get('origin')}/pricing`,
      metadata: {
        productName,
      },
    });

    return new Response(
      JSON.stringify({ url: session.url }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error: any) {
    console.error('Error creating checkout session:', error);
    return new Response(
      JSON.stringify({ error: error.message || 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

