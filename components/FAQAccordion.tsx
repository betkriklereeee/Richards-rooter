"use client";

import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
  headingLevel?: "h2" | "h3" | "h4";
  includeLd?: boolean;
}

export default function FAQAccordion({ faqs, headingLevel = "h3", includeLd = true }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const Heading = headingLevel as keyof JSX.IntrinsicElements;

  const ldJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      {includeLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
        />
      )}
      <div className="space-y-2">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          const triggerId = `faq-trigger-${i}`;
          const panelId = `faq-panel-${i}`;
          return (
            <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
              <Heading className="m-0">
                <button
                  id={triggerId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="w-full flex items-center justify-between px-4 py-4 text-left font-semibold text-navy hover:bg-light-gray transition-colors min-h-[44px]"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span>{faq.question}</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                    className={`flex-shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </Heading>
              <div
                id={panelId}
                role="region"
                aria-labelledby={triggerId}
                hidden={!isOpen}
                className="px-4 pb-4 text-gray-700 text-sm leading-relaxed"
              >
                {faq.answer}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
