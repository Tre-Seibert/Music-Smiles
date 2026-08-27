import Link from "next/link";
import { site } from "@/lib/site";
import { IconArrow } from "./Icons";

type Variant = "register" | "volunteer" | "donate";

const styles: Record<
  Variant,
  { href: string; label: string; className: string; external?: boolean }
> = {
  register: {
    href: site.links.register,
    label: "Register",
    external: true,
    className:
      "bg-pink text-white shadow-pink/25 hover:bg-pink-dark focus-visible:outline-pink",
  },
  volunteer: {
    href: site.links.volunteer,
    label: "Volunteer",
    external: true,
    className:
      "bg-green text-white shadow-green/25 hover:bg-green-dark focus-visible:outline-green",
  },
  donate: {
    href: site.links.donate,
    label: "Donate",
    className:
      "bg-teal text-white shadow-teal/25 hover:bg-teal-dark focus-visible:outline-teal",
  },
};

export function CtaButton({
  variant,
  size = "md",
  onDark = false,
  className = "",
}: {
  variant: Variant;
  size?: "sm" | "md" | "lg";
  onDark?: boolean;
  className?: string;
}) {
  const item = styles[variant];
  const sizing =
    size === "lg"
      ? "px-6 py-3.5 text-base"
      : size === "sm"
        ? "px-3.5 py-2 text-xs"
        : "px-5 py-2.5 text-sm";

  const darkVolunteer =
    onDark && variant === "volunteer"
      ? "bg-white text-navy shadow-black/10 hover:bg-cream focus-visible:outline-white"
      : item.className;

  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-extrabold tracking-wide uppercase shadow-lg transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 ${sizing} ${darkVolunteer} ${className}`;

  if (item.external) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" className={classes}>
        {item.label}
        {size !== "sm" ? <IconArrow className="h-4 w-4" /> : null}
      </a>
    );
  }

  return (
    <Link href={item.href} className={classes}>
      {item.label}
      {size !== "sm" ? <IconArrow className="h-4 w-4" /> : null}
    </Link>
  );
}

export function CtaRow({
  size = "md",
  onDark = false,
  className = "",
}: {
  size?: "sm" | "md" | "lg";
  onDark?: boolean;
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <CtaButton variant="register" size={size} onDark={onDark} />
      <CtaButton variant="volunteer" size={size} onDark={onDark} />
      <CtaButton variant="donate" size={size} onDark={onDark} />
    </div>
  );
}
