import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Great_Vibes, Poppins, Inter, Nothing_You_Could_Do, Dancing_Script } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: ["400"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const nothingYouCouldDo = Nothing_You_Could_Do({
  variable: "--font-nothing",
  weight: ["400"],
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "A Cinematic Valentine Surprise",
  description: "Made with love for a special person.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${cormorant.variable} ${greatVibes.variable} ${poppins.variable} ${inter.variable} ${nothingYouCouldDo.variable} ${dancingScript.variable} antialiased bg-midnight-blue text-warm-ivory selection:bg-wine-red selection:text-white overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
