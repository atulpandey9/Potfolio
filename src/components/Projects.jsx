import { Code2, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const PROJECTS = [
  {
    title: 'SkillSphere',
    status: 'Freelance Portal & Real-time Collab',
    image: '/images/skillsphere.jpeg',
    github: 'https://github.com/atulpandey9',
    link: '#'
  },
  {
    title: 'AI Interview Planner',
    status: 'AI-Powered Strategy & Career Prep',
    image: '/images/ai-interview-planner.jpeg',
    github: 'https://github.com/atulpandey9',
    link: '#'
  },
  {
    title: 'Expense Tracker',
    status: 'Full Stack Financial Dashboard',
    image: '/images/expense-tracker.png',
    github: 'https://github.com/atulpandey9',
    link: '#'
  }
];

export default function Projects() {
  return (
    <section className="py-10 sm:py-14 md:py-16 border-t border-white/5" id="projects">
      <div className="mb-6 sm:mb-8">
        <h3 className="text-sm text-brand-primary mb-1 font-medium tracking-wide uppercase">My work</h3>
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-text-primary font-medium tracking-tight">Projects</h2>
      </div>

      {/* Grid: 1 col on mobile, 2 cols on tablet (640px-1023px), 3 cols on laptop & desktop (1024px+) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {PROJECTS.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group flex flex-col gap-3.5 sm:gap-4"
          >
            {/* Image Container */}
            <div className="aspect-[4/3] rounded-2xl bg-surface-hover/30 overflow-hidden border border-border-dark relative p-3 sm:p-4 flex items-center justify-center group-hover:border-violet-500/50 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] transition-all duration-300">
              <div className="w-full h-full rounded-lg overflow-hidden relative shadow-2xl transition-transform group-hover:scale-[1.02] duration-300 bg-surface">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Details */}
            <div className="flex items-start justify-between gap-3 px-1">
              <div className="min-w-0">
                <h4 className="text-base sm:text-lg font-medium text-text-primary mb-0.5 truncate group-hover:text-brand-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-xs sm:text-sm text-text-muted line-clamp-1">{project.status}</p>
              </div>
              
              <div className="flex items-center gap-2 shrink-0">
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-surface border border-border-dark flex items-center justify-center text-text-muted hover:text-violet-400 hover:border-violet-500/50 hover:bg-violet-500/10 hover:shadow-[0_0_15px_rgba(139,92,246,0.2)] transition-all duration-300"
                  aria-label="Source code"
                >
                  <Code2 size={17} />
                </a>
                <a 
                  href={project.link}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-surface border border-border-dark flex items-center justify-center text-text-muted hover:text-pink-400 hover:border-pink-500/50 hover:bg-pink-500/10 hover:shadow-[0_0_15px_rgba(236,72,153,0.2)] transition-all duration-300"
                  aria-label="Live demo"
                >
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
