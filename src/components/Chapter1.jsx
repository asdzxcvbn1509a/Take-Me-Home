import ChapterRunner from "./ChapterRunner";
import { scenes, bgm } from "../data/chapter1";

const Chapter1 = ({ onComplete, onCollect }) => (
  <ChapterRunner
    scenes={scenes}
    bgm={bgm}
    onComplete={onComplete}
    onCollect={onCollect}
  />
);

export default Chapter1;
