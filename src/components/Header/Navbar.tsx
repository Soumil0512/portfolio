import Link from "next/link";
import ThemeToggle from "../ThemeToggle";

import { MdAccountCircle } from "react-icons/md";
import { TbBulbFilled } from "react-icons/tb";
import { IoBriefcase, IoShareSocial } from "react-icons/io5";
import { FaUniversity } from "react-icons/fa";

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

export default function Navbar() {
  return (
    <nav className="flex gap-4">
      {navLinksConfig.map((navLinkOpts) => {
        const { key, href, text, icon } = navLinkOpts;

        return (
          <Link
            key={key}
            href={href}
            className="hover:bg-accent hover:text-accent2 flex items-center gap-2 rounded p-2"
          >
            {icon}
            {text}
          </Link>
        );
      })}
      <ThemeToggle />
    </nav>
  );
}
