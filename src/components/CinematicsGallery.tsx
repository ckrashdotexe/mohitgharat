"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { CinematicItem } from "../types/content";

type CinematicsGalleryProps = {
  items: CinematicItem[];
};

export function CinematicsGallery({ items: baseItems }: CinematicsGalleryProps) {
  const [items, setItems] = useState<CinematicItem[]>(() => baseItems.slice(0, 6));
  const [selected, setSelected] = useState<CinematicItem | null>(null);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const loadMore = useCallback(() => {
    setItems((prev) => [
      ...prev,
      ...baseItems.map((item, index) => ({
        ...item,
        id: `${item.id}-${prev.length + index}`,
      })),
    ]);
  }, [baseItems]);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            loadMore();
          }
        });
      },
      { rootMargin: "100px" },
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [loadMore]);

  return (
    <section id="cinematics" className="bg-[#f8f8f6] px-4 py-24 sm:px-8 lg:px-16">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 text-center md:text-left">
        <p className="text-sm uppercase tracking-[0.4em] text-[#FACC15]">
          Cinematics
        </p>
        <h2 className="font-display text-3xl sm:text-4xl">
          Infinite still gallery
        </h2>
        <p className="text-lg text-black/70">
          High-resolution frames curated from narrative, commercial, and
          documentary work. Scroll endlessly to explore light, texture, and
          composition studies.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <button
            key={item.id}
            className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            onClick={() => setSelected(item)}
          >
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col gap-1 border-t border-black/5 px-4 py-4 text-left">
              <div className="flex items-center justify-between text-sm text-black/60">
                <span>{item.location}</span>
                <span>{item.camera}</span>
              </div>
              <p className="text-lg font-semibold">{item.title}</p>
            </div>
          </button>
        ))}
      </div>
      <div ref={sentinelRef} className="mt-6 h-6 w-full" aria-hidden="true" />

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative w-full max-w-3xl overflow-hidden rounded-3xl bg-black"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={selected.src}
                alt={selected.title}
                width={1600}
                height={1000}
                className="h-auto w-full object-cover"
                priority
              />
              <div className="flex flex-col gap-1 border-t border-white/10 px-6 py-4 text-white">
                <p className="text-sm uppercase tracking-[0.3em] text-[#FACC15]">
                  {selected.location}
                </p>
                <h3 className="text-2xl font-semibold">{selected.title}</h3>
                <p className="text-sm text-white/70">{selected.camera}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

