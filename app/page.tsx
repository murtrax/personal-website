import Intro from "@/components/sections/Intro";
import WorkExperience from "@/components/sections/WorkExperience";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Intro />
      <WorkExperience />
    </div>
  );
}
