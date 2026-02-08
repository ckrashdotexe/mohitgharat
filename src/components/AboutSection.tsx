"use client";




export function AboutSection() {
  return (
    <section
      id="about"
      className="bg-black px-4 py-12 text-white sm:px-8 lg:px-16"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
        <div className="space-y-4 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-[#FACC15]">
            About Mohit
          </p>
          <h2 className="section-heading text-3xl sm:text-4xl">
            Cinematographer from Mumbai
          </h2>
          <p className="section-maintext text-lg text-white/70">I’m Mohit Gharat, a cinematographer driven by a single goal—bringing stories to life with compelling visuals.
           My work blends sharp technical execution with a strong creative vision, allowing brands, 
           artists, and filmmakers to showcase their narrative with clarity and emotion.
           From fast-paced reels to cinematic long-form pieces, I focus on crafting frames that feel immersive, intentional, and visually memorable.
           Every project is an opportunity to push creative boundaries and deliver production-ready content that stands out in today’s digital landscape.
        
          </p>
        </div>

        
      </div>
    </section>
  );
}
