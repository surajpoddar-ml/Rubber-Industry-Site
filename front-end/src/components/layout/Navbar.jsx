import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import Button from '../common/Button';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Industries', href: '#industries' },
  { label: 'Manufacturing', href: '#manufacturing' },
  { label: 'Quality', href: '#quality' },
  { label: 'Sustainability', href: '#sustainability' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for active section tracking
  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace('#', ''));
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const handleNavClick = useCallback(
    (e, href) => {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMobileOpen(false);
    },
    []
  );

  // Lock body scroll on mobile menu
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-charcoal-100'
          : 'bg-white'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container-max section-padding">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 shrink-0"
            aria-label="Nepal Rubber Tech — Home"
          >
            <img
              src="/logo.png"
              alt="Nepal Rubber Tech"
              className="h-[4.5rem] lg:h-[5.4rem] w-auto"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeSection === item.href.replace('#', '')
                    ? 'text-forest-700 bg-forest-50'
                    : 'text-charcoal-600 hover:text-forest-700 hover:bg-forest-50/50'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:block">
              <Button
                href="#quote"
                onClick={(e) => handleNavClick(e, '#quote')}
                size="sm"
                icon={ArrowRight}
              >
                Request a Quote
              </Button>
            </div>

            <button
              className="xl:hidden p-2 rounded-lg text-charcoal-700 hover:bg-charcoal-100 transition-colors cursor-pointer"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileOpen}
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="xl:hidden fixed inset-0 top-16 bg-white z-40 overflow-y-auto"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-4 py-6 space-y-1">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                    activeSection === item.href.replace('#', '')
                      ? 'text-forest-700 bg-forest-50'
                      : 'text-charcoal-700 hover:bg-charcoal-50'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="pt-4 px-4">
                <Button
                  href="#quote"
                  onClick={(e) => handleNavClick(e, '#quote')}
                  size="lg"
                  icon={ArrowRight}
                  className="w-full"
                >
                  Request a Quote
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
