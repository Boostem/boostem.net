interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}

interface ExperienceSectionProps {
  experiences: Experience[];
}

export const ExperienceSection = ({ experiences }: ExperienceSectionProps) => {
    return (
        <div className="space-y-8">
        {experiences.map(exp => (
            <div key={exp.id} className="border-l-4 pl-6 pb-2 relative">
            <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px]"></div>
            <h3 className="text-xl font-medium">{exp.role}</h3>
            <p className="text-lg text-muted-foreground">{exp.company}</p>
            <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
            <p className="mt-2">{exp.description}</p>
            </div>
        ))} 
        </div>
    )
};
