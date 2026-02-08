"use client";

const gear = {
  Cameras: ["ALEXA 35", "ALEXA Mini LF", "RED V-RAPTOR"],
  Lenses: ["Cooke S4/i", "Leica Summicron-C", "Atlas Orion Anamorphic"],
  Drones: ["DJI Inspire 3", "DJI Mavic 3 Cine"],
  Stabilizers: ["ARRI Trinity 2", "Ronin 4D", "Movi Pro"],
};

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
          <p className="text-lg text-white/70">I’m Mohit Gharat, a cinematographer driven by a single goal—bringing stories to life with compelling visuals.
           My work blends sharp technical execution with a strong creative vision, allowing brands, 
           artists, and filmmakers to showcase their narrative with clarity and emotion.
           From fast-paced reels to cinematic long-form pieces, I focus on crafting frames that feel immersive, intentional, and visually memorable.
           Every project is an opportunity to push creative boundaries and deliver production-ready content that stands out in today’s digital landscape.
        
          </p>
        </div>

        <div className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 sm:grid-cols-2">
          {Object.entries(gear).map(([category, items]) => (
            <div
              key={category}
              className="rounded-2xl border border-white/30 bg-black/50 p-5 shadow-sm"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-[#FACC15]">
                {category}
              </p>
              <ul className="mt-3 space-y-1 text-sm text-white/80">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
