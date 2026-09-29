import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://ipel-koreatech.vercel.app"),
  title: {
    default: `${site.name} | ${site.fullName}`,
    template: `%s | ${site.name}`,
  },
  description: `${site.fullName} (${site.koreanName}) at ${site.university}. HVDC & FACTS, renewable energy integration, and power system planning & analysis.`,
  icons: { icon: "/images/emblem.png" },
  openGraph: {
    title: `${site.name} | ${site.fullName}`,
    description: `${site.koreanName}, ${site.universityKo}`,
    images: ["/images/campus.jpg"],
  },
};

// Pages are rendered per request so the CSP nonce from middleware can be applied.
export const dynamic = "force-dynamic";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        {/* Self-hosted Pretendard (dynamic subset) — no third-party CDN. */}
        <link rel="stylesheet" href="/fonts/pretendard/pretendardvariable-dynamic-subset.css" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
