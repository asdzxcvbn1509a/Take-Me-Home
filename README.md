# Take Me Home

An interactive narrative game built with React. The player moves through eight chapters of a Thai-language visual story, clicking hotspots on each scene to collect items, trigger dialogue, and advance the plot.

## Tech stack

- **React 19** + **Vite 8**
- **Tailwind CSS 4** (via `@tailwindcss/vite`)
- **lucide-react** for inventory icons

## Getting started

```bash
npm install
npm run dev        # start dev server
npm run build      # production build
npm run preview    # preview production build
npm run lint       # run ESLint
```

## Project structure

```
src/
├── App.jsx                  # stage router, inventory + quest state
├── main.jsx
├── components/
│   ├── StartScreen.jsx      # title screen with intro animation + BGM
│   ├── ChapterRunner.jsx    # generic scene-playback engine
│   ├── Chapter1.jsx … Chapter8.jsx
│   └── Inventory.jsx        # top-left pouch + top-right quest ledger
├── data/
│   └── chapter1.jsx … chapter8.jsx   # scene definitions per chapter
├── hooks/
│   └── useSceneBgm.js       # per-scene music/ambience playback
└── assets/
    ├── images/Chapter-0 … Chapter-8/
    └── sounds/
```

## How a chapter is built

Each chapter is just **data**: a list of scenes consumed by [ChapterRunner](src/components/ChapterRunner.jsx). A scene describes the background image, optional overlays/buttons with hitboxes, timed messages, and sounds.

```jsx
// src/data/chapter3.jsx
export const scenes = [
  {
    src: bg2,
    btn: [
      {
        src: bg2Key,
        delay: 0,
        hitbox: { top: "90%", left: "54%", width: "7%", height: "7%" },
        collect: { questId: "key", icon: <Key /> },  // adds item to inventory
        sound: keySfx,
      },
    ],
  },
];

export const bgm = [
  { src: letterAmb, from: 0, to: 4 },   // scene range the track plays over
];
```

### Scene fields

| Field | Purpose |
|---|---|
| `src` | Background image for the scene |
| `duration` | Auto-advance delay (ms) when no `btn`/`messages` exist |
| `btn[]` | Clickable layered images (see below) |
| `overlays[]` | Non-interactive images that fade in with a `delay` |
| `messages[]` | Timed text lines (`{ text, duration, sound? }`) |

### Button fields

| Field | Purpose |
|---|---|
| `src` | Button image, drawn over the background |
| `delay` | ms before the button appears |
| `hitbox` | `{ top, left, width, height }` in % — click region |
| `collect` | `{ questId, icon }` — adds item to inventory on click |
| `glow` | `true` to give the button a golden hover glow (collect items glow by default) |
| `sound` | SFX played on click |
| `next` | Jump to a specific scene index instead of advancing |
| `nextChapter` | Jump to another chapter (handled by `App.jsx`) |

## Inventory & quest system

`App.jsx` keeps `inventory` and `completedQuests` state. When a `collect` button is clicked, its `questId` + `icon` are appended to the inventory and the matching quest is struck through in the ledger. The [Inventory](src/components/Inventory.jsx) UI is only shown during chapters 3–4.

## Audio

- **BGM / ambience** — declared per chapter in the `bgm` array; [useSceneBgm](src/hooks/useSceneBgm.js) starts/stops tracks as `sceneIndex` enters/leaves each track's `from`–`to` range.
- **SFX** — one-shots attached to buttons (`btn.sound`) or message lines (`messages[].sound`).
- Audio is unlocked on first `pointerdown` / `keydown` to satisfy browser autoplay policies.

## Adding a new chapter

1. Drop art into `src/assets/images/Chapter-N/` and audio into `src/assets/sounds/`.
2. Create `src/data/chapterN.jsx` exporting `scenes` and (optionally) `bgm`.
3. Create `src/components/ChapterN.jsx` that renders `<ChapterRunner>` with the data.
4. Register the chapter as a stage in [App.jsx](src/App.jsx).
