import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Star, Sparkles, Compass, Home as HomeIcon, Plane, ConciergeBell } from 'lucide-react';
import { LinkButton } from '../components/ui/Button';
import { SearchBar } from '../components/ui/SearchBar';
import { DestinationCard } from '../components/ui/DestinationCard';
import { PackageCard } from '../components/ui/PackageCard';
import { TestimonialCard } from '../components/ui/TestimonialCard';
import { Reveal, SectionHeading } from '../components/ui/Reveal';
import { Counter } from '../components/ui/Counter';
import { SectionBg } from '../components/ui/SectionBg';
import { destinations, packages, experiences, testimonials, journalPosts } from '../data';
import { bg } from '../images';

const iconMap: Record<string, typeof Compass> = {
  Compass,
  Home: HomeIcon,
  Plane,
  ConciergeBell,
};

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <SectionBg image={bg.maldivesSunset} overlay={0.55} zoom className="min-h-screen flex flex-col">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 animate-slow-zoom" style={{ willChange: 'transform' }}>
          <img src={bg.maldivesSunset} alt="" aria-hidden className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.75))' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 30%, rgba(212,175,55,0.1), transparent 60%)' }} />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 pt-32 pb-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-2 mb-6"
        >
          <Sparkles className="h-4 w-4 text-gold-400" />
          <span className="text-eyebrow text-gold-400">A Private Travel Club</span>
          <Sparkles className="h-4 w-4 text-gold-400" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-display-1 text-white text-shadow-lux max-w-4xl text-balance"
        >
          Journeys curated for the few who notice
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-lg text-secondary max-w-xl leading-relaxed"
        >
          We design bespoke travel for the discerning — quiet luxury, rare access, and impeccable detail.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <LinkButton to="/destinations" variant="gold" size="lg">
            Discover Destinations
            <ArrowRight className="h-4 w-4" />
          </LinkButton>
          <LinkButton to="/booking" variant="outline" size="lg">
            Speak to a Concierge
          </LinkButton>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-10 pb-12 px-6"
      >
        <div className="container-lux">
          <SearchBar />
        </div>
      </motion.div>
    </SectionBg>
  );
}

function FeaturedDestinations() {
  return (
    <SectionBg image={bg.santorini} overlay={0.75} className="section">
      <div className="container-lux">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <SectionHeading
            eyebrow="Featured Destinations"
            title="Places worth the journey"
            subtitle="A small, considered selection of the world — each chosen for what it offers the quiet traveler."
            center={false}
            className="[&_h2]:!text-white [&_p]:!text-secondary"
          />
          <Reveal delay={0.3}>
            <Link to="/destinations" className="btn-outline btn-sm shrink-0">
              View all
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.slice(0, 6).map((d, i) => (
            <DestinationCard key={d.id} destination={d} index={i} />
          ))}
        </div>
      </div>
    </SectionBg>
  );
}

