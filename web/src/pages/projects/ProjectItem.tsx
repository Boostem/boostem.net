import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card'
import { Button } from '../../components/ui/button'
import { Tag } from '../../types';

type ProjectItemProps = {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: Tag[];
    demoUrl: string;
    repoUrl: string;
};

export const ProjectItem = ({ id, title, description, image, tags, demoUrl, repoUrl }: ProjectItemProps ) => {


    return (
        <Card key={id} className="overflow-hidden flex flex-col">
            <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover"
            />
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mt-2">
                    {tags.map(tag => (
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
                    <a href={demoUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
                </Button>
                <Button asChild size="sm">
                    <a href={repoUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
                </Button>
            </CardFooter>
        </Card>
    )
}