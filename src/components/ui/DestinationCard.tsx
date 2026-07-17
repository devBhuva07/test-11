import { Link } from 'react-router-dom';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Destination } from '../../types';
import { Rating } from './Rating';

export function DestinationCard({ destination, index = 0 }: { destination: Destination; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to={`/destinations/${destination.id}`}
        className="group block card card-hover h-full"
      >
        <div className="relative h-72 overflow-hidden">
          <img
            src={destination.image}
            alt={destination.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[1.2s] ease-lux group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute top-4 left-4 glass-pill px-3 py-1.5 rounded-full text-xs font-medium text-white flex items-center gap-1.5">
            <MapPin className="h-3 w-3 text-gold-400" />
            {destination.country}
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="font-display text-2xl text-white mb-1">{destination.name}</h3>
            <p className="text-sm text-white/70">{destination.tagline}</p>
          </div>
        </div>
        <div className="p-5 flex items-center justify-between">
          <div>
            <Rating value={destination.rating} />
            <p className="mt-1.5 text-xs text-secondary">From ${destination.priceFrom.toLocaleString()}</p>
          </div>
          <span className="flex items-center gap-1 text-sm font-medium text-white group-hover:text-gold-400 transition-colors">
            Explore
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
