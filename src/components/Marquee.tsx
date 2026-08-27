const WORDS = [
  "Play",
  "Connect",
  "Belong",
  "Sing",
  "Dance",
  "Drum",
  "Smile",
  "Music",
  "Friendship",
  "Joy",
  "Rhythm",
  "Express",
  "Include",
  "Celebrate",
];

function MarqueeRow({ hidden }: { hidden?: boolean }) {
  // Repeat until one row is wider than any typical viewport, so the
  // -50% loop never leaves empty space on the right.
  const items = Array.from({ length: 3 }, () => WORDS).flat();

  return (
    <div className="flex shrink-0" aria-hidden={hidden || undefined}>
      {items.map((item, i) => (
        <span key={`${item}-${i}`} className="flex items-center gap-10 px-5">
          {item}
          <span className="h-2 w-2 shrink-0 rounded-full bg-pink" />
        </span>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <div className="overflow-hidden border-y border-white/15 bg-teal py-4 text-white">
      <div className="marquee-track flex w-max text-lg font-extrabold tracking-wide uppercase">
        <MarqueeRow />
        <MarqueeRow hidden />
      </div>
    </div>
  );
}
