const techSkills = {
    experienced: ["Java", "Spring Boot", "Python", "Docker", "React", "Redux", "CI/CD", "SQL"],
    comfortable: ["Redux Toolkit", "JavaScript/Typescript", "AWS EC2", "Ubuntu Server", "VM Management", "Ansible"],
    familiar: ["Tailwind", "AWS", "Unity", "C#", "Virtual Reality (VR)", "GIS software", "Web Crawling", "Quality Assurance", "Identity & Access Management"]
}

const personalSkills = {
    experienced: ["Communication", "Leadership", "Interpersonal Relationships", "Mediation"],
    comfortable: ["Project Planning", "Budgeting", "Conflict Resolution"],
    familiar: ["Public Speaking", "Team Building", "Event Planning", "Crisis Management"]
}

const experiences = [
    {
        id: 1,
        role: "Software Developer",
        company: "Steely",
        period: "June 2021 - Present",
        description: "As a full-stack software developer, I create and deploy SaaS applications using React, Redux, and Java technologies. I also implement CI/CD tools to ensure seamless integration and delivery of projects. I provide technical support including product deployment. Additionally, I work diligently on recruiting efforts. Having gone to 2 college fairs, professionally conducting over 50 phone screens and interviews, and overseeing our Intern program for the past 3 years."
    },
    {
        id: 2,
        role: "Virtual Reality Developer",
        company: "Maxar Technologies",
        period: "Sep 2020 - Feb 2021",
        description: "Worked as a part-time Virtual Reality Developer focusing on Unity and VR technologies."
    },
    {
        id: 3,
        role: "Virtual Reality Development Intern",
        company: "Maxar Technologies",
        period: "May 2020 - Aug 2020",
        description: "Performed quality assurance testing for product features in Unity Editor. Developed C# functions for teleporting users to datasets and highlighting relevant areas. Worked with GIS software and file formats (.geojson, .kml, .json). Contributed to VR solutions for SteamVR and headsets such as HTC Vive and Valve Index."
    },
    {
        id: 4,
        role: "Junior Identity Management Analyst",
        company: "Halo Privacy",
        period: "Apr 2019 - Dec 2020",
        description: "Received training in Publicly Available Information research and Signature Reduction. Conducted research on high net worth clients utilizing social media identification and analysis. Analyzed corporate entities and their beneficial owners. Implemented and maintained SR and obfuscation measures including removal of PII from the internet. Used Maltego software to build profiles and find connections between Points of Interest."
    },
    {
        id: 5,
        role: "DevOps Intern",
        company: "Ncyber",
        period: "May 2019 - Aug 2019",
        description: "Built and configured a Dell server running ESXI, managing multiple virtual machines. Developed web crawling and data gathering scripts using Python. Deployed scripts on Ubuntu Server and created services for operation. Configured Amazon AWS EC2 machines and stored web data in SQL databases. Collaborated with another intern to deploy products en masse with Ansible."
    },
    {
        id: 6,
        role: "Resident Assistant",
        company: "University of Tennessee",
        period: "Aug 2017 - Jan 2019",
        description: "Managed a semester budget to plan and create two programs every month for residents on my floor and building-wide. Performed weekly desk duty and on-call responsibilities, providing support to a 700-person building. Facilitated community growth, mediated personal conflicts, and fostered positive college transitions through direct personal relationships. Applied skills in communication, budgeting, interpersonal communication, project planning, mediation, and leadership."
    }
]

const Resume = () => {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="flex justify-between items-center mb-12">
                <h1 className="text-4xl font-bold">Resume & Skills</h1>
                {/*<Button asChild>*/}
                {/*    <a href="/path-to-resume.pdf" download>Download Resume</a>*/}
                {/*</Button>*/}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                    <h2 className="text-2xl font-semibold mb-6 mt-12">Education</h2>
                    <div className="border-l-4 pl-6 pb-2 mb-3 relative">
                        <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px]"></div>
                        <h3 className="text-xl font-medium">Bachelor's in Computer Science</h3>
                        <p className="text-lg text-muted-foreground">University of Tennessee</p>
                        <p className="text-sm text-muted-foreground mb-2">2016 - 2021</p>
                        <p className="mt-2">Graduated with a Bachelor's degree in Computer Science with a Cybersecurity minor </p>
                    </div>
                    <h2 className="text-2xl font-semibold mb-6">Experience</h2>
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
                </div>

                <div>
                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold mb-6">Technical Skills</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-medium mb-3">Experienced</h3>
                                <div className="flex flex-wrap gap-2">
                                    {techSkills.experienced.map(skill => (
                                        <div
                                            key={skill}
                                            className="px-3 py-1.5 bg-primary/90 text-primary-foreground rounded-md text-sm font-medium"
                                        >
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium mb-3">Comfortable</h3>
                                <div className="flex flex-wrap gap-2">
                                    {techSkills.comfortable.map(skill => (
                                        <div
                                            key={skill}
                                            className="px-3 py-1.5 bg-primary/70 text-primary-foreground rounded-md text-sm font-medium"
                                        >
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium mb-3">Familiar</h3>
                                <div className="flex flex-wrap gap-2">
                                    {techSkills.familiar.map(skill => (
                                        <div
                                            key={skill}
                                            className="px-3 py-1.5 bg-primary/50 text-primary-foreground rounded-md text-sm font-medium"
                                        >
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold mb-6">Personal Skills</h2>
                        <div className="space-y-6">
                            <div>
                                <div className="flex flex-wrap gap-2">
                                    {personalSkills.experienced.map(skill => (
                                        <div
                                            key={skill}
                                            className="px-3 py-1.5 bg-secondary/90 text-secondary-foreground rounded-md text-sm font-medium"
                                        >
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <div className="flex flex-wrap gap-2">
                                    {personalSkills.comfortable.map(skill => (
                                        <div
                                            key={skill}
                                            className="px-3 py-1.5 bg-secondary/70 text-secondary-foreground rounded-md text-sm font-medium"
                                        >
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <div className="flex flex-wrap gap-2">
                                    {personalSkills.familiar.map(skill => (
                                        <div
                                            key={skill}
                                            className="px-3 py-1.5 bg-secondary/50 text-secondary-foreground rounded-md text-sm font-medium"
                                        >
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-2xl font-semibold mb-6">Languages</h2>
                    <ul className="space-y-2">
                        <li>English (Native)</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mb-6 mt-12">Certifications</h2>
                    <ul className="space-y-2">
                        <li>AWS Cloud Practitioner (In Progress)</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Resume
