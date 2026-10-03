import { motion } from 'framer-motion';
import {
  MapPin, Phone, Mail, Clock,
} from 'lucide-react';

const LinkedinIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 16} height={props.size || 16} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
const FacebookIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 16} height={props.size || 16} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);
const InstagramIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 16} height={props.size || 16} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);
const YoutubeIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 16} height={props.size || 16} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const contactInfo = [
  {
    icon: MapPin,
    title: 'Office Address',
    lines: ['Kathmandu, Nepal', '(Office address placeholder)'],
  },
  {
    icon: MapPin,
    title: 'Factory Address',
    lines: ['Industrial Area, Nepal', '(Factory address placeholder)'],
  },
  {
    icon: Phone,
    title: 'Phone',
    lines: ['+977-1-234567890', '+977-9800000000'],
    href: 'tel:+9771234567890',
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['info@nepalrubbertech.com', 'sales@nepalrubbertech.com'],
    href: 'mailto:info@nepalrubbertech.com',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    lines: ['Sunday – Friday: 9:00 AM – 6:00 PM', 'Saturday: Closed'],
  },
];

const socialLinks = [
  { icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
  { icon: FacebookIcon, href: '#', label: 'Facebook' },
  { icon: InstagramIcon, href: '#', label: 'Instagram' },
  { icon: YoutubeIcon, href: '#', label: 'YouTube' },
];

export default function Contact() {
  return (
    <section id="contact" className="py-6 lg:py-8 bg-charcoal-50">
      <div className="container-max section-padding">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-5"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-forest-600 mb-0.5">
            Contact Us
          </span>
          <h2 className="font-display text-xl sm:text-2xl font-bold text-charcoal-900 leading-tight mb-1">
            Get In Touch
          </h2>
          <p className="text-charcoal-500 text-xs sm:text-sm">
            Reach out to discuss your rubber product requirements or visit our facility.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Contact Details */}
          <motion.div
            className="space-y-2.5"
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            {contactInfo.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-2.5 bg-white rounded-xl p-2.5 border border-charcoal-100 shadow-xs"
              >
                <div className="w-8 h-8 rounded-lg bg-forest-50 text-forest-600 flex items-center justify-center shrink-0">
                  <item.icon size={16} />
                </div>
                <div>
                  <h3 className="font-display text-xs font-bold text-charcoal-900 mb-0.5">
                    {item.title}
                  </h3>
                  {item.lines.map((line) => (
                    <p key={line} className="text-xs text-charcoal-500">
                      {item.href ? (
                        <a href={item.href} className="hover:text-forest-600 transition-colors">
                          {line}
                        </a>
                      ) : (
                        line
                      )}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="bg-white rounded-xl p-2.5 border border-charcoal-100 shadow-xs flex items-center justify-between">
              <h3 className="font-display text-xs font-bold text-charcoal-900">
                Follow Us
              </h3>
              <div className="flex gap-2">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-7 h-7 rounded-lg bg-charcoal-50 hover:bg-forest-600 flex items-center justify-center text-charcoal-500 hover:text-white transition-colors"
                  >
                    <s.icon size={14} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Real Google Map Navigation */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="h-full min-h-[250px] bg-charcoal-200 rounded-xl overflow-hidden shadow-md border border-charcoal-200 relative">
              <iframe
                title="Nepal Rubber Tech Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14130.857353982464!2d85.31232925!3d27.70896035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1565540167!2sKathmandu%2044600%2C%20Nepal!5e0!2m3!1m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '250px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
