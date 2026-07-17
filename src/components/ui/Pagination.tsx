import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Pagination({ current, total, basePath }: { current: number; total: number; basePath: string }) {
  if (total <= 1) return null;
  const pages = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-2">
      <Link
        to={`${basePath}?page=${Math.max(1, current - 1)}`}
        className={`h-10 w-10 rounded-full flex items-center justify-center border transition-colors ${
          current === 1 ? 'border-sand-200 text-ink-300 pointer-events-none' : 'border-sand-200 text-ink-700 hover:border-gold-400 hover:text-gold-600'
        }`}
        aria-label="Previous page"
      >
        <ChevronLeft className="h-4 w-4" />
      </Link>
      {pages.map((p) => (
        <Link
          key={p}
          to={`${basePath}?page=${p}`}
          className={`h-10 w-10 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
            p === current
              ? 'bg-ink-900 text-sand-50'
              : 'text-ink-600 hover:bg-sand-100'
          }`}
        >
          {p}
        </Link>
      ))}
      <Link
        to={`${basePath}?page=${Math.min(total, current + 1)}`}
        className={`h-10 w-10 rounded-full flex items-center justify-center border transition-colors ${
          current === total ? 'border-sand-200 text-ink-300 pointer-events-none' : 'border-sand-200 text-ink-700 hover:border-gold-400 hover:text-gold-600'
        }`}
        aria-label="Next page"
      >
        <ChevronRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
