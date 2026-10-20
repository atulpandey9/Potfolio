import { motion } from 'framer-motion';
import { Server, Database, Boxes, Sparkles } from 'lucide-react';

const HIGHLIGHTS = [
  {
    icon: Server,
    title: 'Backend Architecture',
    desc: 'Scalable RESTful APIs, auth systems & robust business logic'
  },
  {
    icon: Database,
    title: 'Data & Caching',
    desc: 'Data modeling with MongoDB & ultra-fast caching with Redis'
  },
  {
    icon: Boxes,
    title: 'DevOps & Containers',
    desc: 'Containerized development & performance optimization with Docker'
  },
  {
    icon: Sparkles,
    title: 'AI & LLM Integration',
    desc: 'Practical AI solutions with LLM APIs, LangChain & RAG pipelines'
  }
];

export default function About() {
  return (
    <section className="py-12 sm:py-16 md:py-20 border-t border-white/5" id="about">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-8 sm:mb-12"
      >
        <span className="text-sm text-brand-primary mb-1 font-medium tracking-wide uppercase">
          Background
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-2 tracking-tight">
          About Me
        </h2>
        <div className="w-16 sm:w-20 h-0.5 bg-brand-primary rounded-full"></div>
      </motion.div>

      {/* Main Narrative (Full width, no photo frame) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="max-w-4xl space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg text-text-secondary leading-relaxed"
      >
        <p>
          Hey! I'm <strong className="text-text-primary font-semibold">Atul Pandey</strong>, a Backend Developer passionate about building scalable, efficient, and reliable web applications.
        </p>
        <p>
          I specialize in backend development using <strong className="text-text-primary font-semibold">Node.js, Express.js, TypeScript, and MongoDB</strong>, with a focus on designing RESTful APIs, implementing authentication systems, and managing application data. I also work with <strong className="text-text-primary font-semibold">Redis and Docker</strong> to explore caching, performance optimization, and containerized application development.
        </p>
        <p>
          Beyond traditional backend development, I'm interested in integrating <strong className="text-text-primary font-semibold">AI into real-world applications</strong> using LLM APIs, LangChain, and RAG-based systems. I enjoy building applications that combine backend engineering with AI to solve practical problems.
        </p>
        <p>
          I'm constantly learning, experimenting with new technologies, and improving my understanding of backend architecture, system design, and scalable application development.
        </p>
      </motion.div>

      {/* Responsive Focus Cards (Mobile 1 col, Tablet 2 col, Desktop 4 col) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-10 sm:mt-12"
      >
        {HIGHLIGHTS.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-surface border border-border-dark hover:border-brand-primary/40 hover:shadow-[0_0_20px_rgba(147,80,255,0.08)] transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary mb-3.5 group-hover:scale-105 transition-transform">
                  <Icon size={20} />
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-text-primary mb-1.5 group-hover:text-brand-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}
