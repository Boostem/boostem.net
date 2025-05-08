import { Link } from 'react-router-dom'
import {Button} from "../components/ui/button.tsx";

const About = () => {
    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-8">About Me</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Hi, I'm boostem</h2>
                    <p className="text-lg mb-4">
                        I'm a passionate fullstack software engineer with expertise in modern web technologies.
                        When I'm not coding, I enjoy creating mixes as a hobby DJ.
                    </p>
                    <p className="text-lg mb-6">
                        My technical journey began with writing custom recipes in Notepad++ for modded Minecraft
                        10 years ago in a language called Zenscript and editing LUA files for Garry's Mod sTools.
                    </p>

                    <p className="text-lg mb-6">
                        Today, I focus on building robust web applications that solve real problems
                        while maintaining clean, efficient code. Having much prefer to work on the backend, I also enjoy
                        the challenge of connecting user interfaces to powerful backend systems.
                    </p>

                    <div className="flex gap-4">
                        <Button asChild>
                            <Link to="/resume">My Resume</Link>
                        </Button>
                        <Button asChild variant="outline">
                            <Link to="/contact">Contact Me</Link>
                        </Button>
                    </div>
                </div>

                <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-8">
                    <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <span className="font-medium mr-2">🚀</span>
                            <span>Fullstack Engineer specializing in Java/Spring, Python, and React</span>
                        </li>
                        <li className="flex items-start">
                            <span className="font-medium mr-2">🎧</span>
                            <span>DJ with a passion for UK Garage, Hip Hop, House, Jungle, DnB, and Pop</span>
                        </li>
                        <li className="flex items-start">
                            <span className="font-medium mr-2">🌱</span>
                            <span>Currently learning AWS Cloud Practitioner material and dusting off Leetcode patterns</span>
                        </li>
                        <li className="flex items-start">
                            <span className="font-medium mr-2">🌍</span>
                            <span>Based in Northern Virginia</span>
                        </li>
                        <li className="flex items-start">
                            <span className="font-medium mr-2">💡</span>
                            <span>Passionate about college basketball (Go Vols!), dark ages history, finding new music, class-based FPS's and simulator games</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About
