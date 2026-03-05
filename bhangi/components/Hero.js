import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="text-center py-20 bg-secondary">
      <motion.h1
        className="text-4xl font-bold text-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Sanatan Bhakti - आरती, चालीसा, व्रत कथा संग्रह
      </motion.h1>

      <motion.p
        className="mt-4 text-lg text-gray-700"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        सभी भगवान की आरती, चालीसा और व्रत कथाएँ एक ही स्थान पर।
      </motion.p>

      <motion.button
        className="mt-6 px-6 py-3 bg-primary text-white rounded-full hover:scale-105 transition-transform"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        अभी पढ़ें
      </motion.button>
    </section>
  );
}
