import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  { emoji: "⚡", name: "JavaScript", tag: "Language" },
  { emoji: "🔷", name: "TypeScript", tag: "Language" },
  { emoji: "⚛️", name: "React.js", tag: "Frontend" },
  { emoji: "🔄", name: "Redux", tag: "State" },
  { emoji: "🎨", name: "Tailwind CSS", tag: "Styling" },
  { emoji: "📦", name: "Node.js", tag: "Backend" },
  { emoji: "🚀", name: "Express.js", tag: "Framework" },
  { emoji: "🔗", name: "REST APIs", tag: "Backend" },
  { emoji: "🍃", name: "MongoDB", tag: "Database" },
  { emoji: "🐬", name: "MySQL", tag: "Database" },
  { emoji: "🔀", name: "Git", tag: "Version Control" },
  { emoji: "🐙", name: "GitHub", tag: "Version Control" },
  { emoji: "📮", name: "Postman", tag: "Testing" },
  { emoji: "▲", name: "Vercel", tag: "Deployment" },
  { emoji: "🌐", name: "HTML5", tag: "Frontend" },
  { emoji: "🎯", name: "CSS3", tag: "Frontend" },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative">
      <div className="section-container" ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="text-xs text-muted-foreground mb-2 tracking-widest uppercase"
        >
          // what i know
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold font-heading mb-12"
        >
          Technical <span className="text-gradient">Skills</span>
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skillCategories.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="glass-card p-4 rounded-xl text-center hover:scale-[1.05] hover:border-primary/30 transition-all duration-300 group cursor-default"
            >
              <span className="text-2xl block mb-2">{skill.emoji}</span>
              <p className="text-sm font-medium text-foreground">{skill.name}</p>
              <p className="text-[10px] text-muted-foreground mt-1">{skill.tag}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
