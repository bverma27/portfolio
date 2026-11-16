import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowDown, 
  ArrowUpRight, 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Sparkles,
  Terminal,
  Check
} from 'lucide-react';
import { portfolioData } from '../../config/portfolio';

interface HeroProps {
  onCopyEmail: (email: string) => void;
  copiedEmail: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onCopyEmail, copiedEmail }) => {
  const { personal, socials } = portfolioData;

  const getSocialIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'github':
        return <Github className="w-4 h-4" />;
      case 'linkedin':
        return <Linkedin className="w-4 h-4" />;
      case 'mail':
        return <Mail className="w-4 h-4" />;
      default:
        return <ArrowUpRight className="w-4 h-4" />;
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-start space-y-6 sm:space-y-8">
          
          {/* Top Status & Location Badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap items-center gap-2 sm:gap-3"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-zinc-900/80 border border-white/10 text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{personal.availability}</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-white/[0.03] border border-white/[0.06] text-zinc-400">
              <MapPin className="w-3.5 h-3.5 text-zinc-400" />
              <span>{personal.location}</span>
            </div>
          </motion.div>

          {/* Name & Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-2"
          >
            <div className="inline-flex items-center gap-2 text-sm sm:text-base font-mono text-zinc-400">
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span>Hello, World! I am</span>
              <span className="text-zinc-200 font-semibold">{personal.name}</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.08]">
              {personal.headline}
            </h1>
          </motion.div>

          {/* Short Introduction */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl text-base sm:text-lg text-zinc-400 leading-relaxed font-normal"
          >
            {personal.bio[0]} {personal.bio[1]}
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-zinc-950 font-medium text-sm hover:bg-zinc-200 transition-all shadow-sm hover:shadow-white/10 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>View Projects</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 font-medium text-sm border border-white/10 hover:border-white/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Contact Me</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <button
              onClick={() => onCopyEmail(personal.email)}
              title="Copy email to clipboard"
              className="hidden md:inline-flex items-center gap-2 px-4 py-3 rounded-full bg-white/[0.03] hover:bg-white/[0.08] text-zinc-400 hover:text-white border border-white/[0.07] text-xs font-mono transition-colors"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Email Copied!</span>
                </>
              ) : (
                <>
                  <Mail className="w-3.5 h-3.5" />
                  <span>{personal.email}</span>
                </>
              )}
            </button>
          </motion.div>

          {/* Social Links & Highlights bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pt-6 sm:pt-8 w-full border-t border-white/[0.07] flex flex-wrap items-center justify-between gap-4"
          >
            {/* Social Icons with Tooltips */}
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 mr-1 sm:mr-2">
                Connect
              </span>
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${social.name}`}
                  className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.07] text-zinc-400 hover:text-white hover:border-white/20 hover:bg-white/[0.08] transition-all hover:-translate-y-0.5"
                >
                  {getSocialIcon(social.icon)}
                </a>
              ))}
            </div>

            {/* Subtle Tech Focus Highlights */}
            <div className="hidden lg:flex items-center gap-3 text-xs font-mono text-zinc-500">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                Modern Stack
              </span>
              <span>•</span>
              <span>Minimalist Design</span>
              <span>•</span>
              <span>Production Ready</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
