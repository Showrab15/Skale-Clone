import Footer from "@/components/Footer/Footer";
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
      <body className="bg-[#f0f0f0] antialiased">
        {children}
        <Footer />
      </body>
    </html>
  );
}
