import { Star } from 'lucide-react';

export function Rating({ value, className = '' }: { value: number; className?: string }) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${
            i <= Math.round(value) ? 'fill-gold-400 text-gold-400' : 'text-white/20'
          }`}
        />
      ))}
      <span className="ml-1 text-xs font-medium text-secondary">{value.toFixed(1)}</span>
    </div>
  );
}
