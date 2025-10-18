# Stripe Integration Setup Guide

This guide will help you configure Stripe payments for your Self Labs website.

## 📋 Prerequisites

- Stripe account (create at https://stripe.com/)
- Access to Stripe Dashboard
- Node.js and npm installed

## 🚀 Setup Steps

### Step 1: Install Dependencies

```bash
npm install stripe
```

✅ Already completed!

### Step 2: Configure Environment Variables

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Get your Stripe API keys:
   - Go to: https://dashboard.stripe.com/apikeys
   - Copy your **Secret Key** (starts with `sk_test_` for test mode)
   - Copy your **Publishable Key** (starts with `pk_test_` for test mode)

3. Update `.env` with your keys:
   ```
   STRIPE_SECRET_KEY=sk_test_your_actual_key_here
   STRIPE_PUBLISHABLE_KEY=pk_test_your_actual_key_here
   ```

### Step 3: Get Stripe Price IDs

You already have products in Stripe! Now you need to get their Price IDs:

1. Go to: https://dashboard.stripe.com/products
2. Click on each product
3. Copy the **Price ID** (starts with `price_`)
4. Update your `.env` file with each Price ID

#### Finding Price IDs in Stripe Dashboard:

**Website Builds:**
- Basic Website Build → Copy Price ID → Update `PRICE_BASIC_WEBSITE`
- Standard Website Build → Copy Price ID → Update `PRICE_STANDARD_WEBSITE`
- Premium Website Build → Copy Price ID → Update `PRICE_PREMIUM_WEBSITE`

**Maintenance Packages:**
- Basic Maintenance Package → Copy Price ID → Update `PRICE_BASIC_MAINTENANCE`
- Standard Maintenance Package → Copy Price ID → Update `PRICE_STANDARD_MAINTENANCE`
- Premium Maintenance Package → Copy Price ID → Update `PRICE_PREMIUM_MAINTENANCE`

**Add-ons:**
- SEO Audit & Setup → Copy Price ID → Update `PRICE_SEO_AUDIT`
- Priority Rush Service → Copy Price ID → Update `PRICE_RUSH_SERVICE`
- Priority Rush Service x → Copy Price ID → Update `PRICE_RUSH_SERVICE_X`

### Step 4: Update Price IDs in Code

Open `/src/components/landing/Pricing.astro` and replace the placeholder price IDs with your actual Stripe Price IDs:

```javascript
// Find lines like:
priceId: "price_basic_website",

// Replace with your actual Price ID:
priceId: "price_1abc123xyz",
```

**Quick find & replace:**
1. `price_basic_website` → Your Basic Website Price ID
2. `price_standard_website` → Your Standard Website Price ID
3. `price_premium_website` → Your Premium Website Price ID
4. `price_basic_maintenance` → Your Basic Maintenance Price ID
5. `price_standard_maintenance` → Your Standard Maintenance Price ID
6. `price_premium_maintenance` → Your Premium Maintenance Price ID
7. `price_seo_audit` → Your SEO Audit Price ID
8. `price_rush_service` → Your Rush Service Price ID

### Step 5: Test the Integration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to: http://localhost:4321/pricing

3. Click any "Get Started" or "Subscribe Now" button

4. You should be redirected to Stripe Checkout

5. Use Stripe's test card:
   - Card: `4242 4242 4242 4242`
   - Expiry: Any future date
   - CVC: Any 3 digits
   - ZIP: Any 5 digits

6. Complete the test purchase

7. You should be redirected to the success page

### Step 6: Verify Payments in Stripe

1. Go to: https://dashboard.stripe.com/test/payments
2. You should see your test payment
3. Check that the product name and amount are correct

## 🔒 Security Notes

### Important:
- **NEVER** commit your `.env` file to Git
- The `.env` file is already in `.gitignore`
- Only use test keys (`sk_test_*`) during development
- Switch to live keys (`sk_live_*`) only when ready for production

### For Production:

When you're ready to go live:

1. **Activate your Stripe account**:
   - Complete business verification
   - Add bank account details

2. **Switch to live mode** in Stripe Dashboard (toggle in top-right)

3. **Create live products** (same as test products)

4. **Update environment variables** with live keys:
   ```
   STRIPE_SECRET_KEY=sk_live_your_live_key
   STRIPE_PUBLISHABLE_KEY=pk_live_your_live_key
   ```

5. **Update Price IDs** in `Pricing.astro` with live Price IDs

6. **Test thoroughly** with a real card (will charge real money!)

## 📊 Monitoring Payments

### Stripe Dashboard Features:

- **Payments**: https://dashboard.stripe.com/payments
  - View all transactions
  - Issue refunds
  - Track payment status

- **Customers**: https://dashboard.stripe.com/customers
  - View customer information
  - Manage subscriptions
  - View payment history

- **Subscriptions**: https://dashboard.stripe.com/subscriptions
  - Manage recurring payments
  - Cancel or pause subscriptions
  - Update billing cycles

- **Reports**: https://dashboard.stripe.com/reports
  - Revenue analytics
  - Export data
  - Tax reports

## 🔔 Webhooks (Optional - Advanced)

To receive real-time notifications about payments, you can set up webhooks:

1. Go to: https://dashboard.stripe.com/webhooks
2. Create a webhook endpoint: `https://yourdomain.com/api/stripe-webhook`
3. Select events to listen for:
   - `checkout.session.completed` - Payment successful
   - `customer.subscription.created` - New subscription
   - `customer.subscription.deleted` - Subscription cancelled
   - `payment_intent.succeeded` - Payment completed

## 🆘 Troubleshooting

### "Stripe is not configured" error
- Make sure `.env` file exists
- Verify `STRIPE_SECRET_KEY` is set correctly
- Restart your dev server after changing `.env`

### Checkout button doesn't work
- Check browser console for errors
- Verify Price IDs match exactly in Stripe Dashboard
- Make sure Stripe npm package is installed

### Redirects to wrong URL
- Check `success_url` and `cancel_url` in `create-checkout-session.ts`
- Verify your domain is correct

### Payment fails
- Use test card: `4242 4242 4242 4242`
- Check Stripe Dashboard for errors
- Verify products are active in Stripe

## 📚 Additional Resources

- **Stripe Documentation**: https://stripe.com/docs
- **Stripe API Reference**: https://stripe.com/docs/api
- **Stripe Checkout**: https://stripe.com/docs/payments/checkout
- **Stripe Testing**: https://stripe.com/docs/testing

## 🎯 Next Steps

After setting up Stripe:

1. ✅ Test all payment flows
2. ✅ Verify success page displays correctly
3. ✅ Check email notifications (configure in Stripe Dashboard)
4. ✅ Set up webhooks for order fulfillment
5. ✅ Add refund policy page
6. ✅ Configure tax rates if needed (Stripe Tax)
7. ✅ Test subscription cancellation flow

## 💡 Pro Tips

1. **Use Stripe's Test Clock** to test subscriptions:
   - https://stripe.com/docs/billing/testing/test-clocks

2. **Enable Stripe Tax** for automatic tax calculation:
   - https://dashboard.stripe.com/tax

3. **Set up billing portal** for customers to manage subscriptions:
   - https://dashboard.stripe.com/settings/billing/portal

4. **Add coupon codes** for promotions:
   - https://dashboard.stripe.com/coupons

5. **Enable payment methods**:
   - Apple Pay
   - Google Pay
   - Link (Stripe's one-click checkout)

## 🚀 Ready to Launch?

Once everything is tested and working:

1. Switch to live mode in Stripe
2. Update environment variables with live keys
3. Update Price IDs with live product IDs
4. Deploy to production
5. Test with a real payment
6. Start selling! 🎉

---

**Questions?** 
- Email: support@self-labs.io
- Stripe Support: https://support.stripe.com/

