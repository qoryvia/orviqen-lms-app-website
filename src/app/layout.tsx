import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import React from "react";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Orviqen | Learn Technology, Build Skills, Shape Your Future",
    template: "%s | Orviqen",
  },

  description:
    "Orviqen is a modern learning platform for software development, artificial intelligence, machine learning, data, cybersecurity, cloud and programming.",

  keywords: [
    "Orviqen",
    "online learning",
    "technology courses",
    "software development",
    "frontend development",
    "backend development",
    "full stack development",
    "React course",
    "JavaScript course",
    "TypeScript course",
    "Python course",
    "Java course",
    "DSA course",
    "data science",
    "data analytics",
    "artificial intelligence",
    "machine learning",
    "cybersecurity",
    "ethical hacking",
    "cloud computing",
    "DevOps",
    "programming courses",
  ],

  authors: [
    {
      name: "Orviqen",
    },
  ],

  creator: "Orviqen",
  publisher: "Orviqen",

  applicationName: "Orviqen",

  category: "education",

  classification:
    "Education, Online Learning, Technology",

  referrer: "origin-when-cross-origin",

  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },

  icons: {
    icon: [
      {
        url: "/favicon/favicon.ico",
      },
      {
        url: "/brand/logo/logo-mark.png",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        url: "/favicon/favicon.ico",
      },
    ],
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  manifest: "/manifest.webmanifest",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Orviqen",
    url: siteUrl,

    title:
      "Orviqen | Learn Technology, Build Skills, Shape Your Future",

    description:
      "Explore practical learning paths across software development, AI, machine learning, data, cybersecurity, cloud and programming.",

    images: [
      {
        url: "/og/default.jpg",
        width: 1200,
        height: 630,
        alt:
          "Orviqen — Learn Technology, Build Skills, Shape Your Future",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Orviqen | Learn Technology, Build Skills, Shape Your Future",

    description:
      "Explore practical courses and learning resources across modern technology.",

    images: ["/og/default.jpg"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  appleWebApp: {
    capable: true,
    title: "Orviqen",
    statusBarStyle: "default",
  },

  other: {
    "theme-color": "#A41034",
    "color-scheme": "light",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#A41034",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} min-h-full antialiased`}
    >
      <body className="min-h-screen bg-white font-sans text-slate-950">
        {children}
      </body>
    </html>
  );
}