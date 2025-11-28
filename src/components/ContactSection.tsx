"use client";

import { FormEvent, useState } from "react";

const socials = [
  { label: "Instagram", url: "https://instagram.com/mohitgharat" },
  { label: "Vimeo", url: "https://vimeo.com/mohitgharat" },
  { label: "YouTube", url: "https://youtube.com/@mohitgharat" },
  { label: "LinkedIn", url: "https://linkedin.com/in/mohitgharat" },
];

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      setStatus("sending");
      const response = await fetch("https://formspree.io/f/xleqkpey", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="bg-black px-4 py-24 text-white sm:px-8 lg:px-16"
    >
      <div className="mx-auto grid w-full max-w-5xl gap-12 md:grid-cols-2">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.4em] text-[#FACC15]">
            Contact
          </p>
          <h2 className="font-display text-3xl">Let’s frame your next story</h2>
          <p className="text-white/70">
            Share project details, schedules, or references. Mohit and team
            respond within 24 hours with availability and treatment ideas.
          </p>
          <div className="space-y-2 text-sm text-white/80">
            <p>
              Email: <a href="mailto:hello@mohitghar.at" className="underline">hello@mohitghar.at</a>
            </p>
            <p>Phone: +91 98200 12345</p>
            <p>Studio: Andheri West, Mumbai</p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/40 px-4 py-2 text-white/80 transition hover:border-[#FACC15] hover:text-[#FACC15]"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6"
        >
          <div>
            <label className="text-sm uppercase tracking-[0.3em] text-white/70">
              Name
            </label>
            <input
              required
              name="name"
              className="mt-2 w-full rounded-2xl border border-white/20 bg-black/20 px-4 py-3 text-white placeholder:text-white/40 focus:border-[#FACC15] focus:outline-none"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="text-sm uppercase tracking-[0.3em] text-white/70">
              Email
            </label>
            <input
              required
              type="email"
              name="email"
              className="mt-2 w-full rounded-2xl border border-white/20 bg-black/20 px-4 py-3 text-white placeholder:text-white/40 focus:border-[#FACC15] focus:outline-none"
              placeholder="you@studio.com"
            />
          </div>
          <div>
            <label className="text-sm uppercase tracking-[0.3em] text-white/70">
              Message
            </label>
            <textarea
              required
              name="message"
              rows={5}
              className="mt-2 w-full rounded-2xl border border-white/20 bg-black/20 px-4 py-3 text-white placeholder:text-white/40 focus:border-[#FACC15] focus:outline-none"
              placeholder="Project scope, timeline, references..."
            />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 font-semibold uppercase tracking-[0.3em] text-black transition hover:bg-[#FACC15]"
          >
            {status === "sending" ? "Sending..." : "Send Inquiry"}
          </button>
          {status === "sent" && (
            <p className="text-sm text-green-400">
              Message delivered. Mohit will respond shortly.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-400">
              Something went wrong. Please email hello@mohitghar.at.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
