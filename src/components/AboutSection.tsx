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
      className="bg-white px-4 py-24 sm:px-8 lg:px-16"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <div className="space-y-4 text-center md:text-left">
          <p className="text-sm uppercase tracking-[0.4em] text-[#FACC15]">
            About Mohit
          </p>
          <h2 className="font-display text-3xl sm:text-4xl">
            Cinematographer from Mumbai
          </h2>
          <p className="text-lg text-black/70">
            Mohit Gharat crafts cinematic language through precise lighting,
            expressive camera movement, and a collaborative on-set presence. His
            work spans feature films, premium commercials, music videos, and
            branded documentaries shot across India, the Middle East, and
            Europe. He leads multicultural crews, operates steadicam, and brings
            a colorist&apos;s perspective to set, ensuring seamless transitions
            from prep to grade.
          </p>
        </div>

        <div className="grid gap-6 rounded-3xl border border-black/10 bg-[#f8f8f6] p-6 sm:grid-cols-2">
          {Object.entries(gear).map(([category, items]) => (
            <div
              key={category}
              className="rounded-2xl border border-white/60 bg-white p-5 shadow-sm"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-[#FACC15]">
                {category}
              </p>
              <ul className="mt-3 space-y-1 text-sm text-black/80">
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
