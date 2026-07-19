"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { faqs } from "@/lib/data";

export default function FAQ() {
  return (
    <section className="section-py bg-beige-soft/30 dark:bg-white/[0.015]">
      <div className="container-px mx-auto max-w-3xl">
        <SectionHeading eyebrow="FAQ" title="Questions, answered" />

        <Accordion.Root type="single" collapsible className="mt-14 space-y-4">
          {faqs.map((faq, i) => (
            <Accordion.Item
              key={i}
              value={`item-${i}`}
              className="overflow-hidden rounded-lg border border-line dark:border-line-dark bg-white/50 dark:bg-white/[0.02]"
            >
              <Accordion.Header>
                <Accordion.Trigger className="group flex w-full items-center justify-between px-6 py-5 text-left">
                  <span className="font-display text-lg text-ink dark:text-ink-dark pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className="shrink-0 text-accent transition-transform duration-300 group-data-[state=open]:rotate-180"
                  />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden text-sm leading-relaxed text-muted dark:text-muted-dark data-[state=open]:animate-[accordionDown_0.3s_ease-out] data-[state=closed]:animate-[accordionUp_0.3s_ease-out]">
                <div className="px-6 pb-6">{faq.answer}</div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
