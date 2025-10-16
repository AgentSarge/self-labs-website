# SEO Quick Reference Guide

## 🎯 What Was Done

Based on 2025 SEO best practices research, we've implemented comprehensive SEO improvements for self-labs.io.

## ✅ New Files Created

1. **`/src/components/SEO.astro`** - Reusable SEO component with Open Graph, Twitter Cards, and Schema.org
2. **`/public/robots.txt`** - Search engine crawler directives
3. **`SEO_IMPROVEMENTS.md`** - Complete SEO documentation
4. **`public/OG_IMAGE_NEEDED.md`** - Guide for creating Open Graph images

## 📝 Files Modified

1. **`src/components/BaseHead.astro`** - Now uses dynamic SEO component
2. **`src/layouts/BaseLayout.astro`** - Passes SEO props to pages
3. **`src/pages/index.astro`** - Added structured data for homepage
4. **`src/pages/privacy.astro`** - Custom SEO meta tags
5. **`src/pages/terms.astro`** - Custom SEO meta tags

## 🚀 Key SEO Features Added

### 1. Open Graph Tags (Social Media)
```astro
<meta property="og:title" content="Your Title" />
<meta property="og:description" content="Your Description" />
<meta property="og:image" content="Your Image URL" />
```

### 2. Twitter Cards
```astro
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Your Title" />
```

### 3. Canonical URLs
```astro
<link rel="canonical" href="https://self-labs.io/page" />
```

### 4. Structured Data (Schema.org)
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Self Labs",
  "offers": [...]
}
```

### 5. robots.txt
```
User-agent: *
Allow: /
Sitemap: https://self-labs.io/sitemap-index.xml
```

## 🎨 How to Use (For New Pages)

```astro
---
import BaseLayout from "@/layouts/BaseLayout.astro";

const seoProps = {
  title: "Page Title | Self Labs",
  description: "Page description for SEO",
  canonical: "/page-url",
  ogImage: "/og-image.jpg"
};
---

<BaseLayout {...seoProps}>
  <!-- Your content -->
</BaseLayout>
```

## ✨ Default Values (if you don't pass props)

- **Title**: "Self Labs - Professional Website Design & Development"
- **Description**: "Professional website design and development. One-time builds starting at $300..."
- **Canonical**: Auto-generated from current URL
- **OG Image**: "/og-image.jpg"
- **Type**: "website"

## 📊 SEO Checklist Before Going Live

- [ ] Create `/public/og-image.jpg` (1200x630px) - See `OG_IMAGE_NEEDED.md`
- [ ] Verify all pages have unique titles and descriptions
- [ ] Test with Google Rich Results: https://search.google.com/test/rich-results
- [ ] Test with Facebook Debugger: https://developers.facebook.com/tools/debug/
- [ ] Submit sitemap to Google Search Console: `https://self-labs.io/sitemap-index.xml`
- [ ] Set up Google Analytics (optional)
- [ ] Check mobile responsiveness
- [ ] Test page speed with PageSpeed Insights

## 🔧 Testing URLs

After deployment:
- Sitemap: `https://self-labs.io/sitemap-index.xml`
- robots.txt: `https://self-labs.io/robots.txt`
- Homepage: `https://self-labs.io/`

## 📈 Expected Results

1. **Better search rankings** - Proper on-page SEO signals
2. **Rich snippets** - Structured data enables enhanced results
3. **Social sharing** - Beautiful previews on Facebook, Twitter, LinkedIn
4. **Faster indexing** - Clear sitemap and robots.txt
5. **Mobile-first** - Optimized for mobile search

## 🛠️ Tools for Monitoring

- **Google Search Console**: Monitor search performance
- **Google Analytics**: Track visitor behavior
- **PageSpeed Insights**: Monitor site speed
- **Lighthouse**: Comprehensive audit (built into Chrome)

## 📞 Need Help?

All SEO settings are centralized in:
- **Main component**: `/src/components/SEO.astro`
- **Configuration**: `/astro.config.mjs`
- **Documentation**: `SEO_IMPROVEMENTS.md`

---

**Site**: https://self-labs.io  
**Email**: support@self-labs.io  
**Last Updated**: October 16, 2025

