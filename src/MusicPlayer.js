import React, { useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="text-center p-6">
      <h2 className="text-2xl font-bold mb-4">🎶 Music Player</h2>
      <audio ref={audioRef} src="https://www.w3schools.com/html/horse.mp3"></audio>
      <button
        onClick={togglePlay}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
}
