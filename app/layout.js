import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PrompterBase – Curated Prompt Collection",
  description: "A curated collection of high-quality prompts for website builders, image generation, and video creation tools. Copy, customize, and create.",
  keywords: ["prompts", "v0", "lovable", "midjourney", "website builder", "prompt engineering"],
  authors: [{ name: "Ved Pawar" }],
  openGraph: {
    title: "PrompterBase – Curated Prompt Collection",
    description: "High-quality prompts for website builders, image, and video generation",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-pattern`}
      >
        {children}
      </body>
    </html>
  );
}
