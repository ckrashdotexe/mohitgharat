"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import type { TestimonialItem } from "../types/content";

type TestimonialsCarouselProps = {
  testimonials: TestimonialItem[];
};

const intervalMs = 6000;

export function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goTo = (index: number) => {
    setCurrent(index);
  };

  return (
    <section id="testimonials" className="bg-[#f8f8f6] px-4 py-24 sm:px-8 lg:px-16">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <div className="space-y-4 text-center md:text-left">
          <p className="text-sm uppercase tracking-[0.4em] text-[#FACC15]">
            Testimonials
          </p>
          <h2 className="font-display text-3xl sm:text-4xl">
            Trusted collaborators speak
          </h2>
          <p className="text-lg text-black/70">
            Producers, creative directors, and brand partners share their
            experience working with Mohit across continents.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white p-8 shadow-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[current].id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-4"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={testimonials[current].avatar}
                  alt={testimonials[current].name}
                  width={72}
                  height={72}
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div>
                  <p className="text-lg font-semibold">
                    {testimonials[current].name}
                  </p>
                  <p className="text-sm text-black/60">
                    {testimonials[current].title} — {testimonials[current].brand}
                  </p>
                </div>
              </div>
              <p className="text-xl text-black/80">
                “{testimonials[current].quote}”
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-2">
              {testimonials.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => goTo(index)}
                  className={`h-2 w-8 rounded-full transition ${
                    current === index ? "bg-[#FACC15]" : "bg-black/10"
                  }`}
                  aria-label={`Show testimonial ${index + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <button
                onClick={() =>
                  setCurrent(
                    (current - 1 + testimonials.length) % testimonials.length,
                  )
                }
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-black hover:border-black/40"
                aria-label="Previous testimonial"
              >
                ←
              </button>
              <button
                onClick={() => setCurrent((current + 1) % testimonials.length)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-black hover:border-black/40"
                aria-label="Next testimonial"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


