import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        Need a SAP BTP developer? <br className="sm:block hidden" />
        Let&apos;s build something together!
      </p>
      <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
        <Link to="/contact" className="btn whitespace-nowrap">
          Contact Me
        </Link>
      </motion.div>
    </section>
  );
};

export default CTA;
