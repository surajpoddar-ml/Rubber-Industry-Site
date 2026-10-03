import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function ConnectingMessage() {
  return (
    <section className="py-8 lg:py-12 bg-charcoal-900 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative container-max section-padding text-center">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Connecting quote */}
          <p className="text-base sm:text-lg text-charcoal-300 leading-relaxed mb-5 italic font-display">
            "From Nepal's roads to Nepal's businesses, our focus remains simple:
            build products people can depend on."
          </p>

          {/* Divider */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-12 bg-charcoal-700" />
            <div className="w-1.5 h-1.5 rounded-full bg-rust-500" />
            <div className="h-px w-12 bg-charcoal-700" />
          </div>

          {/* HIMALAYAN TYRES intro */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-rust-400 mb-2">
              Introducing
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-2">
              HIMALAYAN TYRES
            </h2>
            <p className="text-lg sm:text-xl text-forest-300 font-display font-medium mb-4">
              Built for the Roads That Test You.
            </p>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowDown size={22} className="text-charcoal-500 mx-auto" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
