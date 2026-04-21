import { Mail, Key } from "lucide-react";

import bg1 from "../assets/images/Chapter-3/3-1.0 BG.png";
import bg1Doll from "../assets/images/Chapter-3/3-1.1 Doll booth.png";
import bg1Balloon from "../assets/images/Chapter-3/3-1.2 Balloon booth.png";
import bg2 from "../assets/images/Chapter-3/3-2.0 BG.png";
import bg2Letter from "../assets/images/Chapter-3/3-2.1 letter(help me).png";
import bg2Key from "../assets/images/Chapter-3/3-2.2 key.png";
import bg3 from "../assets/images/Chapter-3/3-3.0 BG.png";
import bg3LetterPopUp from "../assets/images/Chapter-3/3-3.1 letter(pop-up).png";
import bg3Close from "../assets/images/Chapter-3/3-3.2 Cross.png";
import btn4 from "../assets/images/Chapter-3/3-4 btn.png";

import letterAmb from "../assets/sounds/Letter/AMB_BGLoop.mp3";
import noteSfx from "../assets/sounds/Booth/SFX_Note.mp3";
import keySfx from "../assets/sounds/Booth/SFX_Key.mp3";

export const scenes = [
  // 0
  {
    src: bg1,
    duration: 0,
    btn: [
      {
        src: bg1Doll,
        delay: 0,
        hitbox: { top: "30%", left: "10%", width: "29%", height: "60%" },
      },
      {
        src: bg1Balloon,
        delay: 0,
      },
    ],
  },

  // 1
  {
    src: bg2,
    duration: 0,
    btn: [
      {
        src: bg2Letter,
        delay: 0,
        hitbox: { top: "33%", left: "81%", width: "4%", height: "8%" },
        collect: { questId: "letter", icon: <Mail /> },
      },
      {
        src: bg2Key,
        delay: 0,
        hitbox: { top: "90%", left: "54%", width: "7%", height: "7%" },
        collect: { questId: "key", icon: <Key /> },
        sound: keySfx,
      },
    ],
  },

  // 2
  {
    src: bg3,
    duration: 0,
    btn: [
      {
        src: bg3LetterPopUp,
        delay: 0,
      },
      {
        src: bg3Close,
        delay: 0,
        hitbox: { top: "30%", left: "62%", width: "2%", height: "4%" },
      },
    ],
  },

  // 3
  {
    src: bg2,
    duration: 0,
  },

  // 4
  {
    src: bg2,
    duration: 0,
    btn: [
      {
        src: bg2Letter,
        delay: 0,
      },
      {
        src: btn4,
        delay: 500,
        hitbox: { top: "90%", left: "69%", width: "26%", height: "8%" },
      },
    ],
  },
];

export const bgm = [
  { src: letterAmb, from: 0, to: 4 },
  { src: noteSfx, from: 2, to: 2, loop: false },
];
