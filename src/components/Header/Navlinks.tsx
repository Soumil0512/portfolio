import { HTMLAttributes, MouseEvent } from "react";
import Link from "next/link";

import { MdAccountCircle } from "react-icons/md";
import { TbBulbFilled } from "react-icons/tb";
import { IoBriefcase, IoShareSocial } from "react-icons/io5";
import { FaUniversity } from "react-icons/fa";

const navLinksConfig = [
  { href: "#bio", text: "Bio", key: "bio", icon: <MdAccountCircle /> },
  { href: "#skills", text: "Skills", key: "skills", icon: <TbBulbFilled /> },
  {
    href: "#roles",
    text: "Roles",
    key: "employmentHistory",
    icon: <IoBriefcase />,
  },
  {
    href: "#education",
    text: "Education",
    key: "educationalHistory",
    icon: <FaUniversity />,
  },
  {
    href: "#socials",
    text: "Socials",
    key: "socialMediaLinks",
    icon: <IoShareSocial />,
  },
];

export default function NavLinks({
  linkClassName,
  isHamburger,
  handleCloseToggle,
}: {
  linkClassName: HTMLAttributes<HTMLDivElement>["className"];
  isHamburger?: boolean;
  handleCloseToggle?: (e: MouseEvent<HTMLAnchorElement>) => void;
}) {
  return (
    <>
      {navLinksConfig.map((navLinkOpts) => {
        const { key, href, text, icon } = navLinkOpts;

        const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
          if (isHamburger && handleCloseToggle) handleCloseToggle(e);
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
}
