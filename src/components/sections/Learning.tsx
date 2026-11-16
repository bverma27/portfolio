import React from 'react';
import { motion } from 'framer-motion';
import { 
  Network, 
  Binary, 
  Sparkles, 
  Terminal, 
  BookOpen, 
  TrendingUp, 
  CheckCircle 
} from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { portfolioData } from '../../config/portfolio';

export const Learning: React.FC = () => {
  const { learning } = portfolioData;

  const getTopicIcon = (iconName: string) => {
    switch (iconName) {
      case 'Network':
        return <Network className="w-5 h-5 text-emerald-400" />;
      case 'Binary':
        return <Binary className="w-5 h-5 text-cyan-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-purple-400" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-amber-400" />;
      default:
        return <BookOpen className="w-5 h-5 text-zinc-400" />;
    }
  };

  return (
    <section id="learning" className="py-20 md:py-28 relative scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="04"
          badge="Continuous Growth"
          title="Currently learning & deep diving."
          description="Technology evolves rapidly. Here is what I am actively reading, practicing, and architecting."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {learning.map((item, index) => {
            return (
              <motion.div
                key={item.topic}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative p-6 sm:p-7 rounded-2xl bg-zinc-900/40 hover:bg-zinc-900/80 border border-white/[0.07] hover:border-white/[0.14] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon & Category */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                      {getTopicIcon(item.icon)}
                    </div>

                    <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/[0.04] text-zinc-400 border border-white/[0.06]">
                      {item.category}
                    </span>
                  </div>

                  {/* Topic Title */}
                  <h3 className="text-lg font-semibold text-white tracking-tight group-hover:text-emerald-300 transition-colors mb-2">
                    {item.topic}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {/* Current Focus Highlight */}
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] mb-5">
                    <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-1">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Current Focus</span>
                    </div>
                    <p className="text-xs font-medium text-zinc-300">
                      {item.currentFocus}
                    </p>
                  </div>
                </div>

                {/* Bottom: Progress Bar & Tags */}
                <div className="space-y-4 pt-4 border-t border-white/[0.05]">
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                      <span className="text-zinc-500">Mastery Track</span>
                      <span className="text-zinc-300">{item.progress}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                        className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-indigo-500"
                      />
                    </div>
                  </div>

                  {/* Topic Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[11px] font-mono text-zinc-400 bg-white/[0.03] border border-white/[0.05]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Learning Philosophy Summary */}
        <div className="mt-8 p-5 rounded-2xl bg-zinc-900/30 border border-white/[0.05] flex items-center gap-4">
          <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            I prioritize deep foundational understanding over fleeting hype. Building real, production-ready prototypes is my primary method of internalizing new concepts.
          </p>
        </div>
      </div>
    </section>
  );
};
