import { ArrowUp, Github, Linkedin, Mail, Twitter, Terminal } from 'lucide-react';
import { portfolioData } from '../../config/portfolio';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { personal, socials } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'github':
        return <Github className="w-4 h-4" />;
      case 'linkedin':
        return <Linkedin className="w-4 h-4" />;
      case 'twitter':
        return <Twitter className="w-4 h-4" />;
      default:
        return <Mail className="w-4 h-4" />;
    }
  };

  return (
    <footer className="relative border-t border-white/[0.06] bg-zinc-950/80 pt-12 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/[0.04]">
          
          {/* Brand & Monogram */}
          <div className="flex flex-col items-center md:items-start space-y-2 text-center md:text-left">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-zinc-800 border border-white/10 flex items-center justify-center text-emerald-400">
                <Terminal className="w-3.5 h-3.5" />
              </div>
              <span className="font-mono text-sm font-semibold tracking-tight text-white">
                {personal.name}
              </span>
            </div>
            <p className="text-xs text-zinc-500 max-w-xs">
              {personal.role} crafting resilient web experiences.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-zinc-400">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#tech-stack" className="hover:text-white transition-colors">
              Tech Stack
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#learning" className="hover:text-white transition-colors">
              Learning
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-colors"
                >
                  {getSocialIcon(social.icon)}
                </a>
              ))}
            </div>

            <button
              onClick={scrollToTop}
              title="Return to top"
              aria-label="Return to top"
              className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-zinc-300 hover:text-white border border-white/[0.08] transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            © {currentYear} {personal.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-1.5">
            <span>Built with React, Tailwind CSS & Framer Motion</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
