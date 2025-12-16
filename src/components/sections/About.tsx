import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Terminal, Lightbulb } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const codeSnippet = [
    { line: 1, code: "const passion = 'Number.MAX_VALUE';", color: 'text-cyan-400' },
    { line: 2, code: "function build() {", color: 'text-yellow-400' },
    { line: 3, code: "  return tech;", color: 'text-foreground' },
    { line: 4, code: "}", color: 'text-yellow-400' },
    { line: 5, code: "while(awake) { code(); }", color: 'text-primary' },
  ];

  return (
    <section id="about" ref={ref} className="relative py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="section-divider">{'// About Me'}</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Building Systems,
              <br />
              <span className="text-gradient">Crafting Solutions</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Full Stack Developer specializing in the MERN stack, scalable architectures, 
              and efficient state management. Experienced in building performant, maintainable 
              applications with robust API integrations and clean, modular code.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm passionate about creating seamless user experiences and solving complex 
              problems with elegant solutions. When I'm not coding, you'll find me exploring 
              new technologies and contributing to open-source projects.
            </p>
          </motion.div>

          {/* Terminal Code Block */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="terminal-bg p-6 hover-lift">
              {/* Terminal Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-terminal-green/80" />
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Terminal size={14} />
                  <span>terminal</span>
                </div>
              </div>

              {/* Code Content */}
              <div className="font-mono text-sm md:text-base space-y-2">
                {codeSnippet.map((item, index) => (
                  <motion.div
                    key={item.line}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    className="flex"
                  >
                    <span className="w-6 text-muted-foreground/50 select-none">{item.line}</span>
                    <span className={item.color}>{item.code}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tech Fact Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute -bottom-4 -right-4 md:-right-8 glass-card p-4 rounded-lg flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <Lightbulb className="text-primary" size={20} />
              </div>
              <span className="text-sm font-medium">Tech Fact</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold">
            <span className="text-gradient">Code</span> • Tech • <span className="text-gradient">Software</span>
          </h3>
          <p className="text-muted-foreground font-mono mt-2">
            {'// I know code and tech. I actually know only code and tech.'}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
