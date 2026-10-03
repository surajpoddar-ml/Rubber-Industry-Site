import Modal from '../common/Modal';
import Button from '../common/Button';
import { ArrowRight, CheckCircle2, Wrench, Mountain, Shield, Ruler, Tag } from 'lucide-react';

export default function ProductModal({ product, isOpen, onClose }) {
  if (!product) return null;

  const categoryLabel =
    product.category === '2-wheeler'
      ? '2-Wheeler'
      : product.category === '4-wheeler'
      ? '4-Wheeler'
      : product.category === 'adventure'
      ? 'Adventure / Mixed Terrain'
      : 'Mountain Applications';

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={product.name} size="lg">
      <div className="space-y-6">
        {/* Product image */}
        <div className="h-64 rounded-xl overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Category & warranty */}
        <div className="flex flex-wrap gap-3">
          <span className="bg-rust-50 text-rust-700 text-sm font-semibold px-3 py-1 rounded-full">
            {categoryLabel}
          </span>
          <span className="bg-forest-50 text-forest-700 text-sm font-semibold px-3 py-1 rounded-full flex items-center gap-1.5">
            <Shield size={14} />
            {product.warranty}
          </span>
        </div>

        {/* Application */}
        <div>
          <h4 className="font-display text-lg font-bold text-charcoal-900 mb-2 flex items-center gap-2">
            <Tag size={18} className="text-rust-600" />
            Application
          </h4>
          <p className="text-charcoal-600 leading-relaxed">{product.application}</p>
        </div>

        {/* Description */}
        <div>
          <h4 className="font-display text-lg font-bold text-charcoal-900 mb-2">Description</h4>
          <p className="text-charcoal-600 leading-relaxed">{product.description}</p>
        </div>

        {/* Key Features */}
        <div>
          <h4 className="font-display text-lg font-bold text-charcoal-900 mb-3 flex items-center gap-2">
            <Wrench size={18} className="text-forest-600" />
            Key Features
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {product.keyFeatures.map((feat) => (
              <li key={feat} className="flex items-start gap-2 text-sm text-charcoal-600">
                <CheckCircle2 size={16} className="text-forest-500 mt-0.5 shrink-0" />
                {feat}
              </li>
            ))}
          </ul>
        </div>

        {/* Suitable Terrain */}
        <div>
          <h4 className="font-display text-lg font-bold text-charcoal-900 mb-3 flex items-center gap-2">
            <Mountain size={18} className="text-forest-600" />
            Suitable Terrain
          </h4>
          <div className="flex flex-wrap gap-2">
            {product.suitableTerrain.map((terrain) => (
              <span
                key={terrain}
                className="bg-forest-50 text-forest-700 text-sm px-3 py-1 rounded-full"
              >
                {terrain}
              </span>
            ))}
          </div>
        </div>

        {/* Available Sizes */}
        <div className="bg-charcoal-50 rounded-xl p-5">
          <h4 className="font-display text-lg font-bold text-charcoal-900 mb-3 flex items-center gap-2">
            <Ruler size={18} className="text-forest-600" />
            Available Sizes / Specifications
          </h4>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <span
                key={size}
                className="bg-white border border-charcoal-200 text-charcoal-700 text-sm font-mono px-3 py-1.5 rounded-lg"
              >
                {size}
              </span>
            ))}
          </div>
          <p className="text-xs text-charcoal-400 mt-3">
            * Demo specifications — replace with actual product sizes when available.
          </p>
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
            Request Quote for This Tyre
          </Button>
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </Modal>
  );
}
