import ChapterRunner from "./ChapterRunner";
import { scenes, bgm } from "../data/chapter6";

const Chapter6 = ({ onComplete, onCollect }) => (
  <ChapterRunner
    scenes={scenes}
    bgm={bgm}
    onComplete={onComplete}
    onCollect={onCollect}
  />
);

export default Chapter6;
