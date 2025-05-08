import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { useGetProjectsQuery } from '../redux/ProjectsAPI'
import { Project } from '../types'

const Projects = () => {
    const { data: projects = [], isLoading, error } = useGetProjectsQuery({});

    if (isLoading) {
        return (
            <div className="container mx-auto px-4 py-16">
                <h1 className="text-4xl font-bold mb-2">My Projects</h1>
                <p className="text-xl text-muted-foreground mb-12">Loading projects...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container mx-auto px-4 py-16">
                <h1 className="text-4xl font-bold mb-2">My Projects</h1>
                <p className="text-xl text-muted-foreground mb-12">
                    Error loading projects. Please try again later.
                </p>
            </div>
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
                    <Card key={project.id} className="overflow-hidden flex flex-col">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover"
                        />
                        <CardHeader>
                            <CardTitle>{project.title}</CardTitle>
                            <CardDescription>{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <div className="flex flex-wrap gap-2 mt-2">
                                {project.tags.map(tag => (
                                    <span
                                        key={tag.id}
                                        className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-xs rounded-md"
                                    >
                                        {tag.name}
                                    </span>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter className="flex gap-4">
                            <Button asChild variant="outline" size="sm">
                                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
                            </Button>
                            <Button asChild size="sm">
                                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default Projects

