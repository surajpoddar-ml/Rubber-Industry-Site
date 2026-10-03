import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Award, Mountain, TrendingUp, HeartHandshake } from 'lucide-react';

const values = [
  {
    title: 'Performance',
    description: 'We measure ourselves by how our products perform in the real world.',
    icon: Zap,
    color: 'text-rust-600 bg-rust-50',
  },
  {
    title: 'Reliability',
    description: 'We build products and services customers can depend on.',
    icon: ShieldCheck,
    color: 'text-forest-600 bg-forest-50',
  },
  {
    title: 'Accountability',
    description: 'We take responsibility for the customer experience beyond the sale.',
    icon: Award,
    color: 'text-amber-600 bg-amber-50',
  },
  {
    title: 'Nepalese Ingenuity',
    description: "We develop solutions informed by Nepal's roads, terrain and operating conditions.",
    icon: Mountain,
    color: 'text-sky-600 bg-sky-50',
  },
  {
    title: 'Responsible Growth',
    description: 'We pursue commercially, socially and environmentally sustainable growth.',
    icon: TrendingUp,
    color: 'text-emerald-600 bg-emerald-50',
  },
  {
    title: 'Customer Trust',
    description: 'We build long-term relationships through transparency, dependable service and consistent product value.',
    icon: HeartHandshake,
    color: 'text-indigo-600 bg-indigo-50',
  },
];

export default function CoreValues() {
  return (
    <section id="values" className="py-8 lg:py-10 bg-charcoal-50/60">
      <div className="container-max section-padding">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-forest-600 mb-1">
            Our Core Values
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-charcoal-900 leading-tight">
            What We Stand For
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                className="group bg-white p-5 rounded-xl border border-charcoal-100 hover:border-forest-300 shadow-xs hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <div className="flex items-center gap-3.5 mb-2.5">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 ${value.color}`}>
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display text-base font-bold text-charcoal-900 group-hover:text-forest-700 transition-colors">
                    {value.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
