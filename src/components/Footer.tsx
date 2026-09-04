import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { IconFacebook, IconMail } from "./Icons";

const homeLinks = [
  { href: "/#mission", label: "Mission" },
  { href: "/#what-we-do", label: "What We Do" },
  { href: "/#story", label: "Our Story" },
  { href: "/#who-we-help", label: "Who We Help" },
  { href: "/#contact", label: "Contact" },
];

const involvedLinks = [
  { href: site.links.register, label: "Register a child", external: true },
  { href: "/get-involved#volunteer", label: "Volunteer" },
  { href: "/get-involved#events", label: "Events" },
  { href: "/get-involved#donate", label: "Donate" },
  { href: "/get-involved#gallery", label: "Gallery" },
];

function FooterLinks({
  items,
}: {
  items: { href: string; label: string; external?: boolean }[];
}) {
  return (
    <ul className="mt-4 space-y-2">
      {items.map((item) => (
        <li key={item.label}>
          {item.external ? (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white"
            >
              {item.label}
            </a>
          ) : (
            <Link href={item.href} className="text-white/80 hover:text-white">
              {item.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}

export function Footer() {
  return (
    <footer className="bg-linear-to-br from-teal to-teal-dark text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.15fr_0.9fr_0.9fr_1fr]">
        <div>
          <Image
            src="/images/logo-footer.png"
            alt="Music & Smiles"
            width={1109}
            height={990}
            sizes="(min-width: 640px) 108px, 90px"
            className="h-20 w-auto sm:h-24"
          />
          <p className="mt-5 font-display text-2xl text-white">{site.tagline}</p>
          <p className="mt-2 max-w-sm text-white/75">
            Creating joyful, inclusive experiences through the power of music.
          </p>
        </div>

        <div>
          <p className="text-xs font-extrabold tracking-[0.2em] text-white uppercase">Home</p>
          <FooterLinks items={homeLinks} />
        </div>

        <div>
          <p className="text-xs font-extrabold tracking-[0.2em] text-white uppercase">
            Get Involved
          </p>
          <FooterLinks items={involvedLinks} />
        </div>

        <div>
          <p className="text-xs font-extrabold tracking-[0.2em] text-white uppercase">Connect</p>
          <div className="mt-4 flex gap-3">
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
              aria-label="Facebook"
            >
              <IconFacebook className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${site.email}`}
              className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
              aria-label="Email"
            >
              <IconMail className="h-5 w-5" />
            </a>
          </div>
          <p className="mt-4 text-sm text-white/75">
            <a href={`mailto:${site.email}`} className="hover:text-white">
              {site.email}
            </a>
            <br />
            <a href={`tel:${site.phone}`} className="hover:text-white">
              {site.phoneDisplay}
            </a>
          </p>
          <p className="mt-4 text-sm text-white/60">{site.serviceArea}</p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>{site.nonprofit}</p>
          <p>© {new Date().getFullYear()} Music & Smiles</p>
        </div>
      </div>
      <div className="cta-bar-clearance border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-3 text-center text-sm sm:px-6">
          <a
            href="https://www.fishtownwebdesign.com/charity"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 underline-offset-2 hover:text-white hover:underline"
          >
            Designed by Fishtown Web Design
          </a>
        </div>
      </div>
    </footer>
  );
}
