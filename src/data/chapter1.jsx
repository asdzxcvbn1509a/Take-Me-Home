import bg1 from "../assets/images/Chapter-1/1-1.png";
import bg2 from "../assets/images/Chapter-1/1-2.png";
import btn2 from "../assets/images/Chapter-1/1-2 btn.png";
import bg3 from "../assets/images/Chapter-1/1-3.png";
import btn3 from "../assets/images/Chapter-1/1-3 btn.png";
import bg4 from "../assets/images/Chapter-1/1-4.png";
import bg5 from "../assets/images/Chapter-1/1-5.png";
import bg6 from "../assets/images/Chapter-1/1-6.png";
import bg7 from "../assets/images/Chapter-1/1-7.png";
import bg8 from "../assets/images/Chapter-1/1-8.png";

import parkAmb from "../assets/sounds/Park/Pk_AMB_Park.mp3";
import parkBg01 from "../assets/sounds/Park/Pk_AMB_BG01.mp3";
import parkBg02 from "../assets/sounds/Park/Pk_AMB_BG02.mp3";
import coasterBg01 from "../assets/sounds/Coaster/Ct_AMB_BG01.mp3";
import coasterBg02 from "../assets/sounds/Coaster/Ct_AMB_BG02.mp3";
import coasterBg03 from "../assets/sounds/Coaster/Ct_AMB_BG03.mp3";

export const scenes = [
  // 0
  { src: bg1, duration: 2000 },

  // 1
  {
    src: bg2,
    duration: 0,
    btn: [
      {
        src: btn2,
        delay: 1500,
        hitbox: { top: "90%", left: "69%", width: "25%", height: "8%" },
      },
    ],
  },

  // 2
  {
    src: bg3,
    duration: 0,
    btn: [
      {
        src: btn3,
        delay: 1500,
        hitbox: { top: "90%", left: "76%", width: "18%", height: "8%" },
      },
    ],
  },

  // 3
  { src: bg4, duration: 9000 },

  // 4
  { src: bg5, duration: 9000 },

  // 5
  { src: bg6, duration: 10000 },

  // 6
  { src: bg7, duration: 9000 },

  // 7
  { src: bg8, duration: 2000 },
];

export const bgm = [
  { src: parkAmb, from: 1, to: 2 },
  { src: parkBg01, from: 1, to: 1 },
  { src: parkBg02, from: 2, to: 2 },
  { src: coasterBg01, from: 3, to: 3 },
  { src: coasterBg02, from: 4, to: 4 },
  { src: coasterBg03, from: 5, to: 6 },
];
