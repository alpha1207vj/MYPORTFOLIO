"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { PERSONAL } from "@/data";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
      e.preventDefault();
  setStatus("sending");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! }
      );
      setStatus("sent");
      formRef.current?.reset();
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  }

  return (
    <section id="contact" className="py-12 reveal" style={{ borderTop: "1px solid rgba(250,179,135,0.10)" }}>
      <h2 className="mb-2 font-serif text-2xl sm:text-3xl">Get in Touch</h2>
      <p className="mb-6 text-xs sm:text-sm text-white/40">
        Contact me directly at{" "}
        <a href={`mailto:${PERSONAL.email}`} className="text-accent hover:underline">
          {PERSONAL.email}
        </a>{" "}
        or through this form.
      </p>

      <form ref={formRef} onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label className="font-mono text-xs tracking-widest text-white/40">NAME</label>
          <input
            type="text"
            name="from_name"
            required
            placeholder="Your name"
            className="rounded-lg px-3.5 py-2.5 text-sm outline-none text-[#f0ede8] placeholder:text-white/20 transition-colors"
            style={{ background: "#252535", border: "1px solid rgba(250,179,135,0.10)" }}
            onFocus={(e) => (e.target.style.borderColor = "#FAB387")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(250,179,135,0.10)")}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="font-mono text-xs tracking-widest text-white/40">EMAIL</label>
          <input
            type="email"
            name="from_email"
            required
            placeholder="your@email.com"
            className="rounded-lg px-3.5 py-2.5 text-sm outline-none text-[#f0ede8] placeholder:text-white/20 transition-colors"
            style={{ background: "#252535", border: "1px solid rgba(250,179,135,0.10)" }}
            onFocus={(e) => (e.target.style.borderColor = "#FAB387")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(250,179,135,0.10)")}
          />
        </div>
        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label className="font-mono text-xs tracking-widest text-white/40">MESSAGE</label>
          <textarea
            rows={5}
            name="message"
            required
            placeholder="What's on your mind?"
            className="rounded-lg px-3.5 py-2.5 text-sm outline-none text-[#f0ede8] placeholder:text-white/20 resize-none transition-colors"
            style={{ background: "#252535", border: "1px solid rgba(250,179,135,0.10)" }}
            onFocus={(e) => (e.target.style.borderColor = "#FAB387")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(250,179,135,0.10)")}
          />
        </div>
        <div className="flex justify-end sm:col-span-2">
          <button
            type="submit"
            disabled={status === "sending" || status === "sent"}
            className="inline-flex items-center gap-2 font-mono text-xs font-medium px-5 py-2.5 rounded-full tracking-wide transition-all duration-200 disabled:opacity-70"
            style={{ background: "#FAB387", color: "#1E1E2E" }}
          >
            {status === "sending" && "Sending..."}
            {status === "sent" && "Sent ✓"}
            {status === "error" && "Failed — try again"}
            {status === "idle" && "Send message →"}
          </button>
        </div>
        {status === "error" && (
          <p className="font-mono text-xs text-red-400 sm:col-span-2">
            Something went wrong. Please email me directly at {PERSONAL.email}
          </p>
        )}
      </form>
    </section>
  );
}