import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import {Button} from "../components/ui/button.tsx";

// Example upcoming events - you can replace with your actual events
const events = [
    {
        id: 1,
        title: "Club Night",
        venue: "The Sound Bar",
        date: "June 15, 2024",
        time: "10:00 PM - 2:00 AM",
        description: "House and techno night featuring guest appearances",
        link: "#"
    },
    {
        id: 2,
        title: "Summer Festival",
        venue: "City Park",
        date: "July 20, 2024",
        time: "3:00 PM - 11:00 PM",
        description: "Outdoor electronic music festival with multiple stages",
        link: "#"
    },
    {
        id: 3,
        title: "Private Event",
        venue: "Gallery Space",
        date: "August 5, 2024",
        time: "8:00 PM - 12:00 AM",
        description: "Art exhibition opening night with ambient selections",
        link: "#"
    }
]

// Example music mixes - replace with your actual mixes
const mixes = [
    {
        id: 1,
        title: "Summer Vibes 2024",
        genre: "House",
        duration: "58:24",
        image: "https://placehold.co/400x400",
        link: "https://soundcloud.com/yourusername/summer-vibes-2024"
    },
    {
        id: 2,
        title: "Late Night Sessions Vol. 3",
        genre: "Techno",
        duration: "1:25:16",
        image: "https://placehold.co/400x400",
        link: "https://soundcloud.com/yourusername/late-night-sessions-vol-3"
    },
    {
        id: 3,
        title: "Chill Ambient Mix",
        genre: "Ambient / Downtempo",
        duration: "1:12:45",
        image: "https://placehold.co/400x400",
        link: "https://soundcloud.com/yourusername/chill-ambient-mix"
    }
]

const DJPage = () => {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="mb-16">
                <h1 className="text-4xl font-bold mb-4">DJ Services</h1>
                <p className="text-xl max-w-3xl">
                    Providing professional DJ services for clubs, festivals, private events, and more.
                    Specializing in house, techno, and electronic music with over 5 years of experience.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                    <Button asChild size="lg">
                        <a href="#contact">Book Now</a>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                        <a href="#mixes">Listen to Mixes</a>
                    </Button>
                </div>
            </div>

            <div className="mb-16" id="events">
                <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {events.map(event => (
                        <Card key={event.id}>
                            <CardHeader>
                                <CardTitle>{event.title}</CardTitle>
                                <CardDescription>{event.venue}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="mb-4">
                                    <p className="font-medium">{event.date}</p>
                                    <p className="text-sm text-muted-foreground">{event.time}</p>
                                </div>
                                <p>{event.description}</p>
                            </CardContent>
                            <CardFooter>
                                <Button asChild variant="outline">
                                    <a href={event.link}>Event Details</a>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>

            <div className="mb-16" id="mixes">
                <h2 className="text-3xl font-bold mb-8">Featured Mixes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {mixes.map(mix => (
                        <Card key={mix.id} className="overflow-hidden flex flex-col">
                            <img
                                src={mix.image}
                                alt={mix.title}
                                className="w-full h-52 object-cover"
                            />
                            <CardHeader>
                                <CardTitle>{mix.title}</CardTitle>
                                <CardDescription>{mix.genre} • {mix.duration}</CardDescription>
                            </CardHeader>
                            <CardFooter className="mt-auto">
                                <Button asChild>
                                    <a href={mix.link} target="_blank" rel="noopener noreferrer">
                                        Listen Now
                                    </a>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>

            <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8">Equipment & Setup</h2>
                <div className="bg-card rounded-lg p-8 shadow">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-4">DJ Gear</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Pioneer CDJ-3000 x2</li>
                                <li>Pioneer DJM-900NXS2 Mixer</li>
                                <li>Allen & Heath Xone:96 Mixer</li>
                                <li>Technics SL-1200 Turntables</li>
                                <li>Pioneer DDJ-1000 Controller</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Sound & Lighting</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>QSC K12.2 Active Speakers</li>
                                <li>QSC KS118 Subwoofer</li>
                                <li>Chauvet DJ Lighting System</li>
                                <li>DMX Controller</li>
                                <li>Haze Machine</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div id="contact">
                <h2 className="text-3xl font-bold mb-8">Book for Your Event</h2>
                <p className="text-lg mb-6 max-w-2xl">
                    Interested in booking me for your event? Get in touch with details about your venue,
                    date, and type of event for a personalized quote.
                </p>
                <Button asChild size="lg">
                    <a href="/contact">Contact Me</a>
                </Button>
            </div>
        </div>
    )
}

export default DJPage
