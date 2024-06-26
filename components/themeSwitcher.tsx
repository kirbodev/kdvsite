"use client";

import { SunIcon, MoonIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Suspense, useEffect, useState } from "react";
import { Button } from "./ui/button";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const handleClick = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <Button
      variant="ghost"
      size="sm"
      className="transition-none [background-color:transparent!important] [color:hsl(var(--foreground))!important]"
      onClick={handleClick}
    >
      <AnimatePresence mode="wait">
        {theme === "dark" ? (
          <motion.div
            key="moon"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
          >
            <MoonIcon />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
          >
            <SunIcon />
          </motion.div>
        )}
      </AnimatePresence>
    </Button>
  );
}
