"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { CinematicItem } from "../types/content";

type CinematicsGalleryProps = {
  items: CinematicItem[];
};

export function CinematicsGallery({ items: baseItems }: CinematicsGalleryProps) {
  const [selected, setSelected] = useState<CinematicItem | null>(null);
  // Double the items for seamless infinite scroll
  const duplicatedItems = [...baseItems, ...baseItems];

  return (
    <section id="cinematics" className="bg-black px-4 py-12 text-white sm:px-8 lg:px-16">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-[#FACC15]">
          Cinematics
        </p>
        <h2 className="font-display text-3xl sm:text-4xl">
          Infinite still gallery
        </h2>
        <p className="text-lg text-white/70">
          High-resolution frames curated from narrative, commercial, and
          documentary work. Scroll endlessly to explore light, texture, and
          composition studies.
        </p>
      </div>

      <div className="mt-8 overflow-hidden">
        <div className="marquee-horizontal flex items-center gap-6">
          {duplicatedItems.map((item, index) => (
            <button
              key={`${item.id}-${index}`}
              className="group relative flex-shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-black shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              onClick={() => setSelected(item)}
            >
              <div className="relative aspect-[4/5] w-64 sm:w-80">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 256px, 320px"
                  className="object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col gap-1 border-t border-white/10 px-4 py-4 text-left">
                <div className="flex items-center justify-between text-sm text-white/70">
                  <span>{item.location}</span>
                  <span>{item.camera}</span>
                </div>
                <p className="text-lg font-semibold">{item.title}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

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

