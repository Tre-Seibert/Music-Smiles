import Link from "next/link";
import { CtaRow } from "@/components/CtaButtons";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="font-display text-5xl text-navy">Page not found</h1>
      <p className="mt-4 text-muted">Let’s get you back to the music.</p>
      <CtaRow className="mt-8 justify-center" />
      <Link href="/" className="mt-6 inline-block font-extrabold text-navy underline">
        Home
      </Link>
    </main>
  );
}
