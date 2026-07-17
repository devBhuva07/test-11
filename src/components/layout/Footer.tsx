import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { bg } from '../../images';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <footer ref={ref} className="relative overflow-hidden bg-black">
      {/* Background image with parallax + slow zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <div className="absolute inset-0 animate-slow-zoom" style={{ willChange: 'transform' }}>
            <img
              src={bg.dubaiNight}
              alt=""
              aria-hidden
              className="h-full w-full object-cover scale-105"
              loading="lazy"
            />
          </div>
        </motion.div>
        {/* 85% black overlay */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.95))' }}
        />
        {/* Soft radial gold gradient for depth */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 0%, rgba(212,175,55,0.08), transparent 60%)',
          }}
        />
        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{ boxShadow: 'inset 0 0 200px 60px rgba(0,0,0,0.6)' }}
        />
        {/* Fade gradient at top for seamless transition */}
        <div
          className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.85), transparent)' }}
        />
      </div>

      <div className="relative z-10 container-lux py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold-gradient text-black font-display text-xl">
                M
              </span>
              <span className="font-display text-xl tracking-wide text-white">Maison Voyage</span>
            </Link>
            <p className="text-sm text-secondary leading-relaxed mb-6">
              A private travel club crafting bespoke journeys for the discerning. Members since 2009.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-10 w-10 rounded-full border border-white/10 hover:border-gold-400 hover:text-gold-400 flex items-center justify-center text-white/75 transition-all duration-300"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="eyebrow mb-5">Explore</h4>
            <ul className="space-y-3">
              {[
                { label: 'Destinations', path: '/destinations' },
                { label: 'Packages', path: '/packages' },
                { label: 'Journal', path: '/blog' },
                { label: 'About', path: '/about' },
                { label: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-secondary hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow mb-5">Contact</h4>
            <ul className="space-y-3 text-sm text-secondary">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-gold-400 mt-0.5 shrink-0" />
                12 Rue de la Paix, Paris 75002
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gold-400 shrink-0" />
                +1 800 555 0100
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-gold-400 shrink-0" />
                concierge@maisonvoyage.com
              </li>
            </ul>
          </div>

          <div>
            <h4 className="eyebrow mb-5">The Inner Circle</h4>
            <p className="text-sm text-secondary leading-relaxed mb-4">
              Receive curated journeys and private invitations, four times a year.
            </p>
            {subscribed ? (
              <p className="text-sm text-gold-400 font-medium">Welcome to the Inner Circle.</p>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email) setSubscribed(true);
                }}
                className="flex gap-2"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 px-4 py-2.5 rounded-xl text-sm text-white placeholder:text-white/35 focus:outline-none focus:border-gold-400 transition-colors"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                />
                <button
                  type="submit"
                  className="h-[42px] w-[42px] rounded-xl bg-gold-gradient text-black flex items-center justify-center hover:shadow-gold transition-all shrink-0"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Maison Voyage. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-xs text-white/40 hover:text-gold-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs text-white/40 hover:text-gold-400 transition-colors">
              Terms
            </Link>
            <Link to="/faq" className="text-xs text-white/40 hover:text-gold-400 transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
