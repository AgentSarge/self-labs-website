# Contact Form Scheduling Setup Guide

## ✅ What's Been Added

After users submit your contact form, they now see:
- ✅ Success message with checkmark icon
- ✅ **"Schedule Video Call"** button
- ✅ **"Schedule In-Person Meeting"** button  
- ✅ **"Skip for now"** option

This creates a seamless flow from form submission to booking a meeting!

---

## 🔗 Setup Your Scheduling Links

You need to add your scheduling links to the contact form. Here are your options:

### Option 1: Calendly (Recommended - Easiest)

**Free Plan Available** | Easy setup | Professional appearance

1. **Create a Calendly account**: https://calendly.com/
2. **Set up event types**:
   - One for Video Calls (30 min)
   - One for In-Person Meetings (60 min)
3. **Get your scheduling links**:
   - Example: `https://calendly.com/your-username/30min`
   - Example: `https://calendly.com/your-username/in-person`
4. **Update the links** in your contact form (see below)

### Option 2: Cal.com (Open Source Alternative)

**Free & Open Source** | More customization | Self-hostable

1. **Create account**: https://cal.com/
2. Set up two event types (video call & in-person)
3. Get your links and update the form

### Option 3: Google Calendar Appointment Scheduling

**Free with Google Workspace** | Integrated with Gmail

1. Open Google Calendar
2. Create "Appointment Schedule"
3. Set up booking pages
4. Get shareable links

### Option 4: Simple Mailto Link (No scheduling tool)

If you don't want a scheduling tool yet, just use a mailto link:
```
mailto:support@self-labs.io?subject=Meeting Request
```

---

## 📝 Update Your Scheduling Links

Open `/src/components/global/ContactForm.astro` and find these lines:

### Video Call Link (Around line 307):
```html
<a
  href="https://calendly.com/your-username/30min"
  target="_blank"
```

**Replace with your actual link:**
```html
<a
  href="https://calendly.com/selflabs/video-call"
  target="_blank"
```

### In-Person Meeting Link (Around line 325):
```html
<a
  href="https://calendly.com/your-username/in-person"
  target="_blank"
```

**Replace with your actual link:**
```html
<a
  href="https://calendly.com/selflabs/in-person-meeting"
  target="_blank"
```

---

## 🎨 Customization Options

### Change Button Text

Want different wording? Update the button text:

```html
<!-- Video Call -->
<span>Schedule Video Call</span>

<!-- Could be changed to: -->
<span>Book a Zoom Call</span>
<span>Schedule a Demo</span>
<span>Let's Talk on Video</span>
```

### Add a Third Option

Want to add a phone call option? Add another button:

```html
<a
  href="tel:+15551234567"
  class="flex items-center justify-between w-full bg-white/10 hover:bg-white/20 text-white font-black uppercase py-4 px-6 rounded-full transition-colors duration-200 group"
>
  <div class="flex items-center">
    <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
    </svg>
    <span>Call Me Now</span>
  </div>
</a>
```

### Remove In-Person Option

If you only want video calls, just delete the in-person button section (lines 323-340).

---

## 🧪 Test the Flow

1. Run your dev server: `npm run dev`
2. Click "Get in Touch" button
3. Fill out and submit the form
4. You should see the success message
5. Click "Schedule Video Call" - should open your scheduling link
6. Click "Skip for now" - should close the modal

---

## 💡 Pro Tips

### 1. **Pre-fill Form Data in Calendly**

You can pass form data to Calendly with URL parameters:

```html
<a
  href="https://calendly.com/your-username/30min?name=${name}&email=${email}"
```

This requires updating the JavaScript to build the URL dynamically.

### 2. **Embed Calendly Instead of Link**

For a smoother experience, embed Calendly directly in the success message:

```html
<!-- Add Calendly script in your <head> -->
<script src="https://assets.calendly.com/assets/external/widget.js"></script>

<!-- Replace the link with: -->
<div 
  class="calendly-inline-widget" 
  data-url="https://calendly.com/your-username"
  style="min-width:320px;height:630px;"
></div>
```

### 3. **Track Scheduling Events**

Add analytics to track when users click scheduling buttons:

```javascript
// Add to the click event
gtag('event', 'schedule_click', {
  'event_category': 'engagement',
  'event_label': 'video_call'
});
```

### 4. **Set Up Automated Reminders**

Most scheduling tools offer:
- Email confirmations
- SMS reminders  
- Calendar invites
- Zoom/Google Meet links

Configure these in your Calendly/Cal.com settings.

---

## 🔄 User Journey

Here's what happens now:

1. **User clicks** "Get in Touch" button
2. **Fills out** contact form with project details
3. **Submits** form
4. **Sees** success message immediately
5. **Options appear**:
   - Schedule video call (opens Calendly)
   - Schedule in-person meeting (opens Calendly)
   - Skip for now (closes modal)
6. **Clicks** scheduling button
7. **Books** meeting directly in Calendly
8. **You receive** both:
   - Contact form submission (via Netlify)
   - Meeting booking notification (via Calendly)

---

## 📊 Benefits

✅ **Faster conversions** - Strike while the iron is hot
✅ **Less back-and-forth** - No email tennis to find a time
✅ **Professional appearance** - Shows you're organized
✅ **Better lead quality** - Serious clients will book meetings
✅ **Automated scheduling** - No manual calendar management

---

## 🚀 Quick Start

**Right now:**
1. Sign up for Calendly (free): https://calendly.com/
2. Create two event types:
   - "Video Consultation" (30 min)
   - "In-Person Meeting" (60 min)
3. Copy your scheduling links
4. Update lines 307 and 325 in `ContactForm.astro`
5. Test the form!

**Time to complete: ~10 minutes** ⏱️

---

## ❓ Common Questions

**Q: Do I need to pay for Calendly?**
A: No, the free plan works great for most needs.

**Q: Can I limit availability?**
A: Yes, set your working hours in Calendly settings.

**Q: What if someone books outside my area for in-person?**
A: Add a location question or screening question in Calendly.

**Q: Can I require payment to book?**
A: Yes, Calendly integrates with Stripe (you already have Stripe set up!).

**Q: Will I still get the form submission?**
A: Yes! You'll get both the form data AND the calendar booking.

---

**Everything is ready to go!** Just add your scheduling links and you're done. 🎉

