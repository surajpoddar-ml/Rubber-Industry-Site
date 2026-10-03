import { motion } from 'framer-motion';
import { ArrowRight, Newspaper } from 'lucide-react';

export default function NewsCard({ article, index, onReadMore }) {
  const formattedDate = new Date(article.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <motion.div
      className="group bg-white border border-charcoal-100 rounded-xl overflow-hidden hover:border-forest-200 hover:shadow-lg transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Image placeholder */}
      <div className="relative h-44 bg-gradient-to-br from-charcoal-200 to-charcoal-300 overflow-hidden flex items-center justify-center">
        <Newspaper size={40} className="text-charcoal-400/60" />
      </div>

      <div className="p-5">
        <div className="flex items-center gap-3 mb-3">
          <span className="bg-forest-50 text-forest-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">
            {article.category}
          </span>
          <span className="text-xs text-charcoal-400">{formattedDate}</span>
        </div>
        <h3 className="font-display text-lg font-bold text-charcoal-900 mb-2 group-hover:text-forest-700 transition-colors line-clamp-2">
          {article.title}
        </h3>
        <p className="text-sm text-charcoal-500 leading-relaxed mb-4 line-clamp-2">
          {article.shortDescription}
        </p>
        <button
          onClick={() => onReadMore(article)}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest-600 hover:text-forest-700 group/btn transition-colors cursor-pointer"
        >
          Read More
          <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}
