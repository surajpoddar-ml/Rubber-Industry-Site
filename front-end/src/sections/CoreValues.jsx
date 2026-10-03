import { motion } from 'framer-motion';
import SectionHeader from '../components/common/SectionHeader';

const values = [
  {
    title: 'Performance',
    description: 'We measure ourselves by how our products perform in the real world.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=500&q=80',
    alt: 'Tyre performance testing and inspection',
  },
  {
    title: 'Reliability',
    description: 'We build products and services customers can depend on.',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=500&q=80',
    alt: 'Commercial vehicle dependable transportation',
  },
  {
    title: 'Accountability',
    description: 'We take responsibility for the customer experience beyond the sale.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&q=80',
    alt: 'Customer service and technician support',
  },
  {
    title: 'Nepalese Ingenuity',
    description: "We develop solutions informed by Nepal's roads, terrain and operating conditions.",
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80',
    alt: 'Nepalese mountain road engineering',
  },
  {
    title: 'Responsible Growth',
    description: 'We pursue commercially, socially and environmentally sustainable growth.',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&q=80',
    alt: 'Sustainable manufacturing and environment',
  },
  {
    title: 'Customer Trust',
    description: 'We build long-term relationships through transparency, dependable service and consistent product value.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=500&q=80',
    alt: 'Business partnership and fleet support',
  },
];

export default function CoreValues() {
  return (
    <section id="values" className="py-20 lg:py-28 bg-charcoal-50">
      <div className="container-max section-padding">
        <SectionHeader
          eyebrow="Our Core Values"
          title="What We Stand For"
          description="The principles that guide how we develop products, serve customers and build our business."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              className="group bg-white rounded-xl overflow-hidden border border-charcoal-100 hover:border-forest-200 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={value.image}
                  alt={value.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-charcoal-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-charcoal-500 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
