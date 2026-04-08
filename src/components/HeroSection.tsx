import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/10 rounded-full animate-glow-pulse" style={{ animationDelay: "3s" }} />
      </div>

      <div className="section-container relative z-10 flex flex-col items-center">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-primary font-medium mb-4 tracking-wider uppercase text-sm"
          >
            Full Stack Developer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-6"
          >
            Hi, I'm{" "}
            <span className="text-gradient">Isha Mulik</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8"
          >
            Building scalable web solutions with modern technologies and AI-powered experiences.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <a
              href="#projects"
              className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-all duration-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg border border-glass-border text-foreground font-semibold hover:bg-muted/50 transition-all duration-300"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative"
        >
          <div className="animate-float">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full glow-border">
              <img
                src={profileImg}
                alt="Isha Mulik"
                width={512}
                height={512}
                className="w-full h-full object-cover rounded-full"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
