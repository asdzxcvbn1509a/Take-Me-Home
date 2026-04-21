import bg1 from "../assets/images/Chapter-6/6-1.png";
import bg2 from "../assets/images/Chapter-6/6-2.0 BG.png";
import bg2Girl from "../assets/images/Chapter-6/6-2.1 Girl.png";
import bg3 from "../assets/images/Chapter-6/6-3.png";
import btn3 from "../assets/images/Chapter-6/6-3 btn.png";
import bg4 from "../assets/images/Chapter-6/6-4.png";
import btn5 from "../assets/images/Chapter-6/6-5 btn.png";
import bg6 from "../assets/images/Chapter-6/6-6.png";
import bg7 from "../assets/images/Chapter-6/6-7.png";
import bg8 from "../assets/images/Chapter-6/6-8.png";
import bg9 from "../assets/images/Chapter-6/6-9.png";
import bg10 from "../assets/images/Chapter-6/6-10.png";
import btn10 from "../assets/images/Chapter-6/6-10 btn.png";
import bg11 from "../assets/images/Chapter-6/6-11.png";
import bg12 from "../assets/images/Chapter-6/6-12.png";
import bg13 from "../assets/images/Chapter-6/6-13.png";
import btn13 from "../assets/images/Chapter-6/6-13 btn.png";
import bg14 from "../assets/images/Chapter-6/6-14.png";
import bg15 from "../assets/images/Chapter-6/6-15.png";
import bg16 from "../assets/images/Chapter-6/6-16.png";
import btn16 from "../assets/images/Chapter-6/6-16 btn.png";
import bg17 from "../assets/images/Chapter-6/6-17.png";

import girlAmb from "../assets/sounds/Girl/Girl Q1/AMB/Q1_S01_AMB_BG01.mp3";
import girlVo1 from "../assets/sounds/Girl/Girl Q1/VO/Q1_S01_VO_Girl_01.mp3";
import girlVo2 from "../assets/sounds/Girl/Girl Q1/VO/Q1_S01_VO_Girl_02.mp3";

import keySfx from "../assets/sounds/Girl/Girl Q1/Q2_S01_SFX_Key.mp3";
import tvGlitchAmb from "../assets/sounds/Girl/Girl Q1/AMB/Q1_S02_AMB_TvGlitch.mp3";
import girlVo4 from "../assets/sounds/Girl/Girl Q1/VO/Q1_S02_VO_Girl_01.mp3";

import useKeyAmb from "../assets/sounds/Girl/Girl Q2/Q2_S01_AMB_UseTheK.mp3";
import girlVo3 from "../assets/sounds/Girl/Girl Q2/Q2_S01_VO_Girl_01.mp3";
import tpAmb from "../assets/sounds/Girl/Girl Q3/Q3_S01_AMB_TP.mp3";

import finaleAmb from "../assets/sounds/Girl/Girl Q4/Q4_S01_AMB_BG1.mp3";
import girlVo5 from "../assets/sounds/Girl/Girl Q4/Q4_S02_VO_Girl_01.mp3";

export const scenes = [
  // 0
  {
    src: bg1,
    duration: 800,
  },

  // 1
  {
    src: bg2,
    duration: 5000,
    btn: [
      {
        src: bg2Girl,
        delay: 0,
      },
    ],
    messages: [
      { text: "", duration: 800 },
      { text: "“พี่คะ”", duration: 1500, sound: girlVo1 },
      { text: "“พาหนูออกไปหน่อย”", duration: 2500, sound: girlVo2 },
    ],
  },

  // 2
  {
    src: bg3,
    duration: 2500,
  },

  // 3
  {
    src: bg3,
    duration: 0,
    btn: [
      {
        src: btn3,
        delay: 2500,
        hitbox: { top: "59%", left: "42%", width: "16%", height: "11%" },
        sound: keySfx,
      },
    ],
  },

  // 4
  {
    src: bg4,
    duration: 5000,
  },

  // 5
  {
    src: bg2,
    duration: 1000,
    btn: [
      {
        src: bg2Girl,
        delay: 0,
        phaseOut: true,
      },
    ],
    messages: [
      { text: "“พี่คะ”", duration: 1000 },
      { text: "“เราจะออกจากที่นี้ได้...ใช่ไหมคะ”", duration: 2000 },
      {
        text: <span className="text-[#D72424]">“ใช่..ไหม...คะ?”</span>,
        duration: 2000,
      },
    ],
  },

  // 6
  {
    src: bg2,
    duration: 1000,
    btn: [
      {
        src: btn5,
        delay: 0,
        hitbox: { top: "90%", left: "73%", width: "21%", height: "8%" },
      },
    ],
  },

  // 7
  {
    src: bg6,
    duration: 2000,
  },

  // 8
  {
    src: bg7,
    duration: 6000,
  },

  // 9
  {
    src: bg8,
    duration: 0,
    messages: [
      { text: "", duration: 4000 },
      { text: "“หนูรอพี่”", duration: 1000 },
    ],
  },

  // 10
  {
    src: bg9,
    duration: 0,
    messages: [{ text: "“ตั้งนานเเล้วนะ”", duration: 2000 }],
  },

  // 11
  {
    src: bg10,
    duration: 0,
    btn: [
      {
        src: btn10,
        delay: 0,
        hitbox: { top: "90%", left: "74%", width: "20%", height: "10%" },
      },
    ],
  },

  // 12
  {
    src: bg11,
    duration: 6000,
  },

  // 13
  {
    src: bg12,
    duration: 6000,
  },

  // 14
  {
    src: bg13,
    duration: 0,
    btn: [
      {
        src: btn13,
        delay: 0,
        hitbox: { top: "90%", left: "85%", width: "9%", height: "8%" },
      },
    ],
  },

  // 15
  {
    src: bg14,
    duration: 15000,
  },

  // 16
  {
    src: bg15,
    duration: 1000,
    messages: [
      { text: "", duration: 2000 },
      { text: "“พี่จะอยู่กับหนู….ใช่มั้ย”", duration: 8000 },
    ],
  },

  // 17
  {
    src: bg16,
    duration: 0,
    btn: [
      {
        src: btn16,
        delay: 0,
        hitbox: { top: "90%", left: "85%", width: "9%", height: "8%" },
      },
    ],
  },

  // 18
  {
    src: bg17,
    duration: 5000,
  },
];

export const bgm = [
  {
    src: girlAmb,
    from: 0,
    to: 6,
  },
  {
    src: tvGlitchAmb,
    from: 4,
    to: 4,
  },
  {
    src: girlVo4,
    from: 5,
    to: 5,
  },
  {
    src: useKeyAmb,
    from: 7,
    to: 8,
  },
  {
    src: girlVo3,
    from: 9,
    to: 11,
    loop: false,
  },
  {
    src: tpAmb,
    from: 12,
    to: 14,
    loop: false,
  },
  {
    src: finaleAmb,
    from: 15,
    to: 15,
    loop: false,
  },
  {
    src: girlVo5,
    from: 16,
    to: 18,
    loop: false,
  },
];
