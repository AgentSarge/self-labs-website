# Open Graph Image Needed

## What is an Open Graph Image?

An Open Graph (OG) image is the image that appears when someone shares your website link on social media platforms like Facebook, LinkedIn, Twitter, or messaging apps.

## Specifications

- **Dimensions**: 1200x630 pixels (optimal)
- **File format**: JPG or PNG
- **File size**: Under 1MB (smaller is better)
- **Aspect ratio**: 1.91:1
- **Safe zone**: Keep important content in the center 1200x600px area

## Current Setup

The website is configured to use `/og-image.jpg` as the default Open Graph image.

**File location**: `/public/og-image.jpg`

## What Should It Show?

Your OG image should include:
- ✅ Your logo/brand name (Self Labs)
- ✅ Tagline or value proposition
- ✅ Clean, readable text
- ✅ Brand colors (black, white, orange)
- ✅ Professional design that represents your business

## Design Suggestions

### Option 1: Simple Text on Background
- Black background
- "Self Labs" in large white text
- "Professional Website Design & Development" in smaller text
- Orange accent elements

### Option 2: Service Highlight
- Split design showing your work
- Brand name and pricing
- "Starting at $300" or "$50/month maintenance"

### Option 3: Professional Photo
- Modern, clean aesthetic
- Your brand colors
- Clear text overlay with company name

## Tools to Create OG Images

### Free Tools:
- **Canva**: https://www.canva.com/ (has OG image templates)
- **Figma**: https://www.figma.com/ (professional design tool)
- **Remove.bg**: https://www.remove.bg/ (remove backgrounds)

### Online Generators:
- **OG Image Generator**: https://og-image.vercel.app/
- **Social Image**: https://www.socialimage.io/

### Design Resources:
- **Unsplash**: Free stock photos
- **Pexels**: Free stock photos
- **Flaticon**: Free icons

## How to Add Your OG Image

1. Create your image (1200x630px)
2. Export as JPG or PNG
3. Save as `/public/og-image.jpg`
4. Deploy to Netlify
5. Test with:
   - Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
   - Twitter Card Validator: https://cards-dev.twitter.com/validator

## Page-Specific OG Images (Optional)

You can create different OG images for different pages:

- Homepage: `/public/og-image.jpg` (default)
- Services: `/public/images/og-services.jpg`
- Privacy: `/public/images/og-privacy.jpg`

Then update the page's SEO props:
```astro
const seoProps = {
  ogImage: "/images/og-services.jpg"
};
```

## Example Design Prompt (for AI tools)

If using an AI image generator or asking a designer:

> Create a 1200x630px Open Graph image for Self Labs, a professional website design and development company. Use a black background with white text. Include "Self Labs" in large, bold font at the center. Below it, add "Professional Website Design & Development" in smaller text. Add "Starting at $300" in orange color. Make it modern, clean, and professional. Use sans-serif fonts. Add subtle geometric patterns or grid lines in dark gray for visual interest.

## Testing

After adding your OG image:
1. Share your link on Facebook/LinkedIn/Twitter
2. Check if the image appears correctly
3. If not, use the debugging tools above to clear cache

---

**Quick Tip**: You can temporarily use your logo or a simple branded graphic until you create the perfect OG image. Any image is better than no image!

