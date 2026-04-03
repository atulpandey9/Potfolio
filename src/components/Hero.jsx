import { motion } from 'framer-motion';
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiJavascript
} from 'react-icons/si';
import {
  FaXTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaEnvelope
} from 'react-icons/fa6';
import { FileText, Send } from 'lucide-react';
import TechBadge from './TechBadge';

export default function Hero() {
  return (
    <section className="pt-16 pb-12">
      {/* Avatar */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="mb-8 relative inline-block"
      >
        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-border-dark bg-surface shadow-xl">
          <img
            src="public/images/Screenshot from 2026-03-09 20-48-29.png"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-2 right-1 w-4 h-4 bg-emerald-400 border-2 border-background rounded-full shadow-[0_0_10px_rgba(52,211,153,0.5)]"></div>
      </motion.div>

      {/* Greeting */}
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="text-4xl text-text-primary mb-6 tracking-tight leading-tight font-medium"
      >
        Hi, I'm <span className="text-brand-primary font-bold">Atul</span> — A Full Stack web developer.
      </motion.h1>

      {/* Bio & Badges */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="text-text-muted leading-relaxed max-w-2xl mb-8 space-y-4"
      >
        <p className="inline-flex flex-wrap items-center gap-2 gap-y-3">
          I build interactive web apps using
          <TechBadge icon={SiReact} text="React" href="https://react.dev/" />
          ,
          <TechBadge icon={SiNodedotjs} text="Node.js" />
          ,
          <TechBadge icon={SiExpress} text="Express" />
          and
          <TechBadge icon={SiMongodb} text="MongoDB" />
          . With a strong foundation in
          <TechBadge icon={SiJavascript} text="JavaScript" />
          , driven by a keen eye for design.
        </p>
      </motion.div>

      {/* Actions */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="flex items-center gap-4 mb-10"
      >
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-transparent border border-border-dark text-sm font-medium text-text-secondary hover:bg-surface-hover hover:text-white transition-all">
          <FileText size={16} />
          Resume / CV
        </button>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black text-sm font-medium hover:bg-gray-200 transition-colors">
          <Send size={16} />
          Get in touch
        </button>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="flex items-center gap-5 text-text-muted"
      >
        <a href="https://x.com/AtulPandey018" target='blank' className="hover:text-white transition-colors"><FaXTwitter size={20} /></a>
        <a href="#" className="hover:text-white transition-colors"><FaLinkedin size={20} /></a>
        <a href="https://github.com/atulpandey9" target='blank' className="hover:text-white transition-colors"><FaGithub size={20} /></a>
        <a href="#" className="hover:text-white transition-colors"><FaInstagram size={20} /></a>
        <a href="#" className="hover:text-white transition-colors"><FaEnvelope size={20} /></a>
      </motion.div>
    </section>
  );
}
