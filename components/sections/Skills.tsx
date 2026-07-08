import Section from "@/components/ui/Section";
import { SKILLS_DATA } from "@/utils/constants";

const Skills = () => {
  return (
    <Section id="skills" className="pt-15 gap-15" sectionHeading="SKILLS">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILLS_DATA.map((category) => (
          <div
            key={category.title}
            className="group rounded-xl p-4 bg-contrast border border-transparent hover:border-electric-blue transition-colors min-h-60 sm:min-h-50"
          >
            <h3 className="font-mono font-medium mb-3 text-base text-gray-400 group-hover:text-electric-blue transition-colors">
              {category.title}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className="bg-background px-2 py-1.5 rounded-md text-gray-300 font-bold text-sm"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
