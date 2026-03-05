"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const aartis = [
  { id: 1, title: "श्री गणेश जी की आरती", link: "/aarti/1" },
  { id: 4, title: "श्री लक्ष्मी जी की आरती", link: "/aarti/4" },
  { id: 5, title: "श्री सरस्वती जी की आरती", link: "/aarti/5" },
  { id: 2, title: "श्री दुर्गा जी की आरती", link: "/aarti/2" },
  { id: 3, title: "श्री हनुमान जी की आरती", link: "/aarti/3" },
  { id: 6, title: "श्री शिव जी की आरती", link: "/aarti/6" },
  { id: 7, title: "श्री अम्बे जी की आरती", link: "/aarti/7" },
  { id: 8, title: "श्री जगदीश जी की आरती", link: "/aarti/8" },
  { id: 9, title: "श्री बाँके बिहारी जी की आरती", link: "/aarti/9" },
  { id: 10, title: "श्री श्याम जी की आरती", link: "/aarti/10" },
  { id: 11, title: "श्री सत्यनारायण जी की आरती", link: "/aarti/11" },
  { id: 12, title: "श्री संतोषी माता जी की आरती", link: "/aarti/12" },
  { id: 13, title: "श्री कुंजबिहारी जी की आरती", link: "/aarti/13" },
  { id: 14, title: "श्री कृष्ण जी की आरती", link: "/aarti/14" },
  { id: 15, title: "श्री शनि देव जी की आरती", link: "/aarti/15" },
  { id: 16, title: "श्री रामचंद्र जी की आरती", link: "/aarti/16" },
  { id: 17, title: "श्री खाटू श्याम जी की आरती", link: "/aarti/17" },
  { id: 18, title: "श्री तुलसी जी की आरती", link: "/aarti/18" },
];

export default function AartiPage() {
  const [search, setSearch] = useState("");

  const filteredAartis = aartis.filter((aarti) =>
    aarti.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff9e6] to-[#fffef0]">
      <motion.div
        className="container mx-auto py-10 text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-yellow-800 mb-6">
          आरती संग्रह
        </h2>

        <input
          type="text"
          placeholder="आरती खोजें..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md mx-auto p-3 mb-8 border border-yellow-500 rounded-md 
            focus:outline-none focus:ring-2 focus:ring-yellow-600 
            bg-white text-yellow-900 placeholder-yellow-600"
        />

        <ul className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredAartis.length > 0 ? (
            filteredAartis.map((aarti) => (
              <motion.li
                key={aarti.id}
                whileHover={{ scale: 1.03 }}
                className="p-6 bg-white shadow-md hover:shadow-xl rounded-lg border border-yellow-200 transition"
              >
                <a
                  href={aarti.link}
                  className="text-2xl font-semibold text-yellow-800 hover:underline"
                >
                  {aarti.title}
                </a>
              </motion.li>
            ))
          ) : (
            <p className="text-yellow-700">कोई आरती नहीं मिली</p>
          )}
        </ul>
      </motion.div>
    </div>
  );
}
