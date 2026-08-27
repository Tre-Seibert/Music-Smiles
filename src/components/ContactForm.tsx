"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

export function ContactForm({ id = "contact-form" }: { id?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const role = String(data.get("role") || "");
    const message = String(data.get("message") || "");

    const subject = encodeURIComponent(`Music & Smiles contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nI am a: ${role}\n\n${message}`,
    );

    setStatus("sending");
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    window.setTimeout(() => setStatus("sent"), 400);
  }

  return (
    <form id={id} onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm font-bold text-navy">
          Name
          <input
            required
            name="name"
            autoComplete="name"
            className="rounded-2xl border border-navy/10 bg-white px-4 py-3 font-semibold text-ink outline-none focus:border-teal"
          />
        </label>
        <label className="grid gap-1.5 text-sm font-bold text-navy">
          Email
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            className="rounded-2xl border border-navy/10 bg-white px-4 py-3 font-semibold text-ink outline-none focus:border-teal"
          />
        </label>
      </div>
      <label className="grid gap-1.5 text-sm font-bold text-navy">
        I am a…
        <select
          name="role"
          className="rounded-2xl border border-navy/10 bg-white px-4 py-3 font-semibold text-ink outline-none focus:border-teal"
          defaultValue="Family"
        >
          <option>Family</option>
          <option>Volunteer</option>
          <option>Sponsor / Donor</option>
          <option>Community Partner</option>
          <option>Other</option>
        </select>
      </label>
      <label className="grid gap-1.5 text-sm font-bold text-navy">
        Message
        <textarea
          required
          name="message"
          rows={5}
          className="resize-y rounded-2xl border border-navy/10 bg-white px-4 py-3 font-semibold text-ink outline-none focus:border-teal"
        />
      </label>
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-teal px-6 py-3.5 text-sm font-extrabold tracking-wide text-white uppercase transition hover:bg-teal-dark"
      >
        {status === "sent" ? "Opening email…" : "Send message"}
      </button>
      <p className="text-sm text-muted">
        This opens your email app so your message goes directly to {site.email}.
      </p>
    </form>
  );
}
