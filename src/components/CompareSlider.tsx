"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";

interface CompareSliderProps {
  before: string;
  after: string;
  beforeLabel?: string;
  afterLabel?: string;
  alt: string;
}

export default function CompareSlider({
  before,
  after,
  beforeLabel = "قبل",
  afterLabel = "بعد",
  alt,
}: CompareSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => {
      setWidth(entry.contentRect.width);
    });
    observer.observe(el);
    setWidth(el.offsetWidth);
    return () => observer.disconnect();
  }, []);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const pct = Math.max(5, Math.min(95, ((clientX - rect.left) / rect.width) * 100));
    setPosition(pct);
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    setDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative aspect-[16/10] w-full select-none overflow-hidden rounded-2xl bg-slate-900 shadow-xl ring-1 ring-slate-200 touch-none"
      onPointerMove={(e) => dragging && updatePosition(e.clientX)}
      onPointerUp={() => setDragging(false)}
    >
      <Image src={after} alt={`${alt} - ${afterLabel}`} fill className="object-cover" sizes="(max-width:768px) 100vw, 800px" draggable={false} />

      <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${position}%` }}>
        <div className="relative h-full" style={{ width: width || "100%" }}>
          <Image src={before} alt={`${alt} - ${beforeLabel}`} fill className="object-cover" sizes="(max-width:768px) 100vw, 800px" draggable={false} />
        </div>
      </div>

      <div
        className="absolute inset-y-0 z-10 w-0.5 cursor-ew-resize bg-white shadow-[0_0_16px_rgba(255,255,255,0.6)]"
        style={{ left: `${position}%` }}
      >
        <button
          type="button"
          aria-label="اسحب للمقارنة"
          className="absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-white bg-white shadow-xl transition-transform hover:scale-110 active:scale-95"
          onPointerDown={onPointerDown}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-primary">
            <path d="M9 8l-4 4 4 4M15 8l4 4-4 4" />
          </svg>
        </button>
      </div>

      <span className="pointer-events-none absolute top-4 right-4 rounded-full bg-black/65 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
        {beforeLabel}
      </span>
      <span className="pointer-events-none absolute top-4 left-4 rounded-full bg-primary px-3 py-1 text-xs font-bold text-white shadow-md">
        {afterLabel}
      </span>
      <p className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-4 py-1.5 text-xs text-white/90 backdrop-blur-sm">
        ← اسحب للمقارنة →
      </p>
    </div>
  );
}
