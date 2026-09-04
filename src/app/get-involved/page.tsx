import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { CtaButton, CtaRow } from "@/components/CtaButtons";
import { DonateForm } from "@/components/DonateForm";
import { events } from "@/lib/events";
import { gallery } from "@/lib/gallery";
import { emptyEventsMessage, site } from "@/lib/site";

export const metadata = {
  title: "Get Involved",
};

const volunteerWays = [
  "Be a buddy to a child",
  "Help with music, dancing, games, and crafts",
  "Welcome families and assist with registration",
  "Help set up and clean up",
  "Share your musical talents",
  "Help create a fun and supportive environment",
];

function formatDate(value: string) {
  const date = new Date(`${value}T12:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function GetInvolvedPage() {
  const upcoming = [...events].sort((a, b) => a.date.localeCompare(b.date));

  return (
    <main>
      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/get-involved-hero.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-br from-teal/90 via-green/80 to-orange/70" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-24">
          <p className="text-xs font-extrabold tracking-[0.28em] text-white uppercase">
            Get Involved
          </p>
          <h1 className="mt-4 font-display text-4xl sm:text-6xl">
            Be part of something special.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">
            There are many ways to become part of Music & Smiles — register a
            child, volunteer, donate, or sponsor an event.
          </p>
          <CtaRow className="mt-8 justify-center" size="lg" onDark />
        </div>
      </section>

      <section id="volunteer" className="mx-auto max-w-6xl scroll-mt-32 px-4 py-16 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-extrabold tracking-[0.28em] text-pink uppercase">
              Volunteer
            </p>
            <h2 data-reveal className="mt-3 font-display text-4xl text-navy">
              Help make every event welcoming, fun, and inclusive.
            </h2>
            <p className="mt-4 text-muted">
              No musical experience is required — just kindness and a willingness
              to help.
            </p>
            <ul className="mt-6 space-y-3">
              {volunteerWays.map((item) => (
                <li key={item} className="flex gap-3 text-navy">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-pink" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <CtaButton variant="volunteer" size="lg" />
            </div>
          </div>
          <div className="group relative h-80 overflow-hidden rounded-[2rem] sm:h-[28rem]">
            <Image
              src="/images/volunteer-buddy.jpg"
              alt="A teen volunteer helping a younger child play a tambourine, both laughing"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="img-zoom object-cover"
            />
          </div>
        </div>
      </section>

      <section id="events" className="scroll-mt-32 bg-sand">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-xs font-extrabold tracking-[0.28em] text-orange uppercase">
            Attend an Event
          </p>
          <h2 data-reveal className="mt-3 font-display text-4xl text-navy">
            Upcoming Events
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Music • Instruments • Drumming • Dancing • Games • Crafts •
            Friendship • Lots of Smiles
          </p>

          {upcoming.length === 0 ? (
            <div className="mt-8 rounded-[2rem] bg-white p-8 text-center shadow-[0_16px_50px_rgba(0,24,84,0.08)] sm:p-12">
              <p className="font-display text-2xl text-navy">{emptyEventsMessage}</p>
              <div className="mt-6 flex justify-center">
                <CtaButton variant="register" />
              </div>
            </div>
          ) : (
            <div className="mt-8 grid gap-5">
              {upcoming.map((event) => (
                <article
                  key={`${event.name}-${event.date}`}
                  className="rounded-[1.8rem] bg-white p-6 shadow-[0_16px_50px_rgba(0,24,84,0.08)] sm:p-8"
                >
                  <p className="text-sm font-extrabold tracking-wide text-teal uppercase">
                    {formatDate(event.date)} · {event.time}
                  </p>
                  <h3 className="mt-2 font-display text-3xl text-navy">{event.name}</h3>
                  <p className="mt-1 font-bold text-navy/70">{event.location}</p>
                  <p className="mt-3 max-w-3xl text-muted">{event.description}</p>
                  <div className="mt-5">
                    <a
                      href={event.registerUrl || site.links.register}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex rounded-full bg-pink px-5 py-2.5 text-sm font-extrabold tracking-wide text-white uppercase hover:bg-pink-dark"
                    >
                      Register
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <section id="donate" className="mx-auto max-w-6xl scroll-mt-32 px-4 py-16 pb-8 sm:px-6">
        <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-xs font-extrabold tracking-[0.28em] text-teal uppercase">
              Support Our Mission
            </p>
            <h2 data-reveal className="mt-3 font-display text-4xl text-navy">
              Every gift creates a smile.
            </h2>
            <p className="mt-4 text-muted">
              Every gift helps us provide instruments, activity supplies,
              sensory-friendly materials, event spaces, and inclusive programs
              for children with special needs.
            </p>
            <p className="mt-4 font-bold text-navy">
              100% of donations directly support Music & Smiles programs and
              events.
            </p>
            <p className="mt-4 text-sm text-muted">{site.nonprofit}</p>
            <div className="mt-8 rounded-[1.6rem] bg-sand p-6">
              <h3 className="font-display text-2xl text-navy">
                Larger gifts & sponsorships
              </h3>
              <p className="mt-2 text-muted">
                Interested in making a larger gift or sponsoring an event?
                Contact us to talk about donations, sponsorships, or other ways
                to support Music & Smiles.
              </p>
              <Link
                href="/#contact"
                className="mt-4 inline-flex text-sm font-extrabold tracking-wide text-teal uppercase hover:underline"
              >
                Contact us
              </Link>
            </div>
            <p className="mt-6 text-sm text-muted">
              Other ways to help: donate instruments or supplies • sponsor an
              event • volunteer • share our mission
            </p>
          </div>
          <DonateForm />
        </div>
      </section>

      <section id="gallery" className="scroll-mt-32 bg-linear-to-br from-teal to-green text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-xs font-extrabold tracking-[0.28em] text-white uppercase">
            Gallery
          </p>
          <h2 data-reveal className="mt-3 font-display text-4xl">
            Smiles coming soon
          </h2>
          <p className="mt-3 max-w-2xl text-white/75">
            Photos and videos from our first Music & Smiles events will be
            shared here. Follow along as our community grows.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
            {gallery.map((item, index) => (
              <figure
                key={item.src}
                className={`relative overflow-hidden rounded-[1.4rem] ${
                  index === 0 ? "col-span-2 row-span-2 min-h-72" : "min-h-40"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className={`object-cover ${item.imageClass ?? ""}`}
                />
                {item.caption ? (
                  <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-navy/70 to-transparent p-3 text-sm font-bold">
                    {item.caption}
                  </figcaption>
                ) : null}
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl scroll-mt-32 px-4 py-16 pb-28 sm:px-6 md:pb-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-extrabold tracking-[0.28em] text-pink uppercase">
              Contact
            </p>
            <h2 className="mt-3 font-display text-4xl text-navy">Let’s connect.</h2>
            <p className="mt-4 text-muted">
              Families, volunteers, and partners can reach us anytime. Register,
              volunteer, and donate stay one tap away.
            </p>
            <CtaRow className="mt-8" />
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
