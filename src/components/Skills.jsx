import { 
  SiReact, 
  SiTypescript, 
  SiTailwindcss, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiDocker,
  SiRedis,
  SiJavascript 
} from 'react-icons/si';

const SKILLS = [
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Express', icon: SiExpress, color: '#FFFFFF' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Redis', icon: SiRedis, color: '#DC382D' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Tailwindcss', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
];

export default function Skills() {
  return (
    <section className="py-8 sm:py-12 border-t border-white/5 relative overflow-hidden flex items-center">
      {/* Responsive dark fade masks for left and right edges */}
      <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-16 md:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 right-0 w-8 sm:w-16 md:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
      
      {/* The scrolling container */}
      <div className="flex animate-marquee whitespace-nowrap w-max hover:[animation-play-state:paused]">
        {[...SKILLS, ...SKILLS].map((skill, index) => (
          <div 
            key={index} 
            className="flex items-center gap-2 sm:gap-3 mx-4 sm:mx-6 md:mx-8 text-text-muted hover:text-white transition-colors cursor-default"
          >
            <skill.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 opacity-80 shrink-0" style={{ color: skill.color }} />
            <span className="text-sm sm:text-base md:text-lg font-medium tracking-wide">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
