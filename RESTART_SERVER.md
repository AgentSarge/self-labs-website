# 🚨 IMPORTANT: Restart Your Dev Server

After adding your Stripe key to `.env`, you MUST restart the server for it to load the new environment variable.

## How to Restart:

1. **Stop the current server**:
   - Go to your terminal where `npm run dev` is running
   - Press: `Ctrl + C` (or `Cmd + C` on Mac)

2. **Start it again**:
   ```bash
   npm run dev
   ```

3. **Test it**:
   - Go to: http://localhost:4321/pricing
   - Click "Get Started"
   - You should now be redirected to Stripe Checkout (no error!)

---

## ✅ Checklist:

- [ ] Got Stripe Secret Key from https://dashboard.stripe.com/test/apikeys
- [ ] Added key to `.env` file (saved the file!)
- [ ] Restarted dev server
- [ ] Tested a pricing button

---

**After restart, the error should be gone!** 🎉

