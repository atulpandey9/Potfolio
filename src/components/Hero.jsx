import { motion } from 'framer-motion';
import {
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiDocker,
  SiRedis,
  SiJavascript,
  SiTypescript
} from 'react-icons/si';
import {
  FaXTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaEnvelope
} from 'react-icons/fa6';
import { FileText, Send, Sparkles } from 'lucide-react';
import TechBadge from './TechBadge';

export default function Hero() {
  return (
    <section className="pt-4 sm:pt-6 pb-8 sm:pb-12" id="home">
      {/* Background Cover Image sticking in back of the DP */}
      <div className="w-full h-36 sm:h-52 md:h-64 lg:h-72 xl:h-80 rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden border border-border-dark relative shadow-lg">
        <img
          src="https://i.pinimg.com/1200x/83/fc/c4/83fcc424946a65d70787ca7b55fcb9a1.jpg"
          alt="Cover"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Avatar */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="mb-6 sm:mb-8 relative inline-block ml-3 sm:ml-6 -mt-10 sm:-mt-12 md:-mt-14"
      >
        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-3 sm:border-4 border-background bg-surface shadow-2xl">
          <img
            src="/images/profile.png"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div
          title="Available for work"
          className="absolute bottom-1 right-1 sm:bottom-2 sm:right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-emerald-400 border-2 border-background rounded-full shadow-[0_0_10px_rgba(52,211,153,0.7)]"
        ></div>
      </motion.div>

      {/* Greeting */}
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-text-primary mb-4 sm:mb-6 tracking-tight leading-snug sm:leading-tight font-medium"
      >
        Hi, I'm <span className="text-brand-primary font-bold">Atul</span> — A Backend Developer building scalable applications &amp; AI-powered solutions.
      </motion.h1>

      {/* Bio & Badges */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="text-text-muted leading-relaxed max-w-3xl mb-6 sm:mb-8 text-sm sm:text-base space-y-4"
      >
        <p className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 gap-y-2 sm:gap-y-3">
          <span>I build robust backend systems, REST APIs, and AI-integrated applications using</span>
          <TechBadge icon={SiNodedotjs} text="Node.js" />
          <span>,</span>
          <TechBadge icon={SiExpress} text="Express" />
          <span>,</span>
          <TechBadge icon={SiMongodb} text="MongoDB" />
          <span>,</span>
          <TechBadge icon={SiDocker} text="Docker" />
          <span>,</span>
          <TechBadge icon={SiRedis} text="Redis" />
          <span>,</span>
          <TechBadge icon={SiJavascript} text="JavaScript" />
          <span>,</span>
          <TechBadge icon={SiTypescript} text="TypeScript" />
          <span>and</span>
          <TechBadge icon={Sparkles} text="AI Integration" />
          <span>in projects.</span>
        </p>
      </motion.div>

      {/* Actions */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-10 w-full sm:w-auto"
      >
        <a
          href="/atulpandeyresume.pdf"
          className="flex items-center justify-center gap-2 px-5 py-2.5 sm:py-2 rounded-xl sm:rounded-lg bg-transparent border border-border-dark text-sm font-medium text-text-secondary hover:bg-surface-hover hover:text-white transition-all text-center min-h-[44px]"
        >
          <FileText size={16} />
          <span>Resume / CV</span>
        </a>
        <a
          href="#contact"
          className="flex items-center justify-center gap-2 px-5 py-2.5 sm:py-2 rounded-xl sm:rounded-lg bg-white text-black text-sm font-medium hover:bg-gray-200 transition-colors text-center min-h-[44px]"
        >
          <Send size={16} />
          <span>Get in touch</span>
        </a>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="flex items-center gap-4 sm:gap-5 text-text-muted flex-wrap"
      >
        <a
          href="https://x.com/AtulPandey018"
          target="_blank"
          rel="noreferrer"
          className="p-1 hover:text-white transition-colors"
          aria-label="Twitter / X"
        >
          <FaXTwitter size={20} />
        </a>
        <a
          href="#"
          className="p-1 hover:text-white transition-colors"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={20} />
        </a>
        <a
          href="https://github.com/atulpandey9"
          target="_blank"
          rel="noreferrer"
          className="p-1 hover:text-white transition-colors"
          aria-label="GitHub"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="#"
          className="p-1 hover:text-white transition-colors"
          aria-label="Instagram"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="#contact"
          className="p-1 hover:text-white transition-colors"
          aria-label="Email"
        >
          <FaEnvelope size={20} />
        </a>
      </motion.div>
    </section>
  );
}
