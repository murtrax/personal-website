import Section from "@/components/ui/Section";
import FeatureCard from "@/components/ui/FeatureCard";
import { FEATURED_PROJECTS } from "@/utils/constants";
const Featured = () => {
  return (
    <Section
      id="featured"
      className="pt-15 gap-15 bg-background"
      sectionHeading="FEATURED PROJECTS"
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        {" "}
        {FEATURED_PROJECTS.map((project) => (
          <FeatureCard key={project.title} {...project} />
        ))}
      </div>
    </Section>
  );
};

export default Featured;
