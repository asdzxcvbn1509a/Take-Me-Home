import ChapterRunner from "./ChapterRunner";
import { scenes, bgm } from "../data/chapter5";

const Chapter5 = ({ onComplete, onCollect }) => (
  <ChapterRunner
    scenes={scenes}
    bgm={bgm}
    onComplete={onComplete}
    onCollect={onCollect}
  />
);

export default Chapter5;
