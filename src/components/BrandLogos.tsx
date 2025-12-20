"use client";

import Image from "next/image";
import type { ClientLogo } from "../types/content";

type BrandLogosProps = {
  clients: ClientLogo[];
};

export function BrandLogos({ clients }: BrandLogosProps) {
  const limited = clients.slice(0, 4);
  const doubled = [...limited, ...limited];

  return (
    <section className="bg-black py-8">
      <div className="overflow-hidden border-y border-white/10">
        <div className="marquee flex items-center gap-12">
          {doubled.map((client, index) => (
            <a
              key={`${client.id}-${index}`}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-16 w-24 flex-shrink-0 items-center justify-center rounded-xl bg-white/5 transition hover:bg-white/10"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={100}
                height={50}
                className="max-h-12 w-auto opacity-70 transition group-hover:opacity-100"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

