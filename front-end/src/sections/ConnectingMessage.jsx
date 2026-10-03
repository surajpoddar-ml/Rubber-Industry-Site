import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function ConnectingMessage() {
  return (
    <section className="py-20 lg:py-28 bg-charcoal-900 relative overflow-hidden">
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Connecting quote */}
          <p className="text-lg sm:text-xl text-charcoal-300 leading-relaxed mb-12 italic">
            "From Nepal's roads to Nepal's businesses, our focus remains simple:
            build products people can depend on."
          </p>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px w-16 bg-charcoal-700" />
            <div className="w-2 h-2 rounded-full bg-rust-500" />
            <div className="h-px w-16 bg-charcoal-700" />
          </div>

          {/* HIMALAYAN TYRES intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-rust-400 mb-4">
              Introducing
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              HIMALAYAN TYRES
            </h2>
            <p className="text-xl sm:text-2xl text-forest-300 font-display font-medium mb-8">
              Built for the Roads That Test You.
            </p>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowDown size={28} className="text-charcoal-500 mx-auto" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
