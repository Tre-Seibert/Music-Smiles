import Link from "next/link";
import { CtaRow } from "@/components/CtaButtons";

export const metadata = {
  title: "Thank you",
};

export default function ThankYouPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-24 text-center">
      <p className="text-xs font-extrabold tracking-[0.28em] text-teal uppercase">
        Music & Smiles
      </p>
      <h1 className="mt-4 font-display text-5xl text-navy">Thank you.</h1>
      <p className="mt-4 text-lg text-muted">
        Your message means the world. We’ll be in touch soon.
      </p>
      <CtaRow className="mt-8 justify-center" />
      <Link href="/" className="mt-8 inline-block font-extrabold text-navy underline">
        Back home
      </Link>
    </main>
  );
}
