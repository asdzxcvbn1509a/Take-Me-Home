import bg1 from "../assets/images/Chapter-8/7-1.png";
import bg2 from "../assets/images/Chapter-8/7-2.png";
import bg3 from "../assets/images/Chapter-8/7-3.png";
import bg4a from "../assets/images/Chapter-8/7-4.1.png";
import bg4b from "../assets/images/Chapter-8/7-4.2.png";
import bg5 from "../assets/images/Chapter-8/7-5.0 BG.png";
import bg5Manager from "../assets/images/Chapter-8/7-5.1 Manager.png";
import btn5 from "../assets/images/Chapter-8/7-5.2 btn.png";
import bg6 from "../assets/images/Chapter-8/7-6.png";
import bg7 from "../assets/images/Chapter-8/7-7.png";
import bg8 from "../assets/images/Chapter-8/7-8.png";
import bg9 from "../assets/images/Chapter-8/7-9.png";
import bg10 from "../assets/images/Chapter-8/7-10.png";
import bg11 from "../assets/images/Chapter-8/7-11.png";
import bg12 from "../assets/images/Chapter-8/7-12.png";
import bg13 from "../assets/images/Chapter-8/7-13.png";
import bg14 from "../assets/images/Chapter-8/7-14.png";
import bg15 from "../assets/images/Chapter-8/7-15.png";
import bg16 from "../assets/images/Chapter-8/7-16.png";
import bg17 from "../assets/images/Chapter-8/7-17.png";
import bg18 from "../assets/images/Chapter-8/7-18.png";
import bg19 from "../assets/images/Chapter-8/17-19.png";
import bg20 from "../assets/images/Chapter-8/17-20.png";
import btnDialog from "../assets/images/Chapter-8/btn (7-6) - (7-13).png";
import btnNext from "../assets/images/Chapter-8/btn (next).png";

import tvGlitchAmb from "../assets/sounds/Manager/Manager Q01/AMB/Q1_S01_AMB_TvGlitch.mp3";
import girlVo from "../assets/sounds/Manager/Manager Q01/VO/Q1_S01_VO_Girl_01.mp3";
import opsVo1 from "../assets/sounds/Manager/Manager Q01/VO/Q1_S01_VO_Ops_01.mp3";
import mgrVo1 from "../assets/sounds/Manager/Manager Q01/VO/Q1_S01_VO_Mgr_01.mp3";
import mgrAmb1 from "../assets/sounds/Manager/Manager Q01/AMB/Q1_S01_AMB_BG01.mp3";
import mgrAmb2 from "../assets/sounds/Manager/Manager Q01/AMB/Q1_S01_AMB_BG02.mp3";
import glassSfx from "../assets/sounds/Manager/Manager Q01/AMB/Q1_S01_AMB_Glass.mp3";
import mgrVo2 from "../assets/sounds/Manager/Manager Q01/VO/Q1_S01_VO_Mgr_02.mp3";

import parkAmb from "../assets/sounds/Manager/Manager Q02/Q2_S01/AMB/Q2_S01_AMB_Park.mp3";
import opsVo2 from "../assets/sounds/Manager/Manager Q02/Q2_S01/VO/Q2_S01_VO_Ops_01.mp3";
import opsVo3 from "../assets/sounds/Manager/Manager Q02/Q2_S01/VO/Q2_S01_VO_Ops_02.mp3";
import opsVo4 from "../assets/sounds/Manager/Manager Q02/Q2_S01/VO/Q2_S01_VO_Ops_03.mp3";
import opsVo5 from "../assets/sounds/Manager/Manager Q02/Q2_S01/VO/Q2_S01_VO_Ops_04.mp3";
import mgrVo3 from "../assets/sounds/Manager/Manager Q02/Q2_S01/VO/Q2_S01_VO_Mgr_01.mp3";
import mgrVo4 from "../assets/sounds/Manager/Manager Q02/Q2_S01/VO/Q2_S01_VO_Mgr_02.mp3";
import mgrVo5 from "../assets/sounds/Manager/Manager Q02/Q2_S01/VO/Q2_S01_VO_Mgr_03.mp3";
import mgrVo6 from "../assets/sounds/Manager/Manager Q02/Q2_S01/VO/Q2_S01_VO_Mgr_04.mp3";

import accidentAmb from "../assets/sounds/Manager/Manager Q02/Q2_S02/Q2_S02_AMB_allAccident.mp3";
import s03Amb from "../assets/sounds/Manager/Manager Q02/Q2_S03/Q2_S03.mp3";
import summaryAmb from "../assets/sounds/Manager/Manager Q02/Q2_S04/Q2_S04_AMB_Summary.mp3";

