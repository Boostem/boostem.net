import { Button } from '../components/ui/button'
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className="container mx-auto px-4">
            <section className="py-20 md:py-32 flex flex-col items-center justify-center text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
                    Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r dark:from-blue-500 dark:via-purple-500 dark:to-green-500 from-orange-500 via-yellow-500 to-red-500">boostem</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-[700px]">
                    Fullstack Software Engineer & Hobby DJ
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg">
                        <Link to="/projects">View my work</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                        <Link to="/contact">Get in touch</Link>
                    </Button>
                </div>
            </section>

            <section className="py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                    <h2 className="text-2xl font-bold mb-4">Software Development</h2>
                    <p className="text-muted-foreground mb-4">
                        Building web applications with modern technologies like React, TypeScript, and more.
                    </p>
                    <Button asChild variant="link" className="p-0">
                        <Link to="/projects">See my projects →</Link>
                    </Button>
                </div>

                <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                    <h2 className="text-2xl font-bold mb-4">Technical Skills & Resume</h2>
                    <p className="text-muted-foreground mb-4">
                        Proficient in various frontend and backend technologies and frameworks.
                    </p>
                    <Button asChild variant="link" className="p-0">
                        <Link to="/resume">View my skills →</Link>
                    </Button>
                </div>

                <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                    <h2 className="text-2xl font-bold mb-4">DJ Performances</h2>
                    <p className="text-muted-foreground mb-4">
                        I also dabble in music production and do live performances as a hobby DJ.
                    </p>
                        <Button asChild variant="link" className="p-0">
                            <Link to="https://soundcloud.com/boostem/tracks" target="_blank" rel="noopener noreferrer">Check my mixes and songs →</Link>
                        </Button>
                </div>
            </section>
        </div>
    )
}

export default Home
