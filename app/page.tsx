import Intro from "@/components/sections/Intro";
import WorkExperience from "@/components/sections/WorkExperience";
import Featured from "@/components/sections/Featured";
export default function Home() {
  return (
    <div className="flex flex-col">
      <Intro />
      <WorkExperience />
      <Featured />
    </div>
  );
}
