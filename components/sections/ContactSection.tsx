"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { sectionContainer, scrollReveal, scrollRevealDelayed } from "@/lib/animations";

type FormState = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const [message, setMessage] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [errorText, setErrorText] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!message.trim() || state === "loading") return;

    setState("loading");
    setErrorText("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error ?? "Something went wrong");
      }

      setState("success");
      setMessage("");
    } catch (err) {
      setState("error");
      setErrorText(
        err instanceof Error ? err.message : "Something went wrong. Try again?"
      );
    }
  }

  return (
    <section
      id="contact"
      className="py-32 px-6 pb-40"
    >
      <motion.div
        className="max-w-xl mx-auto"
        variants={sectionContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Section label */}
        <motion.p
          variants={scrollReveal}
          className="text-xs font-mono uppercase tracking-[0.3em] mb-4"
          style={{ color: "var(--color-text-muted)" }}
        >
          Get in touch
        </motion.p>

        <motion.h2
          variants={scrollReveal}
          className="text-3xl font-bold mb-12 tracking-tight"
          style={{ color: "var(--color-heading)" }}
        >
          Say hello.
        </motion.h2>

        {state === "success" ? (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="py-12 text-center"
          >
            {/* Hand-drawn style checkmark decoration */}
            <svg
              className="mx-auto mb-6"
              width="48" height="48" viewBox="0 0 48 48" fill="none"
              aria-hidden="true"
            >
              <circle cx="24" cy="24" r="20" stroke="var(--color-accent)" strokeWidth="1.5" />
              <path d="M15 24l7 7 12-14" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="text-xl font-medium mb-2" style={{ color: "var(--color-heading)" }}>
              Message sent.
            </p>
            <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
              I&rsquo;ll be in touch soon.
            </p>
          </motion.div>
        ) : (
          <motion.form
            variants={scrollRevealDelayed}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <label htmlFor="contact-message" className="sr-only">
              Your message
            </label>
            <textarea
              id="contact-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Say something nice — or don't, I can handle it."
              required
              rows={6}
              className="w-full rounded-2xl p-5 text-sm resize-none focus:outline-none"
              style={{
                backgroundColor: "var(--color-surface-alt)",
                color: "var(--color-text)",
                border: "1px solid var(--color-border)",
                // Custom focus ring via box-shadow to support neon in filip-mode
                boxShadow: "none",
                transition: "border-color 200ms ease, box-shadow 200ms ease",
                cursor: "none",
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "var(--color-accent)";
                e.currentTarget.style.boxShadow =
                  "0 0 0 3px var(--color-border)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "var(--color-border)";
                e.currentTarget.style.boxShadow = "none";
              }}
            />

            {state === "error" && (
              <motion.p
                role="alert"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-red-500"
              >
                {errorText}
              </motion.p>
            )}

            <div className="flex justify-end">
              <motion.button
                type="submit"
                disabled={state === "loading" || !message.trim()}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="px-7 py-3 rounded-full text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: "var(--color-accent)",
                  color: "var(--color-bg)",
                  cursor: state === "loading" || !message.trim() ? "not-allowed" : "none",
                }}
              >
                {state === "loading" ? "Sending…" : "Send →"}
              </motion.button>
            </div>
          </motion.form>
        )}

        {/* Footer — minimal */}
        <motion.div
          variants={scrollRevealDelayed}
          className="mt-20 pt-8 border-t flex items-center justify-between"
          style={{ borderColor: "var(--color-border)" }}
        >
          <span className="text-xs font-mono" style={{ color: "var(--color-text-muted)" }}>
            filip.se
          </span>
          <span className="text-xs" style={{ color: "var(--color-text-muted)" }}>
            &copy; {new Date().getFullYear()}
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
