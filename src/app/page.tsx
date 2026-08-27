import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { CtaButton, CtaRow } from "@/components/CtaButtons";
import { Marquee } from "@/components/Marquee";
import {
  IconDrum,
  IconEighth,
  IconHeart,
  IconMusic,
  IconNote,
  IconPiano,
  SmileMark,
} from "@/components/Icons";
import { site } from "@/lib/site";

const programs = [
  {
    title: "Music Play Days",
    copy: "Sing, dance, play instruments, and enjoy music together.",
    icon: IconMusic,
    color: "text-teal",
    tint: "bg-teal/10",
    image: "/images/kids-play.jpg",
  },
  {
    title: "Drumming & Rhythm",
    copy: "Fun, hands-on activities that encourage expression, confidence, and teamwork.",
    icon: IconDrum,
    color: "text-orange",
    tint: "bg-orange/10",
    image: "/images/drums.jpg",
  },
  {
    title: "Instrument Exploration",
    copy: "Discover different instruments and sounds in a relaxed, pressure-free environment.",
    icon: IconPiano,
    color: "text-purple",
    tint: "bg-purple/10",
    image: "/images/instruments.jpg",
  },
  {
    title: "Friendship & Social Activities",
    copy: "Games and group activities designed to encourage connection, communication, and friendship.",
    icon: IconHeart,
    color: "text-pink",
    tint: "bg-pink/10",
    image: "/images/friends.jpg",
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-teal/15 blur-3xl" />
          <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-pink/15 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-orange/10 blur-3xl" />
        </div>
        <IconNote className="float-note pointer-events-none absolute top-24 right-[7%] hidden h-10 w-10 text-pink/45 md:block" />
        <IconEighth className="float-note-slow pointer-events-none absolute top-40 left-[5%] hidden h-8 w-8 text-teal/45 sm:block" />
        <IconEighth className="float-note-fast pointer-events-none absolute top-10 left-[20%] hidden h-6 w-6 rotate-12 text-orange/40 lg:block" />
        <IconNote className="float-note-delay pointer-events-none absolute top-[18%] right-[22%] hidden h-9 w-9 -rotate-6 text-green/40 lg:block" />
        <IconEighth className="float-note pointer-events-none absolute top-[58%] left-[44%] hidden h-5 w-5 text-purple/35 lg:block" />
        <IconNote className="float-note-slow pointer-events-none absolute bottom-16 left-[10%] hidden h-8 w-8 -rotate-12 text-pink/40 sm:block" />
        <IconEighth className="float-note-fast pointer-events-none absolute right-[14%] bottom-20 hidden h-7 w-7 rotate-6 text-orange/40 md:block" />
        <IconEighth className="float-note-delay pointer-events-none absolute top-8 right-[38%] hidden h-5 w-5 text-teal/35 lg:block" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <div data-reveal>
            <p className="text-xs font-extrabold tracking-[0.28em] text-teal uppercase">
              Welcome to Music & Smiles
            </p>
            <h1 className="mt-4 font-display text-4xl leading-[1.08] text-navy sm:text-5xl lg:text-6xl">
              Every child deserves a place where they{" "}
              <span className="text-brand-gradient">belong.</span>
            </h1>
            <SmileMark className="mt-4 h-8 w-36 text-navy" />
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              We create joyful, inclusive musical experiences for children and
              teens with special needs. Through music, movement, and friendship,
              children can express themselves, build confidence, make
              connections, and simply have fun.
            </p>
            <CtaRow size="lg" className="mt-8" />
          </div>

          <div className="relative">
            <IconEighth className="float-note-fast pointer-events-none absolute -top-3 -left-2 z-10 hidden h-8 w-8 -rotate-12 text-orange/50 sm:block" />
            <IconNote className="float-note-slow pointer-events-none absolute -right-3 -bottom-2 z-10 hidden h-9 w-9 rotate-12 text-green/45 sm:block" />
            <div className="blob absolute -inset-4 bg-linear-to-br from-teal/30 via-pink/20 to-orange/20" />
            <div className="relative overflow-hidden rounded-[2.2rem] shadow-[0_30px_80px_rgba(21,86,95,0.18)]">
              <Image
                src="/images/anna-piano.png"
                alt="Anna Levitskiy, founder of Music & Smiles, at the piano"
                width={1200}
                height={1500}
                className="h-[28rem] w-full object-cover object-[50%_18%] sm:h-[34rem]"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-navy/80 to-transparent p-6 text-white">
                <p className="text-xs font-extrabold tracking-[0.2em] text-teal uppercase">
                  Founder
                </p>
                <p className="font-display text-2xl">Anna Levitskiy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="mission" className="brand-gradient scroll-mt-32 text-white">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <p className="text-xs font-extrabold tracking-[0.28em] text-white/80 uppercase">
            Our Mission
          </p>
          <h2 className="mt-5 font-display text-3xl leading-tight sm:text-4xl lg:text-[2.7rem]">
            To create joyful, inclusive musical experiences where children and
            teens with special needs can connect, socialize, and express
            themselves through music.
          </h2>
          <p className="mt-6 font-display text-2xl text-white">Play. Connect. Belong.</p>
        </div>
      </section>

      <Marquee />

      <section id="what-we-do" className="mx-auto max-w-6xl scroll-mt-32 px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-extrabold tracking-[0.28em] text-pink uppercase">
            What We Do
          </p>
          <h2 data-reveal className="mt-3 font-display text-4xl text-navy">
            Music, movement, and friendship — made for every child.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {programs.map((program) => (
            <article
              key={program.title}
              data-reveal
              className="group overflow-hidden rounded-[1.8rem] bg-white shadow-[0_16px_50px_rgba(21,86,95,0.08)]"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={program.image}
                  alt=""
                  fill
                  className="img-zoom object-cover"
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="p-6">
                <div className={`mb-3 grid h-11 w-11 place-items-center rounded-2xl ${program.tint} ${program.color}`}>
                  <program.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-2xl text-navy">{program.title}</h3>
                <p className="mt-2 text-muted">{program.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-sand">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="text-xs font-extrabold tracking-[0.28em] text-orange uppercase">
              Join the community
            </p>
          <h2 data-reveal className="mt-3 font-display text-4xl text-navy">
              Whether you’re a family, volunteer, musician, sponsor, or
              community partner — we’d love to have you.
            </h2>
            <CtaRow className="mt-8" />
          </div>
          <div className="relative h-72 overflow-hidden rounded-[2rem] sm:h-80">
            <Image
              src="/images/together.jpg"
              alt="People connecting together"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section id="story" className="mx-auto max-w-6xl scroll-mt-32 px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-extrabold tracking-[0.28em] text-purple uppercase">
            Our Story
          </p>
          <h2 data-reveal className="mt-3 font-display text-4xl text-navy">
            Meet Anna
          </h2>
        </div>

        <div className="mt-10 grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="mx-auto w-full max-w-sm overflow-hidden rounded-[2rem] bg-navy shadow-[0_24px_70px_rgba(0,24,84,0.2)] lg:mx-0">
            <video
              controls
              playsInline
              preload="metadata"
              poster="/images/anna-video-poster.jpg"
              className="aspect-[9/16] w-full bg-navy object-cover"
            >
              <source src="/video/anna-story.mov" type="video/quicktime" />
              <source src="/video/anna-story.mov" type="video/mp4" />
            </video>
          </div>

          <div className="lg:pt-4">
            <p className="font-display text-2xl leading-snug text-navy">
              Hi, I’m Anna Levitskiy, the 17-year-old founder of Music & Smiles.
            </p>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
              <p>
                I’ve been playing piano since I was four, and music has always
                been a huge part of my life.
              </p>
              <p>
                Through volunteering with children and teens with special needs,
                I discovered something even more meaningful — the incredible
                joy that comes from friendship, acceptance, and simply having a
                place where you belong.
              </p>
              <p>
                That experience inspired me to create Music & Smiles. I wanted
                a place where children with special needs could enjoy music,
                make friends, have fun, and always feel accepted for exactly
                who they are.
              </p>
              <p className="font-display text-xl text-navy">
                Every child deserves a place where they belong.
              </p>
              <p>
                This is just the beginning, and I hope you’ll be part of our
                journey as we spread more music, more friendship, and more
                smiles.
              </p>
              <p className="font-display text-xl text-pink">— Anna</p>
            </div>
          </div>
        </div>
      </section>

      <section id="who-we-help" className="relative scroll-mt-32 overflow-hidden">
        <Image
          src="/images/kids-play.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-teal/70" />
        <div className="relative mx-auto max-w-3xl px-4 py-20 text-center text-white sm:px-6">
          <p className="text-xs font-extrabold tracking-[0.28em] text-white uppercase">
            Who We Help
          </p>
          <h2 data-reveal className="mt-4 font-display text-4xl">
            Children and teens with special needs — and the families who love
            them.
          </h2>
          <p className="mt-5 text-lg text-white/85">
            No musical experience is necessary. Come as you are. You belong
            here.
          </p>
          <div className="mt-8 flex justify-center">
            <CtaButton variant="register" size="lg" onDark />
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl scroll-mt-32 px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-extrabold tracking-[0.28em] text-teal uppercase">
              Contact
            </p>
            <h2 data-reveal className="mt-3 font-display text-4xl text-navy">
              We’d love to hear from you.
            </h2>
            <p className="mt-4 text-muted">
              Programs and events are held at scheduled community locations.
              Advance registration is required. Event-specific location,
              parking, and accessibility details are shared with families before
              each event.
            </p>
            <div className="mt-8 space-y-3 text-navy">
              <p>
                <span className="font-extrabold">Email:</span>{" "}
                <a className="text-teal hover:underline" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </p>
              <p>
                <span className="font-extrabold">Phone:</span>{" "}
                <a className="text-teal hover:underline" href={`tel:${site.phone}`}>
                  {site.phoneDisplay}
                </a>
              </p>
              <p className="text-muted">{site.serviceArea}</p>
            </div>
            <CtaRow className="mt-8" />
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
