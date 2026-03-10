"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./CinematicsGallery.css";
import type { CinematicItem } from "../types/content";

export function CinematicsGallery({ items }: { items: CinematicItem[] }) {
  const [selected, setSelected] = useState<CinematicItem | null>(null);
  const closeLightbox = () => setSelected(null);
  const displayItems = items.length > 0 && items.length < 7 ? [...items, ...items] : items;

  return (
    <section id="cinematics" className="cinematics-wrapper" aria-label="Cinematic works">
      <div className="cinematic-section-header">
        <p className="cinematic-subtitle">Cinematography</p>
        <h2 className="section-heading cinematic-title">Cinematic Works</h2>
        <p className="section-description cinematic-description">
          High-resolution frames from narrative, commercial, and documentary work.
        </p>
      </div>

      <div className="cinematic-swiper-wrapper">
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
          pagination={{ clickable: true, el: ".cinematics-pagination" }}
          modules={[EffectCoverflow, Autoplay, Pagination]}
          className="cinematic-swiper"
        >
          {displayItems.map((item, i) => (
            <SwiperSlide key={`${item.id}-${i}`}>
              <div
                className="cinematic-slide-trigger"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelected(item);
                  }
                }}
                onClick={() => setSelected(item)}
                tabIndex={0}
                role="button"
                aria-label={`View ${item.title}`}
              >
                <div className="video-frame-16-9">
                  <div className="cinematic-card-inner">
                    <Image
                      src={item.src}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 85vw, (max-width: 1200px) 55vw, 520px"
                      className="object-cover"
                      loading="lazy"
                    />
                    <div className="cinematic-overlay" aria-hidden>
                      <div className="play-ring" aria-hidden>
                        <span className="play-triangle-icon" />
                      </div>
                      <div className="video-bottom-info">
                        <p className="client-tag">{item.location}</p>
                        <h3 className="project-name">{item.title}</h3>
                        <p className="tech-specs">{item.camera}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="cinematics-pagination" />
      </div>

      {selected && (
        <div
          className="modal-overlay"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
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
            <div className="modal-image-container">
              {selected.videoID ? (
                <iframe
                  src={`https://www.youtube.com/embed/${selected.videoID}?autoplay=1&rel=0`}
                  title={selected.title}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="modal-image"
                  style={{ border: "none" }}
                />
              ) : (
                <Image
                  src={selected.src}
                  alt={selected.title}
                  width={1600}
                  height={900}
                  className="modal-image"
                  priority
                />
              )}
              <div className="modal-caption">
                <p className="client-tag">{selected.location}</p>
                <h3 className="project-name">{selected.title}</h3>
                <p className="tech-specs">{selected.camera}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
