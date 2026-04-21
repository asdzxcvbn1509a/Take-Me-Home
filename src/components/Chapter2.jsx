import ChapterRunner from "./ChapterRunner";
import { scenes, bgm } from "../data/chapter2";

const Chapter2 = ({ onComplete, onCollect }) => (
  <ChapterRunner
    scenes={scenes}
    bgm={bgm}
    onComplete={onComplete}
    onCollect={onCollect}
  />
);

export default Chapter2;
