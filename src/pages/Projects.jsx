import { motion } from "framer-motion";
import { projects } from "../constants";
import CTA from "../component/CTA";
import { ScrollReveal, StaggerWrap, scaleIn } from "../component/Motion";

const Projects = () => {
  return (
    <section className="max-container page-bg">
      <ScrollReveal>
        <h1 className="head-text">
          My{" "}
          <span className="blue-gradient_text font-semibold">Projects</span>
        </h1>
      </ScrollReveal>

      <ScrollReveal delay={1}>
        <p className="mt-5 flex flex-col gap-3 text-slate-500 max-w-2xl">
          Enterprise projects delivered across two companies — SAP BTP solutions at
          FPT Software and front-end engineering at Hitachi Vantara. Each project
          reflects hands-on experience with real-world business requirements.
        </p>
      </ScrollReveal>

      <StaggerWrap className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 my-12 sm:my-16">
        {projects.map((project, index) => (
          <motion.article
            key={project.name}
            variants={scaleIn}
            custom={index}
            whileHover={{ y: -6 }}
            className="project-card-v2 group"
          >
            <div className="relative overflow-hidden rounded-xl mb-5">
              <img
                src={project.imageUrl}
                alt={project.name}
                className="w-full h-36 sm:h-44 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              {project.module && (
                <span className="absolute top-3 right-3 px-3 py-1 text-xs font-bold text-white bg-blue-600/90 backdrop-blur-sm rounded-full">
                  {project.module}
                </span>
              )}
            </div>

            <div className="flex items-start justify-between gap-3">
              <div>
                <h4 className="text-lg sm:text-xl font-poppins font-semibold text-black-500 leading-snug">
                  {project.name}
                </h4>
                <p className="text-sm text-blue-500 font-medium mt-1">
                  {project.company}
                </p>
              </div>
            </div>

            <ul className="mt-4 space-y-2.5">
              {project.description.map((point, i) => (
                <li
                  key={i}
                  className="text-sm text-slate-500 flex items-start gap-2.5 leading-relaxed"
                >
                  <span className="text-blue-500 mt-0.5 shrink-0 font-bold">▸</span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </StaggerWrap>

      <hr className="border-slate-200" />

      <ScrollReveal>
        <CTA />
      </ScrollReveal>
    </section>
  );
};

export default Projects;
