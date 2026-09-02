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
    src: "/images/instruments.jpg",
    alt: "Colorful musical instruments ready to be explored",
    caption: "Instrument exploration",
  },
  {
    src: "/images/drums.jpg",
    alt: "Drumming and rhythm",
    caption: "Drumming & rhythm",
    imageClass: "object-top",
  },
  {
    src: "/images/dance.jpg",
    alt: "Dancing and movement",
    caption: "Dancing & movement",
  },
  {
    src: "/images/piano-keys.jpg",
    alt: "Piano keys in warm light",
    caption: "Music at the heart",
  },
  {
    src: "/images/kids-play.jpg",
    alt: "Children playing together",
    caption: "Friendship & play",
  },
];
