import { motion } from 'framer-motion';
import SectionHeader from '../components/common/SectionHeader';

const features = [
  {
    title: 'Engineered for Nepal',
    description: "Designed with Nepal's roads, terrain and operating conditions in mind.",
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80',
    alt: 'Nepalese mountain road and challenging terrain',
  },
  {
    title: 'Performance You Can Measure',
    description: 'We focus on real-world testing, durability, tyre life and operating value rather than promises alone.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=500&q=80',
    alt: 'Tyre testing and performance inspection',
  },
  {
    title: 'Built for Business',
    description: 'Our B2B solutions are designed around fleet uptime, lifecycle value, service continuity and dependable supply.',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=500&q=80',
    alt: 'Commercial trucks and logistics fleet',
  },
  {
    title: 'Local Support',
    description: 'Being closer to our customers means faster communication, stronger service relationships and greater accountability.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&q=80',
    alt: 'Service technician and customer support',
  },
  {
    title: 'Made in Nepal',
    description: 'We are strengthening Nepalese manufacturing while creating local industrial and technical capabilities.',
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=500&q=80',
    alt: 'Nepalese factory and production line',
  },
  {
    title: 'Beyond the Tyre',
    description: 'Our commitment extends to responsible manufacturing, skills development, road safety and more sustainable tyre management.',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&q=80',
    alt: 'Sustainable manufacturing and environmental responsibility',
  },
];

export default function WhyChooseNRT() {
  return (
    <section className="py-20 lg:py-28 bg-white" aria-label="Why Choose NRT">
      <div className="container-max section-padding">
        <SectionHeader
          eyebrow="Why Choose NRT"
          title="Why Choose NRT?"
          description="At NRT, we believe a tyre should be designed for the road it actually travels on. Through HIMALAYAN TYRES, we are building application-focused solutions for mountain and mixed-road environments."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="group relative bg-white rounded-xl overflow-hidden border border-charcoal-100 hover:border-forest-200 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/50 to-transparent" />
                {/* Number badge */}
                <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-rust-600 text-white flex items-center justify-center text-sm font-bold">
                  {String(i + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-charcoal-900 mb-2 group-hover:text-forest-700 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-charcoal-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
