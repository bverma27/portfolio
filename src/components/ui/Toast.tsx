import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Info, X } from 'lucide-react';

interface ToastProps {
  message: string;
  isOpen: boolean;
  onClose: () => void;
  type?: 'success' | 'info';
}

export const Toast: React.FC<ToastProps> = ({ message, isOpen, onClose, type = 'success' }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 15, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-zinc-100 shadow-2xl backdrop-blur-md"
        >
          {type === 'success' ? (
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          ) : (
            <Info className="w-4 h-4 text-blue-400 shrink-0" />
          )}
          <span className="text-sm font-medium pr-2">{message}</span>
          <button
            onClick={onClose}
            aria-label="Dismiss notification"
            className="p-1 rounded-md text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
