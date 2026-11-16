import React from 'react';

interface TechIconProps {
  name: string;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = "w-5 h-5" }) => {
  const normalized = name.toLowerCase();

  if (normalized.includes('react')) {
    return (
      <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none" stroke="currentColor">
        <circle cx="0" cy="0" r="2.05" fill="currentColor" />
        <g stroke="currentColor" strokeWidth="1">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    );
  }

  if (normalized.includes('next')) {
    return (
      <svg className={className} viewBox="0 0 180 180" fill="none">
        <mask height="180" id="mask0" maskUnits="userSpaceOnUse" width="180" x="0" y="0" style={{ maskType: 'alpha' }}>
          <circle cx="90" cy="90" fill="black" r="90" />
        </mask>
        <g mask="url(#mask0)">
          <circle cx="90" cy="90" data-circle="true" fill="black" r="90" stroke="currentColor" strokeWidth="6" />
          <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint0_linear)" />
          <rect fill="url(#paint1_linear)" height="72" width="12" x="115" y="54" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear" x1="109" x2="144.5" y1="116.5" y2="160.5">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear" x1="121" x2="120.799" y1="54" y2="106.875">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  if (normalized.includes('javascript') || normalized.includes('js')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 3h18v18H3V3zm13.7 13.9c-.8.8-1.9 1.1-3.2 1.1-2.4 0-3.7-1.4-3.7-3.6 0-2.3 1.5-3.6 3.8-3.6 1 0 1.9.3 2.5.7l-.6 1.4c-.6-.4-1.2-.6-1.9-.6-1.3 0-2.1.8-2.1 2.1 0 1.4.7 2.1 2.1 2.1.8 0 1.5-.3 1.9-.6l.6 1.4zM8.3 16.5c-.3.8-.9 1.4-1.9 1.4-.9 0-1.5-.5-1.5-1.6V11H6.5v5.3c0 .4.2.6.5.6.3 0 .6-.2.8-.5l.5.1z" />
      </svg>
    );
  }

  if (normalized.includes('typescript') || normalized.includes('ts')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 3h18v18H3V3zm7.6 6.8H5.9V11h2v7h1.7v-7h2V9.8zm3.3 4.2c.4.3.9.5 1.5.5.7 0 1.1-.3 1.1-.8 0-.5-.4-.7-1.3-1-1.3-.4-2.1-1.1-2.1-2.2 0-1.4 1.1-2.3 2.7-2.3 1.1 0 1.9.3 2.5.7l-.5 1.4c-.5-.3-1.1-.6-1.9-.6-.7 0-1.1.3-1.1.7 0 .4.3.6 1.2.9 1.4.5 2.2 1.1 2.2 2.3 0 1.5-1.1 2.4-2.9 2.4-1.2 0-2.2-.4-2.8-.9l.4-1.4z" />
      </svg>
    );
  }

  if (normalized.includes('tailwind')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 5.999 12z" />
      </svg>
    );
  }

  if (normalized.includes('node')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L3.5 6.9v9.8L12 21.6l8.5-4.9V6.9L12 2zm6.7 13.7L12 19.5l-6.7-3.8V8.3L12 4.5l6.7 3.8v7.4z" />
      </svg>
    );
  }

  if (normalized.includes('express')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" y1="19" x2="20" y2="19" />
      </svg>
    );
  }

  if (normalized.includes('mongo')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.003 2.186c-.347.375-4.877 5.06-4.877 11.233 0 4.137 3.328 6.55 4.877 8.395 1.549-1.845 4.877-4.258 4.877-8.395 0-6.173-4.53-10.858-4.877-11.233zm0 2.27c2.56 3.486 3.655 6.924 3.655 8.963 0 3.387-2.673 5.485-3.655 6.84-1-1.355-3.655-3.453-3.655-6.84 0-2.039 1.095-5.477 3.655-8.963z" />
      </svg>
    );
  }

  if (normalized.includes('git') && !normalized.includes('hub')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="6" y1="3" x2="6" y2="15" />
        <circle cx="18" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <path d="M18 9a9 9 0 0 1-9 9" />
      </svg>
    );
  }

  if (normalized.includes('github')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    );
  }

  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
};
