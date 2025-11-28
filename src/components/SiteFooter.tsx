export function SiteFooter() {
  return (
    <footer className="bg-white px-4 py-12 text-sm text-black/60 sm:px-8 lg:px-16">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 border-t border-black/10 pt-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <p>© {new Date().getFullYear()} Mohit Gharat. All rights reserved.</p>
        <p className="text-black/50">
          Cinematography • Color • Creative Direction
        </p>
      </div>
    </footer>
  );
}
