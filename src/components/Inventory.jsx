import { useState } from "react";
import { Backpack } from "lucide-react";

const Inventory = ({
  items = [],
  quests = [],
  completedQuests = new Set(),
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Pouch — top left */}
      <div className="fixed top-4 left-4 z-50 flex flex-col items-start select-none">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label="Inventory"
          className="group relative w-16 h-16 rounded-full flex items-center justify-center border-2 border-amber-600/70 bg-linear-to-br from-stone-800 via-red-950 to-stone-950 shadow-[0_0_16px_rgba(127,29,29,0.55)] hover:shadow-[0_0_26px_rgba(217,119,6,0.75)] hover:border-amber-400 transition-all"
        >
          <span
            className="text-3xl"
            style={{
              filter:
                "sepia(0.5) saturate(0.85) drop-shadow(0 0 3px rgba(251,191,36,0.5))",
            }}
          >
            <Backpack className="text-white"/>
          </span>
          {items.length > 0 && (
            <span className="absolute -top-1 -right-1 min-w-6 h-6 px-1.5 rounded-full bg-linear-to-b from-amber-300 to-amber-600 border border-amber-900 text-stone-900 text-xs font-bold flex items-center justify-center shadow-md">
              {items.length}
            </span>
          )}
        </button>

        {open && (
          <div className="mt-3 p-3 rounded-md border border-amber-700/50 shadow-[0_0_24px_rgba(0,0,0,0.75)] backdrop-blur-sm bg-linear-to-br from-stone-900/95 via-red-950/90 to-stone-950/95">
            <div className="text-amber-200/80 text-[10px] uppercase tracking-[0.35em] mb-2 text-center font-serif">
              ─ ของสะสม ─
            </div>
            <div className="grid grid-cols-2 gap-2">
              {Array.from({ length: quests.length }).map((_, i) => {
                const item = items[i];
                return (
                  <div
                    key={i}
                    className={`w-12 h-12 rounded flex items-center justify-center border-2 transition-all ${
                      item
                        ? "bg-linear-to-br from-amber-950/80 to-stone-900 border-amber-500/70 shadow-[inset_0_0_10px_rgba(251,191,36,0.35)]"
                        : "bg-stone-900/70 border-stone-700/50 shadow-[inset_0_0_8px_rgba(0,0,0,0.8)]"
                    }`}
                  >
                    {item && (
                      <span
                        className="text-amber-300"
                        style={{
                          filter: "drop-shadow(0 0 5px rgba(251,191,36,0.75))",
                        }}
                      >
                        {item.icon}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Quest ledger — top right */}
      <div className="fixed top-4 right-4 z-50 min-w-48 select-none">
        <div
          className="relative px-5 py-3 border-2 border-stone-700/60 shadow-[0_4px_18px_rgba(0,0,0,0.45)]"
          style={{
            background:
              "radial-gradient(ellipse at top left, #fef3c7, #fde68a 40%, #d6bf88 100%)",
          }}
        >
          <div className="absolute inset-1 border border-stone-700/40 pointer-events-none" />

          <div className="text-stone-800 font-bold text-sm tracking-[0.4em] mb-1.5 text-center uppercase font-serif">
            Quest
          </div>
          <div className="h-px bg-stone-700/40 mb-2" />

          {quests.map((q) => {
            const done = completedQuests.has(q.id);
            return (
              <div
                key={q.id}
                className={`flex items-center gap-2 text-sm py-0.5 font-serif ${
                  done ? "text-stone-500/80 line-through" : "text-stone-900"
                }`}
              >
                <span
                  className={`inline-block w-4 text-center ${
                    done ? "text-red-800" : "text-stone-600"
                  }`}
                >
                  {done ? "✕" : "☐"}
                </span>
                <span>{q.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Inventory;
