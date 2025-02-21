import Bio from "@/components/Bio/Bio";
import Contact from "@/components/Contact/Contact";
import Education from "@/components/Education/Education";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Roles from "@/components/Roles/Roles";
import Skills from "@/components/Skills/Skills";
import connectToDB from "@/lib/mongodb";
import { getPortfolio } from "@/services/portfolio.services";
import { Portfolio } from "@/types";

export default async function HomePage() {
  await connectToDB();
  const portfolio: Portfolio | null = await getPortfolio();
  
  if (!portfolio) throw new Error("Please try again after some time!!!");
  // const controller = new AbortController();
  // const signal = controller.signal;

  // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api`, {
  //   method: "GET",
  //   headers: {
  //     Authorization: `${process.env.AUTHORIZATION}`,
  //   },
  //   signal: signal,
  // });

  // const {
  //   isSuccess,
  //   portfolio,
  // }: { isSuccess: boolean; portfolio: Portfolio | null } = await res.json();

  // if (!isSuccess || !portfolio)
  //   throw new Error("Please try again after some time!!!");

  return (
    <div className="duration-400 flex h-max w-full flex-col bg-primary text-secondary transition-colors delay-150 dark:text-accent">
      <Header name={portfolio.name} />
      <div id="ham-nav-wrapper" className="flex"></div>
      <div className="mx-auto max-w-[1024px]">
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
