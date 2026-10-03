import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../components/common/Button';

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
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-charcoal-200 shadow-xl">
              <img
                src="/images/about-factory.jpg"
                alt="Nepal Rubber Tech Tyre Manufacturing Facility"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Accent block */}
            <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-rust-600 rounded-xl hidden lg:flex items-center justify-center shadow-lg">
              <div className="text-center text-white">
                <div className="font-display text-3xl font-bold">NRT</div>
                <div className="text-xs uppercase tracking-wider mt-1 font-semibold">Nepal</div>
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
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-charcoal-900 leading-tight mb-8">
              About Us
            </h2>
            <p className="text-lg sm:text-xl text-charcoal-800 font-semibold leading-relaxed mb-8">
              Nepal Rubber Tech Industries (NRT) is a Nepalese tyre and tube
              manufacturer delivering dependable mobility solutions for transport,
              logistics, construction, agriculture and industrial fleets. NRT is
              transforming its products and customer experience around technical
              performance, accountable service, safety and long-term value. Its
              <strong className="text-forest-700 font-bold"> HIMALAYAN TYRES </strong>
              range brings this commitment to demanding mountain and mixed-road
              applications, combining local understanding with performance-led
              product development.
            </p>
            <p className="text-lg font-bold text-charcoal-900 leading-relaxed mb-10 border-l-4 border-rust-500 pl-6 py-3 bg-rust-50/60 rounded-r-xl italic">
              "We believe a tyre should do more than move a vehicle. It should
              support businesses, strengthen local capability and contribute to a
              more resilient Nepalese industrial ecosystem."
            </p>

            <Button
              href="#products"
              onClick={(e) => scrollTo(e, '#products')}
              icon={ArrowRight}
              size="lg"
            >
              Explore HIMALAYAN TYRES
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
