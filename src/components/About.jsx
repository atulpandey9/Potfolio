import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-20 border-t border-white/5" id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold text-text-primary mb-2">About Me</h2>
        <div className="w-20 h-0.5 bg-brand-primary rounded-full"></div>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-12 items-center">
        {/* Left Picture Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1 w-full max-w-sm"
        >
          <div className="relative group">
            {/* Glow Effect Background */}
            <div className="absolute -inset-1 bg-brand-primary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

            {/* Card Content */}
            <div className="relative rounded-2xl border border-border-dark bg-surface overflow-hidden shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
              <div className="aspect-[4/5] w-full bg-[#ffdfbf]">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Atul&backgroundColor=ffdfbf"
                  alt="Atul Pandey"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 bg-gradient-to-t from-surface via-surface/90 to-transparent absolute bottom-0 w-full">
                <h3 className="text-xl font-bold text-white mb-1">Atul Pandey</h3>
                <p className="text-sm text-brand-primary font-medium">Full Stack Developer</p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-violet-500/20 to-pink-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-tr from-blue-500/20 to-emerald-500/20 rounded-full blur-2xl"></div>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex-1 space-y-6 text-text-secondary leading-relaxed"
        >
          <p>
            Hello! I'm Atul Pandey a passionate full-stack web developer with a knack for creating intuitive and dynamic user experiences.
            My journey in web development started with a curiosity about how things work on the internet, which quickly turned into a dedicated pursuit of mastering modern web technologies.
          </p>
          <p>
            I specialize in building scalable applications using the MERN stack (<span className="text-brand-primary font-bold">MongoDB</span>, <span className="text-brand-primary font-bold">Express</span>, <span className="text-brand-primary font-bold">React</span>, and <span className="text-brand-primary font-bold">Node.js</span>).
            Whether it's crafting beautiful front-end interfaces or architecting robust back-end APIs, I enjoy the entire process of bringing an idea to life.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community.
            I'm always eager to learn and take on new challenges that push my boundaries.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
