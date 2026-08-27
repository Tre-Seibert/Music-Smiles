"use client";

import { FormEvent, useMemo, useState } from "react";
import { site } from "@/lib/site";

const amounts = [25, 50, 100, 250];

export function DonateForm() {
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("one-time");
  const [amount, setAmount] = useState<number | "custom">(50);
  const [custom, setCustom] = useState("");
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const selected = useMemo(() => {
    if (amount === "custom") {
      const n = Number(custom);
      return Number.isFinite(n) && n > 0 ? n : 0;
    }
    return amount;
  }, [amount, custom]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");

    const subject = encodeURIComponent(
      `Donation — $${selected} ${frequency} from ${name}`,
    );
    const body = encodeURIComponent(
      `I would like to make a ${frequency} gift of $${selected} to Music & Smiles.\n\nName: ${name}\nEmail: ${email}\nMessage: ${message || "(none)"}\n\nPlease send a secure payment link and a tax receipt.`,
    );

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[2rem] bg-white p-6 shadow-[0_24px_80px_rgba(0,24,84,0.12)] sm:p-8"
    >
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
        disabled={!selected}
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-teal px-6 py-3.5 text-sm font-extrabold tracking-wide text-white uppercase hover:bg-teal-dark disabled:opacity-50"
      >
        Continue to give
      </button>
      <p className="mt-3 text-sm text-muted">
        {status === "sent"
          ? "Your email app should open so we can send a secure payment link and receipt."
          : "We’ll follow up with a secure payment link and a written acknowledgment. Gifts of $250+ include the tax language required by law. No goods or services are provided in exchange for contributions."}
      </p>
    </form>
  );
}
