"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import "./VideoGallery.css";
import type { ReelItem } from "../types/content";

export function ReelsGallery({ items }: { items: ReelItem[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [playingItem, setPlayingItem] = useState<ReelItem | null>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [dragX, setDragX] = useState(0);

  const dragStartX = useRef(0);
  const dragStartTime = useRef(0);
  const dragXRef = useRef(0);
  const wasDragRef = useRef(false);

  useEffect(() => {
    if (!playingItem) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPlayingItem(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [playingItem]);

  useEffect(() => {
    document.body.style.overflow = playingItem ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [playingItem]);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest("button")) return;
    setIsDragging(true);
    wasDragRef.current = false;
    dragStartX.current = e.clientX;
    dragStartTime.current = Date.now();
    dragXRef.current = 0;
    setDragX(0);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStartX.current;
    dragXRef.current = dx;
    setDragX(dx);
    if (Math.abs(dx) > 5) {
      wasDragRef.current = true;
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    setIsDragging(false);

    const dx = dragXRef.current;
    const elapsed = Date.now() - dragStartTime.current;
    const velocity = Math.abs(dx) / Math.max(elapsed, 1);

    if (Math.abs(dx) > 30 || velocity > 0.1) {
      if (dx > 0) {
        setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
      } else {
        setActiveIndex((prev) => (prev + 1) % items.length);
      }
    }
    dragXRef.current = 0;
    setDragX(0);

    // Wait a tiny bit before resetting drag flag so click handler catches it
    setTimeout(() => {
      wasDragRef.current = false;
    }, 50);
  };

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  useEffect(() => {
    const onMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
        setDragX(0);
        dragXRef.current = 0;
        setTimeout(() => {
          wasDragRef.current = false;
        }, 50);
      }
    };
    window.addEventListener("pointerup", onMouseUp);
    return () => window.removeEventListener("pointerup", onMouseUp);
  }, [isDragging]);

  return (
    <section id="reels" className="reels-wrapper" aria-label="Reels showcase">
      <div className="reels-section-header">
        <p className="reels-subtitle">Reels</p>
        <h2 className="reels-title">Featured Projects</h2>
        <p className="reels-description">
          Creating engaging short-form video content and reels for brands, creators, and events
        </p>
      </div>

      <div className="reels-stage">
        <button onClick={goPrev} className="reels-nav-btn reels-nav-btn--prev" aria-label="Previous">
          <ChevronLeft size={22} />
        </button>

        <div
          className="reels-track"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          // Prevent synthetic react onClick events from firing if we swiped instead of tapped
          onClickCapture={(e) => {
            if (wasDragRef.current) {
              e.stopPropagation();
              e.preventDefault();
            }
          }}
        >
          {items.map((item, index) => {
            let offset = index - activeIndex;
            if (offset > items.length / 2) offset -= items.length;
            else if (offset < -items.length / 2) offset += items.length;

            const absOffset = Math.abs(offset);
            const isActive = offset === 0;

            if (absOffset > Math.max(3, Math.floor(items.length / 2))) return null;

            // Positioning WITH active drag calculation applied
            const xOffset = (offset * 300) + (isDragging ? dragX : 0);
            const scale = isActive ? 1.05 : absOffset === 1 ? 0.88 : 0.76;
            const opacity = isActive ? 1 : absOffset === 1 ? 0.65 : absOffset === 2 ? 0.35 : 0;

            return (
              <div
                key={item.id}
                className={`reels-slide${isActive ? " reels-slide--active" : ""}`}
                style={{
                  transform: `translateX(calc(-50% + ${xOffset}px)) translateY(-50%) scale(${scale})`,
                  opacity,
                  zIndex: 10 - absOffset,
                  transition: isDragging
                    ? "none"
                    : "transform 0.45s cubic-bezier(0.34,1.2,0.64,1), opacity 0.45s ease"
                }}
                onClick={() => {
                  if (wasDragRef.current) return;

                  if (isActive) {
                    setPlayingItem(item);
                  } else {
                    setActiveIndex(index);
                  }
                }}
              >
                <img
                  src={item.thumbnail || `https://i.ytimg.com/vi/${item.youtubeId}/hqdefault.jpg`}
                  alt={item.title}
                  className="reels-card-img"
                  draggable={false}
                />

                <div className={`reels-card-overlay${isActive ? " reels-card-overlay--active" : ""}`}>
                  <div className="reels-play-btn">
                    <span className="reels-play-icon">&#9654;</span>
                  </div>
                  <div className="reels-card-info">
                    <p className="reels-location">{item.location}</p>
                    <h3 className="reels-card-title">{item.title}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button onClick={goNext} className="reels-nav-btn reels-nav-btn--next" aria-label="Next">
          <ChevronRight size={22} />
        </button>
      </div>

      <div className="reels-dots">
        {items.map((_, i) => (
          <button
            key={i}
            className={`reels-dot${i === activeIndex ? " reels-dot--active" : ""}`}
            onClick={() => setActiveIndex(i)}
            aria-label={`Go to reel ${i + 1}`}
          />
        ))}
      </div>

      {playingItem && (
        <div
          className="reels-modal-overlay"
          onClick={() => setPlayingItem(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="reels-modal-inner" onClick={(e) => e.stopPropagation()}>
            <button className="reels-modal-close" onClick={() => setPlayingItem(null)} aria-label="Close">
              <X size={28} />
            </button>
            <div className="reels-modal-video">
              <iframe
                src={`https://www.youtube.com/embed/${playingItem.youtubeId}?autoplay=1&rel=0`}
                title={playingItem.title}
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="reels-modal-iframe"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}