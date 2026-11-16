import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  ArrowRight, 
  Copy, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Mail, 
  Compass, 
  Code, 
  Layers, 
  BookOpen, 
  Terminal,
  MapPin 
} from 'lucide-react';
import { portfolioData } from '../../config/portfolio';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onCopyEmail: (email: string) => void;
}

interface CommandItem {
  id: string;
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  category: 'Navigation' | 'Actions' | 'Socials';
  action: () => void;
  shortcut?: string;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onCopyEmail,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const navigateTo = (hash: string) => {
    onClose();
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const commands: CommandItem[] = [
    // Navigation
    {
      id: 'nav-about',
      title: 'Go to About Me',
      subtitle: 'Background & philosophy',
      icon: <Compass className="w-4 h-4 text-emerald-400" />,
      category: 'Navigation',
      action: () => navigateTo('#about'),
      shortcut: 'G A',
    },
    {
      id: 'nav-tech',
      title: 'Go to Tech Stack',
      subtitle: 'Skills, frameworks & tools',
      icon: <Code className="w-4 h-4 text-cyan-400" />,
      category: 'Navigation',
      action: () => navigateTo('#tech-stack'),
      shortcut: 'G T',
    },
    {
      id: 'nav-projects',
      title: 'Go to Projects',
      subtitle: 'Featured software projects',
      icon: <Layers className="w-4 h-4 text-purple-400" />,
      category: 'Navigation',
      action: () => navigateTo('#projects'),
      shortcut: 'G P',
    },
    {
      id: 'nav-learning',
      title: 'Go to Currently Learning',
      subtitle: 'System design, DSA, AI engineering',
      icon: <BookOpen className="w-4 h-4 text-amber-400" />,
      category: 'Navigation',
      action: () => navigateTo('#learning'),
      shortcut: 'G L',
    },
    {
      id: 'nav-contact',
      title: 'Go to Contact',
      subtitle: 'Send a message or get in touch',
      icon: <Mail className="w-4 h-4 text-emerald-400" />,
      category: 'Navigation',
      action: () => navigateTo('#contact'),
      shortcut: 'G C',
    },
    // Actions
    {
      id: 'act-copy-email',
      title: 'Copy Email Address',
      subtitle: portfolioData.personal.email,
      icon: <Copy className="w-4 h-4 text-emerald-400" />,
      category: 'Actions',
      action: () => {
        onCopyEmail(portfolioData.personal.email);
        onClose();
      },
      shortcut: 'C E',
    },
    {
      id: 'act-open-mail',
      title: 'Open in Email Client',
      subtitle: `mailto:${portfolioData.personal.email}`,
      icon: <ExternalLink className="w-4 h-4 text-blue-400" />,
      category: 'Actions',
      action: () => {
        window.open(`mailto:${portfolioData.personal.email}`, '_blank');
        onClose();
      },
    },
    {
      id: 'act-location',
      title: 'Current Location',
      subtitle: 'Delhi, India (IST, UTC+5:30)',
      icon: <MapPin className="w-4 h-4 text-emerald-400" />,
      category: 'Actions',
      action: () => {
        navigateTo('#contact');
      },
      shortcut: 'G D',
    },
    // Socials
    {
      id: 'soc-github',
      title: 'Open GitHub Profile',
      subtitle: 'View open source code repositories',
      icon: <Github className="w-4 h-4 text-zinc-300" />,
      category: 'Socials',
      action: () => {
        const gh = portfolioData.socials.find(s => s.name.toLowerCase().includes('git'));
        if (gh) window.open(gh.url, '_blank');
        onClose();
      },
    },
    {
      id: 'soc-linkedin',
      title: 'Open LinkedIn Profile',
      subtitle: 'Connect professionally',
      icon: <Linkedin className="w-4 h-4 text-blue-400" />,
      category: 'Socials',
      action: () => {
        const li = portfolioData.socials.find(s => s.name.toLowerCase().includes('linked'));
        if (li) window.open(li.url, '_blank');
        onClose();
      },
    },
  ];

  const filteredCommands = commands.filter((cmd) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (
      cmd.title.toLowerCase().includes(q) ||
      (cmd.subtitle && cmd.subtitle.toLowerCase().includes(q)) ||
      cmd.category.toLowerCase().includes(q)
    );
  });

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(filteredCommands.length, 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % Math.max(filteredCommands.length, 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredCommands[selectedIndex]) {
        filteredCommands[selectedIndex].action();
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="relative w-full max-w-xl rounded-2xl bg-zinc-900 border border-white/10 shadow-2xl overflow-hidden z-10"
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/[0.08]">
              <Search className="w-5 h-5 text-zinc-400 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a command or search..."
                className="w-full bg-transparent text-sm text-zinc-100 placeholder:text-zinc-500 outline-none"
              />
              <kbd className="hidden sm:inline-flex items-center px-2 py-0.5 text-[10px] font-mono text-zinc-400 bg-white/[0.06] rounded border border-white/[0.08]">
                ESC
              </kbd>
            </div>

            {/* Results List */}
            <div className="max-h-80 overflow-y-auto p-2 space-y-1">
              {filteredCommands.length === 0 ? (
                <div className="p-8 text-center text-xs font-mono text-zinc-500">
                  No commands matching "{query}"
                </div>
              ) : (
                filteredCommands.map((cmd, idx) => {
                  const isSelected = idx === selectedIndex;
                  return (
                    <button
                      key={cmd.id}
                      type="button"
                      onClick={() => cmd.action()}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left transition-colors ${
                        isSelected
                          ? 'bg-white/[0.08] text-white'
                          : 'text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="p-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] shrink-0">
                          {cmd.icon}
                        </div>
                        <div className="truncate">
                          <span className="text-xs font-medium text-zinc-200 block truncate">
                            {cmd.title}
                          </span>
                          {cmd.subtitle && (
                            <span className="text-[11px] font-mono text-zinc-500 block truncate">
                              {cmd.subtitle}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0 ml-3">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-600 px-1.5 py-0.5 rounded bg-white/[0.02]">
                          {cmd.category}
                        </span>
                        {cmd.shortcut && (
                          <span className="hidden sm:inline-block text-[10px] font-mono text-zinc-500">
                            {cmd.shortcut}
                          </span>
                        )}
                        <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'translate-x-0.5 text-emerald-400' : 'text-zinc-600'}`} />
                      </div>
                    </button>
                  );
                })
              )}
            </div>

            {/* Modal Footer Keyboard Legend */}
            <div className="px-4 py-2.5 bg-zinc-950/60 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-500">
              <div className="flex items-center gap-3">
                <span><kbd className="px-1.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.06]">↑↓</kbd> Navigate</span>
                <span><kbd className="px-1.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.06]">↵</kbd> Select</span>
              </div>
              <div className="flex items-center gap-1.5 text-zinc-400">
                <Terminal className="w-3 h-3 text-emerald-400" />
                <span>Command Menu</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
