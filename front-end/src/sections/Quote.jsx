import { motion } from 'framer-motion';
import QuoteForm from '../components/forms/QuoteForm';
import { FileText } from 'lucide-react';

export default function Quote() {
  return (
    <section id="quote" className="py-20 lg:py-28 bg-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left info panel */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-forest-600 mb-4">
              Get In Touch
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal-900 leading-tight mb-4">
              Have a Rubber Requirement?
            </h2>
            <p className="text-charcoal-600 leading-relaxed mb-8">
              Tell us about your requirement and our team can help identify the
              appropriate rubber solution. We respond to all inquiries within
              1–2 business days.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 bg-forest-50 rounded-xl p-5 border border-forest-100">
                <FileText size={24} className="text-forest-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display text-sm font-bold text-charcoal-900 mb-1">
                    What to include
                  </h3>
                  <ul className="text-sm text-charcoal-500 space-y-1">
                    <li>• Product type and application</li>
                    <li>• Dimensions and specifications</li>
                    <li>• Material preferences</li>
                    <li>• Quantity and delivery timeline</li>
                    <li>• Any drawings or reference documents</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-charcoal-50 rounded-2xl p-6 sm:p-8 border border-charcoal-100">
              <QuoteForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