export const scenes = [
  // 0
  {
    src: bg1,
    duration: 4000,
  },

  // 1
  {
    src: bg2,
    messages: [
      {
        text: "“พี่เลือกเธอหรอ!!”",
        duration: 2000,
        sound: girlVo,
      },
      {
        text: "“แกเลือกเขาหรอ!!”",
        duration: 2000,
        sound: opsVo1,
      },
    ],
  },

  // 2
  {
    src: bg3,
    messages: [
      {
        text: "“คุณยังรู้ความจริงไม่มากพอ”",
        duration: 2000,
        sound: mgrVo1,
      },
    ],
  },

  // 3
  {
    src: bg4a,
    duration: 0,
    btn: [
      {
        src: bg4b,
        delay: 5000,
      },
    ],
    messages: [
      {
        text: "",
        duration: 5000,
      },
      {
        text: "",
        duration: 9000,
        sound: glassSfx,
      },
    ],
  },

  // 4
  {
    src: bg5,
    btn: [
      {
        src: bg5Manager,
        delay: 0,
      },
    ],
    messages: [
      {
        text: "“ในที่สุดฉันก็เป็นอิสระ!!”",
        duration: 7000,
        sound: mgrVo2,
      },
    ],
  },

  // 5
  {
    src: bg5,
    btn: [
      {
        src: bg5Manager,
        delay: 0,
        phaseOut: true,
      },
    ],
    messages: [
      {
        text: "",
        duration: 1700,
      },
    ],
  },

  // 6
  {
    src: bg5,
    duration: 500,
  },

  // 7
  {
    src: bg5,
    btn: [
      {
        src: btn5,
        hitbox: { top: "90%", left: "72%", width: "22%", height: "8%" },
      },
    ],
  },

  // 8
  {
    src: bg6,
    btn: [
      {
        src: btnDialog,
        hitbox: { top: "94%", left: "89%", width: "3%", height: "4%" },
      },
    ],
  },

  // 9
  {
    src: bg7,
    btn: [
      {
        src: btnDialog,
        hitbox: { top: "94%", left: "89%", width: "3%", height: "4%" },
      },
    ],
  },

  // 10
  {
    src: bg8,
    btn: [
      {
        src: btnDialog,
        hitbox: { top: "94%", left: "89%", width: "3%", height: "4%" },
      },
    ],
  },

  // 11
  {
    src: bg9,
    btn: [
      {
        src: btnDialog,
        hitbox: { top: "94%", left: "89%", width: "3%", height: "4%" },
      },
    ],
  },

  // 12
  {
    src: bg10,
    btn: [
      {
        src: btnDialog,
        hitbox: { top: "94%", left: "89%", width: "3%", height: "4%" },
      },
    ],
  },

  // 13
  {
    src: bg11,
    btn: [
      {
        src: btnDialog,
        hitbox: { top: "94%", left: "89%", width: "3%", height: "4%" },
      },
    ],
  },

  // 14
  {
    src: bg12,
    btn: [
      {
        src: btnDialog,
        hitbox: { top: "94%", left: "89%", width: "3%", height: "4%" },
      },
    ],
  },

  // 15
  {
    src: bg13,
    btn: [
      {
        src: btnDialog,
        hitbox: { top: "94%", left: "89%", width: "3%", height: "4%" },
      },
    ],
  },

  // 16
  {
    src: bg14,
    btn: [
      {
        src: btnNext,
        hitbox: { top: "90%", left: "85%", width: "9%", height: "8%" },
      },
    ],
  },

  // 17
  {
    src: bg15,
    btn: [
      {
        src: btnNext,
        hitbox: { top: "90%", left: "85%", width: "9%", height: "8%" },
      },
    ],
  },

  // 18
  {
    src: bg16,
    duration: 11000,
  },

  // 19
  {
    src: bg17,
    btn: [
      {
        src: btnNext,
        hitbox: { top: "90%", left: "85%", width: "9%", height: "8%" },
      },
    ],
  },

  // 20
  {
    src: bg18,
    btn: [
      {
        src: btnNext,
        hitbox: { top: "90%", left: "85%", width: "9%", height: "8%" },
      },
    ],
  },

  // 21
  {
    src: bg19,
    btn: [
      {
        src: btnNext,
        hitbox: { top: "90%", left: "85%", width: "9%", height: "8%" },
      },
    ],
  },

  // 22
  {
    src: bg20,
    duration: 5000,
  },
];

export const bgm = [
  {
    src: tvGlitchAmb,
    from: 0,
    to: 0,
  },
  {
    src: mgrAmb1,
    from: 3,
    to: 3,
  },
  {
    src: mgrAmb2,
    from: 3,
    to: 3,
  },
  {
    src: mgrAmb1,
    from: 5,
    to: 7,
  },
  {
    src: mgrAmb2,
    from: 5,
    to: 7,
  },
  {
    src: parkAmb,
    from: 6,
    to: 20,
  },
  {
    src: opsVo2,
    from: 8,
    to: 8,
    loop: false,
  },
  {
    src: mgrVo3,
    from: 9,
    to: 9,
    loop: false,
  },
  {
    src: opsVo3,
    from: 10,
    to: 10,
    loop: false,
  },
  {
    src: mgrVo4,
    from: 11,
    to: 11,
    loop: false,
  },
  {
    src: opsVo4,
    from: 12,
    to: 12,
    loop: false,
  },
  {
    src: mgrVo5,
    from: 13,
    to: 13,
    loop: false,
  },
  {
    src: opsVo5,
    from: 14,
    to: 14,
    loop: false,
  },
  {
    src: mgrVo6,
    from: 15,
    to: 15,
    loop: false,
  },
  {
    src: accidentAmb,
    from: 16,
    to: 17,
    loop: false,
  },
  {
    src: s03Amb,
    from: 18,
    to: 18,
  },
  {
    src: summaryAmb,
    from: 19,
    to: 22,
    loop: false,
  },
];
