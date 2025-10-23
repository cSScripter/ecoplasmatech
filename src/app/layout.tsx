import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "EcoPlasma Technologies",
  description: "NonProfit Organization, located in Phoenix, Arizona, that recycles Vehicle batteries from both private and government entities while supporting our veterans and schools. ",
  other: {
    "color-scheme": "light dark",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} antialiased`}
      > <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
