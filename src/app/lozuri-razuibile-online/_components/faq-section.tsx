import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { lozuriRazuibileFaqs } from '@/data/lozuri-razuibile';

export function FaqSection() {
  return (
    <section id="faq" className="py-14 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <div className="w-10 h-1 bg-orange-500 rounded-full mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
            Intrebari Frecvente (FAQ)
          </h2>
          <p className="text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            Raspunsuri la cele mai comune intrebari despre lozurile razuibile online
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {lozuriRazuibileFaqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-2xl border border-gray-200 bg-white px-6 data-[state=open]:border-orange-200 data-[state=open]:shadow-sm transition-all"
              >
                <AccordionTrigger className="text-left text-base font-semibold font-mono text-gray-900 hover:text-orange-600 py-5 [&[data-state=open]]:text-orange-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-600 leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
