import ChapterRunner from "./ChapterRunner";
import { scenes, bgm } from "../data/chapter8";

const Chapter8 = ({ onComplete, onCollect }) => (
  <ChapterRunner
    scenes={scenes}
    bgm={bgm}
    onComplete={onComplete}
    onCollect={onCollect}
  />
);

export default Chapter8;
