interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

const Section = ({ children, className }: SectionProps) => {
  return (
    <section
      className={`flex flex-col justify-center border-b-2 border-white/10 px-8 pb-10 ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
