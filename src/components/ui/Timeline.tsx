import { motion } from 'framer-motion';

export type TimelineItem = { day: number; title: string; detail: string };

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative pl-8 md:pl-0">
      <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-px" />
      <div className="space-y-8">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
              i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            <div className="md:w-1/2 md:px-8">
              <div className="card-lux p-6">
                <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-gold-gradient text-black text-sm font-semibold mb-3">
                  {item.day}
                </span>
                <h4 className="font-display text-lg text-white mb-1.5">{item.title}</h4>
                <p className="text-sm text-secondary leading-relaxed">{item.detail}</p>
              </div>
            </div>
            <div className="hidden md:block md:w-1/2" />
            <span className="absolute left-3 md:left-1/2 top-6 h-3 w-3 rounded-full bg-gold-400 ring-4 ring-black md:-translate-x-1.5" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
