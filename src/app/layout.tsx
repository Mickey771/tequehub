import type { Metadata } from "next";
import "./globals.css";
import MainLayout from "../components/MainLayout";

export const metadata: Metadata = {
  title: "Teque",
  description: "We offer the best creative solution through tech",
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
      </head>
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
