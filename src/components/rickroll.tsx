import React, { useState } from 'react';


type RickrollProps = {
    width?: number;
    height?: number;
    videoUrl?: string;
    title?: string;
    
};

function Rickroll({
    width = 560,
    height = 315,
    videoUrl = 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    title = 'Never gonna give you up',
}: RickrollProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const autoplayUrl = `${videoUrl}${videoUrl.includes('?') ? '&' : '?'}autoplay=1`;

    if (isPlaying) {
        return (
            <iframe
                title={title}
                width={width}
                height={height}
                src={autoplayUrl}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        );
    }

    const handlePlay = () => setIsPlaying(true);

    return (
        <button
            type="button"
            style={{
                width,
                height,
                border: 'none',
                borderRadius: 12,
                backgroundColor: '#111',
                color: '#fff',
                cursor: 'pointer',
                fontSize: 18,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
            }}
            onClick={handlePlay}
        >
            <span>Click to Play</span>
        </button>
    );
}

export default Rickroll;