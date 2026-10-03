import Modal from '../common/Modal';
import Button from '../common/Button';
import { ArrowRight, CheckCircle2, FolderOpen } from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={project.title} size="lg">
      <div className="space-y-6">
        {/* Image placeholder */}
        <div className="h-56 bg-gradient-to-br from-forest-800 to-charcoal-800 rounded-xl flex items-center justify-center">
          <FolderOpen size={64} className="text-forest-400/50" />
        </div>

        {/* Meta */}
        <div className="flex flex-wrap gap-3">
          <span className="bg-forest-50 text-forest-700 text-sm font-semibold px-3 py-1 rounded-full">
            {project.industry}
          </span>
          <span className="bg-charcoal-100 text-charcoal-700 text-sm font-semibold px-3 py-1 rounded-full">
            {project.application}
          </span>
        </div>

        {/* Description */}
        <div>
          <h4 className="font-display text-lg font-bold text-charcoal-900 mb-2">
            Project Overview
          </h4>
          <p className="text-charcoal-600 leading-relaxed">{project.fullDescription}</p>
        </div>

        {/* Deliverables */}
        <div>
          <h4 className="font-display text-lg font-bold text-charcoal-900 mb-3">
            Key Deliverables
          </h4>
          <ul className="space-y-2">
            {project.deliverables.map((d) => (
              <li key={d} className="flex items-start gap-2 text-sm text-charcoal-600">
                <CheckCircle2 size={16} className="text-forest-500 mt-0.5 shrink-0" />
                {d}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="flex flex-wrap gap-3 pt-2">
          <Button
            href="#quote"
            icon={ArrowRight}
            onClick={(e) => {
              e.preventDefault();
              onClose();
              setTimeout(() => {
                document.querySelector('#quote')?.scrollIntoView({ behavior: 'smooth' });
              }, 300);
            }}
          >
            Discuss a Similar Project
          </Button>
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </Modal>
  );
}
