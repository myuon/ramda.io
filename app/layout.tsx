import { KumaRegistry } from "@kuma-ui/next-plugin/registry";
import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { IBM_Plex_Sans } from "next/font/google";

const ibmPlexSans = IBM_Plex_Sans({
  weight: "700",
  display: "swap",
  subsets: ["latin", "greek"],
  variable: "--font-ibm-plex-sans",
});

export const metadata: Metadata = {
  title: "ramda.io",
  description: "@myuon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head prefix="og: https://ogp.me/ns#">
        <meta property="og:url" content="https://ramda.io" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="ramda.io" />
        <meta property="og:site_name" content="ramda.io" />
        <meta property="og:image" content="https://ramda.io/ogp.png" />
        <meta name="twitter:card" content="summary" />
      </head>
      <body className={`${ibmPlexSans.variable}`}>
        <KumaRegistry>{children}</KumaRegistry>
        <Analytics />
      </body>
    </html>
  );
}
