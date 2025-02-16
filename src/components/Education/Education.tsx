import { Portfolio } from "@/types";

export default function Education({
  educationHistory,
}: {
  educationHistory: Portfolio["educationHistory"];
}) {
  return (
    <div
      id="education"
      className="mb-5 flex w-full scroll-mt-[88px] flex-col items-center"
    >
      <p className="mb-3 text-3xl font-bold">Education</p>
      <div className="w-full p-2">
        {educationHistory.map((education) => (
          <div key={education.institute} className="mb-3">
            <p className="text-xl font-semibold">{education.institute}</p>
            <p className="text ml-4">{education.degree}</p>
            <p className="text-sm ml-4">
              {education.startDate} - {education.endDate || "Present"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
