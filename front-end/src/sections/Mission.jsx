import { motion } from 'framer-motion';
import { Target } from 'lucide-react';

export default function Mission() {
  return (
    <section id="mission" className="py-8 lg:py-10 bg-forest-900 relative overflow-hidden">
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
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-12 h-12 rounded-xl bg-rust-600 text-white flex items-center justify-center mx-auto mb-3">
              <Target size={24} />
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight mb-4">
              Our Mission
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-forest-100 leading-relaxed font-display font-medium bg-forest-950/50 p-5 sm:p-6 rounded-xl border border-forest-800/40 backdrop-blur-xs">
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
