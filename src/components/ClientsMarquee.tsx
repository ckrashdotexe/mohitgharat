"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
const baseLogos = [
  { id: "logo-aditya", src: "/logo/abdiningblack.png", alt: "ab dining" },
  { id: "logo-cincin", src: "/logo/cincin.png.png", alt: "CinCin" },
  { id: "logo-flor", src: "/logo/flordecana.png.png", alt: "Flor de Cana" },
  { id: "logo-sgp", src: "/logo/sgp.png.png", alt: "SGP" },
  { id: "logo-abdining", src: "/logo/cdffinal.png", alt: "cdf", isLarge: true },
  { id: "logo-raheja", src: "/logo/rahejafinal.png", alt: "raheja", isLarge: true },
];

// Swiper needs a critical mass of slides to perform seamless infinite looping.
const localLogos = [
  ...baseLogos.map((l) => ({ ...l, id: l.id + "-1" })),
  ...baseLogos.map((l) => ({ ...l, id: l.id + "-2" })),
  ...baseLogos.map((l) => ({ ...l, id: l.id + "-3" })),
  ...baseLogos.map((l) => ({ ...l, id: l.id + "-4" })),
  ...baseLogos.map((l) => ({ ...l, id: l.id + "-5" })),
  ...baseLogos.map((l) => ({ ...l, id: l.id + "-6" })),
  ...baseLogos.map((l) => ({ ...l, id: l.id + "-7" })),
];

export function ClientsMarquee() {
  return (
    <section
      id="clients"
      className="bg-black px-4 py-12 text-white sm:px-8 lg:px-16"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 text-center">
        <p className="text-x font-bold uppercase tracking-[0.4em] text-[#FACC15]">
          Clients
        </p>
        <h2 className="section-heading text-3xl sm:text-4xl">
          Clients & Collaborators
        </h2>
        <p className="text-lg text-white/70">
          Working with brands, creators, and events, I transform raw footage into engaging visual stories
          that capture attention and leave a lasting impression.
        </p>
      </div>

      <div className="mt-8 overflow-hidden border-y border-white/10 py-6">
        <Swiper
          modules={[Autoplay, FreeMode]}
          loop
          freeMode
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          allowTouchMove={false}
          grabCursor={false}
          slidesPerView="auto"
          className="clients-marquee-swiper"
        >
          {localLogos.map((client) => (
            <SwiperSlide
              key={client.id}
              className="!w-auto flex-shrink-0 mx-8 md:mx-12"
            >
              <div className="flex h-32 md:h-40 items-center justify-center">
                <Image
                  src={client.src}
                  alt={client.alt}
                  width={client.isLarge ? 320 : 240}
                  height={client.isLarge ? 140 : 80}
                  className={`w-auto object-contain opacity-100 ${client.isLarge
                    ? "max-h-32 md:max-h-40"
                    : "max-h-24 md:max-h-32"
                    }`}
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
