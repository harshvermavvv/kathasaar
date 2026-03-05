"use client";
import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false); // 👈 for hydration fix

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
    }
    setMounted(true); // ✅ now safe to render theme
  }, []);

  const toggleTheme = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  // 👇 Avoid rendering till theme is mounted
  if (!mounted) return null;

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {/* Add transition and min-h-screen to smooth layout */}
      <div
        className={`transition-colors duration-300 ${
          darkMode ? "dark" : ""
        } min-h-screen`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
