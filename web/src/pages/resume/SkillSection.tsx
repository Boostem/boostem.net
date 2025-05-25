interface SkillGroup {
    label: string;
    skills: string[];
    colorClass: string;
}

interface SkillSectionProps {
    title: string;
    groups: SkillGroup[];
}

export const SkillSection = ({ title, groups }: SkillSectionProps) => {
    return (
    <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">{title}</h2>
        <div className="space-y-6">
            {groups.map(({ label, skills, colorClass }) => (
                <div key={label}>
                    <h3 className="text-lg font-medium mb-3">{label}</h3>
                    <div className="flex flex-wrap gap-2">
                        {skills.map(skill => (
                            <div
                                key={skill}
                                className={`px-3 py-1.5 ${colorClass} rounded-md text-sm font-medium`}
                            >
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
    )
}
