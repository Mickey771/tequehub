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
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
