import bg1 from "../assets/images/Chapter-5/5-1 BG.png";
import btn1 from "../assets/images/Chapter-5/5-1 btn.png";
import charGirl from "../assets/images/Chapter-5/5-3 Girl.png";
import tagGirl from "../assets/images/Chapter-5/5-3 name tag(Girl).png";
import charManager from "../assets/images/Chapter-5/5-4 Manager.png";
import tagManager from "../assets/images/Chapter-5/5-4 name tag(Manager).png";
import charOperator from "../assets/images/Chapter-5/5-5 Operator.png";
import tagOperator from "../assets/images/Chapter-5/5-5 name tag(Operator).png";

import choiceAmb from "../assets/sounds/Choice/AMB_ChoiceLoop.mp3";
import steamSfx from "../assets/sounds/Choice/SFX_Steam.mp3";

export const scenes = [
  // 0
  {
    src: bg1,
    duration: 1000,
    btn: [
      {
        src: btn1,
        delay: 1000,
        hitbox: { top: "90%", left: "79%", width: "15%", height: "8%" },
      },
    ],
  },

  // 1
  {
    src: bg1,
    duration: 800,
  },

  // 2
  {
    src: bg1,
    duration: 1000,
    messages: [
      { text: "“เมื่อกี้...เสียงอะไร”", duration: 1500 },
      { text: "“ใครน่ะ... !?”", duration: 800 },
    ],
  },

  // 3
  {
    src: bg1,
    duration: 100,
  },

  // 4
  {
    src: bg1,
    duration: 0,
    btn: [
      {
        src: charGirl,
        delay: 0,
        hitbox: { top: "75%", left: "21%", width: "7%", height: "8%" },
        phase: true,
        nextChapter: "chapter6",
      },
      {
        src: tagGirl,
        delay: 900,
        hitbox: { top: "49%", left: "29%", width: "5%", height: "33%" },
        phase: true,
        nextChapter: "chapter6",
      },
      {
        src: charManager,
        delay: 0,
        hitbox: { top: "39%", left: "66%", width: "7%", height: "44%" },
        phase: true,
        nextChapter: "chapter7",
      },
      {
        src: tagManager,
        delay: 900,
        hitbox: { top: "75%", left: "73%", width: "8%", height: "7%" },
        phase: true,
        nextChapter: "chapter7",
      },
      {
        src: charOperator,
        delay: 0,
        hitbox: { top: "34%", left: "47%", width: "7%", height: "54%" },
        phase: true,
        nextChapter: "chapter8",
      },
      {
        src: tagOperator,
        delay: 900,
        hitbox: { top: "80%", left: "40%", width: "7%", height: "7%" },
        phase: true,
        nextChapter: "chapter8",
      },
    ],
  },
];

export const bgm = [
  { src: choiceAmb, from: 0, to: 4 },
  { src: steamSfx, from: 4, to: 4, loop: false },
];
