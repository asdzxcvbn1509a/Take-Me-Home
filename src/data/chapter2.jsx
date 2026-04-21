import bg1 from "../assets/images/Chapter-2/2-1.png";
import btn1 from "../assets/images/Chapter-2/2-1 btn.png";
import bg3 from "../assets/images/Chapter-2/2-3.png";
import btn3 from "../assets/images/Chapter-2/2-4 btn.png";

import letterAmb from "../assets/sounds/Letter/AMB_BGLoop.mp3";
import letterSfx from "../assets/sounds/Letter/SFX_Letter.mp3";
import openLetterSfx from "../assets/sounds/Letter/SFX_OpenLetter.mp3";

export const scenes = [
  // 0
  {
    src: bg1,
    duration: 0,
    btn: [
      {
        src: btn1,
        delay: 0,
        hitbox: { top: "70%", left: "40%", width: "19%", height: "10%" },
      },
    ],
  },

  // 1
  {
    src: bg3,
    duration: 500,
  },

  // 2
  {
    src: bg3,
    messages: [
      {
        text: "คุณไม่ได้อยู่ในสวนสนุกธรรมดาอีกต่อไปแล้ว",
        duration: 3000,
      },
      {
        text: (
          <span>
            ที่นี่คือ <span className="text-[#D72424]">‘สวนสนุกร้าง’</span>{" "}
            ที่บางสิ่งกำลังซ่อนอยู่
          </span>
        ),
        duration: 3300,
      },
      {
        text: (
          <span>
            และ ‘รอ’ ใครบางคน…
            <span className="text-[#D72424]">วันนี้ก็คือคุณ</span>
          </span>
        ),
        duration: 2800,
      },
      {
        text: (
          <span>
            "สิ่งที่คุณเห็น อาจไม่ใช่
            <span className="text-[#D72424]">ความจริง</span>
            และความจริง…อาจไม่ต้องการให้คุณรับรู้"
          </span>
        ),
        duration: 4200,
      },
      {
        text: "ระหว่างทาง คุณจะได้พบกับบางคน ที่อาจนำพาคุณไปสู่ความจริง…หรือจุดจบ",
        duration: 4000,
      },
      {
        text: (
          <span className="text-[#D72424]">
            หากอยากมีชีวิตรอด… จงหาทางหนีออกไปให้ได้ !!!!
          </span>
        ),
        duration: 3000,
      },
    ],
  },

  // 3
  {
    src: bg3,
    duration: 0,
    btn: [
      {
        src: btn3,
        delay: 0,
        hitbox: { top: "90%", left: "66%", width: "28%", height: "8%" },
      },
    ],
  },
];

export const bgm = [
  { src: letterAmb, from: 0, to: 3 },
  { src: letterSfx, from: 0, to: 0, loop: false },
  { src: openLetterSfx, from: 2, to: 2, loop: false, onMessage: true },
];
