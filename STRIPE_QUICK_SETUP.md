# 🚨 Fix "Something Went Wrong" Error

## The Problem

You're getting an error because **Stripe isn't configured yet**. The payment buttons need your Stripe API key to work.

---

## ✅ Quick Fix (Choose One)

### Option 1: Local Testing (For Development)

If you want to test locally on your computer:

1. **Get your Stripe Secret Key**:
   - Go to: https://dashboard.stripe.com/test/apikeys
   - Copy your **Secret key** (starts with `sk_test_`)
   - Keep this PRIVATE - never share or commit to Git!

2. **Create a `.env` file** in your project root:
   ```bash
   # Create the file
   touch .env
   ```

3. **Add your key to `.env`**:
   ```
   STRIPE_SECRET_KEY=sk_test_51abc123xyz...your_actual_key_here
   ```

4. **Restart your dev server**:
   ```bash
   # Stop the server (Ctrl+C)
   npm run dev
   ```

5. **Test it**: Go to http://localhost:4321/pricing and click "Get Started"

---

### Option 2: Skip Local Testing - Deploy to Netlify

If you just want to deploy to production:

1. **Get your Stripe Secret Key**:
   - Go to: https://dashboard.stripe.com/test/apikeys
   - Copy your **Secret key** (starts with `sk_test_`)

2. **Add to Netlify**:
   - Go to your Netlify dashboard
   - Click your site
   - Go to: **Site settings → Environment variables**
   - Click **Add a variable**
   - Key: `STRIPE_SECRET_KEY`
   - Value: `sk_test_51abc123xyz...` (paste your key)
   - Click **Save**

3. **Deploy**:
   - Push your code to GitHub
   - Netlify will auto-deploy
   - Test on your live site!

---

## 🎯 Recommendation

**For testing:** Use Option 1 (local .env file)  
**For production:** Use Option 2 (Netlify environment variables)

---

## 📍 Where to Get Your Stripe Key

### Test Mode (Recommended First)
1. Go to: https://dashboard.stripe.com/test/apikeys
2. Make sure you're in **TEST MODE** (toggle in top-right)
3. Copy the **Secret key** (starts with `sk_test_`)
4. This lets you test with fake credit cards (card: 4242 4242 4242 4242)

### Live Mode (When Ready for Real Payments)
1. Go to: https://dashboard.stripe.com/apikeys
2. Switch to **LIVE MODE** (toggle in top-right)
3. Copy the **Secret key** (starts with `sk_live_`)
4. Only use this when you're ready for real transactions!

---

## ✅ How to Test It Works

After adding your key:

1. Visit: http://localhost:4321/pricing (or your live site)
2. Click **"Get Started"** on any package
3. You should be redirected to Stripe Checkout (not see an error)
4. Use test card: **4242 4242 4242 4242**
5. Expiry: Any future date
6. CVC: Any 3 digits
7. Complete the checkout
8. You should see the success page!

---

## 🔒 Security Tips

### ✅ DO:
- Use test keys (`sk_test_`) during development
- Add keys to `.env` or Netlify environment variables
- Keep your secret keys private

### ❌ DON'T:
- Commit `.env` to Git (it's already in .gitignore)
- Share your secret keys with anyone
- Use live keys (`sk_live_`) until you're ready
- Hardcode keys in your source code

---

## 🆘 Still Having Issues?

### Error: "Stripe is not configured"
→ Your key isn't being read. Make sure:
- `.env` file is in project root (same folder as `package.json`)
- Key is on its own line: `STRIPE_SECRET_KEY=sk_test_...`
- You restarted the dev server after creating `.env`

### Error: "No such price"
→ Your Price IDs might be wrong. Check:
- Price IDs in `/src/components/landing/Pricing.astro` match Stripe Dashboard
- Go to: https://dashboard.stripe.com/products
- Click product → Copy Price ID (starts with `price_`)

### Error: "Invalid API Key"
→ Your key is wrong. Make sure:
- You copied the full key (starts with `sk_test_`)
- No extra spaces before or after the key
- You're using the SECRET key, not the PUBLISHABLE key

---

## 📝 Example .env File

```bash
# Stripe Configuration
STRIPE_SECRET_KEY=sk_test_51JabcXYZ1234567890abcdefghijklmnopqrstuvwxyz1234567890

# That's it! Just one line.
```

---

## 🚀 Next Steps After It Works

1. ✅ Test all pricing buttons
2. ✅ Test with Stripe test cards
3. ✅ Verify success page appears
4. ✅ Check Stripe Dashboard for test payments
5. ✅ When ready, switch to live keys
6. ✅ Add live keys to Netlify
7. ✅ Deploy and start selling!

---

**Quick Setup Time: ~2 minutes** ⏱️

Just add your Stripe key and you're ready to go! 🎉

