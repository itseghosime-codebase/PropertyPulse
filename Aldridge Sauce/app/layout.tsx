import type { Metadata } from "next";
import { Russo_One, Poppins } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


// Loading Fonts
const russoOne = Russo_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-russo-mono",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins-sans",
  display: "swap",
});

// Site Meta Data
export const metadata: Metadata = {
  title: "Aldridge barbecue sauce",
  description: "The Flavor That Brings It All Together",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${russoOne.variable} ${poppins.variable}} antialiased`}>
        <Navbar />
        <CartProvider>{children}</CartProvider>
        <Footer />
      </body>
    </html>
  );
}
