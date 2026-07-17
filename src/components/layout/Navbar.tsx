import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { navLinks } from '../../data';
import { LinkButton } from '../ui/Button';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-lux ${
          scrolled ? 'glass-pill py-3' : 'py-5 bg-transparent'
        }`}
        style={scrolled ? { borderRadius: 0 } : undefined}
      >
        <div className="container-lux flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 group">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold-gradient text-black font-display text-xl">
              M
            </span>
            <span className="font-display text-xl tracking-wide text-white">
              Maison Voyage
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-colors link-underline ${
                  location.pathname === link.path ? 'text-gold-400' : 'text-white/75 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+18005550100" className="flex items-center gap-2 text-sm text-white/75 hover:text-gold-400 transition-colors">
              <Phone className="h-4 w-4" />
              +1 800 555 0100
            </a>
            <LinkButton to="/booking" size="sm" variant="gold">
              Plan Your Journey
            </LinkButton>
          </div>

          <button
            className="lg:hidden h-10 w-10 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5 text-white" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-black lg:hidden flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="font-display text-xl text-white">Maison Voyage</span>
              <button
                onClick={() => setOpen(false)}
                className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                aria-label="Close menu"
              >
                <X className="h-5 w-5 text-white" />
              </button>
            </div>
            <nav className="flex-1 flex flex-col justify-center px-6 gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    to={link.path}
                    className={`font-display text-4xl py-3 transition-colors ${
                      location.pathname === link.path ? 'text-gold-400' : 'text-white hover:text-gold-300'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="p-6 border-t border-white/10">
              <LinkButton to="/booking" variant="gold" className="w-full">
                Plan Your Journey
              </LinkButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
