import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { journalPosts } from '../data';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { Pagination } from '../components/ui/Pagination';
import { Reveal } from '../components/ui/Reveal';
import { SectionBg, GlassPanel } from '../components/ui/SectionBg';
import { bg } from '../images';

const perPage = 6;

export function Blog() {
  const [searchParams] = useSearchParams();
  const page = parseInt(searchParams.get('page') || '1', 10);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(journalPosts.map((p) => p.category)))];

  const filtered = useMemo(() => {
    return journalPosts.filter((p) => {
      const matchesQuery =
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = category === 'All' || p.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [query, category]);

  const totalPages = Math.ceil(filtered.length / perPage);
  const current = Math.min(page, totalPages || 1);
  const shown = filtered.slice((current - 1) * perPage, current * perPage);

  return (
    <>
      {/* Header */}
      <SectionBg image={bg.blogHeader} overlay={0.70} className="pt-32 pb-12">
        <div className="container-lux">
          <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Journal' }]} />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display text-display-2 text-white mt-6 mb-4"
          >
            The Journal
          </motion.h1>
          <p className="text-secondary max-w-xl leading-relaxed">
            Reflections, field guides, and the occasional travel secret.
          </p>
        </div>
      </SectionBg>

      {/* Content */}
      <SectionBg image={bg.tuscany3} overlay={0.78}>
        <div className="container-lux py-20">
          <GlassPanel className="mb-10">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="field pl-11"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-1">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setCategory(c)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                      category === c
                        ? 'bg-gold-gradient text-ink-900'
                        : 'bg-white/5 text-secondary hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </GlassPanel>

          {shown.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {shown.map((post, i) => (
                <Reveal key={post.id} delay={i * 0.1}>
                  <Link to={`/blog/${post.id}`} className="group block card card-hover h-full">
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-[1.2s] ease-lux group-hover:scale-110"
                      />
                      <span className="absolute top-4 left-4 glass px-3 py-1 rounded-full text-xs font-medium text-white">
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
          ) : (
            <Reveal>
              <div className="text-center py-20">
                <p className="text-secondary text-lg">No articles found.</p>
              </div>
            </Reveal>
          )}

          {totalPages > 1 && (
            <div className="mt-12">
              <Pagination current={current} total={totalPages} basePath="/blog" />
            </div>
          )}
        </div>
      </SectionBg>
    </>
  );
}
