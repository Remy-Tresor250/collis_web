import type { Metadata } from "next";
import { Pathway_Extreme } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const pathwayExtreme = Pathway_Extreme({
  variable: "--font-pathway",
  subsets: ["latin"],
});

const arpDisplay = localFont({
  src: "../assets/fonts/ARPDisplay_40.ttf",
  variable: "--font-arp",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Collis",
  description: "Send money in Rwanda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${pathwayExtreme.variable} ${arpDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-screen w-screen flex flex-col relative pt-[150px] pb-[40px]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
