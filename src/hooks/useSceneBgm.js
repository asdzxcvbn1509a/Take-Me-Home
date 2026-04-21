import { useEffect, useRef } from "react";

export function useSceneBgm(tracks, sceneIndex, messageIndex = 0) {
  const audiosRef = useRef(new Map());

  useEffect(() => {
    const activeTracks = tracks.filter(
      (t) => sceneIndex >= t.from && sceneIndex <= t.to,
    );
    const activeSrcs = new Set(activeTracks.map((t) => t.src));

    audiosRef.current.forEach((audio, src) => {
      if (!activeSrcs.has(src)) {
        audio.pause();
        audiosRef.current.delete(src);
      }
    });

    activeTracks.forEach((t) => {
      const existing = audiosRef.current.get(t.src);
      if (!existing) {
        const a = new Audio(t.src);
        a.loop = t.loop !== false;
        a.play().catch(() => {});
        audiosRef.current.set(t.src, a);
      } else if (t.onMessage) {
        existing.currentTime = 0;
        existing.play().catch(() => {});
      }
    });
  }, [tracks, sceneIndex, messageIndex]);

  useEffect(() => {
    const tryPlayAll = () => {
      audiosRef.current.forEach((a) => a.play().catch(() => {}));
    };
    const unlock = () => {
      tryPlayAll();
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("keydown", unlock);
    };
    window.addEventListener("pointerdown", unlock);
    window.addEventListener("keydown", unlock);
    return () => {
      audiosRef.current.forEach((a) => a.pause());
      audiosRef.current.clear();
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("keydown", unlock);
    };
  }, []);
}
