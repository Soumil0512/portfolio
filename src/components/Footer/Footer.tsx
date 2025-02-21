import { Portfolio } from "@/types";
import Link from "next/link";
import { ReactNode } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ShareButton from "../ShareButton/ShareButton";

const SocialLinks: { [key: string]: ReactNode } = {
  github: <FaGithub />,
  linkedin: <FaLinkedin />,
};

export default function Footer({
  name,
  socialMediaLinks,
}: {
  name: Portfolio["name"];
  socialMediaLinks: Portfolio["socialMediaLinks"];
}) {
  return (
    <footer
      id="contact"
      className="flex flex-row items-center justify-evenly bg-secondary py-2 text-primary"
    >
      <p className="font-semibold">Made by {name}</p>
      <div className="flex h-full flex-row items-center gap-3">
        {socialMediaLinks.map((linkInfo) => (
          <Link
            key={linkInfo.name}
            target="_blank"
            href={`${linkInfo.link}`}
            className="text-3xl hover:text-accent"
          >
            {SocialLinks[linkInfo.name]}
          </Link>
        ))}
        <ShareButton />
      </div>
    </footer>
  );
}
