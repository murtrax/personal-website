import Link from "next/link";
import Section from "@/components/ui/Section";
import { JOB_HISTORY } from "@/utils/constants";

const WorkExperience = () => {
  return (
    <Section
      id="work"
      className="pt-15 gap-15"
      sectionHeading="WORK EXPERIENCE"
    >
      <div className="flex flex-col gap-12">
        {JOB_HISTORY.map((job, index) => {
          return (
            <div key={job.company} className="flex flex-col gap-2">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                <div>
                  <h3 className="font-bold text-xl underline decoration-white/20 underline-offset-4 decoration-0 hover:text-electric-blue transition-colors">
                    <Link href={job.link} target="_blank" rel="noreferrer">
                      {job.company}
                    </Link>
                  </h3>
                  <p className="text-electric-blue font-mono font-bold">
                    {job.title}
                  </p>
                </div>
                <div className="flex flex-col text-left text-sm text-gray-500 font-mono sm:text-right">
                  <p>
                    {job.startDate} - {job.endDate}
                  </p>
                  <p>
                    {job.location} . {job.type}
                  </p>
                </div>
              </div>
              <ul className="max-w-5xl">
                {job.details.map((detail, i) => (
                  <li
                    key={i}
                    className="grid grid-cols-[0.5rem_1fr] gap-3 pb-1 text-gray-400"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 inline-block h-2 w-1 bg-electric-blue [clip-path:polygon(0_0,100%_50%,0_100%)]"
                    />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              {index !== JOB_HISTORY.length - 1 && (
                <div className="h-px w-full bg-white/10 mt-5" />
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default WorkExperience;
