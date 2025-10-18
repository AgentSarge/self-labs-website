# Self Labs Web Design

A modern, SEO-optimized website for Self Labs - a professional web design and development business serving Monroe, GA and surrounding areas. Built with Astro, Tailwind CSS v4, and optimized for local search.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Astro](https://img.shields.io/badge/Astro-5.14-blueviolet)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8)

## 🚀 Features

- **⚡ Lightning Fast**: Built with Astro for optimal performance
- **📱 Fully Responsive**: Mobile-first design that works on all devices
- **🎨 Modern UI**: Clean, professional design with Tailwind CSS v4
- **🔍 SEO Optimized**: Comprehensive SEO with structured data and meta tags
- **📍 Local SEO**: Schema markup for local business, service areas, and reviews
- **📝 Blog System**: SEO-focused blog with RSS feed
- **💳 Stripe Integration**: Payment processing for services
- **📧 Contact Forms**: Lead capture with project type selection
- **🗺️ Multiple Location Pages**: Targeting 7+ GA cities (Monroe, Athens, Covington, etc.)
- **♿ Accessible**: WCAG compliant with semantic HTML

## 🛠️ Tech Stack

- **[Astro 5.14](https://astro.build/)** - Modern static site generator
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Netlify](https://www.netlify.com/)** - Hosting and deployment
- **[Stripe](https://stripe.com/)** - Payment processing
- **TypeScript** - Type-safe development

## 📁 Project Structure

```
astromax/
├── public/
│   ├── robots.txt
│   ├── contact.html          # Netlify form endpoint
│   └── OG_IMAGE_NEEDED.md    # Guide for creating social media images
├── src/
│   ├── components/
│   │   ├── assets/
│   │   │   └── BgGrid.astro  # Background grid pattern
│   │   ├── global/
│   │   │   ├── ContactForm.astro
│   │   │   ├── Footer.astro
│   │   │   └── Navigation.astro
│   │   ├── landing/
│   │   │   ├── Banner.astro
│   │   │   ├── Cta.astro
│   │   │   ├── Hero.astro
│   │   │   ├── Intro.astro
│   │   │   ├── Pricing.astro
│   │   │   ├── Services.astro
│   │   │   ├── Testimonials.astro
│   │   │   └── Work.astro
│   │   ├── BaseHead.astro
│   │   ├── EmailSignup.astro
│   │   ├── LocalSchema.astro  # Local business structured data
│   │   ├── SEO.astro          # SEO component with meta tags
│   │   └── SocialShare.astro  # Social media share buttons
│   ├── images/
│   │   └── work/              # Portfolio images
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── api/
│   │   │   └── create-checkout-session.ts  # Stripe API endpoint
│   │   ├── blog/
│   │   │   ├── index.astro    # Blog homepage
│   │   │   └── [blog posts]   # 9 SEO-focused blog posts
│   │   ├── index.astro        # Homepage
│   │   ├── pricing.astro
│   │   ├── privacy.astro
│   │   ├── terms.astro
│   │   ├── success.astro      # Payment success page
│   │   ├── timeline.astro
│   │   ├── rss.xml.js         # RSS feed generator
│   │   └── [location pages]   # 7 location-specific pages
│   ├── styles/
│   │   └── global.css         # Tailwind v4 configuration
│   └── env.d.ts
├── astro.config.mjs           # Astro configuration
├── netlify.toml               # Netlify deployment config
├── package.json
└── tsconfig.json
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- (Optional) Stripe account for payment processing

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd astromax
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321`

### Environment Variables

Create a `.env` file in the root directory:

```env
# Stripe Keys (for payment processing)
STRIPE_SECRET_KEY=sk_test_your_key_here
PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here

# Stripe Price IDs
PUBLIC_STRIPE_PRICE_ONE_TIME=price_your_id_here
PUBLIC_STRIPE_PRICE_MONTHLY=price_your_id_here
```

See `STRIPE_SETUP_GUIDE.md` for detailed Stripe configuration.

## ⚙️ Configuration

### 🔴 Required Updates Before Going Live

#### 1. Business Information (LocalSchema.astro)

Update your actual business details:

```javascript
const businessName = "Self Labs Web Design";
const businessAddress = "1380 Vinies Drive, Monroe, GA 30655";
const businessPhone = "(943) 234-9570";
const businessEmail = "info@self-labs.io";
const businessWebsite = "https://self-labs.io";
```

✅ Already configured with real data

#### 2. Social Media Links (LocalSchema.astro, lines 77-80)

**Currently placeholders** - Update or remove:

```javascript
"sameAs": [
  "https://www.facebook.com/selflabswebdesign",           // ⚠️ Update
  "https://www.linkedin.com/company/self-labs-web-design", // ⚠️ Update
  "https://www.yelp.com/biz/self-labs-web-design-monroe"  // ⚠️ Update
]
```

#### 3. Reviews & Ratings (LocalSchema.astro, lines 82-111)

**Currently placeholder data** - Remove until you have real reviews:

```javascript
"aggregateRating": {
  "ratingValue": "4.9",    // ⚠️ Placeholder
  "reviewCount": "25"      // ⚠️ Placeholder
},
"review": [...]            // ⚠️ Placeholder reviews
```

**Recommendation**: Remove the entire `aggregateRating` and `review` sections until you have actual Google My Business reviews.

#### 4. Open Graph Image

**Missing**: `/public/og-image.jpg`

This image appears when people share your site on social media.

- **Size**: 1200x630 pixels
- **Format**: JPG or PNG
- **Guide**: See `/public/OG_IMAGE_NEEDED.md`

#### 5. Founding Date

Verify this is accurate:
```javascript
"foundingDate": "2019"  // ⚠️ Verify
```

#### 6. Testimonials

Current testimonials in `components/landing/Testimonials.astro` are generic examples. Replace with real customer testimonials when available.

## 📝 Commands

| Command | Action |
| :--- | :--- |
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro ...` | Run Astro CLI commands |

## 🎨 Tailwind CSS v4

This project uses Tailwind CSS v4 (Alpha), which has a new configuration approach:

- ✅ No `tailwind.config.js` file needed
- ✅ All configuration in `src/styles/global.css`
- ✅ Uses `@theme` directive for custom styles

**Example** (`global.css`):

```css
@import "tailwindcss";
@plugin "@tailwindcss/typography";
@plugin "@tailwindcss/forms";

@theme {
  --color-orange: #ff6b35;
  --color-eagle: #b0b0b0;
  --color-accent-500: #0a0a0a;
}
```

## 🔍 SEO Features

### Structured Data
- ✅ Local Business Schema (LocalSchema.astro)
- ✅ Organization Schema (SEO.astro)
- ✅ BreadcrumbList on location pages
- ✅ Article schema on blog posts

### Meta Tags
- ✅ Title and description optimization
- ✅ Open Graph tags (Facebook, LinkedIn)
- ✅ Twitter Card tags
- ✅ Canonical URLs
- ✅ Robots meta tags

### Local SEO
- ✅ Service area targeting (7 GA cities)
- ✅ Location-specific pages with unique content
- ✅ Local business hours and contact info
- ✅ Geographic coordinates
- ✅ NAP (Name, Address, Phone) consistency

### Technical SEO
- ✅ Sitemap generation (`@astrojs/sitemap`)
- ✅ RSS feed (`/rss.xml`)
- ✅ robots.txt
- ✅ Fast loading times (Astro static generation)
- ✅ Mobile-responsive design
- ✅ Semantic HTML

## 🚀 Deployment

### Netlify (Recommended)

1. **Connect repository to Netlify**
2. **Build settings** (auto-detected from `netlify.toml`):
   - Build command: `npm run build`
   - Publish directory: `dist`
3. **Add environment variables** in Netlify dashboard
4. **Deploy!**

Configuration is in `netlify.toml`:
- Redirects for contact form
- Headers for security
- Build settings

### Other Platforms

The site can deploy to any static hosting:
- Vercel
- Cloudflare Pages
- GitHub Pages
- AWS S3 + CloudFront

## 📚 Additional Documentation

This project includes comprehensive guides:

### SEO & Marketing
- `LOCAL_SEO_STRATEGY.md` - Complete local SEO implementation plan
- `LOCAL_SEO_TRACKING.md` - How to track local SEO performance
- `SEO_QUICK_REFERENCE.md` - Quick SEO checklist
- `SEO_IMPROVEMENTS.md` - SEO enhancement suggestions
- `GUEST_POST_STRATEGY.md` - Link building strategy

### Setup Guides
- `GOOGLE_MY_BUSINESS_SETUP.md` - Google Business Profile setup
- `LOCAL_CITATIONS_GUIDE.md` - Directory listing guide
- `CONTACT_FORM_SETUP.md` - Contact form configuration
- `CALENDLY_LOCATION_SETUP.md` - Meeting scheduling setup

### Stripe/Payments
- `STRIPE_SETUP_GUIDE.md` - Complete Stripe integration guide
- `STRIPE_QUICK_SETUP.md` - Quick start for Stripe
- `GET_REAL_STRIPE_KEY.md` - How to get production keys
- `STRIPE_PRICE_IDS.md` - Price ID configuration
- `PRICING_PAGE_README.md` - Pricing page documentation

### ChatGPT Integration
- `CHATGPT_COMMERCE_INTEGRATION.md` - ChatGPT plugin setup
- `CHATGPT_COMMERCE_QUICKSTART.md` - Quick start guide

### Implementation
- `PHASE_2_IMPLEMENTATION_SUMMARY.md` - Project phase 2 summary

## 🗺️ Location Pages

The site includes dedicated pages for:

- Monroe, GA (home base)
- Athens, GA
- Covington, GA
- Lawrenceville, GA
- Loganville, GA
- Social Circle, GA
- Winder, GA

Each page has:
- Unique, location-specific content
- Local schema markup
- Call-to-action buttons
- Local service area targeting

## 📱 Contact Form

The contact form (`ContactForm.astro`) includes:
- ✅ Name, email, phone fields
- ✅ Project type selection
- ✅ Budget range selection
- ✅ Timeline selection
- ✅ Project description
- ✅ Netlify form handling

## 💳 Stripe Integration

Payment processing for:
- One-time website builds
- Monthly maintenance packages

Files:
- `src/pages/api/create-checkout-session.ts` - API endpoint
- `src/pages/success.astro` - Success page
- Environment variables for keys and price IDs

## 🐛 Troubleshooting

### Development server won't start
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Tailwind styles not working
Ensure you're importing the global CSS in your layout:
```astro
---
import '../styles/global.css';
---
```

### Stripe payments not working
1. Check environment variables are set
2. Verify Stripe keys are correct (test vs production)
3. Check price IDs match your Stripe dashboard

## 📄 License

See `LICENSE` file for details.

## 🙏 Credits

Built with:
- [Astro](https://astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Stripe](https://stripe.com/)

## 📞 Support

For questions or issues:
- Email: support@self-labs.io
- Phone: (943) 234-9570
- Location: 1380 Vinies Drive, Monroe, GA 30655

---

**Made with ❤️ by Self Labs**
