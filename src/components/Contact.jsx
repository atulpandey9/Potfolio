import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa6';

export default function Contact() {
  return (
    <section className="py-20 border-t border-white/5" id="contact">
      <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex-1 space-y-6"
        >
          <div>
            <span className="text-brand-primary text-sm font-medium tracking-wide">Let's talk</span>
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mt-2 mb-6">Contact</h2>
          </div>

          <p className="text-text-muted text-base max-w-md">
            Have a question or a project in mind? Feel free to reach out.
          </p>

          <div className="text-text-muted space-y-6 pt-2">
            <p>Location: Uttarakhand,Haldwani,India</p>

            {/* Social Links as requested */}
            <div className="flex items-center gap-6 pt-2">
              <a
                href="#"
                className="text-text-muted hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="#"
                className="text-text-muted hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-transparent border border-border-dark rounded-md px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-primary/50 transition-colors"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border border-border-dark rounded-md px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-primary/50 transition-colors"
                required
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                rows="6"
                className="w-full bg-transparent border border-border-dark rounded-md px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-primary/50 transition-colors resize-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-surface border border-border-dark hover:bg-surface-hover text-text-secondary py-3 px-4 rounded-md transition-colors mt-2"
            >
              Submit
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
