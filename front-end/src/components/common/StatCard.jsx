import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export default function StatCard({ value, label, suffix = '', prefix = '', light = false }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const numericValue = parseInt(value, 10);
    if (isNaN(numericValue)) {
      setDisplayValue(value);
      return;
    }

    const duration = 1500;
    const steps = 40;
    const stepTime = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += numericValue / steps;
      if (current >= numericValue) {
        clearInterval(timer);
        setDisplayValue(numericValue);
      } else {
        setDisplayValue(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      className="text-center px-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div
        className={`font-display text-4xl sm:text-5xl font-bold mb-2 ${
          light ? 'text-white' : 'text-forest-600'
        }`}
      >
        {prefix}
        {displayValue}
        {suffix}
      </div>
      <div
        className={`text-sm font-medium uppercase tracking-wider ${
          light ? 'text-charcoal-300' : 'text-charcoal-500'
        }`}
      >
        {label}
      </div>
    </motion.div>
  );
}
