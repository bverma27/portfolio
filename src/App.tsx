import { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { TechStack } from './components/sections/TechStack';
import { Projects } from './components/sections/Projects';
import { Learning } from './components/sections/Learning';
import { Contact } from './components/sections/Contact';
import { BackgroundGlow } from './components/ui/BackgroundGlow';
import { Toast } from './components/ui/Toast';
import { CommandPalette } from './components/ui/CommandPalette';

export function App() {
  const [toastMessage, setToastMessage] = useState('');
  const [toastOpen, setToastOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  // Global keyboard shortcut for Command Palette (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const showToast = (message: string) => {
    setToastMessage(message);
    setToastOpen(true);
    setTimeout(() => {
      setToastOpen(false);
    }, 4000);
  };

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email).then(() => {
      setCopiedEmail(true);
      showToast(`Email copied: ${email}`);
      setTimeout(() => {
        setCopiedEmail(false);
      }, 3000);
    }).catch(() => {
      showToast(`Contact email: ${email}`);
    });
  };

  return (
    <div className="min-h-screen bg-background text-zinc-100 flex flex-col selection:bg-emerald-500/20 selection:text-emerald-300">
      {/* Ambient background glow and grid */}
      <BackgroundGlow />

      {/* Floating header navigation */}
      <Navbar onOpenCommandPalette={() => setIsCommandPaletteOpen(true)} />

      {/* Main page content with semantic landmarks */}
      <main className="flex-1">
        <Hero onCopyEmail={handleCopyEmail} copiedEmail={copiedEmail} />
        <About />
        <TechStack />
        <Projects />
        <Learning />
        <Contact 
          onCopyEmail={handleCopyEmail} 
          copiedEmail={copiedEmail} 
          showToast={showToast} 
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Command Palette (⌘K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onCopyEmail={handleCopyEmail}
      />

      {/* Global Toast for notifications */}
      <Toast
        message={toastMessage}
        isOpen={toastOpen}
        onClose={() => setToastOpen(false)}
      />
    </div>
  );
}

export default App;
