"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CtaButton } from "./CtaButtons";
import { IconClose, IconMenu } from "./Icons";

const pages = [
  { href: "/", label: "Home" },
  { href: "/get-involved", label: "Get Involved" },
];

function isActivePage(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-navy/8 bg-cream/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6">
        <Link
          href="/"
          className="flex shrink-0 items-center"
          aria-label="Music & Smiles home"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/logo-nav-horizontal.png"
            alt="Music & Smiles"
            width={1536}
            height={405}
            priority
            sizes="(min-width: 1024px) 420px, (min-width: 640px) 360px, 280px"
            className="h-14 w-auto max-w-[min(100%,300px)] sm:h-[4.5rem] sm:max-w-[400px] lg:h-20 lg:max-w-[460px]"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {pages.map((item) => {
            const active = isActivePage(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-extrabold tracking-wide uppercase transition-colors ${
                  active ? "bg-teal text-white" : "text-navy/70 hover:bg-teal/10 hover:text-navy"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <CtaButton variant="register" size="sm" />
          <CtaButton variant="volunteer" size="sm" />
          <CtaButton variant="donate" size="sm" />
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-navy/10 bg-white text-navy lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-navy/8 bg-cream px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {pages.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-3 text-base font-extrabold text-navy"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 grid grid-cols-1 gap-2 md:hidden">
            <CtaButton variant="register" />
            <CtaButton variant="volunteer" />
            <CtaButton variant="donate" />
          </div>
        </div>
      ) : null}
    </header>
  );
}
