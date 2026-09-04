export type GalleryItem = {
  src: string;
  alt: string;
  caption?: string;
  imageClass?: string;
};

/**
 * Gallery — add photos and videos here after each event.
 * Place files in /public/images (or /public/video) and add an entry below.
 */
export const gallery: GalleryItem[] = [
  {
    src: "/images/anna-piano.png",
    alt: "Anna Levitskiy, founder of Music & Smiles, at the piano",
    caption: "Anna Levitskiy, founder",
  },
  {
    src: "/images/music-play-days.jpg",
    alt: "Children and teens waving colorful scarves and shaking tambourines together",
    caption: "Music play days",
  },
  {
    src: "/images/drumming-rhythm.jpg",
    alt: "Children and teens sitting in a circle playing hand drums and laughing together",
    caption: "Drumming & rhythm",
  },
  {
    src: "/images/instrument-exploration.jpg",
    alt: "Children and teens trying out a keyboard, xylophone, tambourines, and shakers together",
    caption: "Instrument exploration",
  },
  {
    src: "/images/singing-together.jpg",
    alt: "Children and teens singing together, arms around each other, mid-song",
    caption: "Singing & movement",
  },
  {
    src: "/images/friendship.jpg",
    alt: "Children and teens sitting in a circle passing a tambourine and clapping together",
    caption: "Friendship & play",
  },
];
