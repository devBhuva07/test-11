import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Testimonial } from '../../types';
import { Rating } from './Rating';

export function TestimonialCard({ t, index = 0 }: { t: Testimonial; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="card-lux p-8 h-full flex flex-col"
    >
      <Quote className="h-8 w-8 text-gold-400/50 mb-4" />
      <p className="font-display text-xl leading-relaxed text-white/90 italic flex-1">"{t.quote}"</p>
      <div className="flex items-center gap-4 mt-6 pt-6 border-t border-white/10">
        <img src={t.avatar} alt={t.name} loading="lazy" className="h-12 w-12 rounded-full object-cover" />
        <div>
          <p className="font-medium text-white">{t.name}</p>
          <p className="text-xs text-secondary">
            {t.role} · {t.location}
          </p>
        </div>
        <div className="ml-auto">
          <Rating value={t.rating} />
        </div>
      </div>
    </motion.div>
  );
}
