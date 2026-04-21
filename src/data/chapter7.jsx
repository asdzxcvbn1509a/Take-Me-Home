import bg1 from "../assets/images/Chapter-7/8-1.png";
import bg2 from "../assets/images/Chapter-7/8-2.png";
import bg3 from "../assets/images/Chapter-7/8-3.0 BG.png";
import bg3Chain from "../assets/images/Chapter-7/8-3.1 Chain.png";
import bg3Char from "../assets/images/Chapter-7/8-3.1.png";
import btn3 from "../assets/images/Chapter-7/8-3.2 btn.png";
import bg3Char2 from "../assets/images/Chapter-7/8-3.2.png";
import bg4 from "../assets/images/Chapter-7/8-4.png";
import bg5 from "../assets/images/Chapter-7/8-5.png";
import bg6 from "../assets/images/Chapter-7/8-6.png";
import bg7 from "../assets/images/Chapter-7/8-7.png";
import bg7a from "../assets/images/Chapter-7/8-7.1.png";
import bg7b from "../assets/images/Chapter-7/8-7.2.png";
import bg8 from "../assets/images/Chapter-7/8-8.png";
import bg9 from "../assets/images/Chapter-7/8-9.png";
import btn9 from "../assets/images/Chapter-7/8-9 btn.png";
import bg10 from "../assets/images/Chapter-7/8-10.png";
import bg11 from "../assets/images/Chapter-7/8-11.png";
import bg12 from "../assets/images/Chapter-7/8-12.png";
import btnNext from "../assets/images/Chapter-7/btn (next).png";

import opsVo1 from "../assets/sounds/Operator/Operator Q1/VO/Q1_S01_VO_Ops_01.mp3";
import opsVo2 from "../assets/sounds/Operator/Operator Q1/VO/Q1_S01_VO_Ops_02.mp3";
import opsAmb1 from "../assets/sounds/Operator/Operator Q1/AMB/Q1_S01_AMB_BG01.mp3";
import opsVo3 from "../assets/sounds/Operator/Operator Q1/VO/Q1_S01_VO_Ops_03.mp3";
import cutSfx from "../assets/sounds/Operator/Operator Q1/Q1_S01_SFX_CutCut.mp3";
import opsVo4 from "../assets/sounds/Operator/Operator Q1/VO/Q1_S01_VO_Ops_04.mp3";
import opsAmb2 from "../assets/sounds/Operator/Operator Q2/Q2_S01_AMB_BG01.mp3";
import opsAmb3 from "../assets/sounds/Operator/Operator Q3/Q3_S01_AMB_BG01.mp3";
import opsAmb4 from "../assets/sounds/Operator/Operator Q4/Q4_S01_AMB_BG01.mp3";
import opsAmb5 from "../assets/sounds/Operator/Operator Q4/Q4_S02_AMB_BG02.mp3";
import turnOffSfx from "../assets/sounds/Operator/Operator Q4/Q4_S02_SFX_TurnOff.mp3";

export const scenes = [
  // 0
  {
    src: bg1,
    duration: 0,
    messages: [
      {
        text: "“ฉันรู้ว่ามันจะเกิดอะไรขึ้น ฉันเห็นมันซ้ำแล้วซ้ำอีก....”",
        duration: 9000,
        sound: opsVo1,
      },
      {
        text: "“บางทีพวกเราอาจจะเปลี่ยนมันได้จริงๆ”",
        duration: 2000,
        sound: opsVo2,
      },
    ],
  },

  // 1
  {
    src: bg2,
    duration: 5000,
  },

  // 2
  {
    src: bg3,
    duration: 0,
    btn: [
      {
        src: bg3Char,
        delay: 0,
      },
      {
        src: bg3Chain,
        delay: 0,
        hitbox: { top: "70%", left: "45%", width: "9%", height: "16%" },
        sound: cutSfx,
        glow: true,
      },
    ],
    messages: [
      {
        text: "“ช่วยฉันพาทุกคนออกไป ก่อนที่ทุกอย่างจะสายเกินไปอีกครั้ง!”",
        duration: 11000,
        sound: opsVo3,
      },
      {
        text: "( คลิกที่โซ่เพื่อปลดปล่อยผู้คุมเครื่อง )",
        duration: 27000,
      },
    ],
  },

  // 3
  {
    src: bg3,
    duration: 0,
    btn: [
      {
        src: bg3Char2,
        delay: 0,
      },
    ],
    messages: [
      {
        text: "“ได้โปรด...ช่วย..ด้วย...”",
        duration: 3000,
        sound: opsVo4,
      },
    ],
  },

  // 4
  {
    src: bg3,
    duration: 0,
    btn: [
      {
        src: bg3Char2,
        delay: 0,
      },
      {
        src: btn3,
        delay: 0,
        hitbox: { top: "90%", left: "80%", width: "14%", height: "8%" },
      },
    ],
  },

  // 5
  {
    src: bg4,
    btn: [
      {
        src: btnNext,
        hitbox: { top: "90%", left: "85%", width: "9%", height: "8%" },
      },
    ],
  },

  // 6
  {
    src: bg5,
    btn: [
      {
        src: btnNext,
        hitbox: { top: "90%", left: "85%", width: "9%", height: "8%" },
      },
    ],
  },

  // 7
  {
    src: bg6,
    btn: [
      {
        src: btnNext,
        hitbox: { top: "90%", left: "85%", width: "9%", height: "8%" },
      },
    ],
  },

  // 8
  {
    src: bg7,
    duration: 6000,
  },

  // 9
  {
    src: bg7a,
    duration: 6000,
  },

  // 10
  {
    src: bg7b,
    duration: 5000,
  },

  // 11
  {
    src: bg8,
    btn: [
      {
        src: btnNext,
        hitbox: { top: "90%", left: "85%", width: "9%", height: "8%" },
      },
    ],
  },

  // 12
  {
    src: bg9,
    btn: [
      {
        src: btn9,
        delay: 2000,
        hitbox: { top: "61%", left: "42%", width: "16%", height: "12%" },
        sound: turnOffSfx,
      },
    ],
  },

  // 13
  {
    src: bg10,
    btn: [
      {
        src: btnNext,
        hitbox: { top: "90%", left: "85%", width: "9%", height: "8%" },
      },
    ],
  },

  // 14
  {
    src: bg11,
    btn: [
      {
        src: btnNext,
        hitbox: { top: "90%", left: "85%", width: "9%", height: "8%" },
      },
    ],
  },

  // 15
  {
    src: bg12,
    duration: 5000,
  },
];

export const bgm = [
  {
    src: opsAmb1,
    from: 1,
    to: 2,
  },
  {
    src: opsAmb2,
    from: 4,
    to: 7,
  },
  {
    src: opsAmb3,
    from: 8,
    to: 10,
  },
  {
    src: opsAmb4,
    from: 11,
    to: 11,
  },
  {
    src: opsAmb5,
    from: 12,
    to: 12,
  },
  {
    src: opsAmb4,
    from: 13,
    to: 15,
  },
];
