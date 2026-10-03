import Modal from '../common/Modal';
import Button from '../common/Button';
import { ArrowRight, CheckCircle2, Wrench, Beaker, Settings, Layers } from 'lucide-react';

export default function ProductModal({ product, isOpen, onClose }) {
  if (!product) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={product.name} size="lg">
      <div className="space-y-6">
        {/* Image placeholder */}
        <div className="h-56 bg-gradient-to-br from-charcoal-100 to-charcoal-200 rounded-xl flex items-center justify-center">
          <Layers size={64} className="text-charcoal-300" />
        </div>

        {/* Category */}
        <span className="inline-block bg-forest-50 text-forest-700 text-sm font-semibold px-3 py-1 rounded-full">
          {product.category}
        </span>

        {/* Description */}
        <div>
          <h4 className="font-display text-lg font-bold text-charcoal-900 mb-2">Description</h4>
          <p className="text-charcoal-600 leading-relaxed">{product.description}</p>
        </div>

        {/* Applications */}
        <div>
          <h4 className="font-display text-lg font-bold text-charcoal-900 mb-3 flex items-center gap-2">
            <Wrench size={18} className="text-forest-600" />
            Applications
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {product.applications.map((app) => (
              <li key={app} className="flex items-start gap-2 text-sm text-charcoal-600">
                <CheckCircle2 size={16} className="text-forest-500 mt-0.5 shrink-0" />
                {app}
              </li>
            ))}
          </ul>
        </div>

        {/* Materials */}
        <div>
          <h4 className="font-display text-lg font-bold text-charcoal-900 mb-3 flex items-center gap-2">
            <Beaker size={18} className="text-forest-600" />
            Material Information
          </h4>
          <ul className="space-y-1.5">
            {product.materials.map((mat) => (
              <li key={mat} className="flex items-start gap-2 text-sm text-charcoal-600">
                <span className="w-1.5 h-1.5 rounded-full bg-forest-500 mt-1.5 shrink-0" />
                {mat}
              </li>
            ))}
          </ul>
        </div>

        {/* Available Options */}
        <div>
          <h4 className="font-display text-lg font-bold text-charcoal-900 mb-3 flex items-center gap-2">
            <Settings size={18} className="text-forest-600" />
            Available Options
          </h4>
          <ul className="space-y-1.5">
            {product.availableOptions.map((opt) => (
              <li key={opt} className="flex items-start gap-2 text-sm text-charcoal-600">
                <span className="w-1.5 h-1.5 rounded-full bg-rust-500 mt-1.5 shrink-0" />
                {opt}
              </li>
            ))}
          </ul>
        </div>

        {/* Technical Info */}
        <div className="bg-charcoal-50 rounded-xl p-5">
          <h4 className="font-display text-lg font-bold text-charcoal-900 mb-2">
            Technical Information
          </h4>
          <p className="text-sm text-charcoal-600 leading-relaxed">{product.technicalInfo}</p>
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
            Request Quote
          </Button>
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </Modal>
  );
}
