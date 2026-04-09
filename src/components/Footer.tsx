import { motion } from "framer-motion";

const Footer = () => (
  <motion.footer
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="border-t border-border py-8"
  >
    <div className="max-w-6xl mx-auto px-4 text-center">
      <div className="flex items-center justify-center gap-2 mb-2">
        <span className="w-8 h-8 rounded-md bg-primary/20 border border-primary/30 flex items-center justify-center text-xs font-bold text-primary">IM</span>
        <span className="font-semibold text-foreground">Isha Mulik</span>
        <span className="text-muted-foreground">—</span>
        <span className="text-muted-foreground text-sm">Full Stack Developer</span>
      </div>
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Isha Mulik. All rights reserved.
      </p>
    </div>
  </motion.footer>
);

export default Footer;
