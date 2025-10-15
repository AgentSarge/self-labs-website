# Contact Form Setup Guide

## How It Works

The Self Labs website now has a **popup contact form** that integrates with Netlify Forms. When visitors click any "Get in Touch" or "Get your free quote" button, a modal form appears.

## Features

✅ **Popup Modal** - Professional contact form in a modal overlay  
✅ **Netlify Forms Integration** - Submissions go to your Netlify dashboard  
✅ **Smart Fields** - Captures exactly what you need:
  - Name & Email (required)
  - Phone (optional)
  - Project Type (One-Time Website Build $300-$2,500+, Monthly retainer, Both, etc.)
  - Budget Range ($300-$500, $500-$1,000, $1,000-$2,000, $2,000-$2,500, $2,500+)
  - Timeline
  - Project Description

✅ **Spam Protection** - Includes honeypot field to prevent spam bots  
✅ **User Friendly** - Closes on Escape key, outside click, or close button

## Netlify Setup

### 1. Deploy to Netlify
When you deploy this site to Netlify, the form will be automatically detected.

### 2. Enable Form Notifications
After your first deployment:

1. Go to your Netlify dashboard
2. Navigate to **Site Settings > Forms**
3. You'll see the "contact" form listed
4. Click **Form notifications**
5. Add **Email notification** to send submissions to `support@self-labs.io`
6. You can also set up Slack notifications if desired

### 3. View Submissions
All form submissions will appear in:
- **Netlify Dashboard > Forms > [Your Site] > Contact**
- Email notifications (if configured)

### 4. Test the Form
After deployment, test the form by:
1. Clicking "Get in Touch" on your live site
2. Filling out and submitting the form
3. Checking your Netlify dashboard for the submission

## Customization

### Change Form Fields
Edit `/src/components/global/ContactForm.astro` to add/remove fields.

**Important:** If you change field names, also update:
- `/public/contact.html` (the static form for Netlify detection)

### Change Email Address
The form submissions go to your Netlify dashboard, not directly to email. Configure email notifications in Netlify settings to forward to your preferred address.

### Styling
The form uses the same design system as the rest of the site:
- Black background with white borders
- Orange accent color for focus states
- Responsive and mobile-friendly

## Free Tier Limits

Netlify's free tier includes:
- **100 form submissions per month**
- **10MB storage** for submissions
- Email and webhook notifications

For more submissions, upgrade to a paid Netlify plan.

## Support

Need help? The form component is located at:
`/src/components/global/ContactForm.astro`

