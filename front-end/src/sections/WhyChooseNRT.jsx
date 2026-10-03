import { motion } from 'framer-motion';
import { Mountain, Gauge, Truck, Headphones, Factory, ShieldCheck } from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';

const features = [
  {
    title: 'Engineered for Nepal',
    description: "Designed with Nepal's roads, terrain and operating conditions in mind.",
    icon: Mountain,
    color: 'text-rust-600 bg-rust-50 border-rust-200',
  },
  {
    title: 'Performance You Can Measure',
    description: 'We focus on real-world testing, durability, tyre life and operating value rather than promises alone.',
    icon: Gauge,
    color: 'text-forest-600 bg-forest-50 border-forest-200',
  },
  {
    title: 'Built for Business',
    description: 'Our B2B solutions are designed around fleet uptime, lifecycle value, service continuity and dependable supply.',
    icon: Truck,
    color: 'text-amber-600 bg-amber-50 border-amber-200',
  },
  {
    title: 'Local Support',
    description: 'Being closer to our customers means faster communication, stronger service relationships and greater accountability.',
    icon: Headphones,
    color: 'text-sky-600 bg-sky-50 border-sky-200',
  },
  {
    title: 'Made in Nepal',
    description: 'We are strengthening Nepalese manufacturing while creating local industrial and technical capabilities.',
    icon: Factory,
    color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
  },
  {
    title: 'Beyond the Tyre',
    description: 'Our commitment extends to responsible manufacturing, skills development, road safety and more sustainable tyre management.',
    icon: ShieldCheck,
    color: 'text-indigo-600 bg-indigo-50 border-indigo-200',
  },
];

export default function WhyChooseNRT() {
  return (
    <section className="py-20 lg:py-28 bg-charcoal-50/50" aria-label="Why Choose NRT">
      <div className="container-max section-padding">
        <SectionHeader
          eyebrow="Why Choose NRT"
          title="Why Choose NRT?"
          description="At NRT, we believe a tyre should be designed for the road it actually travels on. Through HIMALAYAN TYRES, we are building application-focused solutions for mountain and mixed-road environments."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className="group relative bg-white p-8 rounded-2xl border border-charcoal-100 hover:border-forest-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div>
                  {/* Top row: Icon + Badge number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-xl border flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${feature.color}`}>
                      <Icon size={28} />
                    </div>
                    <span className="text-xs font-bold font-mono text-charcoal-400 bg-charcoal-100 px-2.5 py-1 rounded-full">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-charcoal-900 mb-3 group-hover:text-forest-700 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-charcoal-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-charcoal-50 flex items-center text-xs font-semibold text-forest-600 group-hover:text-rust-600 transition-colors">
                  <span>NRT Advantage</span>
                  <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
