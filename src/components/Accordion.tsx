"use client";

import { useState } from "react";
import clsx from "clsx";

export default function Accordion({
  items,
}: {
  items: { id: number | string; title: string; description: string }[];
}) {
  const [openId, setOpenId] = useState<number | string | null>(items[0]?.id ?? null);

  return (
    <div className="divide-y divide-white/15">
      {items.map((item, i) => {
        const open = openId === item.id;
        const panelId = `accordion-panel-${item.id}`;
        return (
          <div key={item.id} className="group">
            <button
              type="button"
              onClick={() => setOpenId(open ? null : item.id)}
              aria-expanded={open}
              aria-controls={panelId}
              className="w-full flex items-center gap-4 sm:gap-6 py-5 text-left cursor-pointer"
            >
              <span
                className={clsx(
                  "stat-number shrink-0 w-10 text-lg sm:text-xl transition-colors duration-300",
                  open ? "text-accent" : "text-white/35 group-hover:text-white/60"
                )}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className={clsx(
                  "flex-1 font-heading tracking-wide text-xl sm:text-2xl transition-colors duration-300",
                  open ? "text-accent" : "text-white group-hover:text-white/80"
                )}
              >
                {item.title}
              </span>
              <span
                className={clsx(
                  "shrink-0 w-8 h-8 border border-accent flex items-center justify-center transition-transform duration-300",
                  open && "rotate-45 bg-accent"
                )}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M5 12h14" className="text-white" />
                </svg>
              </span>
            </button>
            {/* Panel content stays mounted at all times (grid-rows animates 0fr -> 1fr) so
                every item's copy is present in the rendered HTML, not just the open one. */}
            <div
              id={panelId}
              role="region"
              className="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out"
              style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
            >
              <div className="min-h-0 overflow-hidden">
                <p className="pb-6 pl-14 sm:pl-16 text-white/75 leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
