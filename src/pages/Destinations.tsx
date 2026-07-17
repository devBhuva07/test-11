import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { destinations } from '../data';
import { DestinationCard } from '../components/ui/DestinationCard';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { Pagination } from '../components/ui/Pagination';
import { Reveal } from '../components/ui/Reveal';
import { SectionBg, GlassPanel } from '../components/ui/SectionBg';
import { bg } from '../images';

const perPage = 6;

export function Destinations() {
  const [searchParams] = useSearchParams();
  const page = parseInt(searchParams.get('page') || '1', 10);
  const [query, setQuery] = useState('');
  const [region, setRegion] = useState('All');

  const regions = ['All', ...Array.from(new Set(destinations.map((d) => d.country)))];

  const filtered = useMemo(() => {
    return destinations.filter((d) => {
      const matchesQuery =
        d.name.toLowerCase().includes(query.toLowerCase()) ||
        d.country.toLowerCase().includes(query.toLowerCase());
      const matchesRegion = region === 'All' || d.country === region;
      return matchesQuery && matchesRegion;
    });
  }, [query, region]);

  const totalPages = Math.ceil(filtered.length / perPage);
  const current = Math.min(page, totalPages || 1);
  const shown = filtered.slice((current - 1) * perPage, current * perPage);

  return (
    <>
      {/* Header */}
      <SectionBg image={bg.destinationsHeader} overlay={0.70} className="pt-32 pb-12">
        <div className="container-lux">
          <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Destinations' }]} />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display text-display-2 text-white mt-6 mb-4"
          >
            Destinations
          </motion.h1>
          <p className="text-secondary max-w-xl leading-relaxed">
            A considered collection of places — each chosen for what it offers the quiet traveler.
          </p>
        </div>
      </SectionBg>

      {/* Content */}
      <SectionBg image={bg.maldivesVilla} overlay={0.78}>
        <div className="container-lux py-20">
          <GlassPanel className="mb-10">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                <input
                  type="text"
                  placeholder="Search destinations..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="field pl-11"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-1">
                {regions.map((r) => (
                  <button
                    key={r}
                    onClick={() => setRegion(r)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                      region === r
                        ? 'bg-gold-gradient text-ink-900'
                        : 'bg-white/5 text-secondary hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>
          </GlassPanel>

          {shown.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {shown.map((d, i) => (
                <DestinationCard key={d.id} destination={d} index={i} />
              ))}
            </div>
          ) : (
            <Reveal>
              <div className="text-center py-20">
                <p className="text-secondary text-lg">No destinations found. Try a different search.</p>
              </div>
            </Reveal>
          )}

          {totalPages > 1 && (
            <div className="mt-12">
              <Pagination
                current={current}
                total={totalPages}
                basePath="/destinations"
              />
            </div>
          )}
        </div>
      </SectionBg>
    </>
  );
}
