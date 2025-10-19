# Twilio SMS Webhook Setup

## Environment Variables Needed

Add these environment variables to your Netlify dashboard:

### In Netlify Dashboard → Site Settings → Environment Variables:

```
TWILIO_ACCOUNT_SID=your_account_sid_here
TWILIO_AUTH_TOKEN=your_auth_token_here
TWILIO_PHONE_NUMBER=+1234567890
YOUR_PHONE_NUMBER=+1234567890
```

## How to Get Twilio Credentials

1. **Sign up for Twilio**: https://www.twilio.com/try-twilio
2. **Get Account SID and Auth Token**: From your Twilio Console dashboard
3. **Buy a Phone Number**: From Twilio Console → Phone Numbers → Manage → Buy a number
4. **Set Environment Variables**: In Netlify dashboard

## Webhook URL

Once deployed, your webhook URL will be:
```
https://your-site.netlify.app/.netlify/functions/twilio-webhook
```

## Configure Netlify Webhook

1. Go to Netlify Dashboard → Forms → Form submission notifications
2. Click "Add notification" → "HTTP POST request"
3. Enter webhook URL: `https://your-site.netlify.app/.netlify/functions/twilio-webhook`
4. Save the configuration

## Testing

After setup, submit your contact form and you should receive an SMS notification!
