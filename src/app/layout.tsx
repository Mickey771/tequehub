import type { Metadata } from "next";
import "./globals.css";
import MainLayout from "../components/MainLayout";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.teque.tech"),
  title: {
    default: "Teque Hub | Custom Software Development & AI Automation Agency",
    template: "%s | Teque Hub",
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
    "Custom Software",
    "AI Agents",
    "Next.js Developers",
    "Delaware Software Company",
    "Workflow Automation",
    "React Native",
    "DevOps",
    "Cloud Computing",
    "Cybersecurity",
    "Cloud Services"
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
      "We build high performance mobile apps and automate complex business workflows for global clients.",
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
      "We build high performance mobile apps and automate complex business workflows for global clients.",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Teque Hub",
  url: "https://www.teque.tech",
  logo: "https://www.teque.tech/logo.jpg",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "contact@teque.tech"
  },
  sameAs: [
    "https://twitter.com/tequehub",
    "https://linkedin.com/company/tequehub"
  ]
};

import GoogleAnalytics from "@/components/GoogleAnalytics";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Teque</title>
        {/* ... existing head content ... */}
      </head>
      <body>
        <GoogleAnalytics />
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
