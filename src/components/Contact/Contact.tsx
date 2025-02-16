import { Portfolio } from "@/types";
import { IoMdMail } from "react-icons/io";

export default function Contact({ email }: { email: Portfolio["email"] }) {
  return (
    <div
      id="contact"
      className="mb-3 flex w-full scroll-mt-[88px] flex-row justify-center"
    >
      <a
        href={`mailto:${email}`}
        className="flex items-center gap-2 rounded border border-secondary p-2 transition-colors duration-300 hover:bg-secondary hover:text-primary hover:shadow dark:border-accent dark:text-accent dark:hover:bg-accent dark:hover:text-primary"
      >
        Hit me up <IoMdMail />
      </a>
    </div>
  );
}
