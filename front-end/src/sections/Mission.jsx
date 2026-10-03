import { motion } from 'framer-motion';
import { Target } from 'lucide-react';

export default function Mission() {
  return (
    <section id="mission" className="py-20 lg:py-28 bg-forest-900 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-forest-950/80 z-10" />
        <img
          src="/images/himalayan-tyres.jpg"
          alt="Truck on mountain road in Nepal"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 container-max max-w-3xl mx-auto section-padding">
        <div className="mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 rounded-2xl bg-rust-600 text-white flex items-center justify-center mx-auto mb-6">
              <Target size={32} />
            </div>
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-forest-300 mb-4">
              Our Mission
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
              Our Mission
            </h2>
            <p className="text-xl sm:text-2xl lg:text-3xl text-forest-100 leading-relaxed font-display font-medium">
              To deliver reliable, high-performance tyre solutions built for
              Nepal's roads and conditions through quality, safety and continuous
              innovation—while supporting local manufacturing and creating value
              for customers, people and communities.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
