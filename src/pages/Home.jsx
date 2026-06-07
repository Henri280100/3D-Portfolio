import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { arrow } from "../assets/icons";
import Footer from "../component/Footer";
import { fadeUp } from "../component/Motion";

const techStack = [
  "SAP CAP", "SAP Fiori", "SAP UI5", "Spring Boot",
  "React", "Angular", "TypeScript", "SAP BTP",
];

function Home() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0a0a0f]">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0d1b2a] to-[#1b3a6b]" />

      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.12, 0.08] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] right-[-5%] w-[min(600px,90vw)] h-[min(600px,90vw)] bg-blue-600/20 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.06, 0.1, 0.06] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-10%] left-[-10%] w-[min(500px,80vw)] h-[min(500px,80vw)] bg-cyan-500/15 rounded-full blur-[100px]"
      />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-8 pt-28 sm:pt-32 pb-16 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 mb-6 sm:mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-blue-300 text-xs sm:text-sm font-medium tracking-wide">
            SAP Technical Consultant · BTP Developer @ FPT Software
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl font-poppins font-bold text-white leading-[1.15] max-w-4xl"
        >
          Hi, I&apos;m{" "}
          <span className="blue-gradient_text">Khoa Pham</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed px-2"
        >
          Building enterprise solutions with{" "}
          <span className="text-white font-medium">SAP CAP</span>,{" "}
          <span className="text-white font-medium">SAP Fiori</span> &{" "}
          <span className="text-white font-medium">SAP UI5</span> on SAP BTP.
          Full-stack background with Spring Boot & modern front-end frameworks.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="flex flex-wrap gap-3 sm:gap-4 mt-8 sm:mt-10 justify-center w-full max-w-lg sm:max-w-none"
        >
          <Link to="/about" className="btn flex items-center gap-2 w-full sm:w-auto justify-center">
            About Me
            <img src={arrow} alt="" className="w-4 h-4 object-contain invert" />
          </Link>
          <Link to="/projects" className="btn-outline w-full sm:w-auto">
            View Projects
          </Link>
          <Link to="/contact" className="btn-outline w-full sm:w-auto">
            Get in Touch
          </Link>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
          className="grid grid-cols-1 xs:grid-cols-3 gap-4 sm:gap-6 mt-16 sm:mt-20 w-full max-w-3xl"
        >
          {[
            { value: "3+", label: "Years Experience" },
            { value: "4", label: "Enterprise Projects" },
            { value: "Live", label: "At FPT Software" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -4, borderColor: "rgba(59,130,246,0.4)" }}
              className="glass-card-dark px-5 sm:px-6 py-4 sm:py-5 rounded-2xl"
            >
              <p className="text-2xl sm:text-3xl font-bold text-white font-poppins">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={5}
          className="mt-10 sm:mt-12 w-full max-w-3xl overflow-hidden"
        >
          <div className="flex gap-3 animate-marquee whitespace-nowrap">
            {[...techStack, ...techStack].map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="inline-block px-4 py-1.5 text-xs sm:text-sm text-blue-200 bg-white/5 border border-white/10 rounded-full shrink-0"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/40 rounded-full" />
          </div>
        </motion.div>
      </div>

      <Footer dark />
    </section>
  );
}

export default Home;
