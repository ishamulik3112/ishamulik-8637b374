import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  { name: "JavaScript", tag: "Language", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", tag: "Language", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React.js", tag: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Redux", tag: "State", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
  { name: "Tailwind CSS", tag: "Styling", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Node.js", tag: "Backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", tag: "Framework", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "REST APIs", tag: "Backend", logo: "https://cdn.simpleicons.org/fastapi/009688" },
  { name: "MongoDB", tag: "Database", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "MySQL", tag: "Database", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Git", tag: "Version Control", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", tag: "Version Control", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Postman", tag: "Testing", logo: "https://cdn.simpleicons.org/postman/FF6C37" },
  { name: "Vercel", tag: "Deployment", logo: "https://cdn.simpleicons.org/vercel/000000" },
  { name: "HTML5", tag: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", tag: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
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
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-8 h-8 mx-auto mb-2"
                loading="lazy"
              />
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
