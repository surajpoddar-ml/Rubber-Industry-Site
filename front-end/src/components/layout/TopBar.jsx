import { Mail, Phone, Clock } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-charcoal-900 text-charcoal-300 text-xs hidden sm:block">
      <div className="container-max section-padding flex items-center justify-between py-2">
        <div className="flex items-center gap-1">
          <span className="text-forest-400 font-semibold">Nepal-Based Manufacturing</span>
          <span className="text-charcoal-600 mx-2">|</span>
          <span className="hidden md:inline">Engineered Rubber Solutions</span>
        </div>
        <div className="flex items-center gap-4 lg:gap-6">
          <a
            href="mailto:info@nepalrubbertech.com"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Mail size={12} />
            <span className="hidden lg:inline">info@nepalrubbertech.com</span>
            <span className="lg:hidden">Email</span>
          </a>
          <a
            href="tel:+9771234567890"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Phone size={12} />
            <span>+977-1-234567890</span>
          </a>
          <span className="hidden xl:flex items-center gap-1.5">
            <Clock size={12} />
            <span>Sun–Fri: 9:00 AM – 6:00 PM</span>
          </span>
        </div>
      </div>
    </div>
  );
}
