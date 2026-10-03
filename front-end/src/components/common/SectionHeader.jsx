import { motion } from 'framer-motion';

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
  className = '',
}) {
  const alignClasses = {
    center: 'text-center mx-auto',
    left: 'text-left',
  };

  return (
    <motion.div
      className={`max-w-3xl ${alignClasses[align]} mb-12 lg:mb-16 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
    >
      {eyebrow && (
        <span
          className={`inline-block text-xs font-bold tracking-[0.2em] uppercase mb-4 ${
            light ? 'text-forest-300' : 'text-forest-600'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 ${
          light ? 'text-white' : 'text-charcoal-900'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-base sm:text-lg leading-relaxed ${
            light ? 'text-charcoal-300' : 'text-charcoal-500'
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
