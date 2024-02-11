import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Provider as JotaiProvider } from "jotai";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "kdv_",
  description: "Personal website of kdv_",
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
