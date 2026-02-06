"use client";

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import Image from "next/image";

// Import Swiper requirements
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import './CinematicsGallery.css';

interface CinematicItem {
  id: string;
  title: string;
  videoId: string;
  src: string;      // Thumbnail image URL
  client?: string;
  camera?: string;
}

export function CinematicsGallery({ items }: { items: CinematicItem[] }) {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const closeModal = () => setActiveVideoId(null);

  return (
    <section id="cinematics" className="cinematics-wrapper">
      <div className="cinematic-header">
        <p className="cinematic-subtitle">Cinematography</p>
        <h2 className="cinematic-title">Cinematic Works</h2>
      </div>

      <div className="swiper-container-wrapper">
      <Swiper
          modules={[Navigation, Pagination, Autoplay]} // Remove EffectFade if you want side-by-side
          spaceBetween={30}       // Adds a 30px gap between slides to prevent overlapping
          slidesPerView={1}       // Show only 1 video at a time for 16:9 cinematic
          centeredSlides={true}   // Centers the active video
          loop={true}             // Keeps the infinite scroll working
          className="cinematic-swiper"
   >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="video-frame-16-9" onClick={() => setActiveVideoId(item.videoId)}>
                <div className="group relative h-full w-full cursor-pointer">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  
                  {/* Cinematic Play Overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 transition-colors group-hover:bg-black/50">
                    <div className="play-ring">
                      <div className="play-triangle-icon"></div>
                    </div>
                    
                    <div className="video-bottom-info">
                      <p className="client-tag">{item.client}</p>
                      <h3 className="project-name">{item.title}</h3>
                      <p className="tech-specs">{item.camera}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Centered Video Modal Popup */}
      {activeVideoId && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-inner" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-x" onClick={closeModal}>&times;</button>
            <div className="modal-video-container">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1&rel=0&modestbranding=1`}
                title="Cinematic Player"
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}