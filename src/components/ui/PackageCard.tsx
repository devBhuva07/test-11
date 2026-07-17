import { Link } from 'react-router-dom';
import { Clock, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Package } from '../../types';
import { Rating } from './Rating';

export function PackageCard({ pkg, index = 0 }: { pkg: Package; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group card card-hover h-full flex flex-col"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1.2s] ease-lux group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        {pkg.tag && (
          <span className="absolute top-4 right-4 bg-gold-gradient text-black text-xs font-semibold px-3 py-1 rounded-full">
            {pkg.tag}
          </span>
        )}
        <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white/80 text-sm">
          <Clock className="h-4 w-4" />
          {pkg.days} days / {pkg.nights} nights
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <p className="eyebrow mb-2">{pkg.destination}</p>
        <h3 className="font-display text-2xl text-white mb-2">{pkg.title}</h3>
        <p className="text-sm text-secondary leading-relaxed mb-4 flex-1">{pkg.description}</p>
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <div>
            <Rating value={pkg.rating} />
            <p className="mt-1 text-xs text-secondary">
              From <span className="text-white font-semibold">${pkg.priceFrom.toLocaleString()}</span>
            </p>
          </div>
          <Link
            to={`/packages/${pkg.id}`}
            className="flex items-center gap-1 text-sm font-medium text-white hover:text-gold-400 transition-colors"
          >
            View
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
