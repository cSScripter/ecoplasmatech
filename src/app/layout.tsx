import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
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

export const metadata: Metadata = {
  title: "EcoPlasma Technologies",
  description: "NonProfit Organization, located in Phoenix, Arizona, that recycles Vehicle batteries from both private and government entities while supporting our veterans and schools. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
