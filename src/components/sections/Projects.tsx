import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  Github, 
  Sparkles, 
  FolderGit2, 
  CheckCircle2 
} from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { TechIcon } from '../ui/TechIcon';
import { ProjectModal } from '../ui/ProjectModal';
import { portfolioData } from '../../config/portfolio';
import { Project } from '../../types';

type ProjectFilter = 'all' | 'full-stack' | 'frontend' | 'backend';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<ProjectFilter>('all');
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = portfolioData.projects.filter((project) => {
    if (filter === 'all') return true;
    return project.category === filter;
  });

  return (
    <section id="projects" className="py-20 md:py-28 relative scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            number="03"
            badge="Featured Work"
            title="Projects crafted with purpose."
            description="Production-grade web applications, developer tooling, and distributed systems."
          />

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 rounded-full bg-zinc-900/80 border border-white/[0.08] self-start md:self-auto shrink-0">
            {(['all', 'full-stack', 'frontend', 'backend'] as ProjectFilter[]).map((tab) => {
              const isActive = filter === tab;
              const label = tab === 'all' ? 'All' : tab === 'full-stack' ? 'Full Stack' : tab === 'frontend' ? 'Frontend' : 'Backend';
              return (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`relative px-3.5 py-1 text-xs font-mono capitalize transition-colors rounded-full ${
                    isActive ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="projectFilterPill"
                      className="absolute inset-0 bg-white/10 rounded-full"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: Project) => {
              const isHovered = hoveredProjectId === project.id;
              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onMouseEnter={() => setHoveredProjectId(project.id)}
                  onMouseLeave={() => setHoveredProjectId(null)}
                  className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-zinc-900/40 hover:bg-zinc-900/80 border border-white/[0.07] hover:border-white/[0.16] transition-all duration-300"
                >
                  <div>
                    {/* Top Meta Bar */}
                    <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-4">
                      <div className="flex items-center gap-2">
                        <FolderGit2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="uppercase tracking-wider">{project.category}</span>
                        <span>•</span>
                        <span>{project.year}</span>
                      </div>

                      {project.metrics && (
                        <span className="hidden sm:inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                          <Sparkles className="w-3 h-3" />
                          {project.metrics}
                        </span>
                      )}
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="text-xl font-semibold text-white tracking-tight group-hover:text-emerald-300 transition-colors mb-1.5 flex items-center justify-between">
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </h3>

                    <p className="text-xs sm:text-sm font-medium text-zinc-400 mb-4">
                      {project.tagline}
                    </p>

                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    {project.highlights && project.highlights.length > 0 && (
                      <div className="space-y-1.5 mb-6 pt-3 border-t border-white/[0.05]">
                        {project.highlights.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-zinc-400">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400/80 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Card Bottom: Tech Pills & Action Links */}
                  <div className="pt-4 border-t border-white/[0.06] space-y-4">
                    {/* Tech Badges */}
                    <div className="flex flex-wrap items-center gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.03] border border-white/[0.06] text-zinc-300"
                        >
                          <TechIcon name={tech} className="w-3 h-3 text-zinc-400" />
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex flex-wrap items-center gap-2.5 pt-1">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white text-zinc-950 hover:bg-zinc-200 transition-colors shadow-sm"
                        >
                          <span>Live Demo</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-800/80 hover:bg-zinc-700 text-zinc-200 border border-white/[0.08] transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source</span>
                      </a>

                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-mono text-zinc-400 hover:text-white hover:bg-white/[0.05] transition-colors ml-auto"
                      >
                        <span>Details</span>
                        <ArrowUpRight className="w-3 h-3 text-emerald-400" />
                      </button>
                    </div>
                  </div>

                  {/* Subtle hover gradient indicator */}
                  <div
                    className={`absolute bottom-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent transition-opacity duration-300 ${
                      isHovered ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal Deep Dive */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

        {/* Easy to edit callout for users / recruiters */}
        <div className="mt-12 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>More projects and open source contributions available on GitHub.</span>
          </div>
          <a
            href={portfolioData.socials.find((s) => s.name === 'GitHub')?.url || 'https://github.com'}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-zinc-300 hover:text-white flex items-center gap-1 underline underline-offset-4"
          >
            <span>Explore all repositories</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
};
