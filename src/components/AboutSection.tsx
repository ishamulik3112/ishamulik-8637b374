import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, GraduationCap, Briefcase } from "lucide-react";

const stats = [
  { label: "Projects", value: "3+", icon: Briefcase },
  { label: "Technologies", value: "15+", icon: Code2 },
  { label: "Education", value: "M.Sc.", icon: GraduationCap },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative">
      <div className="section-container" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold font-heading text-center mb-16"
        >
          About <span className="text-gradient">Me</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a passionate Full Stack Developer with expertise in building modern, scalable web applications. 
              I specialize in bridging the gap between beautiful frontend experiences and robust backend architecture.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              With a strong foundation in React.js, Node.js, Express.js, and databases like MongoDB and MySQL, 
              I create efficient digital solutions that solve real-world problems. I'm particularly interested in 
              AI integration and performance optimization.
            </p>
            <div className="glass-card p-4 rounded-xl flex items-center gap-4">
              <GraduationCap className="text-primary shrink-0" size={24} />
              <div>
                <p className="font-semibold text-foreground">M.Sc. in Computer Science</p>
                <p className="text-sm text-muted-foreground">Savitribai Phule Pune University – 2026</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.15 }}
                className="glass-card glow-border p-6 rounded-xl text-center"
              >
                <stat.icon className="mx-auto mb-3 text-primary" size={28} />
                <p className="text-2xl font-bold font-heading text-gradient">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
