# คู่มือการสร้าง Take Me Home

คู่มือนี้อธิบายวิธีเพิ่ม/แก้ไขเนื้อหาในเกม Take Me Home ตั้งแต่การวาง asset, การเขียนไฟล์ data ของ chapter, การตั้งค่าปุ่ม / quest / เสียง ไปจนถึงการ hook chapter ใหม่เข้ากับเกม

> โปรเจกต์นี้แยก **ข้อมูลฉาก (data)** ออกจาก **engine (ChapterRunner)** ดังนั้นการสร้าง chapter ใหม่ส่วนใหญ่คือการเขียน data ไฟล์เดียว ไม่ต้องแก้โค้ด engine

---

## สารบัญ

1. [ภาพรวมสถาปัตยกรรม](#1-ภาพรวมสถาปัตยกรรม)
2. [การวาง asset](#2-การวาง-asset)
3. [โครงสร้างไฟล์ chapter data](#3-โครงสร้างไฟล์-chapter-data)
4. [รายละเอียด field ของ scene](#4-รายละเอียด-field-ของ-scene)
5. [รายละเอียด field ของ button](#5-รายละเอียด-field-ของ-button)
6. [ระบบข้อความ (messages)](#6-ระบบข้อความ-messages)
7. [ระบบเสียง BGM / SFX](#7-ระบบเสียง-bgm--sfx)
8. [ระบบ Inventory และ Quest](#8-ระบบ-inventory-และ-quest)
9. [การเพิ่ม Chapter ใหม่แบบครบขั้นตอน](#9-การเพิ่ม-chapter-ใหม่แบบครบขั้นตอน)
10. [เทคนิคการวาง hitbox](#10-เทคนิคการวาง-hitbox)
11. [ข้อผิดพลาดที่พบบ่อย](#11-ข้อผิดพลาดที่พบบ่อย)

---

## 1. ภาพรวมสถาปัตยกรรม

```
StartScreen  →  Chapter1  →  Chapter2  →  ...  →  Chapter8
                    ↓
              ChapterRunner (engine กลาง)
                    ↓
              scenes[] + bgm[]  (จากไฟล์ data/chapterN.jsx)
```

- [App.jsx](src/App.jsx) ทำหน้าที่เป็น **router** ระหว่างหน้า (`stage`) และเก็บ state ของ `inventory` + `completedQuests`
- [ChapterRunner.jsx](src/components/ChapterRunner.jsx) คือ **engine** ที่รับ `scenes` + `bgm` แล้วเล่นไปตามลำดับ
- `src/data/chapterN.jsx` คือ **สคริปต์เนื้อหา** ของแต่ละ chapter
- `src/components/ChapterN.jsx` เป็นเพียง wrapper บาง ๆ ที่ส่ง data เข้า `ChapterRunner`

---

## 2. การวาง asset

### รูปภาพ
ใส่ไว้ที่ `src/assets/images/Chapter-N/` โดยตั้งชื่อแนะนำ:

```
3-1.0 BG.png           ← background หลักของ scene 1
3-1.1 Doll booth.png   ← ปุ่ม / layer ที่ซ้อนบน BG
3-1.2 Balloon booth.png
3-2.0 BG.png           ← BG ของ scene ถัดไป
...
```

**หลักการตั้งชื่อ**
- ใช้รูปแบบ `<chapter>-<scene>.<layer> <ชื่ออธิบาย>.png`
- layer `.0` = background, `.1`, `.2`, ... = ปุ่ม/overlay ที่ซ้อนทับ
- ไฟล์ที่ซ้อนทับ (เช่น ปุ่ม, ของเก็บ) ต้องมี **พื้นหลังโปร่งใส** และ **ขนาดเท่ากับ BG** เพื่อให้วางทับได้พอดี

### เสียง
ใส่ไว้ที่ `src/assets/sounds/<หมวด>/`

```
sounds/
├── IntroLoop.mp3           ← เพลง intro หน้า start
├── Park/Pk_AMB_Park.mp3    ← ambience
├── Booth/SFX_Key.mp3       ← sound effect
├── Letter/AMB_BGLoop.mp3
└── Choice/SFX_Steam.mp3
```

**แนวทาง**
- ไฟล์ที่ขึ้นต้น `AMB_` = เสียงบรรยากาศ (loop)
- ไฟล์ที่ขึ้นต้น `SFX_` = เสียงเอฟเฟกต์ one-shot (เล่นครั้งเดียว)
- ใช้ `.mp3` (รองรับทุก browser)

---

## 3. โครงสร้างไฟล์ chapter data

ไฟล์ `src/data/chapterN.jsx` ทุกไฟล์ **export 2 ตัว** คือ `scenes` และ `bgm`

```jsx
import { Mail, Key } from "lucide-react";

import bg1 from "../assets/images/Chapter-3/3-1.0 BG.png";
import bg1Doll from "../assets/images/Chapter-3/3-1.1 Doll booth.png";
import bg2 from "../assets/images/Chapter-3/3-2.0 BG.png";
import bg2Key from "../assets/images/Chapter-3/3-2.2 key.png";

import letterAmb from "../assets/sounds/Letter/AMB_BGLoop.mp3";
import keySfx from "../assets/sounds/Booth/SFX_Key.mp3";

export const scenes = [
  // scene 0: มีปุ่ม Doll ให้คลิก
  {
    src: bg1,
    duration: 0,
    btn: [
      {
        src: bg1Doll,
        delay: 0,
        hitbox: { top: "30%", left: "10%", width: "29%", height: "60%" },
        glow: true,
      },
    ],
  },
  // scene 1: มีของให้เก็บ
  {
    src: bg2,
    duration: 0,
    btn: [
      {
        src: bg2Key,
        delay: 0,
        hitbox: { top: "90%", left: "54%", width: "7%", height: "7%" },
        collect: { questId: "key", icon: <Key /> },
        sound: keySfx,
      },
    ],
  },
];

export const bgm = [
  { src: letterAmb, from: 0, to: 1 },
];
```

> ไฟล์ data ใช้นามสกุล `.jsx` เพราะต้องใส่ JSX element (เช่น `<Key />`) ใน `collect.icon`

---

## 4. รายละเอียด field ของ scene

แต่ละ object ใน `scenes[]` คือหนึ่งฉาก มี field ได้ดังนี้

| Field | ชนิด | ความหมาย |
|---|---|---|
| `src` | image | รูป background ของฉาก (ต้องมี) |
| `duration` | number (ms) | เวลาก่อนเลื่อนไป scene ถัดไปอัตโนมัติ — **ใช้เฉพาะเมื่อไม่มี `btn` และ `messages`** |
| `btn[]` | array | รายการปุ่ม/layer ที่คลิกได้ (ดู §5) |
| `overlays[]` | array | รูปที่ fade-in ทับ BG แต่คลิกไม่ได้ — `{ src, delay }` |
| `messages[]` | array | ข้อความบรรยายที่เลื่อนไปเรื่อย ๆ (ดู §6) |

### กฎการเลื่อนฉาก (สำคัญมาก)

`ChapterRunner` เลือกวิธีเลื่อนฉากจากสิ่งที่มีอยู่ใน scene:

1. **มี `btn`** → รอผู้เล่นคลิกปุ่มที่ถูกต้อง (ปุ่มจะเลื่อนไป scene ถัดไปเอง หรือไปตาม `next` / `nextChapter`)
2. **มี `messages`** → เลื่อนข้อความไปเรื่อย ๆ จบแล้วไป scene ถัดไป
3. **ไม่มีทั้งคู่** → รอ `duration` แล้วไป scene ถัดไปอัตโนมัติ

> ถ้าใส่ทั้ง `btn` และ `duration` — `duration` จะ**ไม่ทำงาน** (scene จะไม่ auto-advance ถ้ามี btn)

---

## 5. รายละเอียด field ของ button

แต่ละปุ่มใน `btn[]` มี field ดังนี้

| Field | ชนิด | ความหมาย |
|---|---|---|
| `src` | image | รูปปุ่ม (ซ้อนทับ BG) |
| `delay` | number (ms) | หน่วงเวลาก่อนปุ่มโผล่ขึ้นมาให้คลิกได้ |
| `hitbox` | `{ top, left, width, height }` | พื้นที่คลิก (เป็น % ของจอ) — **ถ้าไม่มี hitbox ปุ่มจะคลิกไม่ได้** |
| `collect` | `{ questId, icon }` | ทำให้ปุ่มเป็น "ของเก็บ" — คลิกแล้วเพิ่ม item เข้า inventory |
| `glow` | `true` | เปิด hover glow สีทอง (ของที่มี `collect` จะ glow อยู่แล้วโดยอัตโนมัติ) |
| `sound` | audio | เสียง SFX ที่เล่นเมื่อคลิก |
| `next` | number | กระโดดไป scene index ที่ระบุ (แทนการไป scene ถัดไป) |
| `nextChapter` | string | จบ chapter นี้ไปยัง chapter อื่น เช่น `"chapter6"` |
| `phase` | boolean | ให้ปุ่ม fade-in/out ด้วย transition 1s |
| `phaseOut` | boolean | เช่นเดียวกับ `phase` (ใช้กรณี fade-out ล้วน) |

### ตัวอย่าง: ปุ่ม "ไปต่อ"

```jsx
{
  src: btnNext,
  delay: 500,
  hitbox: { top: "90%", left: "69%", width: "26%", height: "8%" },
}
```

### ตัวอย่าง: ของเก็บที่เพิ่มเข้า inventory

```jsx
{
  src: bg2Key,
  delay: 0,
  hitbox: { top: "90%", left: "54%", width: "7%", height: "7%" },
  collect: { questId: "key", icon: <Key /> },
  sound: keySfx,
}
```

### ตัวอย่าง: ปุ่มแยก chapter (branching)

จาก chapter 5 — ผู้เล่นคลิกตัวละครไหนจะไปต่อ chapter นั้น

```jsx
{
  src: charGirl,
  hitbox: { top: "75%", left: "21%", width: "7%", height: "8%" },
  phase: true,
  nextChapter: "chapter6",
}
```

### ตัวอย่าง: ปุ่มที่อยากให้มี glow แต่ไม่ใช่ของเก็บ

```jsx
{
  src: bg1Doll,
  hitbox: { top: "30%", left: "10%", width: "29%", height: "60%" },
  glow: true,
}
```

---

## 6. ระบบข้อความ (messages)

ใช้ใน scene ที่อยากให้มีข้อความบรรยายเลื่อนไปทีละบรรทัด

```jsx
{
  src: bg1,
  messages: [
    { text: "“เมื่อกี้...เสียงอะไร”", duration: 1500 },
    { text: "“ใครน่ะ... !?”", duration: 800, sound: gaspSfx },
  ],
}
```

| Field | ความหมาย |
|---|---|
| `text` | ข้อความที่แสดง (แนะนำใส่ในเครื่องหมายคำพูด `"..."` สำหรับบทพูด) |
| `duration` | แสดงนานกี่ ms ก่อนเลื่อนไปข้อความถัดไป |
| `sound` | เสียงที่เล่นตอนข้อความนี้โผล่ (optional) |

- เมื่อเล่นข้อความสุดท้ายครบ → ChapterRunner เลื่อนไป scene ถัดไปอัตโนมัติ
- ข้อความจะแสดงที่ `bottom: 7%` ของจอโดยอัตโนมัติ (ดู [ChapterRunner.jsx](src/components/ChapterRunner.jsx))

---

## 7. ระบบเสียง BGM / SFX

### BGM แบบช่วง scene

ใน `bgm[]` แต่ละ track ระบุว่าเล่นอยู่ในช่วง scene ไหนบ้าง

```jsx
export const bgm = [
  { src: parkAmb,    from: 1, to: 2 },   // เล่นตั้งแต่ scene 1 ถึง 2
  { src: coasterBg,  from: 3, to: 6 },   // เล่น scene 3–6
  { src: steamSfx,   from: 4, to: 4, loop: false },  // one-shot ที่ scene 4
];
```

| Field | ความหมาย |
|---|---|
| `src` | ไฟล์เสียง |
| `from` / `to` | ช่วง scene index ที่ track นี้เล่นอยู่ (inclusive) |
| `loop` | default = `true`; ใส่ `false` ถ้าอยากเล่นจบแล้วหยุด |

[useSceneBgm](src/hooks/useSceneBgm.js) จะจัดการเองว่า:
- scene ไหนเข้า/ออกช่วง → เปิด/หยุด track
- track ที่ `loop: true` จะวนไปเรื่อย ๆ
- มี fallback unlock เสียงเมื่อผู้เล่นคลิก/กดปุ่มครั้งแรก (แก้ปัญหา browser autoplay)

### SFX แบบ one-shot

ใส่ตรง button หรือ message ได้เลย:

```jsx
{ src: bg2Key, sound: keySfx, collect: {...} }           // เล่นตอนคลิก
{ text: "กริ๊ง!", duration: 500, sound: bellSfx }        // เล่นตอนข้อความโผล่
```

---

## 8. ระบบ Inventory และ Quest

### การประกาศ quest

เปิด [App.jsx](src/App.jsx) แก้ array `quests`:

```jsx
const quests = [
  { id: "key", label: "เควส1" },
  { id: "letter", label: "เควส2" },
  { id: "wireCutter", label: "เควส3" },
  { id: "cassette", label: "เควส4" },
];
```

- `id` ต้องตรงกับ `collect.questId` ที่ตั้งไว้ในปุ่ม
- `label` คือข้อความที่โชว์ใน quest ledger มุมขวาบน

### การทำให้ปุ่มเก็บของ

ใน chapter data:

```jsx
{
  src: bg2Key,
  hitbox: { ... },
  collect: { questId: "key", icon: <Key /> },
}
```

- `questId` → ตรงกับ id ใน `quests[]`
- `icon` → JSX element จาก `lucide-react` (เช่น `<Key />`, `<Mail />`)

### การควบคุม Inventory UI

ปัจจุบัน Inventory + Quest จะแสดงเฉพาะ `chapter3` และ `chapter4` เท่านั้น (ดู [App.jsx:84](src/App.jsx#L84))

ถ้าอยากให้แสดงใน chapter อื่นด้วย ให้แก้เงื่อนไข:

```jsx
{(stage === "chapter3" || stage === "chapter4" || stage === "chapter5") && (
  <Inventory ... />
)}
```

### พฤติกรรมพิเศษของของเก็บ

เมื่อ scene มีปุ่มที่มี `collect` หลายชิ้น — ต้องเก็บ**ครบทุกชิ้น**ใน scene นั้น chapter ถึงจะเลื่อนไป scene ถัดไป (ดู `ChapterRunner.handleBtnClick`)

---

## 9. การเพิ่ม Chapter ใหม่แบบครบขั้นตอน

สมมติอยากเพิ่ม Chapter 9

### ขั้น 1: วาง asset

```
src/assets/images/Chapter-9/
├── 9-1.0 BG.png
├── 9-1.1 Door.png
└── 9-2.0 BG.png

src/assets/sounds/Chapter9/
└── AMB_Hallway.mp3
```

### ขั้น 2: สร้างไฟล์ data

สร้าง [src/data/chapter9.jsx](src/data/chapter9.jsx):

```jsx
import bg1 from "../assets/images/Chapter-9/9-1.0 BG.png";
import door from "../assets/images/Chapter-9/9-1.1 Door.png";
import bg2 from "../assets/images/Chapter-9/9-2.0 BG.png";
import hallwayAmb from "../assets/sounds/Chapter9/AMB_Hallway.mp3";

export const scenes = [
  {
    src: bg1,
    btn: [
      {
        src: door,
        delay: 500,
        hitbox: { top: "30%", left: "40%", width: "20%", height: "60%" },
        glow: true,
      },
    ],
  },
  {
    src: bg2,
    duration: 3000,
  },
];

export const bgm = [
  { src: hallwayAmb, from: 0, to: 1 },
];
```

### ขั้น 3: สร้าง component wrapper

สร้าง [src/components/Chapter9.jsx](src/components/Chapter9.jsx):

```jsx
import ChapterRunner from "./ChapterRunner";
import { scenes, bgm } from "../data/chapter9";

const Chapter9 = ({ onComplete, onCollect }) => (
  <ChapterRunner
    scenes={scenes}
    bgm={bgm}
    onComplete={onComplete}
    onCollect={onCollect}
  />
);

export default Chapter9;
```

### ขั้น 4: เชื่อมใน App.jsx

แก้ [App.jsx](src/App.jsx):

```jsx
import Chapter9 from "./components/Chapter9";

// ... ใน return
{stage === "chapter8" && (
  <Chapter8
    onComplete={() => setStage("chapter9")}   // ← เปลี่ยนจาก handleGameEnd
    onCollect={handleCollect}
  />
)}
{stage === "chapter9" && (
  <Chapter9 onComplete={handleGameEnd} onCollect={handleCollect} />
)}
```

---

## 10. เทคนิคการวาง hitbox

`hitbox` ใช้หน่วยเป็น **%** ของจอ

```jsx
hitbox: { top: "30%", left: "10%", width: "29%", height: "60%" }
```

หมายถึง:
- มุมซ้ายบนของพื้นที่คลิกอยู่ที่ 30% จากด้านบน, 10% จากด้านซ้าย
- ขนาด 29% ของความกว้างจอ × 60% ของความสูงจอ

### วิธีหาค่าที่เหมาะ

1. เปิด dev server (`npm run dev`) แล้วเปิด DevTools
2. Inspect ตัว `<div class="absolute cursor-pointer">` ในหน้าเพจ
3. ลองปรับ `top / left / width / height` จนครอบวัตถุในรูปได้พอดี
4. ค่อยเอาค่าไปใส่ในไฟล์ data

### ข้อควรระวัง

- จอแต่ละขนาดจะ render ไม่เท่ากัน — ใช้ `%` เสมอ (อย่าใช้ `px`)
- รูป BG ใช้ `object-contain` → อาจมีแถบดำด้านข้างหรือบน-ล่าง ขึ้นกับ aspect ratio
- ทดสอบในทั้ง desktop และ mobile aspect ratio ก่อนส่งงาน

---

## 11. ข้อผิดพลาดที่พบบ่อย

| อาการ | สาเหตุ/วิธีแก้ |
|---|---|
| คลิกปุ่มแล้วไม่มีอะไรเกิดขึ้น | ลืมใส่ `hitbox` — ปุ่มที่ไม่มี hitbox จะเป็นแค่ภาพประดับ |
| ปุ่มไม่โผล่ | ค่า `delay` สูงเกินไป หรือ `src` ของปุ่มเป็นไฟล์ที่หาไม่เจอ (path ผิด) |
| scene ไม่ยอมเลื่อน | มี `btn` อยู่ใน scene → ต้องคลิกปุ่ม (duration ไม่ทำงาน) |
| ของเก็บแล้ว scene ไม่เลื่อน | มี `collect` ปุ่มอื่นอีกที่ยังไม่ได้เก็บ — ต้องเก็บครบทุกชิ้นใน scene |
| inventory ไม่ขึ้น | stage ปัจจุบันไม่ใช่ chapter3/4 (ดู §8) |
| เสียงไม่ดัง | ผู้เล่นยังไม่เคยคลิก/กดปุ่ม → เบราว์เซอร์ block autoplay (จะปลดล็อกเองตอน interact ครั้งแรก) |
| BGM ซ้อนกัน 2 track | เขียนช่วง `from`/`to` ของ 2 track ทับกัน — ตรวจให้แน่ใจว่าที่ scene นั้นต้องการให้เล่นกี่ track |
| quest ไม่ถูกขีดฆ่า | `collect.questId` ไม่ตรงกับ `id` ใน array `quests` ของ App.jsx |
| hover ปุ่มไม่เรืองแสง | เพิ่ม `glow: true` ใน btn (ของเก็บจะ glow อัตโนมัติโดยไม่ต้องใส่) |

---

## ไฟล์อ้างอิงที่ควรอ่านก่อนเริ่ม

- [src/App.jsx](src/App.jsx) — จัดการ stage + inventory state
- [src/components/ChapterRunner.jsx](src/components/ChapterRunner.jsx) — engine หลัก
- [src/hooks/useSceneBgm.js](src/hooks/useSceneBgm.js) — ระบบเสียง BGM
- [src/data/chapter3.jsx](src/data/chapter3.jsx) — ตัวอย่าง chapter ที่มีครบทุกฟีเจอร์ (btn + collect + sound + overlays)
- [src/data/chapter5.jsx](src/data/chapter5.jsx) — ตัวอย่าง chapter ที่มี branching (`nextChapter`)
