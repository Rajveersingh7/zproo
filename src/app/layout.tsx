import type {Metadata, Viewport} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {PageTransition} from "@/components/PageTransition";
import {ScrollProgress} from "@/components/ScrollProgress";
import {SmoothScroll} from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "Zproo - Ride Electrified",
  description:
    "Premium Electric Vehicle Transportation - Ride Electrified with Zproo",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} data-scroll-behavior="smooth">
      <body className={`${inter.className} antialiased bg-white`}>
        <SmoothScroll />
        <ScrollProgress />
        <Navbar />
        <PageTransition>
          <main className="relative -mt-20">{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
