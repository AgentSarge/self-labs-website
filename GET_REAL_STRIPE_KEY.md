# 🔑 Get Your Real Stripe Test Key

## The Problem

You're using a **fake placeholder key** in your `.env` file. You need your **real test key** from Stripe.

## ✅ Quick Fix

### Step 1: Get Your Real Test Key

1. **Go to Stripe Dashboard**: https://dashboard.stripe.com/test/apikeys
2. **Make sure you're in TEST MODE** (toggle in top-right should say "Test mode")
3. **Find "Secret key"** section
4. **Click "Reveal test key"**
5. **Copy the entire key** (starts with `sk_test_`)

### Step 2: Update Your .env File

1. **Open `.env` file** in your project root
2. **Replace the placeholder** with your real key:

```bash
# Before (fake):
STRIPE_SECRET_KEY=sk_test_REPLACE_WITH_YOUR_REAL_TEST_KEY_HERE

# After (real):
STRIPE_SECRET_KEY=sk_test_51abc123xyz...your_actual_key_here
```

### Step 3: Restart Server

```bash
# Stop server (Ctrl+C)
npm run dev
```

### Step 4: Test

- Go to: http://localhost:4321/pricing
- Click "Get Started"
- Should redirect to Stripe Checkout! 🎉

---

## 🧪 Test Cards (Safe - No Real Charges)

Once you have your real test key:

- **Success**: `4242 4242 4242 4242`
- **Decline**: `4000 0000 0000 0002`
- **Expiry**: Any future date
- **CVC**: Any 3 digits

---

## 🔒 Why Test Mode First?

- ✅ **Safe** - No real money charged
- ✅ **Free** - Test as much as you want
- ✅ **Realistic** - Same checkout experience
- ✅ **Debug** - Easy to troubleshoot

---

## 🚀 After Test Mode Works

Once test mode works perfectly:

1. **Switch to Live Mode** in Stripe Dashboard
2. **Get your live key** (`sk_live_...`)
3. **Update `.env`** with live key
4. **Deploy to production**
5. **Start accepting real payments!**

---

## 📍 Your Stripe Dashboard

**Test Mode**: https://dashboard.stripe.com/test/apikeys  
**Live Mode**: https://dashboard.stripe.com/apikeys

**Remember**: Toggle between Test/Live mode in the top-right corner!

---

**Get your real test key and the error will be gone!** 🎯
