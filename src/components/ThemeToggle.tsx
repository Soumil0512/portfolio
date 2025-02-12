"use client";

import useIsMounted from "@/hooks/useIsMounted";
import { useTheme } from "next-themes";
import Link from "next/link";
import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { GrStatusPlaceholder } from "react-icons/gr";

// const buttonClassName = "group p-2 justify-center";
const buttonClassName = "flex items-center group p-2";
const iconClassName = "group-hover:text-accent text-2xl";

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
      <Link href="" className={buttonClassName}>
        <GrStatusPlaceholder className="text-2xl text-transparent" />
      </Link>
    );

  return (
    <Link href="" onClick={handleThemeChange} className={buttonClassName}>
      {resolvedTheme === "light" ? (
        <FiSun className={iconClassName} />
      ) : (
        <FaMoon className={iconClassName} />
      )}
    </Link>
  );
}
