import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Provider as JotaiProvider } from "jotai";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | kdv_",
    default: "kdv_",
  },
  description:
    "Software Engineer based in Dublin. Full-stack. Typescript/Node.js. Open-source.",
  keywords: [
    "kdv_",
    "kdv",
    "software",
    "engineer",
    "typescript",
    "node.js",
    "kirbodev",
  ],
  metadataBase: new URL("https://kdv.vercel.app"),
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
  // Deprecated but used for discord embed color
  themeColor: "#1021B7",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <JotaiProvider>
          <Providers>{children}</Providers>
        </JotaiProvider>
      </body>
    </html>
  );
}
