"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const chalisas = [
  { id: 1, title: "हनुमान चालीसा", link: "/chalisa/1" },
  { id: 2, title: "शिव चालीसा", link: "/chalisa/2" },
  { id: 3, title: "दुर्गा चालीसा", link: "/chalisa/3" },
  { id: 4, title: "गणेश चालीसा", link: "/chalisa/4" },
  { id: 5, title: "लक्ष्मी चालीसा", link: "/chalisa/5" },
  { id: 6, title: "श्याम चालीसा", link: "/chalisa/6" },
];

export default function ChalisaPage() {
  const [search, setSearch] = useState("");

  const filteredChalisas = chalisas.filter((item) =>
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
          चालीसा संग्रह
        </h2>

        <input
          type="text"
          placeholder="चालीसा खोजें..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md mx-auto p-3 mb-8 border border-yellow-500 rounded-md 
            focus:outline-none focus:ring-2 focus:ring-yellow-600 
            bg-white text-yellow-900 placeholder-yellow-600"
        />

        <ul className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredChalisas.length > 0 ? (
            filteredChalisas.map((item) => (
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
            <p className="text-yellow-700">कोई चालीसा नहीं मिली</p>
          )}
        </ul>
      </motion.div>
    </div>
  );
}
