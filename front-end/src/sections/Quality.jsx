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
    <section id="quality" className="py-10 lg:py-14 bg-white">
      <div className="container-max section-padding">
        <SectionHeader
          eyebrow="Quality Assurance"
          title="Quality You Can Depend On"
          description="Quality is built into every step of our manufacturing process, from incoming material inspection through final product release."
        />

        {/* QA Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {processes.map((process, i) => (
            <motion.div
              key={process.title}
              className="relative bg-charcoal-50 rounded-xl p-4 border border-charcoal-100 hover:border-forest-200 transition-colors shadow-xs"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <div className="w-9 h-9 rounded-lg bg-forest-100 text-forest-600 flex items-center justify-center mb-3">
                <process.icon size={18} />
              </div>
              <h3 className="font-display text-sm font-bold text-charcoal-900 mb-1">
                {process.title}
              </h3>
              <p className="text-xs text-charcoal-500 leading-relaxed">{process.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          className="bg-charcoal-900 rounded-2xl p-5 lg:p-7 shadow-lg"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="text-center mb-5">
            <ShieldCheck size={28} className="text-forest-400 mx-auto mb-2" />
            <h3 className="font-display text-xl font-bold text-white">
              Standards & Certifications
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-charcoal-800/90 rounded-xl p-3.5 text-center border border-charcoal-700/60"
              >
                <Award size={22} className="text-forest-400 mx-auto mb-2" />
                <p className="font-display font-bold text-white text-sm mb-0.5">{cert.name}</p>
                <p className="text-xs text-charcoal-400">{cert.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
