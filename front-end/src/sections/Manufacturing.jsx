import { motion } from 'framer-motion';
import SectionHeader from '../components/common/SectionHeader';
import { Factory, Gauge, Settings } from 'lucide-react';

const steps = [
  {
    step: '01',
    title: 'Material Selection',
    description: 'Selecting the right rubber compound based on application requirements, environmental conditions, and performance criteria.',
  },
  {
    step: '02',
    title: 'Compounding',
    description: 'Mixing raw rubber with additives, fillers, and curing agents to create the precise compound formulation.',
  },
  {
    step: '03',
    title: 'Molding / Extrusion',
    description: 'Shaping the rubber compound through compression molding, injection molding, or extrusion processes.',
  },
  {
    step: '04',
    title: 'Finishing',
    description: 'Trimming, grinding, surface treatment, and post-cure operations to meet dimensional and surface specifications.',
  },
  {
    step: '05',
    title: 'Quality Testing',
    description: 'Hardness, tensile, dimensional, and performance testing to verify product meets specifications.',
  },
  {
    step: '06',
    title: 'Packaging & Dispatch',
    description: 'Careful packaging, labeling, and documentation preparation for safe and traceable delivery.',
  },
];

const capabilities = [
  { icon: Factory, label: 'Manufacturing Area', value: 'Placeholder', note: '(Replace with actual)' },
  { icon: Settings, label: 'Production Lines', value: 'Placeholder', note: '(Replace with actual)' },
  { icon: Gauge, label: 'Monthly Capacity', value: 'Placeholder', note: '(Replace with actual)' },
];

export default function Manufacturing() {
  return (
    <section id="manufacturing" className="py-20 lg:py-28 bg-charcoal-50">
      <div className="container-max section-padding">
        <SectionHeader
          eyebrow="Our Process"
          title="Manufacturing Built Around Quality"
          description="Every product we manufacture goes through a structured process designed for consistency, quality, and reliability."
        />

        {/* Timeline - Desktop: Horizontal, Mobile: Vertical */}
        <div className="mb-20">
          {/* Desktop horizontal timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connector line */}
              <div className="absolute top-12 left-0 right-0 h-0.5 timeline-line" />

              <div className="grid grid-cols-6 gap-4">
                {steps.map((step, i) => (
                  <motion.div
                    key={step.step}
                    className="relative text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    {/* Step circle */}
                    <div className="relative z-10 w-24 h-24 mx-auto mb-5 rounded-full bg-white border-2 border-forest-300 flex items-center justify-center shadow-sm">
                      <span className="font-display text-2xl font-bold text-forest-600">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="font-display text-sm font-bold text-charcoal-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-charcoal-500 leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile vertical timeline */}
          <div className="lg:hidden">
            <div className="relative pl-10">
              {/* Vertical line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 timeline-line-vertical" />

              <div className="space-y-10">
                {steps.map((step, i) => (
                  <motion.div
                    key={step.step}
                    className="relative"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                  >
                    {/* Step circle */}
                    <div className="absolute -left-10 top-0 w-8 h-8 rounded-full bg-forest-600 flex items-center justify-center z-10">
                      <span className="text-white text-xs font-bold">{step.step}</span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-charcoal-900 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-charcoal-500 leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Manufacturing Capabilities */}
        <motion.div
          className="bg-white rounded-2xl border border-charcoal-100 p-8 lg:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-display text-2xl font-bold text-charcoal-900 mb-6 text-center">
            Manufacturing Capabilities
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <div key={cap.label} className="text-center p-4">
                <cap.icon size={32} className="text-forest-600 mx-auto mb-3" />
                <p className="text-sm font-medium text-charcoal-500 mb-1">{cap.label}</p>
                <p className="font-display text-xl font-bold text-charcoal-900">{cap.value}</p>
                <p className="text-xs text-charcoal-400 mt-1">{cap.note}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
