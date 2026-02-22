"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "./VideoGallery.css";
import type { ReelItem } from "../types/content";

export function ReelsGallery({ items }: { items: ReelItem[] }) {
  const [selected, setSelected] = useState<ReelItem | null>(null);
  const closeLightbox = () => setSelected(null);

  return (
    <section id="reels" className="reels-wrapper" aria-label="Reels showcase">
      <div className="reels-section-header">
        <p className="reels-subtitle">Reels</p>
        <h2 className="section-heading reels-title">Featured Projects</h2>
        <p className="section-description reels-description">
          Reels and spots from commercials, music videos, and short films.
        </p>
      </div>

      <div className="reels-swiper-wrapper">
        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="auto"
          loop
          loopAdditionalSlides={2}
          speed={600}
          resistanceRatio={0.85}
          touchReleaseOnEdges
          watchSlidesProgress
          coverflowEffect={{
            rotate: 0,
            stretch: -40,
            depth: 180,
            modifier: 1.2,
            slideShadows: false,
          }}
          modules={[EffectCoverflow]}
          className="reels-swiper"
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <button
                type="button"
                className="reel-slide-trigger"
                onClick={() => setSelected(item)}
                aria-label={`Play ${item.title}`}
              >
                <div className="video-frame-9-16">
                  <div className="reel-card-inner">
                    <Image
                      src={item.thumbnail}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 85vw, (max-width: 1200px) 55vw, 280px"
                      className="object-cover"
                      loading="lazy"
                    />
                    <div className="reel-overlay" aria-hidden>
                      <div className="play-ring" aria-hidden>
                        <span className="play-triangle-icon" />
                      </div>
                      <div className="video-bottom-info">
                        <p className="location-tag">{item.location}</p>
                        <h3 className="project-name">{item.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {selected && (
        <div
          className="modal-overlay"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Video player"
        >
          <div className="modal-inner" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal-close-x"
              onClick={closeLightbox}
              aria-label="Close"
            >
              &times;
            </button>
            <div className="modal-video-container">
              <iframe
                src={`https://www.youtube.com/embed/${selected.youtubeId}?autoplay=1&mute=0&rel=0`}
                title={selected.title}
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="modal-iframe"
              />
              <div className="modal-caption">
                <p className="location-tag">{selected.location}</p>
                <h3 className="project-name">{selected.title}</h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
