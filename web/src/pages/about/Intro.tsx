import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";

export const Intro = () => {
    return (
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
    )
}