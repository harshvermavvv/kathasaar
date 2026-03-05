"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const vrats = [
  { id: 1, title: "उत्पन्ना एकादशी व्रत कथा", link: "/vratkatha/1" },
  { id: 2, title: "मोक्षदा एकादशी व्रत कथा", link: "/vratkatha/2" },
  { id: 3, title: "सफला एकादशी व्रत कथा", link: "/vratkatha/3" },
  { id: 4, title: "पुत्रदा एकादशी व्रत कथा", link: "/vratkatha/4" },
  { id: 5, title: "षटतिला एकादशी व्रत कथा", link: "/vratkatha/5" },
  { id: 6, title: "जया एकादशी व्रत कथा", link: "/vratkatha/6" },
  { id: 7, title: "विजया एकादशी व्रत कथा", link: "/vratkatha/7" },
  { id: 8, title: "आंवला एकादशी व्रत कथा", link: "/vratkatha/8" },
  { id: 9, title: "पापमोचनी एकादशी व्रत कथा", link: "/vratkatha/9" },
  { id: 10, title: "बरूथिनी एकादशी व्रत कथा", link: "/vratkatha/10" },
  { id: 11, title: "मोहिनी एकादशी व्रत कथा", link: "/vratkatha/11" },
  { id: 12, title: "निर्जला एकादशी व्रत कथा", link: "/vratkatha/12" },
  { id: 13, title: "योगिनी एकादशी व्रत कथा", link: "/vratkatha/13" },
  { id: 14, title: "देवशयनी (पद्ममा) एकादशी व्रत कथा", link: "/vratkatha/14" },
  { id: 15, title: "चातुर्मास्य विधान व्रत कथा", link: "/vratkatha/15" },
  { id: 16, title: "कामदा एकादशी व्रत कथा", link: "/vratkatha/16" },
  { id: 17, title: "पुत्रदा एकादशी व्रत कथा", link: "/vratkatha/17" },
  { id: 18, title: "अजा एकादशी व्रत कथा", link: "/vratkatha/18" },
  { id: 19, title: "वामन (परिवर्तिनी) एकादशी व्रत कथा", link: "/vratkatha/19" },
  { id: 20, title: "इन्दिरा एकादशी व्रत कथा", link: "/vratkatha/20" },
  { id: 21, title: "पापांकुशा एकादशी व्रत कथा", link: "/vratkatha/21" },
  { id: 22, title: "रमा एकादशी व्रत कथा", link: "/vratkatha/22" },
  { id: 23, title: "प्रबोधिनी (देवोत्थान) एकादशी व्रत कथा", link: "/vratkatha/23" },
  { id: 24, title: "पद्मिनी एकादशी व्रत कथा", link: "/vratkatha/24" },
  { id: 25, title: "परमा एकादशी व्रत कथा", link: "/vratkatha/25" },
];

export default function VratKathaPage() {
  const [search, setSearch] = useState("");

  const filteredVrats = vrats.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
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
        एकादशी व्रत कथा संग्रह
        </h2>

        <input
          type="text"
          placeholder="व्रत कथा खोजें..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md mx-auto p-3 mb-8 border border-yellow-500 rounded-md 
            focus:outline-none focus:ring-2 focus:ring-yellow-600 
            bg-white text-yellow-900 placeholder-yellow-600"
        />

        <ul className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredVrats.length > 0 ? (
            filteredVrats.map((item) => (
              <motion.li
                key={item.id}
                whileHover={{ scale: 1.03 }}
                className="p-6 bg-white shadow-md hover:shadow-xl rounded-lg border border-yellow-200 transition"
              >
                <a
                  href={item.link}
                  className="text-2xl font-semibold text-yellow-800 hover:underline"
                >
                  {item.title}
                </a>
              </motion.li>
            ))
          ) : (
            <p className="text-yellow-700">कोई व्रत कथा नहीं मिली</p>
          )}
        </ul>
      </motion.div>
    </div>
  );
}
