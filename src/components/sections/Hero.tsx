import { motion } from "framer-motion";
import { FileText, Github, ArrowDown, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 md:left-20 w-20 h-20 rounded-full bg-primary/10 blur-xl pointer-events-none"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-10 md:right-20 w-32 h-32 rounded-full bg-cyan-500/10 blur-xl pointer-events-none"
      />

      <div className="container mx-auto px-4 md:px-6 pt-20">
        <div className="max-w-4xl mx-auto">
          {/* Tag Line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.2 }}
            className="mb-6"
          >
            <span className="section-divider">
              {"//I BUILD SOFTWARE THAT DESIGNED FOR GROWTH, NOT REWORK."}
            </span>
          </motion.div>
          
          {/* Profile Image (centered, circular, golden glow) */}
          <div className="flex items-center justify-center mb-4">
                <img
                  src="/profile.jpeg.jpeg"
              alt="Zia Uddin"
              className="w-40 h-40 rounded-full object-cover ring-4 ring-amber-400/60 shadow-[0_0_30px_rgba(250,204,21,0.65)] border-transparent"
            />
          </div>

          {/* Main Heading */}
          <div className="flex flex-col items-center justify-center px-4">
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.4 }}
              className="text-center text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Hi, I'm <span className="text-gradient">Zia Uddin</span>,
              <br />a Front End Dev.
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.6 }}
              className="text-center text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 font-mono"
            >
              I build web apps that scale smoothly, load fast, and don’t break
              on Monday mornings.
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.8 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Button
              variant="default"
              size="lg"
              className="gap-2 glow-effect"
              asChild
            >
              <a
                href="https://drive.google.com/file/d/1GtTZdFbMR63jvzeUu0eAmOgUXhshwbik/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText size={18} />
                Checkout Resume
              </a>
            </Button>

            <Button variant="outline" size="lg" className="gap-2" asChild>
              <a
                href="https://github.com/zia-rayan1998"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={18} />
                GitHub
              </a>
            </Button>
          </motion.div>

          {/* Journal Link */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3 }}
            className="mt-6"
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors line-glow"
            >
              <BookOpen size={16} />
              <span>Read My Blogs</span>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 3.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs font-mono">Scroll Down</span>
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
