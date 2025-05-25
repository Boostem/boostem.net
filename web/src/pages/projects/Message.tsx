type MessageProps = {
    message: string;
};

export const Message = ({ message }: MessageProps) => {

    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-2">My Projects</h1>
            <p className="text-xl text-muted-foreground mb-12">{message}</p>
        </div>
    )
}