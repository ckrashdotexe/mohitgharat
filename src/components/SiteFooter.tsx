import { Instagram, Youtube, Linkedin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-black px-4 py-12 text-sm text-white/60 sm:px-8 lg:px-16">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col text-left">
            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">Contact Us</h3>
            <a href="mailto:framesbymohitt@gmail.com" className="hover:text-white transition w-fit">framesbymohitt@gmail.com</a>
            <p className="mt-2">+91 9172398227</p>
          </div>
          <div className="flex flex-col md:items-end text-left md:text-right">
            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">Social Links</h3>
            <div className="flex gap-4">
              <a href="https://instagram.com/framesby.mohit" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 hover:text-[#FACC15] transition">
                <Instagram size={24} />
              </a>
              <a href="https://youtube.com/@FramesbyMohit" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 hover:text-[#FACC15] transition">
                <Youtube size={24} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 hover:text-[#FACC15] transition">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/20 pt-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <p>© {new Date().getFullYear()} Mohit Gharat. All rights reserved.</p>
          <p className="text-white/50">
            Cinematography • Visual Storytelling • Creative Direction
          </p>
        </div>
      </div>
    </footer>
  );
}
