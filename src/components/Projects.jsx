import { Code2, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const PROJECTS = [
  {
    title: 'MoviesForDevs',
    status: 'Deployed',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800&auto=format&fit=crop', // Placeholder cinematic
    github: '#',
    link: '#'
  },
  {
    title: 'StockIn',
    status: 'On Development',
    image: 'https://images.unsplash.com/photo-1661956602868-6ae368943878?q=80&w=800&auto=format&fit=crop', // Placeholder dashboard
    github: '#',
    link: '#'
  },
  {
    title: 'Svgl.app',
    status: 'Contributor',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop', // Placeholder code/icons
    github: '#',
    link: '#'
  },
  {
    title: 'Rifas Velez Web',
    status: 'Deployed',
    image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=800&auto=format&fit=crop', // Placeholder cars/promo
    github: '#',
    link: '#'
  }
];

export default function Projects() {
  return (
    <section className="py-12 border-t border-white/5" id="projects">
      <div className="mb-8">
        <h3 className="text-sm text-brand-primary mb-1 font-medium tracking-wide uppercase">My work</h3>
        <h2 className="text-3xl text-text-primary font-medium tracking-tight">Projects</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {PROJECTS.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group flex flex-col gap-4"
          >
            {/* Image Container */}
            <div className="aspect-[4/3] rounded-2xl bg-surface-hover/30 overflow-hidden border border-border-dark relative p-4 flex items-center justify-center group-hover:border-violet-500/50 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] transition-all duration-300">
              <div className="w-full h-full rounded-lg overflow-hidden relative shadow-2xl transition-transform group-hover:scale-[1.02] duration-300">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Details */}
            <div className="flex items-start justify-between gap-4 px-1">
              <div>
                <h4 className="text-lg font-medium text-text-primary mb-0.5 group-hover:text-brand-primary transition-colors">{project.title}</h4>
                <p className="text-sm text-text-muted">{project.status}</p>
              </div>
              
              <div className="flex items-center gap-2">
                <a 
                  href={project.github}
                  className="w-10 h-10 rounded-xl bg-surface border border-border-dark flex items-center justify-center text-text-muted hover:text-violet-400 hover:border-violet-500/50 hover:bg-violet-500/10 hover:shadow-[0_0_15px_rgba(139,92,246,0.2)] transition-all duration-300"
                  aria-label="Source code"
                >
                  <Code2 size={18} />
                </a>
                <a 
                  href={project.link}
                  className="w-10 h-10 rounded-xl bg-surface border border-border-dark flex items-center justify-center text-text-muted hover:text-pink-400 hover:border-pink-500/50 hover:bg-pink-500/10 hover:shadow-[0_0_15px_rgba(236,72,153,0.2)] transition-all duration-300"
                  aria-label="Live demo"
                >
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
