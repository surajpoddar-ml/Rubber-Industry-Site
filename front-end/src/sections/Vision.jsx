import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';

export default function Vision() {
  return (
    <section id="vision" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="container-max max-w-4xl mx-auto section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-14 h-14 rounded-2xl bg-forest-50 text-forest-600 flex items-center justify-center mb-6">
              <Eye size={28} />
            </div>
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-forest-600 mb-4">
              Our Vision
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 leading-tight mb-8">
              Our Vision
            </h2>
            <p className="text-xl sm:text-2xl text-charcoal-700 leading-relaxed font-display font-medium border-l-4 border-forest-500 pl-6">
              To become Nepal's most trusted home-grown tyre brand, recognised
              for reliability, innovation and quality, while building a strong,
              sustainable manufacturing ecosystem and expanding into regional and
              international markets.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="/images/himalayan-tyres.jpg"
                alt="Nepal mountain landscape representing future mobility and HIMALAYAN TYRES"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
