import { motion } from 'framer-motion';
import { industryIcons } from '../../data/industries';

export default function IndustryCard({ industry, index }) {
  const IconComponent = industryIcons[industry.icon];

  return (
    <motion.div
      className="group relative bg-white border border-charcoal-100 rounded-xl p-6 hover:border-forest-200 hover:shadow-md transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <div className="w-12 h-12 rounded-lg bg-forest-50 text-forest-600 flex items-center justify-center mb-4 group-hover:bg-forest-600 group-hover:text-white transition-colors duration-300">
        {IconComponent && <IconComponent size={24} />}
      </div>
      <h3 className="font-display text-lg font-bold text-charcoal-900 mb-2">
        {industry.name}
      </h3>
      <p className="text-sm text-charcoal-500 leading-relaxed">
        {industry.description}
      </p>
    </motion.div>
  );
}
