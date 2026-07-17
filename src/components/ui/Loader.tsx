import { motion } from 'framer-motion';

export function Loader({ full = false }: { full?: boolean }) {
  const content = (
    <div className="flex flex-col items-center gap-4">
      <div className="relative h-12 w-12">
        <div className="absolute inset-0 rounded-full border-2 border-sand-200" />
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-transparent border-t-gold-500"
          animate={{ rotate: 360 }}
          transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }}
        />
      </div>
      <p className="text-eyebrow text-gold-600">Curating your journey</p>
    </div>
  );

  if (full) {
    return <div className="min-h-screen flex items-center justify-center bg-sand-50">{content}</div>;
  }
  return <div className="py-20 flex items-center justify-center">{content}</div>;
}
