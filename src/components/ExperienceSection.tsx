import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    emoji: "💼",
    title: "Full Stack Developer",
    company: "Freelance / Personal Projects",
    description:
      "Building scalable web applications using React.js, Node.js, Express.js, and MongoDB. Integrating AI APIs and focusing on clean architecture, responsive design, and performance optimization.",
    tags: ["React.js", "Node.js", "MongoDB", "REST APIs"],
  },
  {
    emoji: "🌐",
    title: "Web Developer",
    company: "Academic & Self-Directed Projects",
    description:
      "Developed responsive UI components and full-stack applications using modern frameworks. Built e-commerce platforms, AI-powered tools, and booking systems with secure authentication.",
    tags: ["React.js", "Tailwind CSS", "JavaScript", "AI Integration"],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative">
      <div className="section-container" ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="text-xs text-muted-foreground mb-2 tracking-widest uppercase"
        >
          // work history
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold font-heading mb-12"
        >
          <span className="text-gradient">Experience</span>
        </motion.h2>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="glass-card glow-border p-6 rounded-xl"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl">{exp.emoji}</span>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold font-heading text-foreground">{exp.title}</h3>
                  <p className="text-sm text-primary mb-3">{exp.company}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="text-[10px] px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
