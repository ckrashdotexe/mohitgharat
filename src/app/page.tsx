import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { PortfolioReels } from "@/components/PortfolioReels";
import { CinematicsGallery } from "@/components/CinematicsGallery";
import { AboutSection } from "@/components/AboutSection";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { ClientsMarquee } from "@/components/ClientsMarquee";
import { ContactSection } from "@/components/ContactSection";
import { SiteFooter } from "@/components/SiteFooter";
import portfolioData from "../data/portfolio.json";
import cinematicsData from "../data/cinematics.json";
import clientsData from "../data/clients.json";
import testimonialsData from "../data/testimonials.json";
import type {
  PortfolioItem,
  CinematicItem,
  ClientLogo,
  TestimonialItem,
} from "../types/content";

const portfolio = portfolioData as PortfolioItem[];
const cinematics = cinematicsData as CinematicItem[];
const clients = clientsData as ClientLogo[];
const testimonials = testimonialsData as TestimonialItem[];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--background)] text-[var(--foreground)]">
      
      <Navigation />
      <main className="mt-20 flex flex-col gap-0">
        <Hero />
        <PortfolioReels items={portfolio} />
        <CinematicsGallery items={cinematics} />
        <AboutSection />
        <TestimonialsCarousel testimonials={testimonials} />
        <ClientsMarquee clients={clients} />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
