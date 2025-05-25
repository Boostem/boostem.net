import { ExperienceSection } from './ExperienceSection';
import { SkillSection } from './SkillSection';

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

const education = [
    {
        id: 1,
        role: "Bachelor's in Computer Science",
        company: "University of Tennessee",
        period: "Aug 2016 - May 2021",
        description: "Graduated with a Bachelor's degree in Computer Science with a Cybersecurity minor"
    }
]

const techSkillGroups = [
  {
    label: 'Experienced',
    skills: techSkills.experienced,
    colorClass: 'bg-primary/90 text-primary-foreground',
  },
  {
    label: 'Comfortable',
    skills: techSkills.comfortable,
    colorClass: 'bg-primary/70 text-primary-foreground',
  },
  {
    label: 'Familiar',
    skills: techSkills.familiar,
    colorClass: 'bg-primary/50 text-primary-foreground',
  },
];

const personalSkillGroups = [
  {
    label: 'Experienced',
    skills: personalSkills.experienced,
    colorClass: 'bg-secondary/90 text-secondary-foreground',
  },
  {
    label: 'Comfortable',
    skills: personalSkills.comfortable,
    colorClass: 'bg-secondary/70 text-secondary-foreground',
  },
  {
    label: 'Familiar',
    skills: personalSkills.familiar,
    colorClass: 'bg-secondary/50 text-secondary-foreground',
  },
];

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
                    <ExperienceSection experiences={education} />

                    <h2 className="text-2xl font-semibold mb-6 mt-12">Experience</h2>
                    <ExperienceSection experiences={experiences} />
                </div>

                <div>
                    <SkillSection title="Technical Skills" groups={techSkillGroups} />
                    <SkillSection title="Personal Skills" groups={personalSkillGroups} />

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
