import type { Metadata } from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: {
    template: '%s | GameVault',
    default: 'GameVault - Your Ultimate Gaming Discovery Platform'
  },
  description: 'Discover and explore your next favorite video games. Get detailed information, ratings, screenshots, and similar game recommendations all in one place.',
  keywords: [
    'video games',
    'game discovery',
    'game database',
    'game reviews',
    'gaming platform',
    'game information'
  ],
  openGraph: {
    type: 'website',
    siteName: 'GameVault',
    title: 'GameVault - Gaming Discovery Platform',
    description: 'Your ultimate destination for video game discovery and information',
    images: [
      {
        url: '/ilustrations/Logo.png',
        width: 1200,
        height: 630,
        alt: 'GameVault Platform Preview'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GameVault',
    description: 'Your ultimate destination for video game discovery and information',
    images: ['/ilustrations/Logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/ilustrations/Logo.png',
    shortcut: '/ilustrations/Logo.png',
    apple: '/ilustrations/Logo.png',
  }
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
        <Toaster  />
      </body>
    </html>
  );
}
