import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState('');
  
  const fullText = '> Initializing portfolio...';

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 200);

    return () => clearInterval(progressInterval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="loader-container"
        >
          <div className="flex flex-col items-center gap-8">
            {/* Logo/Name Animation */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                type: 'spring', 
                stiffness: 200, 
                damping: 15,
                delay: 0.2 
              }}
              className="relative"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl bg-gradient-to-br from-primary via-blue-500 to-cyan-400 flex items-center justify-center glow-effect">
                <span className="text-3xl md:text-4xl font-bold text-primary-foreground font-mono">{'</>'}</span>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-xl border-2 border-dashed border-primary/30"
              />
            </motion.div>

            {/* Terminal Text */}
            <div className="terminal-bg p-4 md:p-6 min-w-[300px] md:min-w-[400px]">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-destructive/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-terminal-green/80" />
              </div>
              <div className="font-mono text-sm md:text-base">
                <span className="text-terminal-green">{text}</span>
                <span className="loader-cursor" />
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-64 md:w-80">
              <div className="flex justify-between text-xs text-muted-foreground font-mono mb-2">
                <span>Loading assets</span>
                <span>{Math.min(100, Math.round(progress))}%</span>
              </div>
              <div className="h-1 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(100, progress)}%` }}
                  className="h-full bg-gradient-to-r from-primary to-cyan-400"
                />
              </div>
            </div>

            {/* Loading Dots */}
            <div className="flex gap-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    y: [0, -10, 0],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 0.8, 
                    repeat: Infinity,
                    delay: i * 0.2 
                  }}
                  className="w-2 h-2 rounded-full bg-primary"
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
