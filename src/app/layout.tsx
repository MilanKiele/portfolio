// General
import type { Metadata, Viewport } from "next";

// Styles
import "./globals.css";
import { Roboto } from "next/font/google";

// Components
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Milan Kiele Portfolio",
  description: "Simple Portfolio for Milan Kiele - Projects and More...",
  creator: "Milan Kiele",
};

export const viewport: Viewport = {
  themeColor: "#0b1015",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
