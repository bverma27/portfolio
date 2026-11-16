import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Sparkles, FolderGit2, Cpu } from 'lucide-react';
import { Project } from '../../types';
import { TechIcon } from './TechIcon';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && project) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  // Lock body scroll
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-2xl rounded-2xl bg-zinc-900 border border-white/10 shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/[0.08] flex items-start justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
                  <FolderGit2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="uppercase">{project.category}</span>
                  <span>•</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-medium">
                  {project.tagline}
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="p-6 space-y-6 overflow-y-auto flex-1 text-sm text-zinc-300 leading-relaxed">
              {/* Description */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">
                  System Overview
                </h4>
                <p className="text-zinc-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Key Metrics */}
              {project.metrics && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-3">
                  <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400/80 block">
                      Performance Benchmark
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-emerald-300">
                      {project.metrics}
                    </span>
                  </div>
                </div>
              )}

              {/* Engineering Highlights */}
              {project.highlights && project.highlights.length > 0 && (
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-3 flex items-center gap-2">
                    <Cpu className="w-3.5 h-3.5 text-zinc-400" />
                    Key Architectural Highlights
                  </h4>
                  <div className="space-y-2.5">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack Pills */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-3">
                  Technologies Deployed
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <div
                      key={tech}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono bg-zinc-800/80 border border-white/[0.08] text-zinc-200"
                    >
                      <TechIcon name={tech} className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="p-4 sm:p-6 bg-zinc-950/80 border-t border-white/[0.08] flex items-center justify-between gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-white/[0.08] transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium bg-white text-zinc-950 hover:bg-zinc-200 transition-colors shadow-sm"
                >
                  <span>Launch Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
