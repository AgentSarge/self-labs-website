# Pricing Page - Quick Reference

## ✅ What's Been Created

### 1. **Pricing Component** (`/src/components/landing/Pricing.astro`)
   - Displays all 9 Stripe products in an organized layout
   - Website Builds (3 tiers)
   - Maintenance Packages (3 tiers)
   - Add-on Services (2 items)
   - Includes FAQ section
   - Beautiful, responsive design matching your site

### 2. **Pricing Page** (`/src/pages/pricing.astro`)
   - Full page route at `/pricing`
   - Includes SEO metadata
   - Schema.org structured data for better search rankings

### 3. **Stripe Checkout API** (`/src/pages/api/create-checkout-session.ts`)
   - Creates Stripe checkout sessions
   - Handles both one-time and subscription payments
   - Redirects to Stripe hosted checkout

### 4. **Success Page** (`/src/pages/success.astro`)
   - Thank you page after successful payment
   - Shows next steps for customers
   - Professional confirmation message

### 5. **Navigation Update** (`/src/components/global/Navigation.astro`)
   - Added "Pricing" link to main navigation
   - Accessible from every page

### 6. **Dependencies**
   - ✅ Stripe npm package installed
   - ✅ Ready for payment processing

## 🎯 What You Need to Do Next

### Step 1: Get Your Stripe Price IDs

1. Go to https://dashboard.stripe.com/products
2. Click on each product you created
3. Find the **Price ID** (starts with `price_`)
4. Copy each Price ID

### Step 2: Update the Pricing Component

Open `/src/components/landing/Pricing.astro` and replace these placeholder IDs with your actual Stripe Price IDs:

**Find and Replace:**
- `price_basic_website` → Your actual Basic Website Price ID
- `price_standard_website` → Your actual Standard Website Price ID  
- `price_premium_website` → Your actual Premium Website Price ID
- `price_basic_maintenance` → Your actual Basic Maintenance Price ID
- `price_standard_maintenance` → Your actual Standard Maintenance Price ID
- `price_premium_maintenance` → Your actual Premium Maintenance Price ID
- `price_seo_audit` → Your actual SEO Audit Price ID
- `price_rush_service` → Your actual Rush Service Price ID

### Step 3: Create .env File

1. Create a new file named `.env` in your project root
2. Add your Stripe Secret Key:

```
STRIPE_SECRET_KEY=sk_test_your_actual_test_key_here
```

Get your key from: https://dashboard.stripe.com/apikeys

### Step 4: Test It!

```bash
npm run dev
```

Navigate to: http://localhost:4321/pricing

Click any "Get Started" button and you should be redirected to Stripe Checkout!

## 📦 What Each Product Does

### Website Builds (One-Time Payment)
- **Basic** - $300: Simple 3-5 page website
- **Standard** - $800: Custom 5-10 page website
- **Premium** - $2,500: Advanced 10+ page site with e-commerce

### Maintenance Packages (Monthly Subscription)
- **Basic** - $50/mo: Essential updates and support
- **Standard** - $100/mo: Regular updates and priority support
- **Premium** - $200/mo: Complete care with unlimited changes

### Add-ons (One-Time Payment)
- **SEO Audit & Setup** - $150: Optimize for search engines
- **Priority Rush Service** - $200: Faster delivery

## 🎨 Design Features

✅ Matches your existing Self Labs design
✅ Responsive grid layout (mobile-friendly)
✅ Orange accent colors for "Most Popular" plans
✅ Hover effects on buttons
✅ Clear feature lists with checkmarks
✅ FAQ section to answer common questions
✅ Professional success page

## 🧪 Testing

### Test Cards (Stripe Test Mode)
- **Success**: `4242 4242 4242 4242`
- **Decline**: `4000 0000 0000 0002`
- Any future expiry date, any CVC

### Test Flow
1. Click "Get Started" on any plan
2. Fill in test card details
3. Complete checkout
4. Verify redirect to success page
5. Check Stripe Dashboard for payment

## 🔧 Customization

### Change Pricing
Update prices in `/src/components/landing/Pricing.astro`:
```javascript
price: "$800",  // Change this
```
**Remember:** Also update in Stripe Dashboard!

### Add/Remove Features
Edit the `features` array:
```javascript
features: [
  "Feature 1",
  "Feature 2",
  "New feature"  // Add more here
]
```

### Change Button Text
Update button text in the Pricing component:
```html
<button>
  Get Started  <!-- Change this -->
</button>
```

## 📊 Monitoring

### View Payments
- Test: https://dashboard.stripe.com/test/payments
- Live: https://dashboard.stripe.com/payments

### Track Subscriptions
- Test: https://dashboard.stripe.com/test/subscriptions
- Live: https://dashboard.stripe.com/subscriptions

## 🚀 Going Live

When ready for production:

1. Activate Stripe account (complete verification)
2. Switch Stripe Dashboard to "Live" mode
3. Create live versions of all products
4. Get live Price IDs
5. Update `.env` with live secret key: `sk_live_...`
6. Update Pricing component with live Price IDs
7. Deploy to production
8. Test with real payment (small amount)
9. Start selling! 🎉

## 📁 File Structure

```
/src
  /components
    /landing
      Pricing.astro          ← Main pricing component
  /pages
    pricing.astro            ← Pricing page route
    success.astro            ← Success page
    /api
      create-checkout-session.ts  ← Stripe API endpoint
  /components
    /global
      Navigation.astro       ← Updated with Pricing link
```

## 🆘 Troubleshooting

**Button doesn't work?**
- Check browser console for errors
- Verify Price IDs are correct
- Make sure .env file has STRIPE_SECRET_KEY

**"Stripe is not configured" error?**
- Create .env file
- Add your STRIPE_SECRET_KEY
- Restart dev server

**Wrong amount charging?**
- Check Price ID matches the product in Stripe
- Verify amount in Stripe Dashboard

**Can't find Price ID?**
- Go to Stripe Dashboard → Products
- Click on product → Copy Price ID (starts with `price_`)

## 💡 Quick Tips

1. **Start with test mode** - Don't use live keys until ready
2. **Test all products** - Make sure each button works
3. **Check mobile view** - Design is responsive
4. **Update FAQ** - Add questions specific to your business
5. **Link from homepage** - Add pricing CTA on main page

## 🎯 Next Features to Add (Optional)

- [ ] Add comparison table
- [ ] Show annual vs monthly pricing for subscriptions
- [ ] Add testimonials to pricing page
- [ ] Create "Contact Sales" option for custom quotes
- [ ] Add live chat support
- [ ] Show money-back guarantee
- [ ] Add customer logos/social proof

## 📞 Need Help?

See the detailed setup guide: `STRIPE_SETUP_GUIDE.md`

---

**Everything is ready to go!** Just add your Stripe Price IDs and secret key, and you'll be accepting payments. 🚀

