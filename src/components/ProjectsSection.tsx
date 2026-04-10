import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ChevronDown } from "lucide-react";
import geminiImg from "@/assets/project-gemini.jpg";
import ecommerceImg from "@/assets/project-ecommerce.jpg";
import hotelImg from "@/assets/project-hotel.jpg";

const projects = [
  {
    emoji: "🤖",
    image: geminiImg,
    title: "Gemini Clone",
    subtitle: "Generative AI Web Application",
    description:
      "Real-time AI-powered text generation using Google Gemini API. Clean, responsive UI with secure API integration deployed on cloud platforms.",
    tech: ["React.js", "JavaScript", "HTML5", "CSS3", "Gemini API"],
  },
  {
    emoji: "🛒",
    image: ecommerceImg,
    title: "E-Commerce Website",
    subtitle: "React Frontend",
    description:
      "Product listing, filtering, and cart management with real-time subtotal calculation. Seamless navigation using React Router with reusable, scalable UI components.",
    tech: ["React.js", "JavaScript", "React Router", "CSS3"],
  },
  {
    emoji: "🏨",
    image: hotelImg,
    title: "Hotel Booking App",
    subtitle: "Full Stack Web Application",
    description:
      "Modern hotel booking app allowing users to browse hotels, view details, and make bookings. Secure auth using Clerk with REST APIs for dynamic data handling.",
    tech: ["React.js", "Tailwind CSS", "Clerk Auth", "REST APIs"],
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="relative">
      <div className="section-container" ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="text-xs text-muted-foreground mb-2 tracking-widest uppercase"
        >
          // what i've built
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold font-heading mb-12"
        >
          <span className="text-gradient">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="glass-card glow-border rounded-xl overflow-hidden cursor-pointer"
                onClick={() => setOpenIndex(isOpen ? null : i)}
              >
                <div className="h-44 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    width={800}
                    height={512}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                  <span className="absolute top-3 left-3 text-2xl">{project.emoji}</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold font-heading text-foreground">{project.title}</h3>
                      <p className="text-xs text-primary">{project.subtitle}</p>
                    </div>
                    <ChevronDown
                      size={18}
                      className={`text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4">
                          <p className="text-xs text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {project.tech.map((t) => (
                              <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                                {t}
                              </span>
                            ))}
                          </div>
                          <div className="flex gap-3">
                            <button
                              onClick={(e) => e.stopPropagation()}
                              className="flex items-center gap-1.5 text-xs px-4 py-2 rounded-lg bg-primary/15 text-primary border border-primary/20 hover:bg-primary/25 transition-all"
                            >
                              <ExternalLink size={12} /> Live Demo
                            </button>
                            <button
                              onClick={(e) => e.stopPropagation()}
                              className="flex items-center gap-1.5 text-xs px-4 py-2 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
                            >
                              <Github size={12} /> GitHub
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
