"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Check, Loader2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import LensMotif from "@/components/ui/LensMotif";

interface AppointmentForm {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  message: string;
}

export default function BookAppointment() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AppointmentForm>();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 900));
    setSubmitted(true);
    reset();
    window.setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="appointment" className="relative section-py overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-beige-soft via-canvas to-beige-soft dark:from-panel-dark dark:via-canvas-dark dark:to-panel-dark" />
      <LensMotif className="pointer-events-none absolute -left-16 -top-16 h-72 w-72 text-accent/20" spin="slow" />
      <LensMotif className="pointer-events-none absolute -bottom-20 -right-16 h-80 w-80 text-accent/15" spin="slower" />

      <div className="container-px relative mx-auto max-w-container">
        <SectionHeading
          eyebrow="Book Appointment"
          title="Reserve your eye test"
          description="Fifteen minutes with our optometrist is enough to know exactly what your eyes need."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="glass-panel mx-auto mt-14 max-w-3xl rounded-2xl p-6 shadow-card-hover sm:p-10"
        >
          {submitted ? (
            <div className="flex flex-col items-center gap-4 py-14 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-canvas">
                <Check size={28} />
              </div>
              <h3 className="font-display text-2xl text-ink dark:text-ink-dark">
                Appointment requested
              </h3>
              <p className="max-w-sm text-sm text-muted dark:text-muted-dark">
                We&apos;ll call you shortly to confirm your slot. Thank you for choosing Vision Optics.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="mb-1.5 block text-xs uppercase tracking-wide text-muted dark:text-muted-dark">
                  Full Name
                </label>
                <input
                  {...register("name", { required: "Please enter your name" })}
                  placeholder="Your name"
                  className="w-full rounded-sm border border-ink/15 dark:border-white/15 bg-canvas/70 dark:bg-canvas-dark/50 px-4 py-3 text-sm text-ink dark:text-ink-dark placeholder:text-muted/70 outline-none focus:border-accent"
                />
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
              </div>

              <div className="sm:col-span-1">
                <label className="mb-1.5 block text-xs uppercase tracking-wide text-muted dark:text-muted-dark">
                  Phone Number
                </label>
                <input
                  {...register("phone", {
                    required: "Please enter your phone number",
                    pattern: { value: /^[0-9+\s-]{7,15}$/, message: "Enter a valid phone number" },
                  })}
                  placeholder="+91 98765 43210"
                  className="w-full rounded-sm border border-ink/15 dark:border-white/15 bg-canvas/70 dark:bg-canvas-dark/50 px-4 py-3 text-sm text-ink dark:text-ink-dark placeholder:text-muted/70 outline-none focus:border-accent"
                />
                {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
              </div>

              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-xs uppercase tracking-wide text-muted dark:text-muted-dark">
                  Email Address
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Please enter your email",
                    pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email" },
                  })}
                  placeholder="you@email.com"
                  className="w-full rounded-sm border border-ink/15 dark:border-white/15 bg-canvas/70 dark:bg-canvas-dark/50 px-4 py-3 text-sm text-ink dark:text-ink-dark placeholder:text-muted/70 outline-none focus:border-accent"
                />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
              </div>

              <div className="sm:col-span-1">
                <label className="mb-1.5 block text-xs uppercase tracking-wide text-muted dark:text-muted-dark">
                  Preferred Date
                </label>
                <input
                  type="date"
                  {...register("date", { required: "Please select a date" })}
                  className="w-full rounded-sm border border-ink/15 dark:border-white/15 bg-canvas/70 dark:bg-canvas-dark/50 px-4 py-3 text-sm text-ink dark:text-ink-dark outline-none focus:border-accent"
                />
                {errors.date && <p className="mt-1 text-xs text-red-500">{errors.date.message}</p>}
              </div>

              <div className="sm:col-span-1">
                <label className="mb-1.5 block text-xs uppercase tracking-wide text-muted dark:text-muted-dark">
                  Preferred Time
                </label>
                <input
                  type="time"
                  {...register("time", { required: "Please select a time" })}
                  className="w-full rounded-sm border border-ink/15 dark:border-white/15 bg-canvas/70 dark:bg-canvas-dark/50 px-4 py-3 text-sm text-ink dark:text-ink-dark outline-none focus:border-accent"
                />
                {errors.time && <p className="mt-1 text-xs text-red-500">{errors.time.message}</p>}
              </div>

              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-xs uppercase tracking-wide text-muted dark:text-muted-dark">
                  Message (optional)
                </label>
                <textarea
                  {...register("message")}
                  rows={3}
                  placeholder="Tell us about any specific concerns…"
                  className="w-full resize-none rounded-sm border border-ink/15 dark:border-white/15 bg-canvas/70 dark:bg-canvas-dark/50 px-4 py-3 text-sm text-ink dark:text-ink-dark placeholder:text-muted/70 outline-none focus:border-accent"
                />
              </div>

              <div className="sm:col-span-2">
                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> Booking…
                    </>
                  ) : (
                    "Book Appointment"
                  )}
                </Button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
