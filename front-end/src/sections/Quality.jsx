import { motion } from 'framer-motion';
import SectionHeader from '../components/common/SectionHeader';
import { certifications } from '../data/certifications';
import {
  Search, Eye, Ruler, Gauge, TestTubeDiagonal, ClipboardCheck, Award, ShieldCheck,
} from 'lucide-react';

const processes = [
  { icon: Search, title: 'Material Inspection', desc: 'Incoming raw material verification against specifications.' },
  { icon: Eye, title: 'Production Monitoring', desc: 'In-process quality checks during manufacturing.' },
  { icon: Ruler, title: 'Dimensional Inspection', desc: 'Precision measurement of finished products.' },
  { icon: Gauge, title: 'Hardness Testing', desc: 'Shore A/D durometer testing for compound verification.' },
  { icon: TestTubeDiagonal, title: 'Performance Testing', desc: 'Tensile, elongation, compression set, and aging tests.' },
  { icon: ClipboardCheck, title: 'Final Inspection', desc: 'Complete final review before packaging and dispatch.' },
];

export default function Quality() {
  return (
    <section id="quality" className="py-20 lg:py-28 bg-white">
      <div className="container-max section-padding">
        <SectionHeader
          eyebrow="Quality Assurance"
          title="Quality You Can Depend On"
          description="Quality is built into every step of our manufacturing process, from incoming material inspection through final product release."
        />

        {/* QA Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {processes.map((process, i) => (
            <motion.div
              key={process.title}
              className="relative bg-charcoal-50 rounded-xl p-6 border border-charcoal-100 hover:border-forest-200 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="w-11 h-11 rounded-lg bg-forest-100 text-forest-600 flex items-center justify-center mb-4">
                <process.icon size={22} />
              </div>
              <h3 className="font-display text-base font-bold text-charcoal-900 mb-1.5">
                {process.title}
              </h3>
              <p className="text-sm text-charcoal-500 leading-relaxed">{process.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          className="bg-charcoal-900 rounded-2xl p-8 lg:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-8">
            <ShieldCheck size={32} className="text-forest-400 mx-auto mb-3" />
            <h3 className="font-display text-2xl font-bold text-white mb-2">
              Standards & Certifications
            </h3>
            <p className="text-charcoal-400 text-sm">
              Placeholder — replace with actual certification details when available.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-charcoal-800 rounded-xl p-5 text-center border border-charcoal-700"
              >
                <Award size={28} className="text-forest-400 mx-auto mb-3" />
                <p className="font-display font-bold text-white mb-1">{cert.name}</p>
                <p className="text-xs text-charcoal-400">{cert.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
