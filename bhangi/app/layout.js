import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../context/ThemeContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kathasaar - आरती, चालीसा, व्रत कथा",
  description: "सभी भगवान की आरती, चालीसा और व्रत कथा एक ही स्थान पर। PDF डाउनलोड करें।",
  keywords: ["Aarti", "Chalisa", "Vrat Katha", "Sanatan Dharma", "Hindu Bhakti"],
  authors: [{ name: "Kathasaar Team" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-secondary text-gray-900 dark:text-white transition-colors duration-300`}>
        <ThemeProvider>
          <Navbar />
          
          <main className="min-h-[calc(100vh-160px)]">
            {children}
          </main>
          
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