function Experiences() {
  return (
    <SectionBg image={bg.dubaiSkyline} overlay={0.78} className="section">
      <div className="container-lux">
        <SectionHeading
          eyebrow="The Experience"
          title="What we arrange, quietly"
          subtitle="The difference is not in where you go, but in who opens the door when you arrive."
          className="[&_h2]:!text-white [&_p]:!text-secondary"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {experiences.map((exp, i) => {
            const Icon = iconMap[exp.icon] ?? Compass;
            return (
              <Reveal key={exp.id} delay={i * 0.1}>
                <div className="glass p-6 h-full transition-all duration-700 ease-lux hover:border-gold-400/30">
                  <div className="relative h-40 rounded-2xl overflow-hidden mb-5">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1.2s] ease-lux hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute bottom-3 left-3 h-10 w-10 rounded-xl glass-gold flex items-center justify-center">
                      <Icon className="h-5 w-5 text-gold-400" />
                    </div>
                  </div>
                  <h3 className="font-display text-xl text-white mb-2">{exp.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed">{exp.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </SectionBg>
  );
}

function Packages() {
  return (
    <SectionBg image={bg.baliResort} overlay={0.75} className="section">
      <div className="container-lux">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <SectionHeading
            eyebrow="Curated Packages"
            title="Journeys, ready to begin"
            subtitle="Considered itineraries that can be taken as they are, or tailored entirely to you."
            center={false}
            className="[&_h2]:!text-white [&_p]:!text-secondary"
          />
          <Reveal delay={0.3}>
            <Link to="/packages" className="btn-outline btn-sm shrink-0">
              All packages
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.slice(0, 3).map((p, i) => (
            <PackageCard key={p.id} pkg={p} index={i} />
          ))}
        </div>
      </div>
    </SectionBg>
  );
}

function WhyChooseUs() {
  const stats = [
    { value: 15, suffix: '+', label: 'Years of craft' },
    { value: 120, suffix: '+', label: 'Destinations' },
    { value: 98, suffix: '%', label: 'Return travelers' },
    { value: 24, suffix: '/7', label: 'Concierge access' },
  ];

  return (
    <SectionBg image={bg.swissAlps} overlay={0.78} className="section">
      <div className="container-lux">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading
              eyebrow="Why Maison Voyage"
              title="The art of traveling well"
              subtitle="We are not a booking engine. We are a small house of travel, and we treat each journey as if it were our own."
              center={false}
              className="[&_h2]:!text-white [&_p]:!text-secondary"
            />
            <Reveal delay={0.3}>
              <div className="mt-8 space-y-5">
                {[
                  'A single dedicated travel designer from first call to final farewell.',
                  'Access to places, people, and experiences unavailable to the public.',
                  'Every detail handled — transfers, reservations, the unexpected.',
                  'A relationship, not a transaction. We learn what you love.',
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold-400 shrink-0" />
                    <p className="text-secondary leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.5}>
              <div className="mt-8">
                <LinkButton to="/about" variant="gold">
                  Our story
                  <ArrowRight className="h-4 w-4" />
                </LinkButton>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="glass p-8 md:p-10">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s, i) => (
                  <div
                    key={i}
                    className={`p-6 rounded-3xl ${i % 2 === 0 ? 'glass-light' : 'glass-gold'} ${i === 1 ? 'mt-8' : ''} ${i === 2 ? '-mt-8' : ''}`}
                  >
                    <p className="font-display text-5xl text-white mb-2">
                      <Counter to={s.value} suffix={s.suffix} />
                    </p>
                    <p className="text-sm text-secondary">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </SectionBg>
  );
}

function Testimonials() {
  return (
    <SectionBg image={bg.northernLights} overlay={0.80} className="section">
      <div className="container-lux">
        <SectionHeading
          eyebrow="In Their Words"
          title="What our members say"
          subtitle="We are proud of the relationships we build, not just the trips we plan."
          className="[&_h2]:!text-white [&_p]:!text-secondary"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} t={t} index={i} />
          ))}
        </div>
      </div>
    </SectionBg>
  );
}

function GallerySection() {
  const images = [
    bg.tropicalIsland,
    bg.kyoto2,
    bg.marrakech2,
    bg.maldivesVilla,
    bg.swissAlps3,
    bg.tuscany2,
  ];

  return (
    <SectionBg image={bg.tropicalBeach} overlay={0.78} className="section">
      <div className="container-lux">
        <SectionHeading
          eyebrow="The Gallery"
          title="Moments, held still"
          subtitle="A glimpse of what waits beyond the itinerary."
          className="[&_h2]:!text-white [&_p]:!text-secondary"
        />
        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {images.map((img, i) => (
            <Reveal key={i} delay={i * 0.08} className={i === 0 || i === 5 ? 'col-span-2 row-span-2' : ''}>
              <div className="relative overflow-hidden rounded-2xl group h-full aspect-square">
                <img
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-lux group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionBg>
  );
}

function JournalSection() {
  return (
    <SectionBg image={bg.tuscany} overlay={0.78} className="section">
      <div className="container-lux">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <SectionHeading
            eyebrow="The Journal"
            title="Notes from the field"
            subtitle="Reflections, field guides, and the occasional travel secret."
            center={false}
            className="[&_h2]:!text-white [&_p]:!text-secondary"
          />
          <Reveal delay={0.3}>
            <Link to="/blog" className="btn-outline btn-sm shrink-0">
              Read more
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {journalPosts.slice(0, 3).map((post, i) => (
            <Reveal key={post.id} delay={i * 0.1}>
              <Link to={`/blog/${post.id}`} className="group block card card-hover h-full">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1.2s] ease-lux group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <span className="absolute top-4 left-4 glass-pill px-3 py-1 rounded-full text-xs font-medium text-white">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-xs text-secondary mb-2">
                    {post.date} · {post.readTime} read
                  </p>
                  <h3 className="font-display text-xl text-white mb-2 group-hover:text-gold-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-secondary leading-relaxed">{post.excerpt}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionBg>
  );
}

function Newsletter() {
  return (
    <SectionBg image={bg.nightCity} overlay={0.82} className="section">
      <div className="container-lux text-center">
        <Reveal>
          <div className="flex justify-center mb-6">
            <Star className="h-6 w-6 text-gold-400" />
          </div>
          <h2 className="font-display text-display-3 text-white mb-4 text-balance">
            Join the Inner Circle
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-secondary max-w-lg mx-auto leading-relaxed mb-8">
            Four times a year, we share curated journeys, private invitations, and the occasional secret — for those who travel with intention.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              placeholder="Your email address"
              className="flex-1 px-5 py-3.5 rounded-full text-white placeholder:text-white/35 focus:outline-none focus:border-gold-400 transition-colors"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
            />
            <button type="submit" className="btn-gold shrink-0">
              Subscribe
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </Reveal>
      </div>
    </SectionBg>
  );
}

export function Home() {
  return (
    <>
      <Hero />
      <FeaturedDestinations />
      <Experiences />
      <Packages />
      <WhyChooseUs />
      <Testimonials />
      <GallerySection />
      <JournalSection />
      <Newsletter />
    </>
  );
}
