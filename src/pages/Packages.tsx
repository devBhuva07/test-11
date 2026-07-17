import { useState } from 'react';
import { motion } from 'framer-motion';
import { SlidersHorizontal } from 'lucide-react';
import { packages } from '../data';
import { PackageCard } from '../components/ui/PackageCard';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { SectionBg, GlassPanel } from '../components/ui/SectionBg';
import { bg } from '../images';

export function Packages() {
  const [filter, setFilter] = useState('All');
  const tags = ['All', ...Array.from(new Set(packages.map((p) => p.tag)))];
  const filtered = filter === 'All' ? packages : packages.filter((p) => p.tag === filter);

  return (
    <>
      {/* Header */}
      <SectionBg image={bg.packagesHeader} overlay={0.70} className="pt-32 pb-12">
        <div className="container-lux">
          <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Packages' }]} />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display text-display-2 text-white mt-6 mb-4"
          >
            Curated Packages
          </motion.h1>
          <p className="text-secondary max-w-xl leading-relaxed">
            Considered itineraries, ready to begin — or to be tailored entirely to you.
          </p>
        </div>
      </SectionBg>

      {/* Content */}
      <SectionBg image={bg.baliPool} overlay={0.78}>
        <div className="container-lux py-20">
          <GlassPanel className="mb-10">
            <div className="flex items-center gap-3">
              <SlidersHorizontal className="h-4 w-4 text-gold-400 shrink-0" />
              <div className="flex gap-2 overflow-x-auto pb-1">
                {tags.map((t) => (
                  <button
                    key={t}
                    onClick={() => setFilter(t)}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                      filter === t
                        ? 'bg-gold-gradient text-ink-900'
                        : 'bg-white/5 text-secondary hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </GlassPanel>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <PackageCard key={p.id} pkg={p} index={i} />
            ))}
          </div>
        </div>
      </SectionBg>
    </>
  );
}
