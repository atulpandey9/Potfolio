import { Moon, Sun, Menu, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('Home');
  const [isDark, setIsDark] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    // Check local storage for theme preference
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.add('light');
    } else {
      setIsDark(true);
      document.documentElement.classList.remove('light');
    }
  }, []);

  // Close menu on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scroll when mobile menu is open on small devices
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden', 'lg:overflow-auto');
    } else {
      document.body.classList.remove('overflow-hidden', 'lg:overflow-auto');
    }
    return () => {
      document.body.classList.remove('overflow-hidden', 'lg:overflow-auto');
    };
  }, [isOpen]);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (name) => {
    setActiveTab(name);
    setIsOpen(false);
  };

  return (
    <div className="sticky top-4 sm:top-6 z-50 flex justify-center mb-6 sm:mb-8" ref={menuRef}>
      <nav className="relative flex items-center justify-between w-full max-w-[700px] px-4 sm:px-6 py-3 sm:py-3.5 bg-surface/90 backdrop-blur-md border border-border-dark rounded-full shadow-2xl transition-colors duration-300">
        {/* Logo */}
        <div className="w-12 sm:w-16">
          <a
            href="#home"
            onClick={() => handleLinkClick('Home')}
            className="text-lg sm:text-xl font-bold text-text-primary tracking-widest hover:opacity-80 transition-opacity"
          >
            AP
          </a>
        </div>

        {/* Desktop & Laptop Nav Links (1024px+ / lg screen and above) */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-7">
          {navLinks.map((link) => {
            const isActive = activeTab === link.name;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleLinkClick(link.name)}
                className={`flex items-center gap-2 text-sm font-medium transition-all duration-300 ${
                  isActive ? 'text-text-primary' : 'text-text-muted hover:text-text-primary'
                }`}
              >
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3ff263] shadow-[0_0_8px_rgba(63,242,99,0.8)]"></span>
                )}
                <span className="translate-y-px">{link.name}</span>
              </a>
            );
          })}
        </div>

        {/* Right Controls: Theme Toggle & Hamburger Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme Toggle (always accessible) */}
          <button
            onClick={toggleTheme}
            className="p-2 text-text-muted hover:text-text-primary transition-colors duration-300 rounded-full hover:bg-surface-hover outline-none"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Hamburger Menu Button (Mobile & Tablet: < 1024px / lg:hidden) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-text-muted hover:text-text-primary transition-colors duration-200 rounded-full hover:bg-surface-hover focus:outline-none"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile & Tablet Dropdown Drawer (Mobile 320px–639px, Small Tablet 640px–767px, Tablet 768px–1023px) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.96 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="absolute top-full left-0 right-0 mt-3 p-4 sm:p-5 bg-surface/95 backdrop-blur-xl border border-border-dark rounded-2xl shadow-2xl lg:hidden flex flex-col gap-2 z-50"
            >
              {navLinks.map((link) => {
                const isActive = activeTab === link.name;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => handleLinkClick(link.name)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      isActive
                        ? 'bg-brand-primary/10 text-brand-primary font-semibold'
                        : 'text-text-secondary hover:text-text-primary hover:bg-surface-hover'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-brand-primary shadow-[0_0_8px_rgba(147,80,255,0.8)]"></span>
                    )}
                  </a>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
