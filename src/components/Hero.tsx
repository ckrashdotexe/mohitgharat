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
        controls 
        poster="https://unsplash.com/photos/a-couple-of-men-standing-next-to-each-other-aJo_DOTMQTA"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      >
        <source src="/10481000-uhd_4096_2160_25fps.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />

      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center px-6 py-16 text-center">

        <motion.p
          className="mb-6 text-sm uppercase tracking-[0.4em] text-[#FACC15]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Cinematography & video production
        </motion.p>
        <motion.h1
          className="font-work-sans text-4xl leading-tight text-white sm:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          FRAMES BY MOHIT 
        </motion.h1>
        <motion.p
          className="mt-6 max-w-2xl text-base text-white/80 sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Visual storytelling through films, commercials, and 
          Crafting cinematic language with light, lens, and movement.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
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
            Contact Me 
          </a>
        </motion.div>
      </div>
    </section>
  );
}
