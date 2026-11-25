import type { Metadata } from "next";
import { DM_Sans, IBM_Plex_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: "Srinath Vatchavari Venkateshan — Independent Thinker",
  description:
    "Curiosity has no boundaries. Srinath Vatchavari Venkateshan is an independent thinker and interdisciplinary explorer working across engineering, science, technology and research.",
  keywords: [
    "Srinath Vatchavari Venkateshan",
    "Independent Thinker",
    "Interdisciplinary Research",
    "R&D Engineering Internship",
    "Automotive Research",
    "Bioenergy Research",
    "Edge Computing",
  ],
  openGraph: {
    title: "Srinath Vatchavari Venkateshan — Independent Thinker",
    description:
      "Exploring the intersections of engineering, science, technology, research and entrepreneurship.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Srinath Vatchavari Venkateshan — Independent Thinker",
    description: "Curiosity has no boundaries.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
