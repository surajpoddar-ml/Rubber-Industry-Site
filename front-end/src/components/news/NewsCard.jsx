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
      className="group bg-white border border-charcoal-100 rounded-xl overflow-hidden hover:border-forest-200 hover:shadow-md transition-all duration-300"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      {/* Image placeholder */}
      <div className="relative h-28 bg-gradient-to-br from-charcoal-200 to-charcoal-300 overflow-hidden flex items-center justify-center">
        <Newspaper size={28} className="text-charcoal-400/60" />
      </div>

      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-forest-50 text-forest-700 text-xs font-semibold px-2 py-0.5 rounded-full">
            {article.category}
          </span>
          <span className="text-xs text-charcoal-400">{formattedDate}</span>
        </div>
        <h3 className="font-display text-base font-bold text-charcoal-900 mb-1.5 group-hover:text-forest-700 transition-colors line-clamp-2">
          {article.title}
        </h3>
        <p className="text-xs text-charcoal-500 leading-relaxed mb-3 line-clamp-2">
          {article.shortDescription}
        </p>
        <button
          onClick={() => onReadMore(article)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-forest-600 hover:text-forest-700 group/btn transition-colors cursor-pointer"
        >
          Read More
          <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}
