import { 
  SiVuedotjs, 
  SiReact, 
  SiTypescript, 
  SiTailwindcss, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiJavascript 
} from 'react-icons/si';

const SKILLS = [
  { name: 'Vue', icon: SiVuedotjs, color: '#4FC08D' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Tailwindcss', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Next', icon: SiNextdotjs, color: '#FFFFFF' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Express', icon: SiExpress, color: '#FFFFFF' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
];

export default function Skills() {
  return (
    <section className="py-12 border-t border-white/5 relative overflow-hidden flex items-center">
      {/* Dark fade masks for the left and right edges */}
      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10"></div>
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10"></div>
      
      {/* The scrolling container. We duplicate the SKILLS array so when it translates -50%, it loops seamlessly */}
      <div className="flex animate-marquee whitespace-nowrap w-max hover:[animation-play-state:paused]">
        {[...SKILLS, ...SKILLS].map((skill, index) => (
          <div 
            key={index} 
            className="flex items-center gap-3 mx-8 text-text-muted hover:text-white transition-colors cursor-default"
          >
            <skill.icon className="w-8 h-8 opacity-80" style={{ color: skill.color }} />
            <span className="text-xl font-medium tracking-wide">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
