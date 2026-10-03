import { motion } from 'framer-motion';
import { ArrowRight, Ruler, Thermometer, FlaskConical, Settings2, Layers, Target } from 'lucide-react';
import Button from '../components/common/Button';

const capabilities = [
  { icon: Ruler, label: 'Custom Dimensions' },
  { icon: Settings2, label: 'Hardness Specifications' },
  { icon: Layers, label: 'Material Selection' },
  { icon: Thermometer, label: 'Temperature Resistance' },
  { icon: FlaskConical, label: 'Chemical Resistance' },
  { icon: Target, label: 'Application-Specific Design' },
];

export default function CustomSolutions() {
  const scrollTo = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-20 lg:py-28 bg-forest-900 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative container-max section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-forest-300 mb-4">
              Custom Engineering
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Built Around Your Requirements
            </h2>
            <p className="text-forest-200 leading-relaxed mb-8 text-lg">
              Every industrial application has unique demands. Our custom rubber
              solutions are developed around your specific dimensions, material
              requirements, and operating conditions — from concept through
              production.
            </p>
            <Button
              href="#quote"
              onClick={(e) => scrollTo(e, '#quote')}
              variant="white"
              size="lg"
              icon={ArrowRight}
            >
              Discuss Your Requirement
            </Button>
          </motion.div>

          {/* Right: Capability Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.label}
                className="bg-white/10 border border-white/10 rounded-xl p-5 text-center hover:bg-white/15 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <cap.icon size={28} className="text-forest-300 mx-auto mb-3" />
                <p className="text-sm font-medium text-white">{cap.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
