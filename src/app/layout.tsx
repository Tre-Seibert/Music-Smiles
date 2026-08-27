import type { Metadata } from "next";
import { Fraunces, Nunito } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileCtaBar } from "@/components/MobileCtaBar";
import { MotionRoot } from "@/components/MotionRoot";
import { site } from "@/lib/site";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Music & Smiles | Play. Connect. Belong.",
    template: "%s | Music & Smiles",
  },
  description:
    "Joyful, inclusive musical experiences for children and teens with special needs in Bucks County and Montgomery County, PA.",
  metadataBase: new URL("https://musicandsmiles.fishtownweb.com"),
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  openGraph: {
    title: "Music & Smiles",
    description:
      "Every child deserves a place where they feel accepted, included, and celebrated.",
    type: "website",
    url: "https://musicandsmiles.fishtownweb.com",
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
        alt: "Music & Smiles — Play. Connect. Belong.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Music & Smiles",
    description:
      "Every child deserves a place where they feel accepted, included, and celebrated.",
    images: ["/images/og.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${nunito.variable} ${fraunces.variable} h-full`}>
      <body className="min-h-full overflow-x-hidden bg-cream pb-20 font-sans text-ink antialiased md:pb-0">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <MotionRoot />
        <div id="main">{children}</div>
        <Footer />
        <MobileCtaBar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NGO",
              name: site.name,
              email: site.email,
              telephone: site.phone,
              slogan: site.tagline,
              areaServed: "Bucks County and Montgomery County, Pennsylvania",
              url: "https://musicandsmiles.fishtownweb.com",
            }),
          }}
        />
      </body>
    </html>
  );
}
