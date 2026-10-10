"use client";

import { useState, useId } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Reveal } from "./Reveal";
import { FAQ_DATA } from "./constants";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const id = useId();
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="faq-item">
      <h3>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={id}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span>{question}</span>
          <ChevronDown
            className={`lucide-chevron-down ${isOpen ? "rotate" : ""}`}
            size={19}
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
            transition={{ duration: shouldReduceMotion ? 0 : 0.22 }}
            className="faq-answer"
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const leftFaqs = FAQ_DATA.slice(0, 3);
  const rightFaqs = FAQ_DATA.slice(3, 6);

  return (
    <section id="faq" className="faq-section faq-polish-section">
      <div className="container-page">
        <Reveal className="center-heading faq-heading">
          <p className="section-kicker">Pertanyaan umum</p>
          <h2>Pertanyaan yang Sering Diajukan</h2>
          <p>Jawaban umum seputar layanan, syarat sewa, dan pemesanan di Rental99.</p>
        </Reveal>

        <div className="faq-grid">
          <div>
            {leftFaqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
          <div>
            {rightFaqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
