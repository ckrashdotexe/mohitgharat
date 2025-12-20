"use client";

import Image from "next/image";
import type { ClientLogo } from "../types/content";

type ClientsMarqueeProps = {
  clients: ClientLogo[];
};

export function ClientsMarquee({ clients }: ClientsMarqueeProps) {
  const limited = clients.slice(0, 4);
  const doubled = [...limited, ...limited];

  return (
    <section
      id="clients"
      className="bg-black px-4 py-12 text-white sm:px-8 lg:px-16"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-[#FACC15]">
          Clients
        </p>
        <h2 className="font-display text-3xl sm:text-4xl">
          Trusted by global brands
        </h2>
        <p className="text-lg text-white/70">
          From streaming giants to boutique labels, Mohit&apos;s cinematography
          elevates storytelling for partners who value artistry and precision.
        </p>
      </div>

      <div className="mt-8 overflow-hidden border-y border-white/10 py-6">
        <div className="marquee flex items-center gap-12">
          {doubled.map((client, index) => (
            <a
              key={`${client.id}-${index}`}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-20 w-32 items-center justify-center rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={120}
                height={60}
                className="max-h-14 w-auto opacity-80 transition group-hover:opacity-100"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

