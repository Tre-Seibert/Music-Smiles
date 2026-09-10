"use client";

import { useMemo, useState } from "react";
import { site } from "@/lib/site";

const amounts = [25, 50, 100, 250];

export function DonateForm() {
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("one-time");
  const [amount, setAmount] = useState<number | "custom">(50);
  const [custom, setCustom] = useState("");

  const selected = useMemo(() => {
    if (amount === "custom") {
      const n = Number(custom);
      return Number.isFinite(n) && n > 0 ? n : 0;
    }
    return amount;
  }, [amount, custom]);

  return (
    <form
      action={site.links.givebutter}
      method="GET"
      className="rounded-[2rem] bg-white p-6 shadow-[0_24px_80px_rgba(0,24,84,0.12)] sm:p-8"
    >
      <input type="hidden" name="amount" value={selected || ""} />
      <input
        type="hidden"
        name="frequency"
        value={frequency === "monthly" ? "monthly" : "once"}
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

      <button
        type="submit"
        disabled={!selected}
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-teal px-6 py-3.5 text-sm font-extrabold tracking-wide text-white uppercase hover:bg-teal-dark disabled:opacity-50"
      >
        Continue to give
      </button>
      <p className="mt-3 text-sm text-muted">
        You’ll continue to a secure checkout to complete your gift. Givebutter
        will send a written acknowledgment. Gifts of $250+ include the tax
        language required by law. No goods or services are provided in exchange
        for contributions.
      </p>
    </form>
  );
}
