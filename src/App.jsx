import { useState } from "react";
import StartScreen from "./components/StartScreen";
import Chapter1 from "./components/Chapter1";
import Chapter2 from "./components/Chapter2";
import Chapter3 from "./components/Chapter3";
import Inventory from "./components/Inventory";
import Chapter4 from "./components/Chapter4";
import Chapter5 from "./components/Chapter5";
import Chapter6 from "./components/Chapter6";
import Chapter7 from "./components/Chapter7";
import Chapter8 from "./components/Chapter8";

const quests = [
  { id: "key", label: "เควส1" },
  { id: "letter", label: "เควส2" },
  { id: "wireCutter", label: "เควส3" },
  { id: "cassette", label: "เควส4" },
];

const App = () => {
  const [stage, setStage] = useState("chapter5");
  const [inventory, setInventory] = useState([]);
  const [completedQuests, setCompletedQuests] = useState(new Set());

  const handleCollect = (questId, icon) => {
    setInventory((prev) =>
      prev.some((it) => it.questId === questId)
        ? prev
        : [...prev, { questId, icon }],
    );
    setCompletedQuests((prev) => new Set(prev).add(questId));
  };

  const handleGameEnd = () => {
    setInventory([]);
    setCompletedQuests(new Set());
    setStage("start");
  };

  return (
    <>
      {stage === "start" && (
        <StartScreen onStart={() => setStage("chapter1")} />
      )}
      {stage === "chapter1" && (
        <Chapter1
          onComplete={() => setStage("chapter2")}
          onCollect={handleCollect}
        />
      )}
      {stage === "chapter2" && (
        <Chapter2
          onComplete={() => setStage("chapter3")}
          onCollect={handleCollect}
        />
      )}
      {stage === "chapter3" && (
        <Chapter3
          onComplete={() => setStage("chapter4")}
          onCollect={handleCollect}
        />
      )}
      {stage === "chapter4" && (
        <Chapter4
          onComplete={() => setStage("chapter5")}
          onCollect={handleCollect}
        />
      )}
      {stage === "chapter5" && (
        <Chapter5
          onComplete={(next) => setStage(next ?? "end")}
          onCollect={handleCollect}
        />
      )}
      {stage === "chapter6" && (
        <Chapter6 onComplete={handleGameEnd} onCollect={handleCollect} />
      )}
      {stage === "chapter7" && (
        <Chapter7 onComplete={handleGameEnd} onCollect={handleCollect} />
      )}
      {stage === "chapter8" && (
        <Chapter8 onComplete={handleGameEnd} onCollect={handleCollect} />
      )}
      {stage !== "start" && (
        <Inventory
          items={inventory}
          quests={quests}
          completedQuests={completedQuests}
        />
      )}
    </>
  );
};

export default App;
