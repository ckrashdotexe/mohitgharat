"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import clsx from "clsx";

const sections = [
  { label: "Home", href: "#home" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Cinematics", href: "#cinematics" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  ;

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
  
    window.addEventListener("keydown", onKeyDown);
  
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);
  

  function handleNavigate(href: string) {
    const element = document.querySelector(href);
  
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  
    setIsOpen(false);
  }
  

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 py-4">
      <div className="glass flex w-full max-w-6xl items-center justify-between rounded-full border border-white/40 px-6 py-3 shadow-lg text-white">
        <a
          href="#home"
          className="text-xl font-semibold tracking-[0.4em]"
          aria-label="Frames by Mohit  logo"
        >
          FBM
        </a>
        <button
          onClick={toggleMenu}
          className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-white/40 transition hover:border-white/70"
          aria-expanded={isOpen}
          aria-controls="nav-overlay"
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Toggle navigation</span>
          <div className="space-y-1.5">
            {[0, 1, 2].map((line) => (
              <span
                key={line}
                className={clsx(
                  "block h-0.5 w-5 origin-center bg-white transition-transform duration-300 ease-out",
                  line === 0 && isOpen && "translate-y-1.5 rotate-45",
                  line === 1 && isOpen && "opacity-0",
                  line === 2 && isOpen && "-translate-y-1.5 -rotate-45",
                )}
              />
            ))}
          </div>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="nav-overlay"
            className="fixed inset-0 z-40 flex items-center justify-center bg-black/80 px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}

          >
            <motion.div
              className="flex w-full max-w-4xl flex-col gap-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}

            >
              <p className="text-sm uppercase tracking-[0.4em] text-white/70">
                Navigate
              </p>
              <nav className="grid gap-2 text-3xl sm:text-4xl">
                {sections.map((section, index) => (
                  <motion.button
                    key={section.href}
                    className="group flex items-center gap-4 text-left font-light tracking-tight text-white"
                    onClick={() => handleNavigate(section.href)}
                    whileHover={{ x: 8 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <span className="text-base text-white/40">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="relative inline-flex items-center gap-2">
                      {section.label}
                      <span className="h-px w-8 bg-[#FACC15] opacity-0 transition group-hover:opacity-100" />
                    </span>
                  </motion.button>
                ))}
              </nav>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-white/70">
                <a href="mailto:hello@mohitghar.at" className="hover:text-white">
                  mohitgharat@gmail.com
                </a>
                <span>+91 8208447080</span>
                <span>Mumbai, India</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
