"use client"; // This line is crucial to fix the useState error

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './VideoGallery.css';
import type { PortfolioItem } from '../types/content';

interface PortfolioReelsProps {
  items: PortfolioItem[];
}

export const PortfolioReels: React.FC<PortfolioReelsProps> = ({ items }) => {
  // State to track the currently playing video URL
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const closeModal = () => setActiveVideo(null);

  return (
    <div className="video-gallery-container">
      <h2 className="gallery-title">Featured Projects</h2>
      
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: -20,
          depth: 250,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Autoplay, Pagination]}
        className="mySwiper"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id} onClick={() => setActiveVideo(`https://www.youtube.com/embed/${item.videoId}`)}>
            <div className="video-card">
              <img src={item.thumbnail} alt={item.title} />
              <div className="overlay">
                <div className="play-icon">▶</div>
                <h3>{item.title}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Video Modal - Logic based on your CSS classes */}
      {activeVideo && (
        <div className="video-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>&times;</button>
            <iframe
              src={`${activeVideo}${activeVideo.includes('?') ? '&' : '?'}autoplay=1`}
              title="Video Player"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};