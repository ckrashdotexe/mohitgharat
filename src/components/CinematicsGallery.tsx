"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "./CinematicsGallery.css";
import type { CinematicItem } from "../types/content";

export function CinematicsGallery({ items }: { items: CinematicItem[] }) {
  const [selected, setSelected] = useState<CinematicItem | null>(null);
  const closeLightbox = () => setSelected(null);

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
          modules={[EffectCoverflow, Autoplay]}
          className="cinematic-swiper"
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <button
                type="button"
                className="cinematic-slide-trigger"
                onClick={() => setSelected(item)}
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
              <Image
                src={selected.src}
                alt={selected.title}
                width={1600}
                height={900}
                className="modal-image"
                priority
              />
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
