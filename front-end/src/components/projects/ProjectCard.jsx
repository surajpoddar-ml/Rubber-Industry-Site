import { motion } from 'framer-motion';
import { ArrowRight, FolderOpen } from 'lucide-react';

export default function ProjectCard({ project, index, onViewDetails }) {
  return (
    <motion.div
      className="group bg-white border border-charcoal-100 rounded-xl overflow-hidden hover:border-forest-200 hover:shadow-lg transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Image placeholder */}
      <div className="relative h-44 bg-gradient-to-br from-forest-800 to-charcoal-800 overflow-hidden flex items-center justify-center">
        <FolderOpen size={40} className="text-forest-400/50" />
        <div className="absolute top-3 left-3">
          <span className="bg-white/90 text-charcoal-800 text-xs font-semibold px-3 py-1 rounded-full">
            {project.industry}
          </span>
        </div>
      </div>

      <div className="p-5">
        <p className="text-xs font-semibold text-forest-600 uppercase tracking-wider mb-1.5">
          {project.application}
        </p>
        <h3 className="font-display text-lg font-bold text-charcoal-900 mb-2 group-hover:text-forest-700 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-charcoal-500 leading-relaxed mb-4 line-clamp-2">
          {project.shortDescription}
        </p>
        <button
          onClick={() => onViewDetails(project)}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest-600 hover:text-forest-700 group/btn transition-colors cursor-pointer"
        >
          View Project
          <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}
