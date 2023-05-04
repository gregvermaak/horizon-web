"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function DarkModeToggle() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="cursor-pointer">
      {currentTheme === "dark" ? (
        <Sun className="h-6 w-6" onClick={() => setTheme("light")} />
      ) : (
        <Moon className="h-6 w-6" onClick={() => setTheme("dark")} />
      )}
    </div>
  );
}
