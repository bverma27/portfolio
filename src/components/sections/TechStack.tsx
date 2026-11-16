import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { TechIcon } from '../ui/TechIcon';
import { portfolioData } from '../../config/portfolio';

type CategoryFilter = 'all' | 'frontend' | 'backend' | 'database' | 'tools' | 'core';

const categories: { label: string; value: CategoryFilter }[] = [
  { label: 'All Technologies', value: 'all' },
  { label: 'Frontend', value: 'frontend' },
  { label: 'Backend', value: 'backend' },
  { label: 'Database & Tools', value: 'database' },
  { label: 'Core / Language', value: 'core' },
];

export const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const filteredTech = portfolioData.techStack.filter((tech) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'database') {
      return tech.category === 'database' || tech.category === 'tools';
    }
    return tech.category === activeCategory;
  });

  return (
    <section id="tech-stack" className="py-20 md:py-28 relative scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="02"
          badge="Core Competencies"
          title="Technologies I build with daily."
          description="A curated toolkit chosen for reliability, developer velocity, and high-performance delivery."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                  isActive
                    ? 'text-white'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryPill"
                    className="absolute inset-0 bg-white/[0.08] border border-white/[0.15] rounded-full shadow-sm"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tech Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredTech.map((tech) => {
              const isHovered = hoveredTech === tech.name;
              return (
                <motion.div
                  key={tech.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  onMouseEnter={() => setHoveredTech(tech.name)}
                  onMouseLeave={() => setHoveredTech(null)}
                  className="group relative p-5 rounded-2xl bg-zinc-900/40 hover:bg-zinc-900/80 border border-white/[0.06] hover:border-white/[0.15] transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.03] group-hover:bg-white/[0.08] border border-white/[0.08] flex items-center justify-center text-zinc-300 group-hover:text-emerald-400 transition-colors">
                        <TechIcon name={tech.name} className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                          {tech.name}
                        </h3>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">
                          {tech.category}
                        </span>
                      </div>
                    </div>

                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-emerald-400 transition-colors" />
                  </div>

                  <p className="mt-3 text-xs text-zinc-400 leading-relaxed font-normal">
                    {tech.description}
                  </p>

                  {/* Subtle hover line accent */}
                  <div 
                    className={`absolute bottom-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent transition-opacity duration-300 ${
                      isHovered ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom subtle note */}
        <div className="mt-8 flex items-center justify-between text-xs font-mono text-zinc-500 pt-4 border-t border-white/[0.04]">
          <span>Full-stack versatility with modern web standards</span>
          <span className="hidden sm:inline">TypeScript • Component-Driven • REST & GraphQL</span>
        </div>
      </div>
    </section>
  );
};
