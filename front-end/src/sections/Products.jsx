import SectionHeader from '../components/common/SectionHeader';
import ProductGrid from '../components/products/ProductGrid';
import { products } from '../data/products';

export default function Products() {
  return (
    <section id="products" className="py-20 lg:py-28 bg-charcoal-50">
      <div className="container-max section-padding">
        <SectionHeader
          eyebrow="Our Products"
          title="Our Rubber Products"
          description="Explore rubber solutions designed for different industrial and commercial applications."
        />
        <ProductGrid products={products} />
      </div>
    </section>
  );
}
