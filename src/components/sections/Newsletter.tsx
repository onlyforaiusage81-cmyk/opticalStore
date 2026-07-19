"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
    window.setTimeout(() => setSubmitted(false), 3500);
  };

  return (
    <section className="section-py">
      <div className="container-px mx-auto max-w-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6 rounded-2xl bg-ink dark:bg-panel-dark px-8 py-14 text-center sm:px-16"
        >
          <p className="eyebrow text-accent-light">Stay in Focus</p>
          <h3 className="font-display text-3xl text-canvas sm:text-4xl max-w-xl text-balance">
            New arrivals and styling notes, once a month.
          </h3>
          <form
            onSubmit={handleSubmit}
            className="mt-4 flex w-full max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 rounded-sm border border-white/20 bg-white/5 px-5 py-3.5 text-sm text-canvas placeholder:text-canvas/50 outline-none focus:border-accent"
            />
            <Button type="submit" variant="accent" className="shrink-0">
              {submitted ? (
                <>
                  <Check size={16} /> Subscribed
                </>
              ) : (
                <>
                  <Send size={15} /> Subscribe
                </>
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
