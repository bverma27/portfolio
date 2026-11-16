import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  number?: string;
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  badge,
  title,
  description,
  centered = false,
}) => {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center max-w-2xl mx-auto' : 'max-w-3xl'}`}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.4 }}
        className={`inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full text-xs font-mono tracking-wider uppercase bg-white/[0.04] border border-white/[0.08] text-zinc-400 ${
          centered ? 'mx-auto' : ''
        }`}
      >
        {number && <span className="text-emerald-400 font-semibold">{number}</span>}
        {badge && <span>{badge}</span>}
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-3 text-sm sm:text-base text-zinc-400 leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};
