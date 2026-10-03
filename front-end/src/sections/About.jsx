import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from '../components/common/Button';

const highlights = [
  'Nepalese tyre and tube manufacturer',
  'Dependable mobility solutions for businesses and communities',
  'Performance-led product development',
  'HIMALAYAN TYRES for mountain and mixed-road applications',
  'Building local manufacturing capability',
  'Accountable service and customer trust',
];

export default function About() {
  const scrollTo = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-charcoal-200">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80"
                alt="Tyre manufacturing and production"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Accent block */}
            <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-rust-600 rounded-xl hidden lg:flex items-center justify-center">
              <div className="text-center text-white">
                <div className="font-display text-3xl font-bold">NRT</div>
                <div className="text-xs uppercase tracking-wider mt-1">Nepal</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-forest-600 mb-4">
              About Us
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 leading-tight mb-6">
              About Nepal Rubber Tech Industries
            </h2>
            <p className="text-charcoal-600 leading-relaxed mb-5">
              Nepal Rubber Tech Industries (NRT) is a Nepalese tyre and tube
              manufacturer focused on delivering dependable mobility solutions
              for the businesses and communities that keep Nepal moving. From
              transport and logistics to construction, agriculture and industrial
              fleets, NRT serves customers whose operations depend on
              performance, safety and continuity.
            </p>
            <p className="text-charcoal-600 leading-relaxed mb-5">
              As part of its transformation, NRT is building a new generation of
              products and customer experiences around technical performance,
              accountable service and value over the total life of the tyre. Our
              proposed{' '}
              <strong className="text-charcoal-900">HIMALAYAN TYRES</strong>{' '}
              range extends this commitment into demanding mountain and
              mixed-road applications, combining local understanding with
              performance-led product development.
            </p>
            <p className="text-charcoal-600 leading-relaxed mb-8 text-sm italic border-l-4 border-rust-500 pl-4">
              We believe a tyre should do more than move a vehicle. It should
              support businesses, strengthen local capability and contribute to a
              more resilient Nepalese industrial ecosystem.
            </p>

            {/* Highlight list */}
            <ul className="space-y-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-charcoal-700">
                  <CheckCircle2 size={18} className="text-forest-500 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <Button
              href="#products"
              onClick={(e) => scrollTo(e, '#products')}
              icon={ArrowRight}
            >
              Explore HIMALAYAN TYRES
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
