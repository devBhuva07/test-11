import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Check, ArrowRight, MapPin, Users } from 'lucide-react';
import { packages } from '../data';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { Timeline } from '../components/ui/Timeline';
import { LinkButton } from '../components/ui/Button';
import { Reveal } from '../components/ui/Reveal';
import { Rating } from '../components/ui/Rating';
import { SectionBg, GlassPanel } from '../components/ui/SectionBg';
import { bg } from '../images';

export function PackageDetail() {
  const { id } = useParams();
  const pkg = packages.find((p) => p.id === id);

  if (!pkg) return <Navigate to="/packages" replace />;

  return (
    <>
      {/* Hero */}
      <SectionBg image={pkg.image} overlay={0.60} className="min-h-[60vh] min-h-[450px] flex items-end">
        <div className="container-lux pb-12 w-full">
          <Breadcrumb
            items={[
              { label: 'Home', path: '/' },
              { label: 'Packages', path: '/packages' },
              { label: pkg.title },
            ]}
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-gold-gradient text-ink-900 text-xs font-semibold px-3 py-1 rounded-full">
                {pkg.tag}
              </span>
              <span className="text-eyebrow text-gold-300 flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" />
                {pkg.destination}
              </span>
            </div>
            <h1 className="font-display text-display-1 text-white text-shadow-lux mb-3">{pkg.title}</h1>
            <p className="text-lg text-white/85 max-w-xl">{pkg.description}</p>
          </motion.div>
        </div>
      </SectionBg>

      {/* Itinerary */}
      <SectionBg image={bg.swissAlps3} overlay={0.78}>
        <div className="container-lux py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Reveal>
                <GlassPanel>
                  <div className="flex flex-wrap gap-6 pb-8 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-gold-400" />
                      <div>
                        <p className="text-xs text-secondary">Duration</p>
                        <p className="text-sm font-medium text-white">{pkg.days} days · {pkg.nights} nights</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-gold-400" />
                      <div>
                        <p className="text-xs text-secondary">Group size</p>
                        <p className="text-sm font-medium text-white">Private · 2–8 guests</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-secondary">Rating</p>
                      <Rating value={pkg.rating} />
                    </div>
                  </div>
                </GlassPanel>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-8">
                  <h3 className="font-display text-2xl text-white mb-8">Itinerary</h3>
                  <Timeline items={pkg.itinerary} />
                </div>
              </Reveal>
            </div>

            <aside>
              <Reveal delay={0.2}>
                <div className="glass p-8 sticky top-24">
                  <h3 className="font-display text-xl text-white mb-5">Inclusions</h3>
                  <ul className="space-y-3 mb-6">
                    {pkg.inclusions.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check className="h-4 w-4 text-gold-400 mt-0.5 shrink-0" />
                        <span className="text-sm text-secondary">{inc}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-5 border-t border-white/10 mb-6">
                    <p className="text-xs text-secondary">From</p>
                    <p className="font-display text-3xl text-white">
                      ${pkg.priceFrom.toLocaleString()}
                      <span className="text-sm text-secondary font-sans"> /person</span>
                    </p>
                  </div>
                  <LinkButton to="/booking" variant="gold" className="w-full mb-3">
                    Book this journey
                    <ArrowRight className="h-4 w-4" />
                  </LinkButton>
                  <LinkButton to="/contact" variant="outline" className="w-full">
                    Ask a question
                  </LinkButton>
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </SectionBg>
    </>
  );
}
