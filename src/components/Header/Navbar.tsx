"use client";

import Link from "next/link";
import { HTMLAttributes, MouseEvent, useEffect, useState } from "react";

import { MdAccountCircle } from "react-icons/md";
import { TbBulbFilled } from "react-icons/tb";
import { IoBriefcase, IoShareSocial } from "react-icons/io5";
import { FaUniversity } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import ThemeToggle from "../ThemeToggle";
import { createPortal } from "react-dom";
import { IoMdClose } from "react-icons/io";

// TODO: Fix the hamburger icon getting overlapped by menuissue

const navLinksConfig = [
  { href: "#bio", text: "Bio", key: "bio", icon: <MdAccountCircle /> },
  { href: "#skills", text: "Skills", key: "skills", icon: <TbBulbFilled /> },
  {
    href: "#employment-history",
    text: "Employment History",
    key: "employmentHistory",
    icon: <IoBriefcase />,
  },
  {
    href: "#educational-history",
    text: "Educational History",
    key: "educationalHistory",
    icon: <FaUniversity />,
  },
  {
    href: "#social-media",
    text: "Social Media",
    key: "socialMediaLinks",
    icon: <IoShareSocial />,
  },
];

const NavLinks = ({
  linkClassName,
  isHamburger,
  handleToggle,
}: {
  linkClassName: HTMLAttributes<HTMLDivElement>["className"];
  isHamburger?: boolean;
  handleToggle?: (e: MouseEvent) => void;
}) => {
  return (
    <>
      {navLinksConfig.map((navLinkOpts) => {
        const { key, href, text, icon } = navLinkOpts;

        const handleClick = (e: MouseEvent) => {
          if (isHamburger && handleToggle) handleToggle(e);
        };

        return (
          <Link
            key={key}
            href={href}
            className={linkClassName || ""}
            onClick={handleClick}
          >
            {icon}
            {text}
          </Link>
        );
      })}
    </>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (e: MouseEvent) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  }

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
      {/* md:flex-col lg:flex-row md:justify-center md:text-center */}
      <div className="flex gap-4">
        <nav className="hidden gap-4 md:flex">
          <NavLinks linkClassName="md:flex-col lg:flex-row md:justify-center md:text-center flex items-center gap-2 rounded p-2 hover:bg-accent hover:text-accent2 focus:bg-accent focus:text-accent2" />
        </nav>

        <ThemeToggle />

        <Link
          href=""
          className="fixed bottom-[50px] right-[40px] z-10 rounded-full bg-secondary p-2 hover:text-accent md:hidden"
          onClick={handleToggle}
        >
          {isOpen ? <IoMdClose /> : <GiHamburgerMenu />}
        </Link>
      </div>

      {isOpen &&
        document.querySelector("#ham-nav-wrapper") &&
        createPortal(
          <nav
            className="fixed flex h-screen w-[100%] flex-grow flex-col gap-4 pt-[80px] backdrop-blur-sm"
            // onClick={handleToggle}
          >
            <NavLinks
              linkClassName="w-[100%] flex items-center rounded gap-4 p-2 hover:bg-accent hover:text-accent2 focus:bg-accent focus:text-accent2 text-2xl"
              isHamburger
              handleToggle={handleToggle}
            />
          </nav>,
          document.querySelector("#ham-nav-wrapper") || document.body,
        )}
    </>
  );
}
