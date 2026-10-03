import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../components/common/Button';

export default function FinalCTA() {
  const scrollTo = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 lg:py-28 bg-charcoal-900 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-forest-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-forest-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container-max section-padding text-center">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Let's Build the Right{' '}
            <span className="text-forest-400">Rubber Solution</span>
          </h2>
          <p className="text-charcoal-300 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Talk to our team about your product, application, or manufacturing
            requirement. We're ready to help you find the right solution.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              href="#quote"
              onClick={(e) => scrollTo(e, '#quote')}
              size="lg"
              icon={ArrowRight}
            >
              Request a Quote
            </Button>
            <Button
              href="#contact"
              onClick={(e) => scrollTo(e, '#contact')}
              variant="secondary"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10"
            >
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
