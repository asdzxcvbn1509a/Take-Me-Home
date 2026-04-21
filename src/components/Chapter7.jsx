import ChapterRunner from "./ChapterRunner";
import { scenes, bgm } from "../data/chapter7";

const Chapter7 = ({ onComplete, onCollect }) => (
  <ChapterRunner
    scenes={scenes}
    bgm={bgm}
    onComplete={onComplete}
    onCollect={onCollect}
  />
);

export default Chapter7;
