import { motion } from 'framer-motion';

const EXPERIENCES = [
  {
    type: 'INTERNSHIP',
    period: 'JUNE 2026 — JULY 2026',
    role: 'Full Stack Development Intern',
    company: 'Nayoda',
    project: 'SkillSphere',
    logoLetter: 'N',
    summary:
      'Completed a one-month Full Stack Development Internship at Nayoda, working on SkillSphere.',
    highlights: [
      'Contributed to frontend development and responsive UI design.',
      'Developed robust backend API functionality and database integration.',
      'Implemented Google Authentication for secure user onboarding and access control.',
      'Engineered real-time communication features utilizing Socket.IO.'
    ],
    skills: [
      'Full Stack Development',
      'SkillSphere',
      'Frontend',
      'Backend APIs',
      'Database Integration',
      'Google Authentication',
      'Socket.IO'
    ]
  }
];

export default function Experience() {
  return (
    <section className="py-10 sm:py-14 md:py-16 border-t border-white/5" id="experience">
      <div className="mb-6 sm:mb-8">
        <h3 className="text-sm text-brand-primary mb-1 font-medium tracking-wide uppercase">
          Career Journey
        </h3>
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-text-primary font-medium tracking-tight">
          Experience
        </h2>
      </div>

      <div className="flex flex-col gap-6">
        {EXPERIENCES.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group rounded-2xl bg-surface border border-border-dark p-4 sm:p-6 md:p-7 shadow-xl hover:border-brand-primary/40 hover:shadow-[0_0_30px_rgba(147,80,255,0.1)] transition-all duration-300"
          >
            {/* Top Row: Tag & Date */}
            <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-4 mb-4 sm:mb-5">
              <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-semibold tracking-wider uppercase bg-purple-500/10 text-purple-400 border border-purple-500/20">
                {exp.type}
              </span>
              <span className="text-[11px] sm:text-xs md:text-sm text-text-muted font-medium tracking-wider uppercase">
                {exp.period}
              </span>
            </div>

            {/* Role, Company & Logo */}
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-purple-950/40 border border-purple-500/20 flex items-center justify-center text-purple-300 font-bold text-lg sm:text-xl shadow-inner shrink-0 group-hover:scale-105 group-hover:border-purple-500/40 transition-transform duration-300">
                {exp.logoLetter}
              </div>
              <div className="min-w-0">
                <h4 className="text-base sm:text-lg md:text-xl font-medium text-text-primary group-hover:text-brand-primary transition-colors truncate">
                  {exp.role}
                </h4>
                <p className="text-xs sm:text-sm text-text-muted truncate">
                  {exp.company}
                  {exp.project && (
                    <span className="text-text-muted/70"> • {exp.project}</span>
                  )}
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-white/5 mb-4 sm:mb-5" />

            {/* Summary & Bullet Points */}
            <p className="text-xs sm:text-sm md:text-base text-text-secondary leading-relaxed mb-3 sm:mb-4">
              {exp.summary}
            </p>

            <ul className="space-y-2 mb-5 sm:mb-6">
              {exp.highlights.map((point, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-xs sm:text-sm text-text-secondary leading-relaxed"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Skills / Tech Stack Pills */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-1 sm:pt-2">
              {exp.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-lg bg-surface-hover/80 border border-border-dark text-[11px] sm:text-xs font-medium text-text-muted hover:text-text-primary hover:border-purple-500/30 transition-all select-none"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
