"use client";

import { useState, useId } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Reveal } from "./Reveal";
import { FAQ_DATA } from "./constants";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const id = useId();
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xs transition duration-200 hover:border-blue-200">
      <h3>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={id}
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex w-full cursor-pointer items-center justify-between p-4 sm:p-5 text-left text-xs sm:text-sm font-bold text-[#0F172A] transition hover:bg-slate-50/50"
        >
          <span className="pr-3 leading-snug">{question}</span>
          <ChevronDown
            className={`size-4 shrink-0 text-[#2563EB] transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          />
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={id}
            role="region"
            initial={!shouldReduceMotion ? { height: 0, opacity: 0 } : false}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
            className="overflow-hidden border-t border-slate-100 bg-slate-50/40"
          >
            <p className="p-4 sm:p-5 text-xs text-[#64748B] leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="relative overflow-hidden bg-gradient-to-b from-[#F0F7FF]/35 via-white to-white py-16 sm:py-20 lg:py-24 border-b border-blue-100/60">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center mb-10 sm:mb-12">
          <Reveal>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50/90 px-3.5 py-1 text-xs font-bold text-[#2563EB] shadow-2xs">
              <HelpCircle className="size-3.5" />
              <span>Pertanyaan Umum</span>
            </div>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#0F172A] sm:text-3xl lg:text-4xl">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#475569]">
              Informasi lengkap seputar pemesanan armada, fasilitas, dan ketentuan layanan Rental99 di Lombok.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto max-w-3xl space-y-3">
          {FAQ_DATA.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
