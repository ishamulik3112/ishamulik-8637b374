import { motion } from "framer-motion";

const Footer = () => (
  <motion.footer
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="border-t border-border py-8"
  >
    <div className="max-w-6xl mx-auto px-4 text-center">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Isha Mulik. All rights reserved.
      </p>
    </div>
  </motion.footer>
);

export default Footer;
