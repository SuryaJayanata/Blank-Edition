import React, { useState } from 'react';
import { Plus, Minus, ArrowRight } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How do you curate and inspect preloved items?',
      answer: 'Every single garment undergoes a strict inspection by our head curators. We verify 100% authenticity, inspect zippers, seams, and fabric condition, and deep-clean & sterilize every item before it drops.'
    },
    {
      question: 'What condition can I expect from preloved clothing?',
      answer: 'We clearly state the exact condition rating for every item (e.g. 9.5/10 Like New, 9.8/10 Pristine). All items are sanitized, professionally steamed, and ready to wear straight out of the box.'
    },
    {
      question: 'How fast is shipping and delivery?',
      answer: 'Orders placed before 15:00 WIB are dispatched on the same day. We offer express nationwide shipping across Indonesia with free delivery on orders over Rp 350.000.'
    },
    {
      question: 'Are all items one-of-a-kind (1-of-1)?',
      answer: 'Yes! Because our catalog consists of curated vintage and thrift grails, each item is 1-of-1 in a specific size. If you see a piece you love, grab it before it sells out.'
    },
    {
      question: 'What is your return or exchange policy?',
      answer: 'If an item condition does not match our description or if there is any defect not mentioned in the listing, we offer a 100% hassle-free return or exchange within 3 days of delivery.'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-18 bg-zinc-100 text-zinc-950 px-4 sm:px-8 lg:px-12 w-full overflow-hidden">
      <div className="max-w-[1700px] mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start border-b border-zinc-300 pb-8">
          <div className="lg:col-span-5 space-y-2">
            <h2 className="font-display font-black text-3xl sm:text-5xl text-zinc-950 tracking-tight leading-none">
              Need Help?
            </h2>
          </div>

          <div className="lg:col-span-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-zinc-600 font-medium leading-relaxed max-w-lg">
              Got questions about our thrifting curation process, sizing, shipping, or returns? We've got clear answers for you.
            </p>

            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noreferrer"
              className="bg-black hover:bg-yellow-400 hover:text-black text-white font-extrabold px-5 py-2.5 rounded-sm text-xs inline-flex items-center space-x-2 transition-all shadow-md shrink-0 self-start sm:self-auto"
            >
              <span>Contact Support</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Accordion List Box (Micro Rounded) */}
        <div className="max-w-4xl mx-auto space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-zinc-950 rounded-sm overflow-hidden shadow-sm transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none group"
                >
                  <span className="font-display font-extrabold text-base sm:text-xl text-zinc-950 tracking-tight group-hover:text-yellow-600 transition-colors">
                    {faq.question}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-zinc-100 group-hover:bg-yellow-400 text-zinc-950 flex items-center justify-center shrink-0 transition-colors">
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 border-t border-zinc-100 text-xs sm:text-sm text-zinc-600 font-medium leading-relaxed">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
