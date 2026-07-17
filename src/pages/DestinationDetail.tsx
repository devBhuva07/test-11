import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Clock, Star, ArrowRight } from 'lucide-react';
import { destinations, packages, hotels } from '../data';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { Gallery } from '../components/ui/Gallery';
import { HotelCard } from '../components/ui/HotelCard';
import { LinkButton } from '../components/ui/Button';
import { Reveal, SectionHeading } from '../components/ui/Reveal';
import { SectionBg, GlassPanel } from '../components/ui/SectionBg';
import { bg } from '../images';

export function DestinationDetail() {
  const { id } = useParams();
  const destination = destinations.find((d) => d.id === id);

  if (!destination) return <Navigate to="/destinations" replace />;

  const relatedPackages = packages.filter((p) =>
    p.destination.toLowerCase().includes(destination.name.toLowerCase())
  );
  const relatedHotels = hotels.filter((h) =>
    h.destination.toLowerCase().includes(destination.name.toLowerCase())
  );

  return (
    <>
      {/* Hero */}
      <SectionBg image={destination.image} overlay={0.60} className="min-h-[70vh] flex items-end">
        <div className="container-lux pb-12 w-full">
          <div className="flex items-center gap-2 text-white/70 text-sm mb-4">
            <Breadcrumb
              items={[
                { label: 'Home', path: '/' },
                { label: 'Destinations', path: '/destinations' },
                { label: destination.name },
              ]}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="h-4 w-4 text-gold-400" />
              <span className="text-eyebrow text-gold-300">{destination.country}</span>
            </div>
            <h1 className="font-display text-display-1 text-white text-shadow-lux mb-3">{destination.name}</h1>
            <p className="text-lg text-white/85 max-w-xl">{destination.tagline}</p>
          </motion.div>
        </div>
      </SectionBg>

      {/* Overview */}
      <SectionBg image={bg.kyoto2} overlay={0.78}>
        <div className="container-lux py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Reveal>
                <GlassPanel>
                  <p className="eyebrow mb-4">Overview</p>
                  <p className="text-secondary text-lg leading-relaxed mb-10">{destination.description}</p>
                </GlassPanel>
              </Reveal>

              <Reveal delay={0.1}>
                <GlassPanel className="mt-6">
                  <h3 className="font-display text-2xl text-white mb-6">Signature Experiences</h3>
                  <div className="space-y-3">
                    {destination.experiences.map((exp, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-4 rounded-2xl"
                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                      >
                        <span className="h-8 w-8 rounded-full bg-gold-gradient flex items-center justify-center shrink-0">
                          <Star className="h-4 w-4 text-ink-900" />
                        </span>
                        <span className="text-white">{exp}</span>
                      </div>
                    ))}
                  </div>
                </GlassPanel>
              </Reveal>

              <Reveal delay={0.2}>
                <GlassPanel className="mt-6">
                  <h3 className="font-display text-2xl text-white mb-6">Gallery</h3>
                  <Gallery images={destination.gallery} alt={destination.name} />
                </GlassPanel>
              </Reveal>
            </div>

            <aside>
              <Reveal delay={0.2}>
                <div className="glass p-8 sticky top-24">
                  <h3 className="font-display text-xl text-white mb-5">Journey Details</h3>
                  <div className="space-y-4 mb-6">
                    {[
                      { icon: Calendar, label: 'Best season', value: destination.bestSeason },
                      { icon: Clock, label: 'Suggested duration', value: destination.duration },
                      { icon: Star, label: 'Rating', value: `${destination.rating} / 5` },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <item.icon className="h-5 w-5 text-gold-400 mt-0.5 shrink-0" />
                        <div>
                          <p className="text-xs text-secondary">{item.label}</p>
                          <p className="text-sm text-white font-medium">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="pt-5 border-t border-white/10 mb-6">
                    <p className="text-xs text-secondary">From</p>
                    <p className="font-display text-3xl text-white">
                      ${destination.priceFrom.toLocaleString()}
                      <span className="text-sm text-secondary font-sans"> /person</span>
                    </p>
                  </div>
                  <LinkButton to="/booking" variant="gold" className="w-full mb-3">
                    Enquire now
                    <ArrowRight className="h-4 w-4" />
                  </LinkButton>
                  <LinkButton to="/packages" variant="outline" className="w-full">
                    View packages
                  </LinkButton>
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </SectionBg>

      {/* Related Packages */}
      {relatedPackages.length > 0 && (
        <SectionBg image={bg.tuscany2} overlay={0.78}>
          <div className="container-lux py-24 lg:py-32">
            <SectionHeading
              eyebrow="Packages"
              title={`Journeys in ${destination.name}`}
              center={false}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {relatedPackages.map((p) => (
                <div key={p.id} className="card card-hover h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover" />
                    <span className="absolute top-3 right-3 bg-gold-gradient text-ink-900 text-xs font-semibold px-3 py-1 rounded-full">
                      {p.tag}
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-display text-xl text-white mb-2">{p.title}</h3>
                    <p className="text-sm text-secondary flex-1 mb-4">{p.description}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <span className="text-sm font-semibold text-white">${p.priceFrom.toLocaleString()}</span>
                      <Link to={`/packages/${p.id}`} className="text-sm text-gold-400 font-medium hover:text-warmgold-400 transition-colors">
                        View
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionBg>
      )}

      {/* Related Hotels */}
      {relatedHotels.length > 0 && (
        <SectionBg image={bg.marrakech2} overlay={0.78}>
          <div className="container-lux py-24 lg:py-32">
            <SectionHeading
              eyebrow="Stays"
              title={`Where to stay in ${destination.name}`}
              center={false}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
              {relatedHotels.map((h) => (
                <HotelCard key={h.id} hotel={h} />
              ))}
            </div>
          </div>
        </SectionBg>
      )}
    </>
  );
}
