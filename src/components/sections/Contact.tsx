import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  ArrowUpRight, 
  Github, 
  Linkedin, 
  Twitter, 
  MessageSquare,
  Clock,
  MapPin
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SectionHeading } from '../ui/SectionHeading';
import { portfolioData } from '../../config/portfolio';

interface ContactProps {
  onCopyEmail: (email: string) => void;
  copiedEmail: boolean;
  showToast: (msg: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onCopyEmail, copiedEmail, showToast }) => {
  const { personal, socials } = portfolioData;

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    // Basic email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email.trim())) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      showToast('Message sent successfully! I will reply shortly.');
      
      // Fire subtle celebratory confetti
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#10b981', '#6366f1', '#ffffff']
      });

      // Reset form
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 800);
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
    <section id="contact" className="py-20 md:py-28 relative scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="05"
          badge="Get In Touch"
          title="Let's build something remarkable."
          description="Have a question, a project inquiry, or just want to discuss software engineering? My inbox is always open."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct Info & Socials - 5 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Quick Copy Email Card */}
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-white/[0.08] space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">
                  Direct Email
                </span>
                <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Fast Response
                </span>
              </div>

              <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <a
                  href={`mailto:${personal.email}`}
                  title={`Send email to ${personal.email}`}
                  className="flex items-center gap-2.5 overflow-hidden group/mail flex-1 min-w-0"
                >
                  <Mail className="w-4 h-4 text-emerald-400 shrink-0 group-hover/mail:scale-110 transition-transform" />
                  <span className="text-xs sm:text-sm font-mono text-zinc-200 group-hover/mail:text-emerald-400 group-hover/mail:underline underline-offset-4 transition-colors truncate">
                    {personal.email}
                  </span>
                </a>

                <button
                  type="button"
                  onClick={() => onCopyEmail(personal.email)}
                  title="Copy email to clipboard"
                  className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors shrink-0"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <a
                href={`mailto:${personal.email}`}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 hover:text-emerald-300 text-xs font-mono font-medium border border-emerald-500/20 hover:border-emerald-500/30 transition-all shadow-sm"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email Me</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Social Links List */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 block">
                Social Profiles
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-900/30 hover:bg-zinc-900/80 border border-white/[0.06] hover:border-white/[0.14] text-zinc-300 hover:text-white transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] text-zinc-400 group-hover:text-emerald-400 transition-colors">
                        {getSocialIcon(social.icon)}
                      </div>
                      <div>
                        <span className="text-xs font-semibold block">{social.name}</span>
                        {social.handle && (
                          <span className="text-[11px] font-mono text-zinc-500">
                            {social.handle}
                          </span>
                        )}
                      </div>
                    </div>

                    <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            {/* Location & Timezone info card */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] space-y-2 text-xs text-zinc-400">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-zinc-300">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="font-medium">Delhi, India</span>
                </div>
                <span className="font-mono text-[11px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                  IST (UTC+5:30)
                </span>
              </div>
              <div className="flex items-center gap-2 text-zinc-500 text-[11px] pt-1">
                <Clock className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                <span>Available for remote & hybrid engineering opportunities worldwide.</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Message Form - 7 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-white/[0.07] relative"
          >
            <div className="flex items-center gap-2 mb-6">
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <h3 className="text-base font-semibold text-white">Send a Message</h3>
            </div>

            {isSubmitted ? (
              <div className="py-12 flex flex-col items-center text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-semibold text-white">Message Dispatched!</h4>
                <p className="text-xs sm:text-sm text-zinc-400 max-w-sm">
                  Thank you for reaching out. I have received your note and will get back to you promptly.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-mono text-zinc-300 hover:text-white transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMessage && (
                  <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-xs text-red-400">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-mono text-zinc-400">
                      Your Name <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950/60 border border-white/[0.08] focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 text-sm text-zinc-200 placeholder:text-zinc-600 outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-mono text-zinc-400">
                      Your Email <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950/60 border border-white/[0.08] focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 text-sm text-zinc-200 placeholder:text-zinc-600 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-mono text-zinc-400">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Full-Stack Role"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950/60 border border-white/[0.08] focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 text-sm text-zinc-200 placeholder:text-zinc-600 outline-none transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-mono text-zinc-400">
                    Message <span className="text-emerald-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, timeline, or open role..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950/60 border border-white/[0.08] focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 text-sm text-zinc-200 placeholder:text-zinc-600 outline-none transition-all resize-y min-h-[100px]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-zinc-950 hover:bg-zinc-200 font-medium text-sm transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.01] active:scale-[0.99]"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-zinc-950 border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
