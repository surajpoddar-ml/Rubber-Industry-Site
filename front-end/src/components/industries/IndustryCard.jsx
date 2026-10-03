import { motion } from 'framer-motion';
import { industryIcons } from '../../data/industries';

export default function IndustryCard({ industry, index }) {
  const IconComponent = industryIcons[industry.icon];

  return (
    <motion.div
      className="group relative bg-white border border-charcoal-100 rounded-xl p-4 hover:border-forest-200 hover:shadow-sm transition-all duration-300"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <div className="w-10 h-10 rounded-lg bg-forest-50 text-forest-600 flex items-center justify-center mb-2.5 group-hover:bg-forest-600 group-hover:text-white transition-colors duration-300">
        {IconComponent && <IconComponent size={20} />}
      </div>
      <h3 className="font-display text-base font-bold text-charcoal-900 mb-1">
        {industry.name}
      </h3>
      <p className="text-xs text-charcoal-500 leading-relaxed">
        {industry.description}
      </p>
    </motion.div>
  );
}
