import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Terminal, Search } from 'lucide-react';
import { portfolioData } from '../../config/portfolio';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Tech Stack', href: '#tech-stack' },
  { name: 'Projects', href: '#projects' },
  { name: 'Learning', href: '#learning' },
  { name: 'Contact', href: '#contact' },
];

interface NavbarProps {
  onOpenCommandPalette?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommandPalette }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy
      const sections = ['about', 'tech-stack', 'projects', 'learning', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const initials = portfolioData.personal.name
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Main Navigation"
            className={`flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-full border transition-all duration-300 ${
              scrolled
                ? 'bg-zinc-950/80 border-white/[0.08] backdrop-blur-xl shadow-lg shadow-black/40'
                : 'bg-zinc-900/40 border-white/[0.05] backdrop-blur-md'
            }`}
          >
            {/* Logo / Monogram */}
            <a
              href="#hero"
              className="flex items-center gap-2.5 group py-1"
              aria-label="Back to top"
            >
              <div className="w-8 h-8 rounded-lg bg-zinc-800/80 border border-white/10 flex items-center justify-center text-zinc-200 group-hover:border-emerald-500/50 group-hover:text-emerald-400 transition-colors">
                <Terminal className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-sm font-semibold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                  {initials.toLowerCase()}.dev
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 text-sm font-medium">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative px-3.5 py-1.5 rounded-full transition-colors ${
                      isActive
                        ? 'text-white'
                        : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04]'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavTab"
                        className="absolute inset-0 bg-white/[0.08] border border-white/[0.1] rounded-full"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </a>
                );
              })}
            </div>

            {/* Right side status & CTA */}
            <div className="hidden sm:flex items-center gap-2.5">
              {onOpenCommandPalette && (
                <button
                  type="button"
                  onClick={onOpenCommandPalette}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-mono text-zinc-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-colors"
                  title="Search & Commands (⌘K)"
                >
                  <Search className="w-3.5 h-3.5" />
                  <span className="text-[10px] text-zinc-500">⌘K</span>
                </button>
              )}

              {portfolioData.personal.availableForHire && (
                <div className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Available</span>
                </div>
              )}

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-white text-zinc-950 hover:bg-zinc-200 transition-colors shadow-sm"
              >
                <span>Let's talk</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
                className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 md:hidden bg-zinc-950/95 backdrop-blur-2xl flex flex-col pt-24 px-6 pb-8"
          >
            <div className="flex flex-col space-y-4">
              <span className="text-xs font-mono tracking-wider text-zinc-500 uppercase px-3">
                Navigation
              </span>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-lg font-medium text-zinc-200 hover:text-white hover:bg-white/5 transition-colors"
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-6 border-t border-white/10 mt-4 flex flex-col gap-3">
                {portfolioData.personal.availableForHire && (
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{portfolioData.personal.availability}</span>
                  </div>
                )}

                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white text-zinc-950 font-medium text-sm hover:bg-zinc-200 transition-colors"
                >
                  <span>Get in Touch</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
