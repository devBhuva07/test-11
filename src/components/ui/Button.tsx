import { forwardRef, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'gold' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

type CommonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
};

const variantClass: Record<Variant, string> = {
  primary: 'btn-primary',
  gold: 'btn-gold',
  outline: 'btn-outline',
  ghost: 'btn-ghost',
};

const sizeClass: Record<Size, string> = {
  sm: 'btn-sm',
  md: '',
  lg: 'btn-lg',
};

function useRipple() {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);
  const idRef = useRef(0);

  const addRipple = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const id = idRef.current++;
    setRipples((prev) => [...prev, { x: e.clientX - rect.left, y: e.clientY - rect.top, id }]);
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 600);
  };

  return { ripples, addRipple };
}

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  const { ripples, addRipple } = useRipple();
  return (
    <button
      className={`${variantClass[variant]} ${sizeClass[size]} ${className}`}
      onClick={(e) => {
        addRipple(e);
        props.onClick?.(e);
      }}
      {...props}
    >
      {ripples.map((r) => (
        <span
          key={r.id}
          className="absolute rounded-full bg-white/30 pointer-events-none animate-ripple"
          style={{ left: r.x, top: r.y, width: 10, height: 10, transform: 'translate(-50%, -50%)' }}
        />
      ))}
      {children}
    </button>
  );
}

export const LinkButton = forwardRef<
  HTMLAnchorElement,
  CommonProps & { to: string; className?: string }
>(({ variant = 'primary', size = 'md', to, className = '', children }, ref) => {
  const { ripples, addRipple } = useRipple();
  return (
    <Link
      ref={ref}
      to={to}
      className={`${variantClass[variant]} ${sizeClass[size]} ${className}`}
      onClick={addRipple}
    >
      {ripples.map((r) => (
        <span
          key={r.id}
          className="absolute rounded-full bg-white/30 pointer-events-none animate-ripple"
          style={{ left: r.x, top: r.y, width: 10, height: 10, transform: 'translate(-50%, -50%)' }}
        />
      ))}
      {children}
    </Link>
  );
});
LinkButton.displayName = 'LinkButton';
