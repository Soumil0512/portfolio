"use client";

import useIsMounted from "@/hooks/useIsMounted";
import { useTheme } from "next-themes";
import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { GrStatusPlaceholder } from "react-icons/gr";

const className = "group-hover:text-accent";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  function handleThemeChange() {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  }

  const { isMounted } = useIsMounted();
  if (!isMounted)
    // return null;
    return (
      <button className="group p-2">
        <GrStatusPlaceholder className="text-transparent" />
      </button>
    );

  return (
    <button onClick={handleThemeChange} className="group p-2">
      {resolvedTheme === "light" ? (
        <FiSun className={className} />
      ) : (
        <FaMoon className={className} />
      )}
    </button>
  );
}
