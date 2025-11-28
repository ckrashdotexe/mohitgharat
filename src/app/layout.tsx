import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mohitghar.at"),
  title: {
    default: "Mohit Gharat — Cinematographer",
    template: "%s | Mohit Gharat",
  },
  description:
    "Premium cinematography portfolio of Mohit Gharat featuring films, commercials, and music videos crafted in Mumbai and worldwide.",
  keywords: [
    "cinematography",
    "Mumbai cinematographer",
    "film director of photography",
    "commercial cinematographer",
    "music video cinematographer",
  ],
  openGraph: {
    title: "Mohit Gharat — Cinematographer",
    description:
      "Visual storytelling through films, commercials, and music videos.",
    url: "https://mohitghar.at",
    siteName: "Mohit Gharat",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80",
        width: 1600,
        height: 900,
        alt: "Cinematic frame by Mohit Gharat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohit Gharat — Cinematographer",
    description:
      "Visual storytelling through films, commercials, and music videos.",
    images: [
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  alternates: {
    canonical: "https://mohitghar.at",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} bg-white text-black antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
