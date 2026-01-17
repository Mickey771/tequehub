import type { Metadata } from "next";
import "./globals.css";
import MainLayout from "../components/MainLayout";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.teque.tech"),
  title: {
    default: "Teque | Premium Software Engineering & Automation",
    template: "%s | Teque",
  },
  description:
    "Teque Hub is a premier software engineering firm specializing in Cross-Platform Mobile Development, Business Automation, and AI Integration.",
  keywords: [
    "Software Engineering",
    "Flutter Development",
    "Business Automation",
    "n8n",
    "AI Integration",
    "Mobile App Development",
    "Web Development",
    "Teque Hub",
  ],
  authors: [{ name: "Teque Hub", url: "https://www.teque.tech" }],
  creator: "Teque Hub",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.teque.tech",
    siteName: "Teque Hub",
    title: "Teque | Premium Software Engineering & Automation",
    description:
      "We build high-performance mobile apps and automate complex business workflows for global clients.",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Teque Hub Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Teque | Premium Software Engineering & Automation",
    description:
      "We build high-performance mobile apps and automate complex business workflows for global clients.",
    images: ["/logo.jpg"],
    creator: "@tequehub",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Teque</title>
        <meta
          name="description"
          content="We offer the best creative solution through tech"
        />

        {/* Open Graph Meta Tags (Facebook, LinkedIn) */}
        <meta property="og:title" content="Teque" />
        <meta
          property="og:description"
          content="We offer the best creative solution through tech"
        />
        <meta property="og:image" content="https://www.teque.tech/logo.jpg" />
        <meta property="og:url" content="https://www.teque.tech" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Teque" />

        {/* Optional: Favicon */}
        <link rel="icon" href="/favicon.ico" />

        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "TEQUE HUB, CORP.",
              alternateName: "Teque Hub",
              url: "https://www.teque.tech",
              logo: "https://www.teque.tech/logo.png",
              foundingDate: "2026-01-14",
              priceRange: "$$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "221 W 9th St",
                addressLocality: "Wilmington",
                addressRegion: "DE",
                postalCode: "19801",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "sales",
                email: "info@teque.tech",
                areaServed: ["US", "GB", "CA", "EU", "UAE", "FA"],
                availableLanguage: ["English"],
              },
              founder: {
                "@type": "Person",
                name: "Favour Etuneoke",
                jobTitle: "CEO",
                sameAs: ["https://www.linkedin.com/in/favour-etunwoke"],
              },
              sameAs: [
                "https://www.linkedin.com/company/tequehub",
                "https://clutch.co/profile/teque-hub",
                "https://www.crunchbase.com/organization/teque-hub",
                "https://github.com/tequehub",
                "https://twitter.com/tequehub",
              ],
              knowsAbout: [
                "Software Engineering",
                "Flutter Development",
                "Native Mobile Development",
                "Google Cloud Platform",
                "Business Automation",
                "n8n",
                "Artificial Intelligence",
                "AI-Agents",
                "Devops",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Software Development Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Cross-Platform Mobile App Development (Flutter/React Native)",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Native iOS & Android Development (Swift/Kotlin)",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "AI & Business Automation (n8n, Python, LLMs)",
                    },
                  },
                ],
              },
              description:
                "Teque Hub is a US-based software engineering firm serving global clients in the US, UK, and Europe. We specialize in Native and Cross-Platform mobile development, AI integration, and business automation.",
            }),
          }}
        />
      </head>
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
