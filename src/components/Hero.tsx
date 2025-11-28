"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      >
        <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />

      <div className="relative z-10 w-full max-w-5xl px-6 py-16 text-center md:text-left">
        <motion.p
          className="mb-6 text-sm uppercase tracking-[0.4em] text-[#FACC15]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Cinematography & Direction
        </motion.p>
        <motion.h1
          className="font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Mohit Gharat — Cinematographer
        </motion.h1>
        <motion.p
          className="mt-6 max-w-2xl text-base text-white/80 sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Visual storytelling through films, commercials, and music videos.
          Crafting cinematic language with light, lens, and movement.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center rounded-full border border-transparent bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-black transition hover:bg-[#FACC15]"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-white/60 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:border-white hover:text-[#FACC15]"
          >
            Book Mohit
          </a>
        </motion.div>
      </div>
    </section>
  );
}
