import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase, Rocket, Code2, Link } from "lucide-react";

const stats = [
  { icon: "🎓", value: "M.Sc.", label: "Postgraduate Degree" },
  { icon: "💼", value: "1+", label: "Internship Experience" },
  { icon: "🚀", value: "3+", label: "Projects Built" },
  { icon: "⚙️", value: "15+", label: "Technologies" },
  { icon: "🔗", value: "3+", label: "APIs Developed" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative">
      <div className="section-container" ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="text-xs text-muted-foreground mb-2 tracking-widest uppercase"
        >
          // about me
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold font-heading mb-12"
        >
          About <span className="text-gradient">Me</span>
        </motion.h2>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="glass-card glow-border p-6 rounded-xl mb-6">
              <p className="text-xs text-primary mb-2 font-medium">Professional Summary</p>
              <h3 className="text-lg font-semibold font-heading text-foreground mb-3">Full Stack Specialist</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I'm a passionate Full Stack Developer with a strong foundation in building scalable, efficient web applications. 
                I hold an M.Sc. in Computer Science from Savitribai Phule Pune University (2026) and have hands-on experience with 
                React.js, Node.js, Express.js, and REST APIs. I love solving complex problems with clean architecture and writing 
                code that is maintainable and production-ready.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["Problem Solver", "Clean Code", "AI Integration", "API Design"].map((tag) => (
                  <span key={tag} className="text-[10px] px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="glass-card p-4 rounded-xl flex items-center gap-3">
              <GraduationCap className="text-primary shrink-0" size={20} />
              <div>
                <p className="text-sm font-semibold text-foreground">M.Sc. in Computer Science</p>
                <p className="text-xs text-muted-foreground">Savitribai Phule Pune University – 2026</p>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 grid grid-cols-2 gap-3 content-start"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}
                className={`glass-card p-4 rounded-xl text-center ${i === 0 ? "col-span-2" : ""}`}
              >
                <span className="text-2xl mb-2 block">{stat.icon}</span>
                <p className="text-xl font-bold font-heading text-foreground">{stat.value}</p>
                <p className="text-[10px] text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
