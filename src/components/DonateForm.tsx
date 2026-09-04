"use client";

import { FormEvent, useMemo, useState } from "react";
import { site } from "@/lib/site";

const FORMS_ENDPOINT = "https://forms.fishtownwebdesign.com/api/submit";
const FORMS_API_KEY = process.env.NEXT_PUBLIC_FISHTOWN_FORMS_API_KEY;

const amounts = [25, 50, 100, 250];

export function DonateForm() {
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("one-time");
  const [amount, setAmount] = useState<number | "custom">(50);
  const [custom, setCustom] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const selected = useMemo(() => {
    if (amount === "custom") {
      const n = Number(custom);
      return Number.isFinite(n) && n > 0 ? n : 0;
    }
    return amount;
  }, [amount, custom]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!selected) return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");
    const botcheck = String(data.get("botcheck") || "");
    const frequencyLabel = frequency === "monthly" ? "Monthly" : "One-time";

    setStatus("sending");
    try {
      const response = await fetch(FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          apiKey: FORMS_API_KEY,
          from_name: "Music & Smiles website",
          subject: `Music & Smiles donation — $${selected} ${frequency} from ${name}`,
          botcheck,
          Name: name,
          Email: email,
          Amount: `$${selected}`,
          Frequency: frequencyLabel,
          Message: message || "(none)",
          Note: "Please send a secure payment link and a tax receipt.",
        }),
      });

      if (!response.ok) throw new Error("Submission failed");
      setStatus("sent");
      form.reset();
      setCustom("");
      setAmount(50);
      setFrequency("one-time");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-[2rem] bg-teal/10 p-8 text-center shadow-[0_24px_80px_rgba(0,24,84,0.12)]">
        <p className="font-display text-2xl text-navy">Thank you!</p>
        <p className="mt-2 text-muted">
          Your donation request has been sent. We’ll follow up with a secure
          payment link and written acknowledgment soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[2rem] bg-white p-6 shadow-[0_24px_80px_rgba(0,24,84,0.12)] sm:p-8"
    >
      <input
        type="text"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />
      <div className="grid grid-cols-2 rounded-full bg-sand p-1">
        <button
          type="button"
          onClick={() => setFrequency("one-time")}
          className={`rounded-full py-2.5 text-sm font-extrabold uppercase ${
            frequency === "one-time" ? "bg-white text-navy shadow" : "text-muted"
          }`}
        >
          One-time
        </button>
        <button
          type="button"
          onClick={() => setFrequency("monthly")}
          className={`rounded-full py-2.5 text-sm font-extrabold uppercase ${
            frequency === "monthly" ? "bg-white text-navy shadow" : "text-muted"
          }`}
        >
          Monthly
        </button>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {amounts.map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => setAmount(value)}
            className={`rounded-2xl border-2 px-3 py-3 font-extrabold ${
              amount === value
                ? "border-teal bg-teal/10 text-navy"
                : "border-navy/10 text-navy hover:border-teal/40"
            }`}
          >
            ${value}
          </button>
        ))}
      </div>

      <label className="mt-3 grid gap-1.5 text-sm font-bold text-navy">
        Other amount
        <input
          inputMode="decimal"
          name="customAmount"
          placeholder="$"
          value={custom}
          onFocus={() => setAmount("custom")}
          onChange={(e) => {
            setAmount("custom");
            setCustom(e.target.value.replace(/[^\d.]/g, ""));
          }}
          className="rounded-2xl border border-navy/10 bg-cream px-4 py-3 font-semibold outline-none focus:border-teal"
        />
      </label>

      <p className="mt-4 font-display text-3xl text-navy">
        ${selected || "0"}{" "}
        <span className="text-lg text-muted">
          {frequency === "monthly" ? "per month" : "one-time"}
        </span>
      </p>

      <div className="mt-6 grid gap-4">
        <label className="grid gap-1.5 text-sm font-bold text-navy">
          Name
          <input
            required
            name="name"
            className="rounded-2xl border border-navy/10 bg-cream px-4 py-3 font-semibold outline-none focus:border-teal"
          />
        </label>
        <label className="grid gap-1.5 text-sm font-bold text-navy">
          Email
          <input
            required
            type="email"
            name="email"
            className="rounded-2xl border border-navy/10 bg-cream px-4 py-3 font-semibold outline-none focus:border-teal"
          />
        </label>
        <label className="grid gap-1.5 text-sm font-bold text-navy">
          Optional message
          <textarea
            name="message"
            rows={3}
            className="rounded-2xl border border-navy/10 bg-cream px-4 py-3 font-semibold outline-none focus:border-teal"
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={!selected || status === "sending"}
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-teal px-6 py-3.5 text-sm font-extrabold tracking-wide text-white uppercase hover:bg-teal-dark disabled:opacity-50"
      >
        {status === "sending" ? "Sending…" : "Continue to give"}
      </button>
      <p className="mt-3 text-sm text-muted">
        {status === "error"
          ? `Something went wrong. Please try again, or email ${site.email} directly.`
          : "We’ll follow up with a secure payment link and a written acknowledgment. Gifts of $250+ include the tax language required by law. No goods or services are provided in exchange for contributions."}
      </p>
    </form>
  );
}
