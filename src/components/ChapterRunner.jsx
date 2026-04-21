import { useEffect, useState } from "react";
import { useSceneBgm } from "../hooks/useSceneBgm";

const ChapterRunner = ({ scenes, bgm, onComplete, onCollect }) => {
  const [index, setIndex] = useState(0);
  const [visibleBtns, setVisibleBtns] = useState(new Set());
  const [visibleOverlays, setVisibleOverlays] = useState(new Set());
  const [messageIndex, setMessageIndex] = useState(0);
  const [collectedBtns, setCollectedBtns] = useState(new Set());
  const [hoveredBtn, setHoveredBtn] = useState(null);
  useSceneBgm(bgm, index, messageIndex);

  useEffect(() => {
    setVisibleBtns(new Set());
    setVisibleOverlays(new Set());
    setMessageIndex(0);
    setCollectedBtns(new Set());
    setHoveredBtn(null);
    const scene = scenes[index];
    const timers = [];

    scene.btn?.forEach((b, bi) => {
      timers.push(
        setTimeout(() => {
          setVisibleBtns((prev) => new Set(prev).add(bi));
        }, b.delay),
      );
    });

    scene.overlays?.forEach((ov, oi) => {
      timers.push(
        setTimeout(() => {
          setVisibleOverlays((prev) => new Set(prev).add(oi));
        }, ov.delay),
      );
    });

    if (!scene.btn && !scene.messages) {
      timers.push(
        setTimeout(() => {
          if (index < scenes.length - 1) setIndex((i) => i + 1);
          else onComplete?.();
        }, scene.duration),
      );
    }

    return () => timers.forEach(clearTimeout);
  }, [index]);

  useEffect(() => {
    const msg = scenes[index].messages?.[messageIndex];
    if (msg?.sound) new Audio(msg.sound).play().catch(() => {});
  }, [index, messageIndex]);

  useEffect(() => {
    const scene = scenes[index];
    if (!scene.messages) return;
    const current = scene.messages[messageIndex];
    if (!current) return;
    const timer = setTimeout(() => {
      if (messageIndex < scene.messages.length - 1) {
        setMessageIndex((i) => i + 1);
      } else if (index < scenes.length - 1) {
        setIndex((i) => i + 1);
      } else {
        onComplete?.();
      }
    }, current.duration);
    return () => clearTimeout(timer);
  }, [index, messageIndex]);

  const handleBtnClick = (b, bi) => {
    if (b.sound) new Audio(b.sound).play().catch(() => {});
    if (b.collect) {
      onCollect?.(b.collect.questId, b.collect.icon);
      const next = new Set(collectedBtns).add(bi);
      setCollectedBtns(next);
      const collectIndices = scenes[index].btn
        .map((btn, i) => (btn.collect ? i : -1))
        .filter((i) => i >= 0);
      if (collectIndices.every((i) => next.has(i))) {
        if (index < scenes.length - 1) setIndex((idx) => idx + 1);
        else onComplete?.();
      }
      return;
    }
    if (b.nextChapter) return onComplete?.(b.nextChapter);
    if (b.next != null) setIndex(b.next);
    else if (index < scenes.length - 1) setIndex((i) => i + 1);
    else onComplete?.();
  };

  const currentScene = scenes[index];

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black select-none">
      {scenes.map(({ src }, i) => (
        <img
          key={i}
          src={src}
          alt=""
          className={`absolute inset-0 w-full h-full object-contain ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      {currentScene.overlays?.map((ov, oi) => (
        <img
          key={`ov-${index}-${oi}`}
          src={ov.src}
          alt=""
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 pointer-events-none ${
            visibleOverlays.has(oi) ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      {scenes.flatMap((scene, si) =>
        (scene.btn ?? []).map((b, bi) => {
          const hoverGlow = b.collect || b.glow;
          const glow =
            si === index &&
            hoverGlow &&
            hoveredBtn === bi &&
            !collectedBtns.has(bi);
          return (
            <img
              key={`btn-${si}-${bi}`}
              src={b.src}
              alt=""
              className={`absolute inset-0 w-full h-full object-contain pointer-events-none ${
                b.phase || b.phaseOut ? "transition-opacity duration-1000" : ""
              } ${hoverGlow ? "transition-[filter] duration-200 ease-out" : ""} ${
                si === index && visibleBtns.has(bi) && !collectedBtns.has(bi)
                  ? "opacity-100"
                  : "opacity-0"
              }`}
              style={
                glow
                  ? {
                      filter:
                        "drop-shadow(0 0 10px rgba(251,191,36,0.95)) drop-shadow(0 0 22px rgba(217,119,6,0.6)) brightness(1.08)",
                    }
                  : undefined
              }
            />
          );
        }),
      )}
      {currentScene.btn?.map((b, bi) =>
        visibleBtns.has(bi) && !collectedBtns.has(bi) ? (
          <div
            key={`hit-${index}-${bi}`}
            onClick={() => handleBtnClick(b, bi)}
            onMouseEnter={
              b.collect || b.glow ? () => setHoveredBtn(bi) : undefined
            }
            onMouseLeave={
              b.collect || b.glow ? () => setHoveredBtn(null) : undefined
            }
            style={b.hitbox}
            className="absolute cursor-pointer"
          />
        ) : null,
      )}
      {currentScene.messages?.map((msg, i) => (
        <div
          key={`msg-${index}-${i}`}
          className={`absolute bottom-[7%] left-1/2 -translate-x-1/2 w-[80%]  text-center text-white text-[40px] md:text-3xl drop-shadow-lg transition-opacity duration-500 ${
            i === messageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          {msg.text}
        </div>
      ))}
    </div>
  );
};

export default ChapterRunner;
