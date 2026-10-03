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
    <section className="py-20 lg:py-28 bg-white" aria-label="Testimonials">
      <div className="container-max section-padding">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-forest-600 mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 leading-tight">
            What Our Customers Say
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-charcoal-50 rounded-2xl p-8 lg:p-12 min-h-[280px] flex items-center">
            <Quote size={48} className="absolute top-6 left-6 text-forest-200" />
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 text-center"
              >
                <p className="text-charcoal-700 text-lg leading-relaxed mb-8 italic">
                  "{t.testimonial}"
                </p>
                <div>
                  <p className="font-display font-bold text-charcoal-900">{t.name}</p>
                  <p className="text-sm text-charcoal-500">
                    {t.company} · {t.industry}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-charcoal-200 flex items-center justify-center text-charcoal-500 hover:bg-charcoal-100 hover:text-charcoal-700 transition-colors cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors cursor-pointer ${
                    i === current ? 'bg-forest-600' : 'bg-charcoal-200'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-charcoal-200 flex items-center justify-center text-charcoal-500 hover:bg-charcoal-100 hover:text-charcoal-700 transition-colors cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <p className="text-xs text-charcoal-400 text-center mt-6">
            * Placeholder testimonials — replace with actual customer feedback.
          </p>
        </div>
      </div>
    </section>
  );
}
