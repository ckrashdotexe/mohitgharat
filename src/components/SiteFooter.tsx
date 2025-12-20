export function SiteFooter() {
  return (
    <footer className="bg-black px-4 py-12 text-sm text-white/60 sm:px-8 lg:px-16">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 border-t border-white/20 pt-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <p>© {new Date().getFullYear()} Mohit Gharat. All rights reserved.</p>
        <p className="text-white/50">
          Cinematography • Visual Storytelling • Creative Direction
        </p>
      </div>
    </footer>
  );
}
