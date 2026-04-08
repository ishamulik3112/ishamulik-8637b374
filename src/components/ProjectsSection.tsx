import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import geminiImg from "@/assets/project-gemini.jpg";
import ecommerceImg from "@/assets/project-ecommerce.jpg";
import hotelImg from "@/assets/project-hotel.jpg";

const projects = [
  {
    image: geminiImg,
    title: "Gemini Clone",
    subtitle: "Generative AI Web Application",
    description:
      "Real-time AI-powered text generation using Google Gemini API. Clean, responsive UI with secure API integration deployed on cloud platforms.",
    tech: ["React.js", "JavaScript", "HTML5", "CSS3", "Gemini API"],
  },
  {
    image: ecommerceImg,
    title: "E-Commerce Website",
    subtitle: "React Frontend",
    description:
      "Product listing, filtering, and cart management with real-time subtotal calculation. Seamless navigation using React Router with reusable, scalable UI components.",
    tech: ["React.js", "JavaScript", "React Router", "CSS3"],
  },
  {
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

  return (
    <section id="projects" className="relative">
      <div className="section-container" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold font-heading text-center mb-16"
        >
          My <span className="text-gradient">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="glass-card glow-border rounded-xl overflow-hidden group hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 flex items-center justify-center">
                <span className="text-4xl font-bold font-heading text-gradient opacity-30 group-hover:opacity-60 transition-opacity">
                  {project.title.charAt(0)}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-heading text-foreground mb-1">{project.title}</h3>
                <p className="text-xs text-primary mb-3">{project.subtitle}</p>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] px-2 py-1 rounded-full bg-primary/10 text-primary">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button className="flex items-center gap-1.5 text-xs px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all">
                    <ExternalLink size={14} /> Live Demo
                  </button>
                  <button className="flex items-center gap-1.5 text-xs px-4 py-2 rounded-lg border border-glass-border text-foreground hover:bg-muted/50 transition-all">
                    <Github size={14} /> GitHub
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
