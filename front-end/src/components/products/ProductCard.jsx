import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Shield, Wrench, Mountain, Tag } from 'lucide-react';

export default function ProductCard({ product, index, onViewDetails }) {
  return (
    <motion.div
      className="group bg-white border border-charcoal-100 rounded-xl overflow-hidden hover:border-forest-200 hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      {/* Product Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/30 to-transparent" />
        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-rust-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {product.category === '2-wheeler'
              ? '2-Wheeler'
              : product.category === '4-wheeler'
              ? '4-Wheeler'
              : product.category === 'adventure'
              ? 'Adventure'
              : 'Mountain'}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display text-lg font-bold text-charcoal-900 mb-1.5 group-hover:text-forest-700 transition-colors">
          {product.name}
        </h3>
        <p className="text-xs text-forest-600 font-semibold uppercase tracking-wider mb-3">
          {product.application.split(',')[0]}
        </p>
        <p className="text-sm text-charcoal-500 leading-relaxed mb-4 line-clamp-2">
          {product.shortDescription}
        </p>

        {/* Key features preview */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.keyFeatures.slice(0, 3).map((feat) => (
            <span
              key={feat}
              className="bg-charcoal-50 text-charcoal-600 text-xs px-2 py-0.5 rounded"
            >
              {feat}
            </span>
          ))}
        </div>

        {/* Warranty */}
        <div className="flex items-center gap-1.5 text-xs text-forest-600 font-medium mb-4">
          <Shield size={13} />
          {product.warranty}
        </div>

        <button
          onClick={() => onViewDetails(product)}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest-600 hover:text-forest-700 group/btn transition-colors cursor-pointer"
        >
          View Details & Specs
          <ArrowRight
            size={14}
            className="group-hover/btn:translate-x-1 transition-transform"
          />
        </button>
      </div>
    </motion.div>
  );
}
