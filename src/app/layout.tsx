4
import type { Metadata } from "next";
import { Inter, Playfair_Display, Bebas_Neue, Montserrat, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-playfair",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://framesbymohit.com"),
  title: {
    default: "Frames by Mohit",
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
      "Building immersive visual experiences through cinematic storytelling, commercial production, and creative direction..",
    url: "https://framesbymohit.com",
    siteName: "Mohit Gharat",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80https://unsplash.com/photos/a-couple-of-men-standing-next-to-each-other-aJo_DOTMQTA",
        width: 1600,
        height: 900,
        alt: "Cinematic frame by Mohit Gharat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohit Gharat ",
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
        className={`${inter.variable} ${playfair.variable} ${bebasNeue.variable} ${montserrat.variable} ${oswald.variable} bg-[var(--background)] text-[var(--foreground)] antialiased`}

      >
        {children}
      </body>
    </html>
  );
}
