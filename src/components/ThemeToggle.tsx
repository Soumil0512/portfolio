"use client";

import useIsMounted from "@/hooks/useIsMounted";
// import { setCookie } from "cookies-next";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  
  function handleThemeChange() {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  }
  
  const { isMounted} = useIsMounted();
  if (!isMounted) return null;

  return (
    <button onClick={handleThemeChange}>
      {resolvedTheme === "light" ? "🌞 Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}
