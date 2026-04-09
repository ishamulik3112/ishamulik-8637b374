import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, Linkedin, Github, Rocket } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="relative">
      <div className="section-container" ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="text-xs text-muted-foreground mb-2 tracking-widest uppercase"
        >
          // let's connect
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold font-heading mb-4"
        >
          Get In <span className="text-gradient">Touch</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground mb-12"
        >
          I'm open to new opportunities — feel free to reach out!
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold font-heading text-foreground mb-4">Contact Information</h3>
            {[
              { icon: Mail, label: "Email", value: "ishamulik2002@gmail.com", href: "mailto:ishamulik2002@gmail.com" },
              { icon: Linkedin, label: "LinkedIn", value: "isha-mulik", href: "https://www.linkedin.com/in/isha-mulik-755493284" },
              { icon: Github, label: "GitHub", value: "ishamulik3112", href: "https://github.com/ishamulik3112" },
            ].map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="glass-card p-4 rounded-xl flex items-center gap-4 hover:border-primary/30 transition-all block"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{label}</p>
                  <p className="text-sm text-foreground">{value}</p>
                </div>
              </a>
            ))}

            <div className="glass-card p-4 rounded-xl flex items-center gap-3 mt-4">
              <Rocket size={18} className="text-primary" />
              <p className="text-xs text-muted-foreground">
                Currently looking for full-time or internship opportunities in full stack development.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold font-heading text-foreground mb-4">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
              <textarea
                rows={5}
                placeholder="Message"
                required
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary/15 text-primary border border-primary/20 font-medium text-sm hover:bg-primary/25 transition-all"
              >
                {submitted ? "Message Sent! ✓" : <><Send size={14} /> Send Message</>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
