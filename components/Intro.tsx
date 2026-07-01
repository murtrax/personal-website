import ActionLinks from "@/components/ActionLinks";
import { TITLE, DEV_NAME, DESCRIPTION, INTRO_LINKS } from "@/utils/constants";

const Intro = () => {
  return (
    <section className="flex flex-col justify-center px-8 pt-25 border-b-2 border-white/10 gap-10">
      <p className="font-mono text-electric-blue font-bold text-sm tracking-wide [word-spacing:0.25rem]">
        {TITLE}
      </p>
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-5xl">{DEV_NAME}</h1>
        <p className="font-mono text-gray-400 text-xl font-bold">
          AI Systems . <span className="text-electric-blue">DeFi</span> . Full
          Stack
        </p>
      </div>
      <div className="flex max-w-[680px]">
        <p className=" text-gray-400 text-xl">{DESCRIPTION}</p>
      </div>
      <ActionLinks links={INTRO_LINKS} />
    </section>
  );
};

export default Intro;
