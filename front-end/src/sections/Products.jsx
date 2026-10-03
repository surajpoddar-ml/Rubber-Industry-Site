import { motion } from 'framer-motion';
import ProductGrid from '../components/products/ProductGrid';
import { products } from '../data/products';

export default function Products() {
  return (
    <section id="products" className="py-20 lg:py-28 bg-charcoal-50">
      <div className="container-max section-padding">
        {/* Hero-style header for the most important section */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-rust-600 mb-3">
            HIMALAYAN TYRES
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-charcoal-900 leading-tight mb-5">
            Built for the Roads That Test You
          </h2>
          <p className="text-base sm:text-lg text-charcoal-500 leading-relaxed max-w-3xl mx-auto">
            Our HIMALAYAN TYRES range is focused on Nepal's diverse roads,
            terrain and operating conditions — from busy city streets to remote
            mountain passes.
          </p>
        </motion.div>

        {/* Tyre category feature images */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {[
            {
              label: '2-Wheeler',
              img: '/images/tyres/tyre-moto-street.jpg',
            },
            {
              label: '4-Wheeler',
              img: '/images/tyres/tyre-passenger-car.jpg',
            },
            {
              label: 'Adventure',
              img: '/images/tyres/tyre-offroad-moto.jpg',
            },
            {
              label: 'Mountain',
              img: '/images/tyres/tyre-allterrain.jpg',
            },
          ].map((cat) => (
            <div
              key={cat.label}
              className="relative h-32 sm:h-40 rounded-xl overflow-hidden group"
            >
              <img
                src={cat.img}
                alt={cat.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 to-transparent" />
              <span className="absolute bottom-3 left-3 text-white text-sm font-bold">
                {cat.label}
              </span>
            </div>
          ))}
        </motion.div>

        <ProductGrid products={products} />
      </div>
    </section>
  );
}
