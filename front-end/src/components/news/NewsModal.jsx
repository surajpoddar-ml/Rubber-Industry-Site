import Modal from '../common/Modal';
import Button from '../common/Button';
import { Newspaper } from 'lucide-react';

export default function NewsModal({ article, isOpen, onClose }) {
  if (!article) return null;

  const formattedDate = new Date(article.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={article.title} size="lg">
      <div className="space-y-6">
        {/* Image placeholder */}
        <div className="h-56 bg-gradient-to-br from-charcoal-200 to-charcoal-300 rounded-xl flex items-center justify-center">
          <Newspaper size={64} className="text-charcoal-400/60" />
        </div>

        {/* Meta */}
        <div className="flex items-center gap-3">
          <span className="bg-forest-50 text-forest-700 text-sm font-semibold px-3 py-1 rounded-full">
            {article.category}
          </span>
          <span className="text-sm text-charcoal-400">{formattedDate}</span>
        </div>

        {/* Content */}
        <div className="prose prose-charcoal max-w-none">
          {article.fullContent.split('\n\n').map((paragraph, i) => (
            <p key={i} className="text-charcoal-600 leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="pt-2">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </Modal>
  );
}
