# SEO Improvements for Self Labs

This document outlines all the SEO enhancements implemented for self-labs.io based on 2025 best practices.

## ✅ Implemented Improvements

### 1. **Open Graph Tags (Social Media Optimization)**
- Added Facebook/LinkedIn Open Graph meta tags
- Includes: `og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `og:site_name`, `og:locale`
- **Benefit**: Better previews when sharing on social media platforms

### 2. **Twitter Card Tags**
- Added Twitter-specific meta tags for rich cards
- Includes: `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`, `twitter:url`
- **Benefit**: Enhanced appearance when sharing on Twitter/X

### 3. **Canonical URLs**
- Dynamically generated canonical tags for each page
- **Benefit**: Prevents duplicate content issues and consolidates SEO value

### 4. **Structured Data (Schema.org)**
- JSON-LD structured data on all pages
- Homepage includes `ProfessionalService` schema with service offerings
- **Benefit**: Enables rich snippets in search results, better understanding by Google

### 5. **robots.txt File**
- Created `/public/robots.txt` with proper directives
- Points to sitemap location
- Disallows crawling of `/api/` and `/.netlify/` directories
- **Benefit**: Guides search engine crawlers efficiently

### 6. **Dynamic SEO Component**
- Created reusable `SEO.astro` component
- Supports custom meta tags per page
- Centralized SEO management
- **Benefit**: Easy to maintain and update SEO across the site

### 7. **Page-Specific SEO**
- **Homepage**: Full structured data with service offers
- **Privacy Policy**: Custom title and description
- **Terms & Conditions**: Custom title and description
- **Benefit**: Each page optimized for its specific content

### 8. **HTML Language Declaration**
- Added `lang="en"` attribute to HTML tag
- **Benefit**: Helps search engines and screen readers understand content language

### 9. **DOCTYPE Declaration**
- Added proper `<!DOCTYPE html>` declaration
- **Benefit**: Ensures proper HTML5 rendering

## 📊 Current SEO Setup

### Meta Tags on All Pages:
- ✅ Title tag (page-specific)
- ✅ Meta description (page-specific)
- ✅ Canonical URL
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Robots directive (when needed)
- ✅ Language declaration
- ✅ Viewport meta tag
- ✅ Character encoding
- ✅ Author tag
- ✅ Keywords tag

### Technical SEO:
- ✅ Sitemap integration (`@astrojs/sitemap`)
- ✅ robots.txt file
- ✅ Canonical URLs
- ✅ Clean URL structure (Astro file-based routing)
- ✅ Structured Data (JSON-LD)
- ✅ Mobile-responsive viewport
- ✅ Fast loading (Astro static generation)

### On-Page SEO:
- ✅ Semantic HTML structure
- ✅ Proper heading hierarchy
- ✅ Alt text on images (needs verification)
- ✅ Internal linking structure
- ✅ Contact information in structured data

## 🎯 How to Use SEO for New Pages

When creating a new page, simply pass SEO props to `BaseLayout`:

```astro
---
import BaseLayout from "@/layouts/BaseLayout.astro";

const seoProps = {
  title: "Your Page Title | Self Labs",
  description: "Your compelling page description here",
  canonical: "/your-page-url",
  ogImage: "/images/your-og-image.jpg",
  ogType: "website", // or "article" for blog posts
  noindex: false, // set to true if you don't want it indexed
  structuredData: {
    // Optional: Add custom Schema.org data
  }
};
---

<BaseLayout {...seoProps}>
  <!-- Your page content -->
</BaseLayout>
```

## 📝 Recommended Next Steps

### 1. **Create OG Images**
Create Open Graph images for better social media previews:
- **Size**: 1200x630px
- **Format**: JPG or PNG
- **Location**: `/public/og-image.jpg` (default)
- **Per-page images**: `/public/images/og-[page-name].jpg`

### 2. **Add Business Information**
If you have a physical location or phone number, update the structured data in:
- `/src/components/SEO.astro` (default schema)
- `/src/pages/index.astro` (homepage schema)

### 3. **Set Up Google Search Console**
- Verify ownership of `self-labs.io`
- Submit sitemap: `https://self-labs.io/sitemap-index.xml`
- Monitor indexing status and search performance

### 4. **Set Up Google Analytics**
Add Google Analytics 4 (GA4) tracking code to `BaseHead.astro`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanitag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 5. **Image Optimization**
Ensure all images have:
- Descriptive `alt` attributes
- Optimized file sizes (use WebP format)
- Proper dimensions
- Lazy loading where appropriate

### 6. **Content Optimization**
- Include target keywords naturally in content
- Use descriptive headings (H1, H2, H3)
- Add internal links between related pages
- Ensure mobile responsiveness

### 7. **Performance Optimization**
- Test with Google PageSpeed Insights
- Optimize Core Web Vitals (LCP, FID, CLS)
- Minimize JavaScript and CSS
- Use CDN for static assets (Netlify handles this)

### 8. **Local SEO (if applicable)**
If targeting local customers, add:
- Google Business Profile
- LocalBusiness schema markup
- NAP (Name, Address, Phone) consistency
- Location pages

## 🔍 Testing Your SEO

### Tools to Test:
1. **Google Rich Results Test**: https://search.google.com/test/rich-results
   - Test structured data implementation
   
2. **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/
   - Test Open Graph tags
   
3. **Twitter Card Validator**: https://cards-dev.twitter.com/validator
   - Test Twitter Card tags
   
4. **Google PageSpeed Insights**: https://pagespeed.web.dev/
   - Test performance and Core Web Vitals
   
5. **Lighthouse (Chrome DevTools)**
   - Comprehensive SEO, performance, accessibility audit

### Manual Checks:
- [ ] Each page has unique title and description
- [ ] All images have descriptive alt text
- [ ] Internal links work properly
- [ ] No broken external links
- [ ] Mobile-friendly design
- [ ] Fast page load times
- [ ] Structured data validates correctly
- [ ] Sitemap accessible at `/sitemap-index.xml`
- [ ] robots.txt accessible at `/robots.txt`

## 📈 Expected SEO Benefits

1. **Improved Search Rankings**: Better on-page SEO signals
2. **Rich Snippets**: Structured data enables enhanced search results
3. **Better CTR**: Optimized titles and descriptions
4. **Social Media Engagement**: Attractive previews when shared
5. **Faster Indexing**: Clear sitemap and robots.txt
6. **Mobile-First**: Optimized for mobile search
7. **Technical Excellence**: Clean HTML, fast loading, proper structure

## 🎓 SEO Resources

- [Google Search Central](https://developers.google.com/search)
- [Schema.org Documentation](https://schema.org/)
- [Astro SEO Guide](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
- [Moz Beginner's Guide to SEO](https://moz.com/beginners-guide-to-seo)
- [Google Search Console Help](https://support.google.com/webmasters/)

## 🚀 Deployment Notes

After deploying to Netlify:
1. Verify sitemap is accessible
2. Submit sitemap to Google Search Console
3. Test all pages with SEO tools
4. Monitor Google Analytics for traffic
5. Check for any crawl errors in Search Console

---

**Last Updated**: October 16, 2025
**Site URL**: https://self-labs.io
**Contact**: support@self-labs.io

