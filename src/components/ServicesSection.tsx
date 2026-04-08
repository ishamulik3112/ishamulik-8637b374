import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Layout, Server, Sparkles, Rocket } from "lucide-react";

const services = [
  { icon: Globe, title: "Full Stack Web Development", desc: "End-to-end scalable application development" },
  { icon: Layout, title: "Frontend Development", desc: "Responsive, high-performance UI using React" },
  { icon: Server, title: "Backend & API Development", desc: "Secure REST APIs with Node & Express" },
  { icon: Sparkles, title: "AI Integration", desc: "Smart features using Google Gemini API" },
  { icon: Rocket, title: "Deployment & Optimization", desc: "Vercel/Netlify deployments with optimization" },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative">
      <div className="section-container" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold font-heading text-center mb-16"
        >
          My <span className="text-gradient">Services</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card glow-border p-8 rounded-xl text-center hover:scale-[1.03] transition-transform duration-300 group"
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <service.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-semibold font-heading text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
