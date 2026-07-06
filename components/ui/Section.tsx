interface SectionProps {
  children: React.ReactNode;
  className?: string;
  sectionHeading?: string;
}

const Section = ({ children, className, sectionHeading }: SectionProps) => {
  return (
    <section
      className={`flex flex-col justify-center border-b-2 border-white/10 px-8 pb-10 ${className}`}
    >
      {sectionHeading && (
        <div className="flex items-center gap-4">
          <h2 className="font-mono text-electric-blue font-bold text-sm">
            {sectionHeading}
          </h2>
          <div className="h-px flex-1 bg-white/10 " />
        </div>
      )}
      {children}
    </section>
  );
};

export default Section;
