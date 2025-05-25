import { useGetProjectsQuery } from '../../redux/ProjectsAPI'
import { Project } from '../../types'
import { Message } from './Message'
import { ProjectItem } from './ProjectItem'

const Projects = () => {
    const { data: projects = [], isLoading, error } = useGetProjectsQuery({});

    if (isLoading) {
        return (
            <Message message="Loading projects..." />
        );
    }

    if (error) {
        return (
            <Message message="Error loading projects. Please try again later." />
        );
    }

    if (projects.length === 0) {
        return (
            <Message message="No projects found." />
        );
    }

    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-2">My Projects</h1>
            <p className="text-xl text-muted-foreground mb-12">
                A showcase of my recent work and side projects
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects?.map((project: Project) => (
                    <ProjectItem 
                        key={project.id} 
                        id={project.id} 
                        title={project.title} 
                        description={project.description} 
                        image={project.image} 
                        tags={project.tags} 
                        demoUrl={project.demoUrl} 
                        repoUrl={project.repoUrl} 
                    />
                ))}
            </div>
        </div>
    )
}

export default Projects

