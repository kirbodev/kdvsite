"use client";

import { SunIcon, MoonIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const handleClick = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <button onClick={handleClick}>
      <AnimatePresence mode="wait">
        {theme === "dark" ? (
          <motion.div key="moon" animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <MoonIcon />
          </motion.div>
        ) : (
          <motion.div key="sun" animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <SunIcon />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
