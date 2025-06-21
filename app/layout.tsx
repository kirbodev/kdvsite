import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistMono } from "geist/font/mono";
import { choco } from "@/styles/fonts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | kdv_",
    default: "kdv_",
  },
  description:
    "Software Engineer based in Dublin. Full-stack. Typescript/Node.js. Open-source. Previously known as kirbodev. 🚀",
  keywords: [
    "kdv_",
    "kdv",
    "software",
    "engineer",
    "typescript",
    "node.js",
    "kirbodev",
  ],
  metadataBase: new URL("https://kdv.one"),
  openGraph: {
    type: "website",
    images: {
      url: "/header.png",
      width: 1250,
      height: 500,
      alt: "kdv_",
    },
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@kirbodev",
    site: "@kirbodev",
  },
};

export const viewport: Viewport = {
  themeColor: "#4A5BF2",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} ${GeistMono.variable} ${choco.variable}`}
      >
        <Providers>
          {children}
          <Analytics />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}
