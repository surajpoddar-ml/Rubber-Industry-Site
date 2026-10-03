import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';

export default function Vision() {
  return (
    <section id="vision" className="py-8 lg:py-10 bg-white relative overflow-hidden">
      <div className="container-max max-w-3xl mx-auto section-padding">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-12 h-12 rounded-xl bg-forest-50 text-forest-600 flex items-center justify-center mx-auto mb-3 shadow-sm border border-forest-100">
            <Eye size={24} />
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-charcoal-900 leading-tight mb-4">
            Our Vision
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-charcoal-800 leading-relaxed font-display font-medium bg-forest-50/50 p-5 sm:p-6 rounded-xl border border-forest-100 shadow-sm">
            "To become Nepal's most trusted home-grown tyre brand, recognised
            for reliability, innovation and quality, while building a strong,
            sustainable manufacturing ecosystem and expanding into regional and
            international markets."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
