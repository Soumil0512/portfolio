import { Portfolio } from "@/types";

export default function Roles({
  roles,
}: {
  roles: Portfolio["employmentHistory"];
}) {
  return (
    <div
      id="roles"
      className="mb-5 flex w-full scroll-mt-[88px] flex-col items-center md:flex-row md:items-start"
    >
      {/* <p className="mb-3 text-3xl font-bold"> */}
      <p className="duration-400 sticky top-[75px] z-[1] w-full bg-primary px-4 pb-3 pt-[10px] text-2xl font-bold shadow-lg transition-[background-color] delay-150 md:mb-0 md:min-w-[30%] md:max-w-[50%] md:shadow-none">
        Roles
      </p>
      <div className="w-full px-6 pt-3 md:min-w-[70%] md:max-w-[50%]">
        {roles.map((companyInfo) => (
          <div key={companyInfo.company}>
            <p className="text-xl font-bold">{companyInfo.company}</p>
            <div className="ms-4">
              {companyInfo.roles.map((roleInfo, index) => (
                <div
                  className="my-2 flex flex-row items-stretch"
                  key={roleInfo.role}
                >
                  <div>
                    <div className="relative top-3 h-2 w-2 rounded-full bg-secondary" />
                    {index < companyInfo.roles.length - 1 && (
                      <div className="relative left-[0.2rem] top-5 h-[calc(100%-0.95rem)] w-[1.5px] bg-secondary" />
                    )}
                  </div>
                  <div className="ml-4 w-full">
                    <p className="text-lg font-semibold">{roleInfo.role}</p>
                    <div className="ml-2">
                      <p className="mb-1 text-sm">
                        {roleInfo.startDate} - {roleInfo.endDate || "Present"}
                      </p>
                      <ul>
                        {roleInfo.description.map((description, idx) => (
                          <li key={idx} className="mb-2">
                            {description}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
