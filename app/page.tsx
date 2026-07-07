import Intro from "@/components/sections/Intro";
import WorkExperience from "@/components/sections/WorkExperience";
import Featured from "@/components/sections/Featured";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Intro />
      <WorkExperience />
      <Featured />
      <Skills />
      <Contact />
    </div>
  );
}
