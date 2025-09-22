import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "Skale Clone",
  description:
    "Clone of Skale Solutions website using Next.js + TypeScript + Tailwind CSS",
};

// Add type for children
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#f9f9f9] antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
