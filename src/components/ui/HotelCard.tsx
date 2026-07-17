import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Hotel } from '../../types';

export function HotelCard({ hotel, index = 0 }: { hotel: Hotel; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group card card-hover h-full"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={hotel.image}
          alt={hotel.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1.2s] ease-lux group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute top-4 right-4 glass-pill px-2.5 py-1 rounded-full flex items-center gap-1">
          <Star className="h-3 w-3 fill-gold-400 text-gold-400" />
          <span className="text-xs font-semibold text-white">{hotel.rating.toFixed(1)}</span>
        </div>
      </div>
      <div className="p-5">
        <p className="text-xs text-gold-400 font-medium mb-1">{hotel.destination}</p>
        <h3 className="font-display text-xl text-white mb-3">{hotel.name}</h3>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {hotel.amenities.map((a) => (
            <span key={a} className="text-xs px-2.5 py-1 rounded-full text-secondary" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
              {a}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between pt-3 border-t border-white/10">
          <p className="text-sm text-secondary">
            From <span className="text-white font-semibold">${hotel.priceFrom}</span>
            <span className="text-xs text-white/40"> /night</span>
          </p>
          <Link
            to="/booking"
            className="text-sm font-medium text-gold-400 hover:text-warmgold-400 transition-colors"
          >
            Book
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
