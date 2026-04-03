import { Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('Home');
  const [isDark, setIsDark] = useState(true);

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
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="sticky top-6 z-50 flex justify-center mb-8">
      <nav className="flex items-center justify-between w-full max-w-[600px] px-6 py-3.5 bg-surface/90 backdrop-blur-md border border-border-dark rounded-full shadow-2xl transition-colors duration-300">
        {/* Logo */}
        <div className="w-16">
          <a href="#home" className="text-xl font-bold text-text-primary tracking-widest hover:opacity-80 transition-opacity">
            AP
          </a>
        </div>

        {/* Links */}
        <div className="hidden sm:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = activeTab === link.name;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveTab(link.name)}
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

        {/* Theme Toggle */}
        <div className="w-16 flex justify-end">
          <button 
            onClick={toggleTheme}
            className="text-text-muted hover:text-text-primary transition-colors duration-300 outline-none"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </nav>
    </div>
  );
}
