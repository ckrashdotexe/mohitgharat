export type PortfolioItem = {
  id: string;
  title: string;
  category: "Commercial" | "Music Video" | "Short Film";
  client: string;
  description: string;
  videoId: string;
  thumbnail: string;
};

export type CinematicItem = {
  id: string;
  src: string;
  title: string;
  location: string;
  camera: string;
};

export type ClientLogo = {
  id: string;
  name: string;
  logo: string;
  url: string;
};

export type TestimonialItem = {
  id: string;
  name: string;
  brand: string;
  title: string;
  quote: string;
  avatar: string;
};

export type ReelItem = {
  id: string;
  title: string;
  location: string;
  youtubeId: string;
  thumbnail: string;
};
