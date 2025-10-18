export const prerender = true;

const posts = [
  {
    title: "10 Essential SEO Best Practices for 2025",
    description: "Look, I've been doing SEO for over 5 years now, and I've seen what actually works. These aren't just theories - these are the proven strategies that'll boost your rankings and drive real traffic to your site.",
    slug: "/blog/seo-best-practices-2025",
    pubDate: new Date("2024-12-19"),
    author: "Will Sargent"
  },
  {
    title: "Core Web Vitals: Complete Guide to Website Performance",
    description: "Let me be straight with you - if your website's slow, you're losing customers. Google's Core Web Vitals aren't just some technical mumbo-jumbo; they're the difference between ranking on page 1 or page 10.",
    slug: "/blog/core-web-vitals-guide",
    pubDate: new Date("2024-12-19"),
    author: "Will Sargent"
  },
  {
    title: "Responsive Web Design SEO: Mobile-First Optimization Guide",
    description: "Here's a harsh truth: if your website doesn't work on mobile, you're basically invisible to Google. Mobile-first indexing isn't coming - it's here. Let me show you how to make your site mobile-friendly and actually rank.",
    slug: "/blog/responsive-web-design-seo",
    pubDate: new Date("2024-12-19"),
    author: "Will Sargent"
  },
  {
    title: "Website Speed Optimization: 15 Techniques That Actually Work",
    description: "Your website's slow, and it's killing your business. Every second of delay costs you customers and rankings. I've got 15 proven techniques that'll speed up your site and get you ranking higher.",
    slug: "/blog/website-speed-optimization",
    pubDate: new Date("2024-12-19"),
    author: "Will Sargent"
  },
  {
    title: "SEO for Web Designers: Technical Implementation Guide",
    description: "Look, I get it - you're a designer, not an SEO expert. But here's the thing: if you're not thinking about SEO when you design, you're building beautiful websites that nobody can find.",
    slug: "/blog/seo-for-web-designers",
    pubDate: new Date("2024-12-19"),
    author: "Will Sargent"
  },
  {
    title: "Website Design & SEO: Complete Integration Guide",
    description: "Here's the secret most agencies don't want you to know: the best websites aren't just beautiful or just SEO-optimized - they're both. I'll show you how to create sites that look amazing AND rank on page 1 of Google.",
    slug: "/blog/website-design-seo-integration",
    pubDate: new Date("2024-12-19"),
    author: "Will Sargent"
  }
];

export function GET() {
  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Self Labs Web Design Blog</title>
    <description>Expert insights on SEO, web design, and digital marketing. Learn proven strategies to improve your website's performance and search rankings.</description>
    <link>https://self-labs.io/blog</link>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="https://self-labs.io/rss.xml" rel="self" type="application/rss+xml"/>
    ${posts.map(post => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.description}]]></description>
      <link>https://self-labs.io${post.slug}</link>
      <guid>https://self-labs.io${post.slug}</guid>
      <pubDate>${post.pubDate.toUTCString()}</pubDate>
      <author>${post.author}</author>
    </item>`).join('')}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}
