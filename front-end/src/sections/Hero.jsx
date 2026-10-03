import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Button from '../components/common/Button';

export default function Hero() {
  const scrollTo = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-charcoal-900"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/95 via-charcoal-900/80 to-charcoal-900/60 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1920&q=80)',
          }}
        />
      </div>

      {/* Decorative element */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-forest-900/20 to-transparent z-10 hidden lg:block" />

      {/* Content */}
      <div className="relative z-20 container-max section-padding w-full py-32 lg:py-40">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            className="inline-flex items-center gap-2 bg-forest-600/20 border border-forest-500/30 rounded-full px-4 py-1.5 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="w-2 h-2 rounded-full bg-forest-400 animate-pulse" />
            <span className="text-forest-300 text-xs font-semibold tracking-widest uppercase">
              Nepal Rubber Manufacturing
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Engineered Rubber Solutions{' '}
            <span className="text-forest-400">Built for Performance.</span>
          </motion.h1>

          {/* Supporting text */}
          <motion.p
            className="text-lg sm:text-xl text-charcoal-300 leading-relaxed mb-10 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Reliable rubber products and manufacturing solutions designed for
            demanding industrial and commercial applications.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button
              href="#products"
              onClick={(e) => scrollTo(e, '#products')}
              size="lg"
              icon={ArrowRight}
            >
              Explore Our Products
            </Button>
            <Button
              href="#quote"
              onClick={(e) => scrollTo(e, '#quote')}
              variant="secondary"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10"
            >
              Request a Quote
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        onClick={(e) => scrollTo(e, '#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-charcoal-400 hover:text-white transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        aria-label="Scroll to About section"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  );
}
