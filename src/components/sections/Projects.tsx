import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'ChatVerse',
    description: 'Real Time Chat Application with Socket.IO for real-time communication.',
    tags: ['React.js', 'Socket.IO', 'Node.js', 'Express'],
    status: 'Completed',
    date: 'June 2025',
    github: 'https://github.com',
    demo: null,
  },
  {
    title: 'D-Hosting',
    description: 'Decentralized Web Hosting Platform with an inbuilt Search Engine using IPFS and Solidity smart contracts.',
    tags: ['IPFS', 'TypeScript', 'NextJS', 'Solidity', 'Ethereum'],
    status: 'Completed',
    date: 'Jan 2025',
    github: 'https://github.com',
    demo: null,
  },
  {
    title: 'TopCode',
    description: 'Code editor with multi-language support for compiling and running code.',
    tags: ['React.js', 'API Integration', 'Monaco Editor'],
    status: 'Completed',
    date: 'Oct 2024',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Portfolio',
    description: 'Modern developer portfolio with smooth animations and dark theme.',
    tags: ['React', 'TypeScript', 'Framer Motion', 'Tailwind'],
    status: 'Completed',
    date: 'Dec 2024',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" ref={ref} className="relative py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="section-divider">{'// Featured Projects'}</span>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <div className="h-full glass-card rounded-xl p-6 hover-lift border border-border/50 hover:border-primary/30 transition-all duration-300">
                {/* Status & Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-terminal-green text-sm">
                    <CheckCircle size={14} />
                    <span>{project.status}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{project.date}</span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-secondary/50 text-muted-foreground border-0 font-mono text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                      Code
                    </a>
                  </Button>
                  {project.demo && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="gap-2"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-10 text-center"
        >
          <Button
            variant="outline"
            size="lg"
            className="gap-2"
            asChild
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github size={18} />
              view_all_repositories
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
