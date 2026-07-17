import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import { journalPosts } from '../data';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { Reveal, SectionHeading } from '../components/ui/Reveal';
import { LinkButton } from '../components/ui/Button';
import { SectionBg, GlassPanel } from '../components/ui/SectionBg';
import { bg } from '../images';

export function BlogDetail() {
  const { id } = useParams();
  const post = journalPosts.find((p) => p.id === id);

  if (!post) return <Navigate to="/blog" replace />;

  const related = journalPosts.filter((p) => p.id !== id).slice(0, 2);

  return (
    <>
      {/* Hero */}
      <SectionBg image={post.image} overlay={0.55} className="min-h-[55vh] min-h-[400px] flex items-end">
        <div className="container-lux max-w-3xl pb-12 w-full">
          <Breadcrumb
            items={[
              { label: 'Home', path: '/' },
              { label: 'Journal', path: '/blog' },
              { label: post.title },
            ]}
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4"
          >
            <span className="bg-gold-gradient text-ink-900 text-xs font-semibold px-3 py-1 rounded-full">
              {post.category}
            </span>
            <h1 className="font-display text-display-2 text-white text-shadow-lux mt-4 mb-4 text-balance">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-white/70">
              <span>By {post.author}</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime} read
              </span>
            </div>
          </motion.div>
        </div>
      </SectionBg>

      {/* Article */}
      <SectionBg image={bg.forestMist} overlay={0.80}>
        <article className="container-lux max-w-3xl py-24 lg:py-32">
          <Reveal>
            <GlassPanel>
              <p className="font-display text-2xl text-white/90 leading-relaxed mb-8 italic">
                {post.excerpt}
              </p>
              <div className="space-y-6 text-secondary leading-relaxed text-lg">
                {post.content.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </GlassPanel>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex items-center justify-between glass p-6">
              <Link to="/blog" className="flex items-center gap-2 text-sm text-secondary hover:text-gold-400 transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Back to Journal
              </Link>
              <LinkButton to="/booking" variant="outline" size="sm">
                Plan a journey
                <ArrowRight className="h-4 w-4" />
              </LinkButton>
            </div>
          </Reveal>
        </article>
      </SectionBg>

      {/* Related */}
      {related.length > 0 && (
        <SectionBg image={bg.vineyard} overlay={0.78}>
          <div className="container-lux py-24 lg:py-32">
            <SectionHeading
              eyebrow="Continue reading"
              title="More from the Journal"
              center={false}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              {related.map((p, i) => (
                <Reveal key={p.id} delay={i * 0.1}>
                  <Link to={`/blog/${p.id}`} className="group block card card-hover h-full">
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-[1.2s] ease-lux group-hover:scale-110"
                      />
                    </div>
                    <div className="p-5">
                      <p className="text-xs text-secondary mb-2">{p.date} · {p.readTime} read</p>
                      <h4 className="font-display text-lg text-white group-hover:text-gold-400 transition-colors">
                        {p.title}
                      </h4>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </SectionBg>
      )}
    </>
  );
}
