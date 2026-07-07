import Image from "next/image";
import Link from "next/link";

export interface FeatureCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  link: string;
  skills: string[];
}

const FeatureCard = ({
  title,
  description,
  imageUrl,
  link,
  skills,
}: FeatureCardProps) => {
  return (
    <article className="flex min-h-[22rem] flex-col rounded-2xl border border-transparent bg-contrast p-8 transition-colors hover:border-electric-blue/50">
      <div className="h-7">
        <Link
          href={link}
          target="_blank"
          rel="noreferrer"
          className="relative block h-full"
        >
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={`${title} logo`}
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-contain object-left"
            />
          ) : (
            <div className="h-full font-bold text-[1.35rem]">{title}</div>
          )}
        </Link>
      </div>
      <p className="mt-6 text-base leading-7 text-gray-500">{description}</p>

      <div className="mt-auto flex flex-wrap gap-2 pt-8">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-md border border-electric-blue/70 bg-electric-blue/10 px-2 py-1 font-mono text-xs text-electric-blue"
          >
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
};

export default FeatureCard;
