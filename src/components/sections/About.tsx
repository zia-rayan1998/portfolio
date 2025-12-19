import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Lightbulb, Code, Cpu, Database, Zap, Server } from "lucide-react";

function InteractiveShowcase({ isInView }: { isInView: boolean }) {
  const [loading, setLoading] = useState(true);

  const cards = [
    {
      id: "playground",
      title: "Playground",
      lines: ["Live UI experiments", "Micro-interactions", "Design tokens"],
    },
    {
      id: "performance",
      title: "Perf Lab",
      lines: ["Lighthouse tuning", "Lazy & streaming", "Critical CSS"],
    },
    {
      id: "deploy",
      title: "Deploy Flow",
      lines: ["CI pipelines", "Preview builds", "Rollback safe"],
    },
  ];

  // trigger loader when section comes into view
  if (isInView && loading) {
    setTimeout(() => setLoading(false), 900);
  }

  return (
    <div className="relative p-2">
      {/* Loader overlay */}
      {loading ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full h-52 rounded-lg flex items-center justify-center bg-gradient-to-br from-neutral-900 to-neutral-800"
        >
          <div className="flex flex-col items-center gap-2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="w-12 h-12 rounded-full border-4 border-amber-400/70 border-t-transparent"
            />
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-muted-foreground"
            >
              Loading showcase...
            </motion.span>
          </div>
        </motion.div>
      ) : (
        <div className="relative">
          {/* floating decorative dots */}
          <motion.div
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-amber-300/10 blur-3xl pointer-events-none"
          />

          <div className="flex gap-4 justify-center items-stretch">
            {cards.map((card, i) => (
              <TiltCard key={card.id} index={i} card={card} delay={0.12 * i} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function TiltCard({ card, index, delay }: any) {
  const [style, setStyle] = useState<Record<string, any>>({});

  function handleMove(e: React.MouseEvent) {
    const el = e.currentTarget as HTMLElement;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = -(y - rect.height / 2) / 12;
    const ry = (x - rect.width / 2) / 12;
    setStyle({ transform: `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.03)` });
  }

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={() => setStyle({ transform: "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)" })}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      style={style}
      className="w-64 md:w-72 p-5 rounded-2xl bg-gradient-to-br from-neutral-900/60 to-neutral-800/60 shadow-xl hover:shadow-2xl cursor-pointer"
    >
      <h4 className="text-lg font-semibold mb-2">{card.title}</h4>
      <ul className="text-sm text-muted-foreground space-y-1">
        {card.lines.map((l: string) => (
          <li key={l}>• {l}</li>
        ))}
      </ul>
      <div className="mt-4 flex justify-center">
        <motion.button whileHover={{ scale: 1.03 }} className="text-xs px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-400/10">
          Explore
        </motion.button>
      </div>
    </motion.div>
  );
}

function SystemStatus({ isInView }: { isInView: boolean }) {
  const stats = [
    { id: 'ui', label: 'UI Performance', value: 98 },
    { id: 'a11y', label: 'Accessibility', value: 92 },
    { id: 'scale', label: 'Scalability', value: 95 },
    { id: 'code', label: 'Code Quality', value: 97 },
  ];

  return (
    <div className="mt-6 p-4 rounded-xl relative overflow-hidden">
      {/* AI background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 to-slate-800/50 -z-10" />
      <div className="absolute -top-16 -left-16 w-60 h-60 rounded-full bg-cyan-500/6 blur-3xl -z-10" />
      <div className="absolute -bottom-16 -right-10 w-72 h-72 rounded-full bg-violet-400/6 blur-3xl -z-10" />

      <div className="flex items-center justify-between mb-3">
        <h5 className="text-sm font-semibold tracking-wider">SYSTEM STATUS: <span className="text-cyan-300">ZIA_UDDIN</span></h5>
        <span className="text-sm text-muted-foreground">AI Monitor <span className="ml-2 text-emerald-400">● Online</span></span>
      </div>

      <div className="space-y-4">
        {stats.map((s, i) => (
          <AIStatRow key={s.id} label={s.label} value={s.value} delay={i * 180} isInView={isInView} />
        ))}
      </div>

      {/* subtle scanning line */}
      <motion.div
        aria-hidden
        initial={{ x: '-120%' }}
        animate={{ x: isInView ? '120%' : '-120%' }}
        transition={{ duration: 2.6, repeat: Infinity, ease: 'linear' }}
        className="pointer-events-none absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/3 to-transparent mix-blend-screen opacity-10"
      />
    </div>
  );
}

function AIStatRow({ label, value, delay, isInView }: { label: string; value: number; delay: number; isInView: boolean }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let raf: number | null = null;
    const duration = 900; // ms
    const start = performance.now();

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(1, elapsed / duration);
      const eased = Math.pow(progress, 0.9);
      const current = Math.round(eased * value);
      setDisplay(current);
      if (progress < 1) raf = requestAnimationFrame(tick);
    }

    const timeout = setTimeout(() => {
      raf = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(timeout);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [isInView, value, delay]);

  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <span className="text-sm font-medium">{label}</span>
        <span className="text-sm font-mono">{display}%</span>
      </div>

      <div className="w-full h-3 bg-slate-800 rounded-full relative overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${value}%` : 0 }}
          transition={{ duration: 0.9, delay: delay / 1000, ease: 'circOut' }}
          className="h-3 absolute left-0 top-0 bg-gradient-to-r from-cyan-400 via-violet-400 to-rose-300"
        />

        {/* moving indicator */}
        <motion.div
          initial={{ left: '0%' }}
          animate={{ left: isInView ? `${value}%` : '0%' }}
          transition={{ duration: 0.9, delay: delay / 1000, ease: 'circOut' }}
          className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-lg"
          style={{ transformOrigin: 'center' }}
        />
      </div>
    </div>
  );
}

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const codeSnippet = [
    {
      line: 1,
      code: "const passion = 'Number.MAX_VALUE';",
      color: "text-cyan-400",
    },
    { line: 2, code: "function build() {", color: "text-yellow-400" },
    { line: 3, code: "  return tech;", color: "text-foreground" },
    { line: 4, code: "}", color: "text-yellow-400" },
    { line: 5, code: "while(awake) { code(); }", color: "text-primary" },
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
          <span className="section-divider">{"// About Me"}</span>
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
              I’m a frontend developer focused on building scalable,
              well-crafted user interfaces where design, performance, and
              maintainability come together. I enjoy transforming ideas into
              responsive, accessible web experiences with clean, thoughtful
              implementation.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm passionate about creating seamless user experiences and
              solving complex problems with elegant solutions. When I'm not
              coding, you'll find me exploring new technologies and contributing
              to open-source projects.
            </p>
          </motion.div>

          {/* Skills Hub: animated badges + description card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            {/* AI System Status block (animated loading bars) */}
              <SystemStatus isInView={isInView} />
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
            <span className="text-gradient">Code</span> • Tech •{" "}
            <span className="text-gradient">Software</span>
          </h3>
          <p className="text-muted-foreground font-mono mt-2">
            {"Y’all catch feelings, I catch bugs. We are not the same.."}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
