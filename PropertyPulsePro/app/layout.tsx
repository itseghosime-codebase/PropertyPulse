import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const montserrat = Montserrat({
  variable: "--font-montserrat-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins-mono",
  subsets: ["latin"],
  weight: ['300','400','500','600','700','800']
});

export const metadata: Metadata = {
  title: "Property Pulse Pro",
  description: "Grow your real estate brand with a high-performance website built just for agents like you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${poppins.variable} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
