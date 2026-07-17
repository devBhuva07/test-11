import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

/**
 * SectionBg — renders a full-bleed luxury travel background image with:
 * - 70% black overlay for readability
 * - soft radial gold gradient for depth
 * - vignette effect
 * - slow Ken Burns zoom (25s)
 * - gentle parallax on scroll
 * - fade gradients at top & bottom for seamless section transitions
 * Content is placed inside glass containers by the caller.
 */
export function SectionBg({
  image,
  children,
  className = '',
  overlay = 0.70,
  zoom = true,
  parallax = true,
  id,
  fadeTop = true,
  fadeBottom = true,
}: {
  image: string;
  children: ReactNode;
  className?: string;
  overlay?: number;
  zoom?: boolean;
  parallax?: boolean;
  id?: string;
  fadeTop?: boolean;
  fadeBottom?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section
      ref={ref}
      id={id}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Background image with parallax + slow zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          style={parallax ? { y } : undefined}
          className="absolute inset-0"
        >
          <div
            className={`absolute inset-0 ${zoom ? 'animate-slow-zoom' : ''}`}
            style={{ willChange: 'transform' }}
          >
            <img
              src={image}
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover scale-105"
              loading="lazy"
            />
          </div>
        </motion.div>
        {/* 70% black overlay */}
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(rgba(0,0,0,${overlay}), rgba(0,0,0,${overlay}))` }}
        />
        {/* Soft radial gold gradient for depth */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 50% 0%, rgba(212,175,55,0.08), transparent 60%)',
          }}
        />
        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{ boxShadow: 'inset 0 0 200px 60px rgba(0,0,0,0.6)' }}
        />
        {/* Fade gradient at top for seamless transition from previous section */}
        {fadeTop && (
          <div
            className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.85), transparent)' }}
          />
        )}
        {/* Fade gradient at bottom for seamless transition to next section */}
        {fadeBottom && (
          <div
            className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
            style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)' }}
          />
        )}
      </div>
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </section>
  );
}

/**
 * GlassPanel — wraps content in a premium dark glass container.
 */
export function GlassPanel({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`glass p-8 md:p-10 ${className}`}>{children}</div>;
}
