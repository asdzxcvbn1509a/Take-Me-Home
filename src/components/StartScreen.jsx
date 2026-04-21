import { useEffect, useRef, useState } from "react";
import frontCover from "../assets/images/Chapter-0/Front cover.png";
import takeMe from "../assets/images/Chapter-0/take me.png";
import home from "../assets/images/Chapter-0/home.png";
import bgMusic from "../assets/sounds/IntroLoop.mp3";

const StartScreen = ({ onStart }) => {
  const [phase, setPhase] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 1000),
      setTimeout(() => setPhase(2), 2000),
      setTimeout(() => setPhase(3), 3000),
    ];

    const tryPlay = () => {
      audioRef.current?.play().catch((err) => {
        console.warn("audio play blocked:", err);
      });
    };
    tryPlay();

    const unlock = () => {
      tryPlay();
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("keydown", unlock);
    };
    window.addEventListener("pointerdown", unlock);
    window.addEventListener("keydown", unlock);

    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("keydown", unlock);
    };
  }, []);

  const handleClick = () => {
    if (phase >= 3) onStart?.();
  };

  return (
    <div
      onClick={handleClick}
      className="relative w-screen h-screen overflow-hidden cursor-pointer bg-black select-none"
    >
      <audio ref={audioRef} src={bgMusic} loop preload="auto" />
      <img
        src={frontCover}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <img
        src={home}
        alt=""
        className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${
          phase >= 2 ? "opacity-100" : "opacity-0"
        }`}
      />
      <img
        src={takeMe}
        alt=""
        className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${
          phase >= 1 ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        className={`absolute bottom-[15%] w-full text-center text-white text-2xl tracking-widest transition-opacity duration-1000 animate-pulse ${
          phase >= 3 ? "opacity-100" : "opacity-0"
        }`}
      >
        tap to start
      </div>
    </div>
  );
};

export default StartScreen;
