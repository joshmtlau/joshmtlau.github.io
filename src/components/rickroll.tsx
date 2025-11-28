import React, { useState, useRef, useEffect } from "react";

function useYouTubePlayer(
    isActive: boolean,
    videoId: string,
    start: number = 0,
    onReady?: () => void
  ) {
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const playerRef = useRef<YT.Player | null>(null);
  
    // Load the API reliably
    function loadAPI(): Promise<typeof YT> {
      return new Promise((resolve) => {
        if (window.YT && window.YT.Player) {
          resolve(window.YT);
          return;
        }
  
        if (!document.getElementById("youtube-iframe-api")) {
          const tag = document.createElement("script");
          tag.id = "youtube-iframe-api";
          tag.src = "https://www.youtube.com/iframe_api";
          document.body.appendChild(tag);
        }
  
        const timer = setInterval(() => {
          if (window.YT && window.YT.Player) {
            clearInterval(timer);
            resolve(window.YT);
          }
        }, 50);
      });
    }
  
    useEffect(() => {
      if (!isActive) return;
  
      let cancelled = false;
  
      loadAPI().then((YT) => {
        if (cancelled || !iframeRef.current) return;
  
        playerRef.current = new YT.Player(iframeRef.current, {
          events: {
            onReady: () => {
              const p = playerRef.current!;
              if (start > 0) p.seekTo(start, true);
              p.playVideo();
              onReady?.();
            },
          },
        });
      });
  
      return () => {
        cancelled = true;
        if (playerRef.current) {
          playerRef.current.destroy();
          playerRef.current = null;
        }
      };
    }, [isActive, videoId, start]);
  
    return iframeRef;
  }

type RickrollProps = {
  width?: number;
  height?: number;
  videoUrl?: string; // include ?start= here if you want
  title?: string;
};

function Rickroll({
    width = 560,
    height = 315,
    videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title = "Never Gonna Give You Up",
  }: RickrollProps) {
    const [isPlaying, setIsPlaying] = useState(false);
  
    // Parse video ID + start param
    const url = new URL(videoUrl);
    const start = Number(url.searchParams.get("start") ?? 0);
    const videoId = url.pathname.replace("/embed/", "");
  
    // Hook: gives you a ref for the iframe
    const iframeRef = useYouTubePlayer(isPlaying, videoId, start);
  
    if (!isPlaying) {
      return (
        <button
          style={{
            width,
            height,
            border: "none",
            borderRadius: 12,
            backgroundColor: "#111",
            color: "#fff",
            cursor: "pointer",
            fontSize: 18,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => setIsPlaying(true)}
        >
          Click to Play
        </button>
      );
    }
  
    // IMPORTANT: embed has *no* start, *no* autoplay
    const embedUrl = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=${window.location.origin}&autoplay=1`;
  
    return (
      <iframe
        ref={iframeRef}
        width={width}
        height={height}
        title={title}
        src={embedUrl}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

export default Rickroll;