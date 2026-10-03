import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from '../components/common/Button';

const highlights = [
  'Nepal-based manufacturing facility',
  'Commitment to consistent product quality',
  'Technical capability across rubber types',
  'Reliable production and delivery',
  'Customer-focused solutions development',
  'Long-term partnership approach',
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
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
                alt="Industrial manufacturing facility"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Accent block */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-forest-600 rounded-xl hidden lg:flex items-center justify-center">
              <div className="text-center text-white">
                <div className="font-display text-3xl font-bold">10+</div>
                <div className="text-xs uppercase tracking-wider mt-1">Years</div>
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
              Building Reliable Rubber Solutions from Nepal
            </h2>
            <p className="text-charcoal-600 leading-relaxed mb-6">
              Nepal Rubber Tech is a professional rubber manufacturing company
              based in Nepal, dedicated to producing high-quality rubber products
              for industrial, commercial, and infrastructure applications. Our
              manufacturing facility combines technical expertise with
              commitment to quality, enabling us to deliver reliable solutions
              that meet the demands of diverse industries.
            </p>
            <p className="text-charcoal-600 leading-relaxed mb-8">
              From standard rubber sheets and molded products to custom-engineered
              solutions, we work closely with our customers to understand their
              requirements and deliver products that perform consistently in
              real-world conditions.
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
              href="#manufacturing"
              onClick={(e) => scrollTo(e, '#manufacturing')}
              icon={ArrowRight}
            >
              Discover Our Capabilities
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
