import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="py-10 lg:py-14 bg-white" aria-label="Testimonials">
      <div className="container-max section-padding">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-forest-600 mb-1">
            Testimonials
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-charcoal-900 leading-tight">
            What Our Customers Say
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-2xl mx-auto">
          <div className="relative bg-charcoal-50 rounded-xl p-5 sm:p-6 lg:p-8 min-h-[190px] flex items-center shadow-xs border border-charcoal-100">
            <Quote size={32} className="absolute top-4 left-4 text-forest-200" />
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 text-center w-full"
              >
                <p className="text-charcoal-700 text-sm sm:text-base leading-relaxed mb-4 italic">
                  "{t.testimonial}"
                </p>
                <div>
                  <p className="font-display font-bold text-charcoal-900 text-sm">{t.name}</p>
                  <p className="text-xs text-charcoal-500">
                    {t.company} · {t.industry}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <button
              onClick={prev}
              className="w-8 h-8 rounded-full border border-charcoal-200 flex items-center justify-center text-charcoal-500 hover:bg-charcoal-100 hover:text-charcoal-700 transition-colors cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${
                    i === current ? 'bg-forest-600' : 'bg-charcoal-200'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-8 h-8 rounded-full border border-charcoal-200 flex items-center justify-center text-charcoal-500 hover:bg-charcoal-100 hover:text-charcoal-700 transition-colors cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
