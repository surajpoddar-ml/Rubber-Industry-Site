import { motion } from 'framer-motion';
import { ShieldCheck, Wrench, Brain, Truck, Headset, MapPin } from 'lucide-react';

const reasons = [
  { icon: ShieldCheck, title: 'Consistent Quality', desc: 'Rigorous quality control at every stage of production ensures reliable product performance.' },
  { icon: Wrench, title: 'Custom Solutions', desc: 'Purpose-built rubber products developed around your specific requirements and conditions.' },
  { icon: Brain, title: 'Technical Expertise', desc: 'Experienced team with deep knowledge of rubber compounds, processes, and applications.' },
  { icon: Truck, title: 'Reliable Supply', desc: 'Dependable production scheduling and delivery to keep your operations running smoothly.' },
  { icon: Headset, title: 'Customer Support', desc: 'Responsive communication and technical assistance from inquiry through delivery.' },
  { icon: MapPin, title: 'Nepal-Based Manufacturing', desc: 'Local manufacturing with competitive pricing and accessibility for domestic and regional markets.' },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-charcoal-50" aria-label="Why choose us">
      <div className="container-max section-padding">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-forest-600 mb-4">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 leading-tight">
            Why Work With Nepal Rubber Tech
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              className="bg-white rounded-xl p-7 border border-charcoal-100 hover:border-forest-200 hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="w-12 h-12 rounded-xl bg-forest-50 text-forest-600 flex items-center justify-center mb-5">
                <reason.icon size={24} />
              </div>
              <h3 className="font-display text-lg font-bold text-charcoal-900 mb-2">
                {reason.title}
              </h3>
              <p className="text-sm text-charcoal-500 leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
