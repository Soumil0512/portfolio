import Bio from "@/components/Bio/Bio";
import Contact from "@/components/Contact/Contact";
import Education from "@/components/Education/Education";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Roles from "@/components/Roles/Roles";
import Skills from "@/components/Skills/Skills";
import { Portfolio } from "@/types";

export default async function HomePage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api`, {
    method: "GET",
  });

  const { portfolio }: { portfolio: Portfolio | null } = await res.json();

  if (!portfolio) throw new Error("Portfolio content missing!!!");

  return (
    <div className="duration-400 flex w-[100%] flex-col bg-primary text-secondary transition-colors delay-150 dark:text-accent">
      <Header name={portfolio.name} />
      <div id="ham-nav-wrapper" className="flex"></div>
      <div>
        <Bio bio={portfolio.bio} role={portfolio.role} />
        <Skills skills={portfolio.skills} />
        <Roles roles={portfolio.employmentHistory} />
        <Education educationHistory={portfolio.educationHistory} />
        <Contact email={portfolio.email} />
      </div>
      <Footer
        name={portfolio.name}
        socialMediaLinks={portfolio.socialMediaLinks}
      />
    </div>
  );
}
