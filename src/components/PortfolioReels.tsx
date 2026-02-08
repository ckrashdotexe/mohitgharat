"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "./VideoGallery.css";
import type { PortfolioItem } from "../types/content";

function resolveReelThumbnail(thumb: string): string {
  if (thumb.startsWith("http") || thumb.startsWith("//")) return thumb;
  const path = thumb.startsWith("/") ? thumb : `/${thumb}`;
  return path.startsWith("/reels/") ? path : `/reels/${path.replace(/^\//, "")}`;
}

interface PortfolioReelsProps {
  items: PortfolioItem[];
}

export const PortfolioReels: React.FC<PortfolioReelsProps> = ({ items }) => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const closeModal = () => setActiveVideo(null);

  return (
    <section className="video-gallery-container" aria-label="Featured projects">
      <div className="reel-section-header">
        <p className="reel-subtitle">Reels</p>
        <h2 className="section-heading gallery-title">Featured Projects</h2>
        <p className="section-description reel-description">
          Reels and spots from commercials, music videos, and short films.
        </p>
      </div>

      <div className="reel-swiper-wrapper">
        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="auto"
          loop
          loopAdditionalSlides={2}
          speed={500}
          resistanceRatio={0.85}
          touchReleaseOnEdges
          watchSlidesProgress
          coverflowEffect={{
            rotate: 0,
            stretch: -24,
            depth: 200,
            modifier: 1.1,
            slideShadows: false,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="reel-swiper"
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <button
                type="button"
                className="reel-slide-trigger"
                onClick={() =>
                  setActiveVideo(`https://www.youtube.com/embed/${item.videoId}`)
                }
                aria-label={`Play ${item.title}`}
              >
                <div className="video-card">
                  <img
                    src={resolveReelThumbnail(item.thumbnail)}
                    alt=""
                    width={300}
                    height={533}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="overlay" aria-hidden>
                    <span className="play-icon" aria-hidden>▶</span>
                    <h3 className="project-title">{item.title}</h3>
                  </div>
                </div>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {activeVideo && (
        <div
          className="video-modal"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label="Video player"
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="close-btn"
              onClick={closeModal}
              aria-label="Close video"
            >
              &times;
            </button>
            <iframe
              src={`${activeVideo}${activeVideo.includes("?") ? "&" : "?"}autoplay=1`}
              title="Video Player"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
};
