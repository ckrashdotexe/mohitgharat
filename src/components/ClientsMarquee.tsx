"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
const baseLogos = [
  { id: "logo-aditya", src: "/adityabirlalogo.jpeg", alt: "Aditya Birla" },
  { id: "logo-cincin", src: "/logo/cincin.png.png", alt: "CinCin" },
  { id: "logo-flor", src: "/logo/flordecana.png.png", alt: "Flor de Cana" },
  { id: "logo-sgp", src: "/logo/sgp.png.png", alt: "SGP" },
];

// Swiper needs a critical mass of slides to perform seamless infinite looping.
const localLogos = [
  ...baseLogos.map((l) => ({ ...l, id: l.id + "-1" })),
  ...baseLogos.map((l) => ({ ...l, id: l.id + "-2" })),
  ...baseLogos.map((l) => ({ ...l, id: l.id + "-3" })),
  ...baseLogos.map((l) => ({ ...l, id: l.id + "-4" })),
];

export function ClientsMarquee() {
  return (
    <section
      id="clients"
      className="bg-black px-4 py-12 text-white sm:px-8 lg:px-16"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-[#FACC15]">
          Clients
        </p>
        <h2 className="section-heading text-3xl sm:text-4xl">
          Trusted by global brands
        </h2>
        <p className="text-lg text-white/70">
          From streaming giants to boutique labels, Mohit&apos;s cinematography
          elevates storytelling for partners who value artistry and precision.
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
              <div className="flex h-32 items-center justify-center">
                <Image
                  src={client.src}
                  alt={client.alt}
                  width={240}
                  height={120}
                  className="max-h-24 w-auto object-contain brightness-0 invert opacity-60 transition duration-300 hover:opacity-100"
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
