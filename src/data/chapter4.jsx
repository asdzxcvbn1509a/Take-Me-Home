import { Scissors, CassetteTape } from "lucide-react";

import bg1 from "../assets/images/Chapter-4/4-1.0 BG.png";
import bg1Doll from "../assets/images/Chapter-4/4-1.1 Doll booth.png";
import bg1Balloon from "../assets/images/Chapter-4/4-1.2 Balloon booth.png";
import bg2 from "../assets/images/Chapter-4/4-2.0 BG.png";
import bg2Wire from "../assets/images/Chapter-4/4-2.1 Wire cutters.png";
import bg2Cassette from "../assets/images/Chapter-4/4-2.2 Cassette tape.png";
import bg3 from "../assets/images/Chapter-4/4-3.png";
import btn3 from "../assets/images/Chapter-4/4-4 btn.png";
import bg4 from "../assets/images/Chapter-4/4-5.png";
import btn4 from "../assets/images/Chapter-4/4-5 btn.png";

import letterAmb from "../assets/sounds/Letter/AMB_BGLoop.mp3";
import cutterSfx from "../assets/sounds/Booth/SFX_Cutters.mp3";
import recorderSfx from "../assets/sounds/Booth/SFX_Recorder.mp3";

export const scenes = [
  // 0
  {
    src: bg1,
    duration: 0,
    btn: [
      {
        src: bg1Doll,
        delay: 0,
      },
      {
        src: bg1Balloon,
        delay: 0,
        hitbox: { top: "35%", left: "65%", width: "30%", height: "60%" },
      },
    ],
  },

  // 1
  {
    src: bg2,
    duration: 0,
    btn: [
      {
        src: bg2Wire,
        delay: 0,
        hitbox: { top: "90%", left: "45%", width: "17%", height: "8%" },
        collect: { questId: "wireCutter", icon: <Scissors /> },
        sound: cutterSfx,
      },
      {
        src: bg2Cassette,
        delay: 0,
        hitbox: { top: "70%", left: "10%", width: "7%", height: "10%" },
        collect: { questId: "cassette", icon: <CassetteTape /> },
      },
    ],
  },

  // 2
  {
    src: bg3,
    duration: 4000,
  },

  // 3
  {
    src: bg2,
    duration: 0,
    btn: [
      {
        src: bg2Cassette,
        delay: 0,
      },
      {
        src: btn3,
        delay: 500,
        hitbox: { top: "88%", left: "57%", width: "37%", height: "10%" },
      },
    ],
  },

  // 4
  {
    src: bg4,
    duration: 0,
    btn: [
      {
        src: btn4,
        delay: 0,
        hitbox: { top: "90%", left: "79%", width: "14%", height: "8%" },
      },
    ],
  },
];

export const bgm = [
  { src: letterAmb, from: 0, to: 4 },
  { src: recorderSfx, from: 2, to: 2 },
];
