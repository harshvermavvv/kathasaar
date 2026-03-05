"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="p-4 shadow-md bg-[#DAA520] text-black transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center relative">
        {/* Logo on Left */}
        <div className="flex items-center">
          <Image src="/logo.png" alt="Kathasaar Logo" width={40} height={40} />
        </div>

        {/* Centered Title */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <span className="text-2xl md:text-3xl font-extrabold text-yellow-100 tracking-wide">
            कथासार
          </span>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  menuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center space-x-4">
          <ul className="flex space-x-4 text-lg font-semibold">
            <li><Link href="/" className="hover:text-yellow-300">होम</Link></li>
            <li><Link href="/aarti" className="hover:text-yellow-300">आरती</Link></li>
            <li><Link href="/chalisa" className="hover:text-yellow-300">चालीसा</Link></li>
            <li><Link href="/vratkatha" className="hover:text-yellow-300">व्रत कथा</Link></li>
          </ul>
        </div>
      </div>

      {/* Mobile Dropdown Nav */}
      {menuOpen && (
        <div className="md:hidden mt-2 space-y-2 px-4 text-lg font-semibold">
          <Link href="/" className="block hover:text-yellow-300">होम</Link>
          <Link href="/aarti" className="block hover:text-yellow-300">आरती</Link>
          <Link href="/chalisa" className="block hover:text-yellow-300">चालीसा</Link>
          <Link href="/vratkatha" className="block hover:text-yellow-300">व्रत कथा</Link>
        </div>
      )}
    </nav>
  );
}
