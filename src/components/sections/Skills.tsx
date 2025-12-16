import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = {
  frontend: [
    { name: 'React', icon: 'https://skillicons.dev/icons?i=react' },
    { name: 'Next.js', icon: 'https://skillicons.dev/icons?i=nextjs' },
    { name: 'TypeScript', icon: 'https://skillicons.dev/icons?i=typescript' },
    { name: 'JavaScript', icon: 'https://skillicons.dev/icons?i=javascript' },
    { name: 'Tailwind CSS', icon: 'https://skillicons.dev/icons?i=tailwindcss' },
    { name: 'Redux', icon: 'https://skillicons.dev/icons?i=redux' },
    { name: 'Sass', icon: 'https://skillicons.dev/icons?i=sass' },
    { name: 'Figma', icon: 'https://skillicons.dev/icons?i=figma' },
  ],
  backend: [
    { name: 'Node.js', icon: 'https://skillicons.dev/icons?i=nodejs' },
    { name: 'Express', icon: 'https://skillicons.dev/icons?i=express' },
    { name: 'MongoDB', icon: 'https://skillicons.dev/icons?i=mongodb' },
    { name: 'PostgreSQL', icon: 'https://skillicons.dev/icons?i=postgresql' },
    { name: 'Prisma', icon: 'https://skillicons.dev/icons?i=prisma' },
    { name: 'Redis', icon: 'https://skillicons.dev/icons?i=redis' },
    { name: 'Firebase', icon: 'https://skillicons.dev/icons?i=firebase' },
    { name: 'Supabase', icon: 'https://skillicons.dev/icons?i=supabase' },
  ],
  tools: [
    { name: 'Git', icon: 'https://skillicons.dev/icons?i=git' },
    { name: 'GitHub', icon: 'https://skillicons.dev/icons?i=github' },
    { name: 'Docker', icon: 'https://skillicons.dev/icons?i=docker' },
    { name: 'AWS', icon: 'https://skillicons.dev/icons?i=aws' },
    { name: 'Vercel', icon: 'https://skillicons.dev/icons?i=vercel' },
    { name: 'VS Code', icon: 'https://skillicons.dev/icons?i=vscode' },
    { name: 'Linux', icon: 'https://skillicons.dev/icons?i=linux' },
    { name: 'Postman', icon: 'https://skillicons.dev/icons?i=postman' },
  ],
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const allSkills = [...skills.frontend, ...skills.backend, ...skills.tools];

  return (
    <section id="skills" ref={ref} className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-radial-gradient opacity-50" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="section-divider">{'// Arsenal'}</span>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 md:gap-6"
        >
          {allSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.03 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="group relative"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 transition-all duration-300 flex items-center justify-center overflow-hidden hover-lift">
                <img 
                  src={skill.icon} 
                  alt={skill.name}
                  className="w-10 h-10 md:w-12 md:h-12 object-contain"
                  loading="lazy"
                />
              </div>
              
              {/* Tooltip */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs font-mono text-muted-foreground whitespace-nowrap">
                  {skill.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-16 flex flex-wrap justify-center gap-4"
        >
          {['Frontend', 'Backend', 'DevOps', 'Tools'].map((category, index) => (
            <span
              key={category}
              className="px-4 py-2 rounded-full border border-border text-sm text-muted-foreground"
            >
              {category}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
