import { Inter, Playfair_Display, Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata = {
  title: "HunchMind Group | Ideas into Reality",
  description: "A portfolio of businesses built to solve real-world problems through technology, craftsmanship and practical solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${caveat.variable} h-full antialiased bg-warm-cream`}
    >
      <body className="min-h-full flex flex-col font-sans text-deep-navy">{children}</body>
    </html>
  );
}
