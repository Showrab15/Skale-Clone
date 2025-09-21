"use client"; // make this page a client component

import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFoundPage() {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    // This code runs only in the browser
    setWindowWidth(window.innerWidth);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-6">
        Page not found. Window width: {windowWidth ?? "loading..."}
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
}
