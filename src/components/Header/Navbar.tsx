"use client";

import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

import ThemeToggle from "../ThemeToggle";
import Brand from "./Brand";
import NavLinks from "./Navlinks";
import useIsMounted from "@/hooks/useIsMounted";
import { OnClickEventProps, Portfolio } from "@/types";

// TODO: Fix the hamburger icon getting overlapped by menuissue

export default function Navbar({ name }: { name: Portfolio["name"] }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (e: OnClickEventProps) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const handleCloseToggle = (e: OnClickEventProps) => {
    e.stopPropagation();
    if (isOpen) setIsOpen(false);
  };

  const { isMounted } = useIsMounted();

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    }

    // if (typeof window !== undefined)
    window.addEventListener("resize", handleResize);
    return () => {
      // if (typeof window !== undefined)
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isOpen) document.body.style.overflowY = "hidden";
    else document.body.style.overflowY = "auto";
  }, [isOpen]);

  return (
    <>
      <Brand
        name={name}
        // handleToggle={handleToggle}
        handleCloseToggle={handleCloseToggle}
      />
      <div className="flex gap-4">
        <nav className="hidden gap-4 md:flex">
          <NavLinks linkClassName="md:flex-row md:justify-center md:text-center flex items-center gap-2 rounded p-2 hover:bg-accent hover:text-accent2" />
        </nav>

        <ThemeToggle />
      </div>

      {isMounted &&
        document.querySelector("#nav-toggle-wrapper") &&
        createPortal(
          <button
            className="fixed bottom-[60px] right-[30px] z-20 rounded-full bg-secondary p-2 text-primary hover:text-accent md:hidden"
            onClick={handleToggle}
          >
            {isOpen ? <IoMdClose /> : <GiHamburgerMenu />}
          </button>,
          document.querySelector("#nav-toggle-wrapper") || document.body,
        )}

      {isOpen &&
        document.querySelector("#ham-nav-wrapper") &&
        createPortal(
          <nav
            className="fixed flex h-screen w-[100%] flex-grow flex-col gap-4 pt-[80px] z-10 backdrop-blur-sm"
            onClick={handleCloseToggle}
          >
            <NavLinks
              linkClassName="w-[100%] flex items-center rounded gap-4 p-2 bg-secondary text-primary hover:text-accent text-2xl"
              isHamburger
              handleCloseToggle={handleCloseToggle}
            />
          </nav>,
          document.querySelector("#ham-nav-wrapper") || document.body,
        )}
    </>
  );
}
