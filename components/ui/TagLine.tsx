import { TAG_LINE } from "@/utils/constants";

const TagLine = () => {
  return (
    <div className="inline-flex w-fit items-center gap-3 rounded-lg border border-emerald-400/20 bg-emerald-500/10 px-5 py-2 font-mono text-xs font-bold text-emerald-400">
      <span className="relative flex size-2" aria-hidden="true">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
      </span>

      <p>{TAG_LINE}</p>
    </div>
  );
};

export default TagLine;
