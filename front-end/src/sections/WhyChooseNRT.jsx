import { motion } from 'framer-motion';
import { Mountain, Gauge, Truck, Headphones, Factory, ShieldCheck } from 'lucide-react';

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
    <section className="py-10 lg:py-14 bg-charcoal-50/50" aria-label="Why Choose NRT">
      <div className="container-max section-padding">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-charcoal-900 leading-tight">
            Why Choose NRT?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className="group relative bg-white p-5 rounded-xl border border-charcoal-100 hover:border-forest-300 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-11 h-11 rounded-lg border flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${feature.color}`}>
                      <Icon size={22} />
                    </div>
                    <span className="text-xs font-bold font-mono text-charcoal-400 bg-charcoal-100 px-2 py-0.5 rounded-full">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-charcoal-900 mb-1.5 group-hover:text-forest-700 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
