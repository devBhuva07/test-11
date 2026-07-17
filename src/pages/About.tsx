import { motion } from 'framer-motion';
import { ArrowRight, Award, Heart, Globe, Users } from 'lucide-react';
import { LinkButton } from '../components/ui/Button';
import { Reveal, SectionHeading } from '../components/ui/Reveal';
import { Counter } from '../components/ui/Counter';
import { TestimonialCard } from '../components/ui/TestimonialCard';
import { SectionBg, GlassPanel } from '../components/ui/SectionBg';
import { testimonials } from '../data';
import { bg } from '../images';

export function About() {
  return (
    <>
      {/* Header */}
      <SectionBg image={bg.aboutHeader} overlay={0.65} className="min-h-[60vh] flex items-center">
        <div className="container-lux text-center py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="eyebrow mb-4">Our Story</p>
            <h1 className="font-display text-display-2 text-white text-shadow-lux max-w-3xl mx-auto text-balance">
              A small house of travel
            </h1>
          </motion.div>
        </div>
      </SectionBg>

      {/* Story */}
      <SectionBg image={bg.swissAlps2} overlay={0.78}>
        <div className="container-lux py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <GlassPanel className="relative">
                <img
                  src={bg.spa}
                  alt="Our team"
                  loading="lazy"
                  className="rounded-2xl w-full aspect-[4/5] object-cover"
                />
                <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-3xl bg-gold-gradient flex items-center justify-center shadow-gold hidden md:flex">
                  <span className="font-display text-5xl text-ink-900">
                    <Counter to={15} suffix="+" />
                  </span>
                </div>
              </GlassPanel>
            </Reveal>
            <div>
              <SectionHeading
                eyebrow="The Maison"
                title="Founded on a simple belief"
                subtitle="That travel, done well, is one of the last true luxuries — and it deserves to be treated with care."
                center={false}
              />
              <Reveal delay={0.2}>
                <div className="mt-8 space-y-4 text-secondary leading-relaxed">
                  <p>
                    Maison Voyage began in 2009 with a single travel designer and a handful of clients who trusted her taste. Fifteen years later, we remain small by choice — a team of twelve, serving a few hundred members worldwide.
                  </p>
                  <p>
                    We do not compete on price, volume, or breadth. We compete on the quality of our relationships and the depth of our craft. Every journey is designed by a single person who knows you, and who will know you still on your tenth trip.
                  </p>
                  <p>
                    We believe in the quiet luxury of a trip that simply works — where every detail is handled, every moment considered, and nothing is left to chance.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </SectionBg>

      {/* Values */}
      <SectionBg image={bg.forest} overlay={0.78}>
        <div className="container-lux py-24 lg:py-32">
          <SectionHeading
            eyebrow="Our Values"
            title="What we stand for"
            subtitle="The principles that guide every journey we design."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {[
              { icon: Heart, title: 'Care', desc: 'We treat each journey as if it were our own — because, often, we wish it were.' },
              { icon: Award, title: 'Craft', desc: 'Fifteen years of refinement, and we are still learning. The work is never finished.' },
              { icon: Globe, title: 'Access', desc: 'Doors opened by people we trust, in places we know well. Not for everyone — for you.' },
              { icon: Users, title: 'Relationship', desc: 'A single designer who knows you. Not a call center, not a rotation.' },
            ].map((v, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="card-lux p-8 h-full">
                  <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-5">
                    <v.icon className="h-6 w-6 text-gold-400" />
                  </div>
                  <h3 className="font-display text-xl text-white mb-2">{v.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </SectionBg>

      {/* Testimonials */}
      <SectionBg image={bg.paris} overlay={0.80}>
        <div className="container-lux py-24 lg:py-32">
          <SectionHeading
            eyebrow="Voices"
            title="In their words"
            subtitle="The relationships we value most."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.id} t={t} index={i} />
            ))}
          </div>
        </div>
      </SectionBg>

      {/* CTA */}
      <SectionBg image={bg.santorini2} overlay={0.82}>
        <div className="container-lux py-24 lg:py-32 text-center">
          <Reveal>
            <h2 className="font-display text-display-3 text-white mb-6 text-balance">
              Begin a journey with us
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-secondary max-w-lg mx-auto mb-8 leading-relaxed">
              Tell us where you dream of going. We will handle the rest.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <LinkButton to="/booking" variant="gold" size="lg">
              Plan your journey
              <ArrowRight className="h-4 w-4" />
            </LinkButton>
          </Reveal>
        </div>
      </SectionBg>
    </>
  );
}
