import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Works | Creative Agency",
  description:
    "Works is a creative agency that partners with brands to create meaningful experiences and drive cultural impact.",
  keywords: [
    "creative agency",
    "branding",
    "design",
    "marketing",
    "advertising",
    "digital",
  ],
  authors: [{ name: "Works" }],
  creator: "Works",
  publisher: "Works",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://works-jason.vercel.app",
    siteName: "Works",
    title: "Works | Creative Agency",
    description:
      "Works is a creative agency that partners with brands to create meaningful experiences and drive cultural impact.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Works Creative Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Works | Creative Agency",
    description:
      "Works is a creative agency that partners with brands to create meaningful experiences and drive cultural impact.",
    images: [
      {
        url: "/src/app/opengraph-image.png",
        width: 1200,
        height: 675,
        alt: "WORKS - Creative Agency",
      },
    ],
    creator: "@works",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: "#000000",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://works-jason.vercel.app",
  },
};
