import { Portfolio } from "@/types";

export default function Education({
  educationHistory,
}: {
  educationHistory: Portfolio["educationHistory"];
}) {
  return (
    <div
      id="education"
      className="mb-5 flex w-full scroll-mt-[88px] flex-col items-center md:flex-row md:items-start"
    >
      {/* <p className="mb-3 text-3xl font-bold"> */}
      <p className="duration-400 sticky top-[75px] z-[1] w-full bg-primary px-4 pb-3 pt-[10px] text-2xl font-bold shadow-lg transition-[background-color] delay-150 md:mb-0 md:min-w-[30%] md:max-w-[50%] md:shadow-none">
        Education
      </p>
      <div className="w-full pb-2 pl-8 pr-6 pt-3 md:min-w-[70%] md:max-w-[50%]">
        {educationHistory.map((education) => (
          <div key={education.institute} className="mb-3">
            <p className="text-xl font-semibold">{education.institute}</p>
            <p className="text ml-4">{education.degree}</p>
            <p className="ml-4 text-sm">
              {education.startDate} - {education.endDate || "Present"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
