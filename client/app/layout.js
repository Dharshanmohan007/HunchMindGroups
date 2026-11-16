import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "HunchMind Group | Building AI Businesses for a More Efficient World",
  description: "A technology group that creates, invests and scales data-driven businesses across supply chain, agriculture, commerce and beyond.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-[#FAFAFA] text-[#102638] antialiased">
        {children}
      </body>
    </html>
  );
}
