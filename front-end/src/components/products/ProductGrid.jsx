import { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';
import { productCategories } from '../../data/products';

export default function ProductGrid({ products }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts =
    activeCategory === 'all'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {productCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
              activeCategory === cat.id
                ? 'bg-forest-600 text-white shadow-md'
                : 'bg-charcoal-100 text-charcoal-600 hover:bg-charcoal-200'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Product count */}
      <p className="text-center text-sm text-charcoal-400 mb-8">
        Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
      </p>

      {/* Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        key={activeCategory}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {filteredProducts.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            index={index}
            onViewDetails={setSelectedProduct}
          />
        ))}
      </motion.div>

      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}
