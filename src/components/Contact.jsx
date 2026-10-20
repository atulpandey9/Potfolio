import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa6';
import { MapPin, Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-12 sm:py-16 md:py-20 border-t border-white/5" id="contact">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 xl:gap-20">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex-1 space-y-4 sm:space-y-6"
        >
          <div>
            <span className="text-brand-primary text-sm font-medium tracking-wide uppercase">Let's talk</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mt-1 sm:mt-2 mb-3 sm:mb-4 tracking-tight">Contact</h2>
          </div>

          <p className="text-text-muted text-sm sm:text-base max-w-md leading-relaxed">
            Have a question, an opportunity, or a project in mind? Feel free to reach out.
          </p>

          <div className="text-text-muted space-y-4 pt-2 text-sm sm:text-base">
            <div className="flex items-center gap-3 text-text-secondary">
              <MapPin size={18} className="text-brand-primary shrink-0" />
              <span>Uttarakhand, Haldwani, India</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-5 pt-3">
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-surface border border-border-dark flex items-center justify-center text-text-muted hover:text-white hover:border-brand-primary/40 transition-all"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://github.com/atulpandey9"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-surface border border-border-dark flex items-center justify-center text-text-muted hover:text-white hover:border-brand-primary/40 transition-all"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
          className="flex-1 w-full"
        >
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-surface/60 border border-border-dark rounded-xl px-4 py-3 text-sm sm:text-base text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/30 transition-all"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-surface/60 border border-border-dark rounded-xl px-4 py-3 text-sm sm:text-base text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/30 transition-all"
                required
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                rows="5"
                className="w-full bg-surface/60 border border-border-dark rounded-xl px-4 py-3 text-sm sm:text-base text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/30 transition-all resize-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-surface border border-border-dark hover:bg-surface-hover hover:border-brand-primary/40 text-text-primary font-medium py-3 px-4 rounded-xl transition-all shadow-sm active:scale-[0.99] min-h-[44px]"
            >
              <Send size={16} />
              <span>Send Message</span>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
