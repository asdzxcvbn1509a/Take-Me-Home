import ChapterRunner from "./ChapterRunner";
import { scenes, bgm } from "../data/chapter4";

const Chapter4 = ({ onComplete, onCollect }) => (
  <ChapterRunner
    scenes={scenes}
    bgm={bgm}
    onComplete={onComplete}
    onCollect={onCollect}
  />
);

export default Chapter4;
