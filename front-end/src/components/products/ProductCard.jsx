import { motion } from 'framer-motion';
import { ArrowRight, Layers } from 'lucide-react';

export default function ProductCard({ product, index, onViewDetails }) {
  return (
    <motion.div
      className="group bg-white border border-charcoal-100 rounded-xl overflow-hidden hover:border-forest-200 hover:shadow-lg transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Image Area */}
      <div className="relative h-48 bg-gradient-to-br from-charcoal-100 to-charcoal-200 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <Layers size={48} className="text-charcoal-300 group-hover:text-forest-300 transition-colors duration-300" />
        </div>
        <div className="absolute top-3 left-3">
          <span className="bg-forest-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {product.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display text-lg font-bold text-charcoal-900 mb-2 group-hover:text-forest-700 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-charcoal-500 leading-relaxed mb-3 line-clamp-2">
          {product.shortDescription}
        </p>

        {/* Applications tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.applications.slice(0, 3).map((app) => (
            <span
              key={app}
              className="bg-charcoal-50 text-charcoal-600 text-xs px-2 py-0.5 rounded"
            >
              {app}
            </span>
          ))}
        </div>

        <button
          onClick={() => onViewDetails(product)}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest-600 hover:text-forest-700 group/btn transition-colors cursor-pointer"
        >
          View Details
          <ArrowRight
            size={14}
            className="group-hover/btn:translate-x-1 transition-transform"
          />
        </button>
      </div>
    </motion.div>
  );
}
