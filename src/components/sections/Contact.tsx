import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Linkedin, Mail, MessageSquare } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub', color: 'hover:text-foreground' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: Mail, href: 'mailto:hello@example.com', label: 'Email', color: 'hover:text-primary' },
  ];

  return (
    <section id="contact" ref={ref} className="relative py-20 md:py-32">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-radial-gradient opacity-30" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="section-divider">{'// What\'s Next?'}</span>
        </motion.div>

        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Get In Touch
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg mb-10 leading-relaxed"
          >
            Although I'm not currently looking for any new opportunities, my inbox is 
            always open. Whether you have a question or just want to say hi, I'll try 
            my best to get back to you!
          </motion.p>

          {/* Say Hello Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-primary text-primary hover:bg-primary/10 transition-all duration-300 font-mono text-sm"
            >
              Say Hello
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center gap-6"
          >
            {socialLinks.map(({ icon: Icon, href, label, color }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className={`text-muted-foreground transition-colors duration-300 ${color}`}
                aria-label={label}
              >
                <Icon size={22} />
              </motion.a>
            ))}
          </motion.div>

          {/* Response time note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 flex items-center justify-center gap-2 text-muted-foreground"
          >
            <MessageSquare className="text-primary" size={16} />
            <span className="font-mono text-xs">Response time: ~24 hours</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
