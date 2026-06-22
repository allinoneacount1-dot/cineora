"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data?.error ?? "Something went wrong. Try again?");
        return;
      }

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Check your connection and retry.");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="mt-12 max-w-[520px] border border-aurora/40 bg-aurora/5 px-6 py-5"
      >
        <p className="label text-aurora mb-2">You&apos;re on the list</p>
        <p className="text-text text-[14px] leading-[1.6]">
          The first dispatch arrives when the next chapter opens. Until then,
          the door is yours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mt-12 max-w-[520px] flex flex-col sm:flex-row gap-3"
      noValidate
    >
      <label htmlFor="waitlist-email" className="sr-only">
        Email address
      </label>
      <input
        id="waitlist-email"
        type="email"
        inputMode="email"
        autoComplete="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={status === "submitting"}
        placeholder="your@protocol.email"
        aria-invalid={status === "error"}
        aria-describedby={status === "error" ? "waitlist-error" : undefined}
        className="flex-1 bg-transparent border border-rule-strong px-4 py-3.5 text-text text-[14px] placeholder:text-text-faint focus:border-aurora transition-colors duration-500 disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={status === "submitting" || !email}
        className="btn-cineora group whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span>
          {status === "submitting" ? "Joining…" : "Join the waitlist"}
        </span>
        <span aria-hidden="true">→</span>
      </button>
      {status === "error" && (
        <p
          id="waitlist-error"
          role="alert"
          className="sm:col-span-2 mt-1 text-danger text-[12px]"
        >
          {errorMsg}
        </p>
      )}
    </form>
  );
}
