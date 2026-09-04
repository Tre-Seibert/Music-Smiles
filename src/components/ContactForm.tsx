"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

const FORMS_ENDPOINT = "https://forms.fishtownwebdesign.com/api/submit";
const FORMS_API_KEY = process.env.NEXT_PUBLIC_FISHTOWN_FORMS_API_KEY;

export function ContactForm({ id = "contact-form" }: { id?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const role = String(data.get("role") || "");
    const message = String(data.get("message") || "");
    const botcheck = String(data.get("botcheck") || "");

    setStatus("sending");
    try {
      const response = await fetch(FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          apiKey: FORMS_API_KEY,
          from_name: "Music & Smiles website",
          subject: `Music & Smiles contact from ${name}`,
          botcheck,
          Name: name,
          Email: email,
          "I am a": role,
          Message: message,
        }),
      });

      if (!response.ok) throw new Error("Submission failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="grid gap-2 rounded-[1.6rem] bg-teal/10 p-8 text-center">
        <p className="font-display text-2xl text-navy">Thank you!</p>
        <p className="text-muted">
          Your message has been sent. We’ll be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form id={id} onSubmit={onSubmit} className="grid gap-4">
      <input
        type="text"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />
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
        disabled={status === "sending"}
        className="inline-flex items-center justify-center rounded-full bg-teal px-6 py-3.5 text-sm font-extrabold tracking-wide text-white uppercase transition hover:bg-teal-dark disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
      <p className="text-sm text-muted">
        {status === "error"
          ? "Something went wrong sending your message. Please try again, or email us directly."
          : <>Your message goes directly to {site.email}.</>}
      </p>
    </form>
  );
}
