import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export type Crumb = { label: string; path?: string };

export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          {item.path && i < items.length - 1 ? (
            <Link to={item.path} className="text-ink-400 hover:text-gold-600 transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-ink-700 font-medium">{item.label}</span>
          )}
          {i < items.length - 1 && <ChevronRight className="h-3.5 w-3.5 text-ink-300" />}
        </span>
      ))}
    </nav>
  );
}
