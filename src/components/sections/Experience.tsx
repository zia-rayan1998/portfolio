import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Full-Stack Developer - Intern',
    company: 'Company Name',
    location: 'Remote',
    period: 'July 2025 - Present',
    description: 'Worked with microservices architecture, developed APIs, integrated RESTful APIs across systems, and managed the frontend repository. Implemented Redux, used ShadCN for UI, and set up Slack notifications in CI/CD pipelines.',
    current: true,
  },
  {
    title: 'Freelance Developer',
    company: 'college project',
    location: 'On-site',
    period: 'August 2024',
    description: 'Part of the core development team. Developed real-time features, and scalable frontend using React with javascript. Redesigned backend with flask and mongoDB, reducing API response time by 40%.',
    current: false,
  },
  {
    title: 'Ui/Ux designer',
    company: 'Various Clients',
    location: 'Remote',
    period: 'Dec 2024 - Present',
    description: 'Improved user experience through thoughtful Ui interface design and consistent design systems.',
    current: true,
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" ref={ref} className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden md:block" style={{ left: '50%' }} />

      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="section-divider">{'// Professional History'}</span>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              className={`relative mb-8 md:mb-12 ${
                index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
              }`}
            >
              {/* Timeline Dot */}
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.15 }}
                  className={`w-4 h-4 rounded-full border-2 ${
                    exp.current 
                      ? 'bg-primary border-primary animate-glow' 
                      : 'bg-background border-muted-foreground'
                  }`}
                />
              </div>

              {/* Content Card */}
              <div className={`glass-card rounded-xl p-6 hover-lift ${
                index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
              }`}>
                {/* Period */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar size={14} />
                  <span>{exp.period}</span>
                  {exp.current && (
                    <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs">
                      Current
                    </span>
                  )}
                </div>

                {/* Title & Company */}
                <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                <div className="flex items-center gap-4 text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Briefcase size={14} />
                    <span className="text-sm">{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
