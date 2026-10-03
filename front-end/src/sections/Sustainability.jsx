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

const impactStats = [
  { label: 'Waste Reduction Target', value: 'Placeholder' },
  { label: 'Recycled Material Usage', value: 'Placeholder' },
  { label: 'Energy Efficiency Goal', value: 'Placeholder' },
];

export default function Sustainability() {
  return (
    <section id="sustainability" className="py-20 lg:py-28 bg-forest-50 relative overflow-hidden">
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-forest-600 mb-4">
              Sustainability
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 leading-tight mb-6">
              Manufacturing with Responsibility
            </h2>
            <p className="text-charcoal-600 leading-relaxed mb-10 text-lg">
              We are committed to operating responsibly and reducing the
              environmental impact of our manufacturing processes. From material
              selection to waste management, sustainability is part of how we work.
            </p>
          </motion.div>

          {/* Initiatives Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
            {initiatives.map((item, i) => (
              <motion.div
                key={item.title}
                className="flex items-start gap-4 bg-white/80 rounded-xl p-5 border border-forest-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="w-10 h-10 rounded-lg bg-forest-100 text-forest-600 flex items-center justify-center shrink-0">
                  <item.icon size={20} />
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold text-charcoal-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-charcoal-500 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Impact Stats */}
          <motion.div
            className="bg-white rounded-xl border border-forest-100 p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-display text-lg font-bold text-charcoal-900 mb-4">
              Environmental Impact Goals
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {impactStats.map((stat) => (
                <div key={stat.label} className="text-center p-3 bg-forest-50 rounded-lg">
                  <p className="font-display text-lg font-bold text-forest-700">{stat.value}</p>
                  <p className="text-xs text-charcoal-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-charcoal-400 mt-4 text-center">
              * Placeholder values — replace with actual environmental metrics.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
