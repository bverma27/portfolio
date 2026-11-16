import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Compass, 
  Lightbulb, 
  Sparkles, 
  Layers, 
  Zap, 
  ArrowRight 
} from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { portfolioData } from '../../config/portfolio';

const principles = [
  {
    icon: Zap,
    title: "Performance First",
    description: "Every millisecond counts. Prioritizing lean bundles, fast rendering paths, and efficient API queries.",
  },
  {
    icon: Layers,
    title: "Clean Architecture",
    description: "Writing modular, self-documenting, and scalable code that stands the test of time and refactors easily.",
  },
  {
    icon: Sparkles,
    title: "Attention to Detail",
    description: "Polishing micro-interactions, responsive states, accessibility, and visual rhythm across every breakpoint.",
  },
];

export const About: React.FC = () => {
  const { personal } = portfolioData;

  return (
    <section id="about" className="py-20 md:py-28 relative scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="01"
          badge="Identity & Philosophy"
          title="Engineered with precision, crafted with care."
          description="A glimpse into my background, development approach, and technical interests."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Main Narrative - 7 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-4 text-zinc-300 text-base sm:text-lg leading-relaxed">
              {personal.bio.map((paragraph, index) => (
                <p key={index} className="text-zinc-400">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Engineering Philosophy Card */}
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-white/[0.08] relative overflow-hidden group">
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 to-indigo-500" />
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">
                    Core Philosophy
                  </span>
                  <blockquote className="text-sm sm:text-base text-zinc-200 font-medium italic leading-relaxed">
                    "{personal.philosophy}"
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Quick action toward Currently Learning */}
            <div className="pt-2">
              <a
                href="#learning"
                className="inline-flex items-center gap-2 text-sm font-mono text-emerald-400 hover:text-emerald-300 transition-colors group"
              >
                <span>Explore what I am currently learning</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Side Column: Principles & Interests - 5 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Core Tenets */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-500 flex items-center gap-2">
                <Compass className="w-3.5 h-3.5 text-zinc-400" />
                How I Work
              </h3>

              <div className="space-y-3">
                {principles.map((principle) => {
                  const Icon = principle.icon;
                  return (
                    <div
                      key={principle.title}
                      className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] transition-colors"
                    >
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <Icon className="w-4 h-4 text-zinc-400" />
                        <h4 className="text-sm font-semibold text-white">
                          {principle.title}
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed pl-6">
                        {principle.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Areas of Interest Tags */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-500 flex items-center gap-2">
                <Code2 className="w-3.5 h-3.5 text-zinc-400" />
                Interests & Explorations
              </h3>

              <div className="flex flex-wrap gap-2">
                {personal.interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-900 border border-white/[0.07] text-zinc-300 hover:border-emerald-500/30 hover:text-white transition-all"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Geographic Base Tag */}
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-between text-xs font-mono">
              <span className="text-zinc-500">Geographic Base</span>
              <span className="text-zinc-300 font-medium flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Delhi, India (IST, UTC+5:30)
              </span>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
