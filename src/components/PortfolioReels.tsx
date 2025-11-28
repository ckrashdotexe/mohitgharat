"use client";

import dynamic from "next/dynamic";
import { useMemo, useState, useRef, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import type { PortfolioItem } from "../types/content";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

type Category = "All" | "Commercial" | "Music Video" | "Short Film";

type PortfolioReelsProps = {
  items: PortfolioItem[];
};

const filters: Category[] = ["All", "Commercial", "Music Video", "Short Film"];

const PLAYER_CONFIG = {
  youtube: {
    playerVars: {
      controls: 0,
      rel: 0,
      modestbranding: 1,
    },
  },
};

export function PortfolioReels({ items }: PortfolioReelsProps) {
  const [activeFilter, setActiveFilter] = useState<Category>("All");
  const [activeVideoId, setActiveVideoId] = useState<string | null>(
    () => items[0]?.id ?? null,
  );

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") return items;
    return items.filter((item) => item.category === activeFilter);
  }, [activeFilter, items]);

  const handleFilterChange = (filter: Category) => {
    setActiveFilter(filter);
    const nextList = filter === "All"
      ? items
      : items.filter((item) => item.category === filter);
    setActiveVideoId(nextList[0]?.id ?? null);
  };

  return (
    <section
      id="portfolio"
      className="relative flex flex-col gap-10 bg-white px-4 py-24 sm:px-8 lg:px-16"
    >
      <div className="space-y-4 text-center md:text-left">
        <p className="text-sm uppercase tracking-[0.4em] text-[#FACC15]">
          Portfolio
        </p>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-3xl sm:text-4xl">
            Reels-Style Showcase
          </h2>
          <div className="flex flex-wrap justify-center gap-2 md:justify-end">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                className={clsx(
                  "rounded-full border px-4 py-2 text-sm transition",
                  activeFilter === filter
                    ? "border-black bg-black text-white"
                    : "border-black/20 text-black hover:border-black/50",
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-5xl gap-10">
        {filteredItems.map((item) => (
          <PortfolioCard
            key={item.id}
            item={item}
            isActive={activeVideoId === item.id}
            setActiveVideoId={setActiveVideoId}
          />
        ))}
      </div>
    </section>
  );
}

function PortfolioCard({
  item,
  isActive,
  setActiveVideoId,
}: {
  item: PortfolioItem;
  isActive: boolean;
  setActiveVideoId: (id: string) => void;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveVideoId(item.id);
        }
      });
    },
    [item.id, setActiveVideoId],
  );

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.65,
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, [handleIntersection]);

  return (
    <motion.article
      ref={ref}
      className="flex flex-col overflow-hidden rounded-3xl border border-black/10 shadow-xl"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative aspect-[9/16] w-full bg-black">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${item.videoId}`}
          width="100%"
          height="100%"
          playing={isActive}
          controls={false}
          muted
          loop
          light={item.thumbnail}
          playIcon={
            <button className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-black">
              ▶
            </button>
          }
          config={PLAYER_CONFIG as Record<string, unknown>}
        />
      </div>
      <div className="flex flex-col gap-2 border-t border-black/5 bg-white px-6 py-6">
        <p className="text-xs uppercase tracking-[0.3em] text-[#FACC15]">
          {item.category}
        </p>
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-semibold">{item.title}</h3>
          <p className="text-sm text-black/70">{item.description}</p>
        </div>
        <div className="mt-4 flex items-center justify-between text-sm text-black/60">
          <span>{item.client}</span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#FACC15]" />
            {isActive ? "Playing" : "Ready"}
          </span>
        </div>
      </div>
    </motion.article>
  );
}

