import Link from "next/link";
import Section from "@/components/ui/Section";
import { CONTACT_INFO } from "@/utils/constants";

const Contact = () => {
  return (
    <Section className="pt-15 gap-10" sectionHeading="CONTACT">
      <ul className="flex flex-wrap gap-4">
        {CONTACT_INFO.map((info) => {
          const Icon = info.icon;

          return (
            <li key={info.title}>
              <Link
                href={info.link}
                target={info.external ? "_blank" : undefined}
                rel={info.external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2 rounded-md px-2 py-1.5 bg-contrast border border-transparent hover:border-electric-blue transition-colors text-gray-400 hover:text-electric-blue"
              >
                <Icon className="w-4 h-4" />
                <span className="text-base font-extrabold">{info.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export default Contact;
