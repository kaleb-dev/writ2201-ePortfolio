"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header
      className={`${
        pathname === "/" ? "bg-black text-white" : "bg-white text-black"
      } shadow-md`}
    >
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <Link href="/" className="text-xl font-bold tracking-wider">
            K·PORTFOLIO
          </Link>
        </div>
        <nav className="flex space-x-8">
          <Link
            href="/"
            className={`text-sm font-medium tracking-wide hover:opacity-75 transition-all ${
              pathname === "/"
                ? "opacity-100 border-b-2 border-current pb-1"
                : "opacity-80"
            }`}
          >
            HOME
          </Link>
          <Link
            href="/fastfix"
            className={`text-sm font-medium tracking-wide hover:opacity-75 transition-all ${
              pathname === "/fastfix"
                ? "opacity-100 border-b-2 border-current pb-1"
                : "opacity-80"
            }`}
          >
            FAST FIX
          </Link>
          <Link
            href="/devicepage"
            className={`text-sm font-medium tracking-wide hover:opacity-75 transition-all ${
              pathname === "/devicepage"
                ? "opacity-100 border-b-2 border-current pb-1"
                : "opacity-80"
            }`}
          >
            DEVICE PAGE
          </Link>
          <Link
            href="/reflections"
            className={`text-sm font-medium tracking-wide hover:opacity-75 transition-all ${
              pathname === "/reflections"
                ? "opacity-100 border-b-2 border-current pb-1"
                : "opacity-80"
            }`}
          >
            REFLECTIONS
          </Link>
        </nav>
      </div>
    </header>
  );
}
