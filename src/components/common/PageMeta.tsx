import { HelmetProvider, Helmet } from "react-helmet-async";
import { TooltipProvider } from "@/components/ui/tooltip";

interface PageMetaProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterHandle?: string;
  canonicalUrl?: string;
  schemaType?: "Organization" | "WebPage" | "LocalBusiness" | "Product";
  author?: string;
  publishedDate?: string;
  modifiedDate?: string;
}

const PageMeta = ({
  title,
  description,
  keywords = "Smart City, Amman, Jordan, Investment, Technology, عمان, مدينة ذكية",
  ogImage = "https://ammansmart.com/og-image.jpg",
  ogUrl = "https://ammansmart.com",
  twitterHandle = "@ammansmart",
  canonicalUrl,
  schemaType = "WebPage",
  author = "Amman Smart Team",
  publishedDate,
  modifiedDate,
}: PageMetaProps) => {
  // Schema.org JSON-LD
  const getSchema = () => {
    const baseSchema = {
      "@context": "https://schema.org",
      "@type": schemaType,
      name: title,
      description: description,
      url: ogUrl,
      image: ogImage,
      author: {
        "@type": "Organization",
        name: author,
      },
    };

    if (schemaType === "Organization") {
      return {
        ...baseSchema,
        "@type": "Organization",
        name: "Amman Smart",
        url: "https://ammansmart.com",
        logo: "https://ammansmart.com/logo.png",
        sameAs: [
          "https://www.facebook.com/ammansmart",
          "https://www.twitter.com/ammansmart",
          "https://www.instagram.com/ammansmart",
          "https://www.linkedin.com/company/ammansmart",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Customer Service",
          email: "info@ammansmart.com",
          telephone: "+962-6-XXXXXXX",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Ras Al-Ain, Omar Muttar Street",
          addressLocality: "Amman",
          addressRegion: "Amman",
          postalCode: "11190",
          addressCountry: "JO",
        },
      };
    }

    if (publishedDate || modifiedDate) {
      return {
        ...baseSchema,
        datePublished: publishedDate,
        dateModified: modifiedDate,
      };
    }

    return baseSchema;
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title} | عمان الذكية</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="language" content="Arabic" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="revisit-after" content="7 days" />
      <meta name="theme-color" content="#0891b2" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <meta name="format-detection" content="telephone=no" />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="ar_JO" />
      <meta property="og:site_name" content="عمان الذكية" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content={twitterHandle} />

      {/* Apple Mobile Web App Meta Tags */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="عمان الذكية" />
      <link rel="apple-touch-icon" href="/favicon.png" />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl || ogUrl} />

      {/* Preconnect & DNS Prefetch */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://miaoda-site-img.s3cdn.medo.dev" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />

      {/* Preload Critical Resources */}
      <link rel="preload" as="image" href="/images/amman-skyline-hero.jpg" />
      <link rel="preload" as="font" href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&display=swap" crossOrigin="anonymous" />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(getSchema())}
      </script>

      {/* Published/Modified Date */}
      {publishedDate && <meta property="article:published_time" content={publishedDate} />}
      {modifiedDate && <meta property="article:modified_time" content={modifiedDate} />}
    </Helmet>
  );
};

export const AppWrapper = ({ children }: { children: React.ReactNode }) => (
  <HelmetProvider>
    <TooltipProvider>
      {children}
    </TooltipProvider>
  </HelmetProvider>
);

export default PageMeta;
