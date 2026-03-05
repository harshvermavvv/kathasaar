"use client";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="relative bg-[#fdf6e3] overflow-hidden">
      {/* SVG Pattern Background */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="dots"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="1.5" fill="#e0c97f" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 text-left">
        <h1 className="text-5xl font-extrabold text-yellow-800 mb-4">
          कथासार में आपका स्वागत है
        </h1>
        <p className="text-lg text-gray-700 max-w-xl">
          यहाँ आपको सभी देवी-देवताओं की आरतियाँ, चालीसा और व्रत कथाएँ हिन्दी में मिलेंगी।
          श्रद्धा और भक्ति से भरपूर इस संग्रह से जुड़ें।
        </p>

        {/* CTA Button */}
        <div className="mt-6">
          <Link
            href="/aarti"
            className="bg-yellow-600 hover:bg-yellow-500 text-white font-semibold px-6 py-3 rounded shadow-md transition"
          >
            आरतियाँ देखें
          </Link>
        </div>
      </div>
    </div>
  );
}
