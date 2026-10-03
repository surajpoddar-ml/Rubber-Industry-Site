import { motion } from 'framer-motion';
import {
  Leaf, Recycle, Droplets, Zap, Factory, TreePine,
} from 'lucide-react';

const initiatives = [
  { icon: Leaf, title: 'Responsible Material Use', desc: 'Careful selection and efficient use of raw materials to minimize waste.' },
  { icon: Droplets, title: 'Waste Reduction', desc: 'Process optimization to reduce material waste and production by-products.' },
  { icon: Recycle, title: 'Rubber Recycling', desc: 'Recycling and reprocessing of rubber scrap and production waste.' },
  { icon: Zap, title: 'Energy Efficiency', desc: 'Efficient equipment operation and energy management in manufacturing.' },
  { icon: Factory, title: 'Responsible Production', desc: 'Clean and responsible production practices in our facility.' },
  { icon: TreePine, title: 'Environmental Awareness', desc: 'Commitment to environmental awareness throughout our operations.' },
];

export default function Sustainability() {
  return (
    <section id="sustainability" className="py-8 lg:py-10 bg-forest-50 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-r from-forest-50 via-forest-50/90 to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80"
          alt="Green forest"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="relative z-10 container-max section-padding">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-forest-600 mb-1">
              Sustainability
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-charcoal-900 leading-tight mb-4">
              Manufacturing with Responsibility
            </h2>
          </motion.div>

          {/* Initiatives Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {initiatives.map((item, i) => (
              <motion.div
                key={item.title}
                className="flex items-start gap-3 bg-white/80 rounded-xl p-3.5 border border-forest-100 shadow-xs"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <div className="w-8 h-8 rounded-lg bg-forest-100 text-forest-600 flex items-center justify-center shrink-0">
                  <item.icon size={16} />
                </div>
                <div>
                  <h3 className="font-display text-xs sm:text-sm font-bold text-charcoal-900 mb-0.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-charcoal-500 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
