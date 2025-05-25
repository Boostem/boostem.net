import { Facts } from './Facts.tsx';
import { Intro } from './Intro.tsx';

const About = () => {
    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-8">About Me</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <Intro />
                <Facts />
            </div>
        </div>
    )
}

export default About
