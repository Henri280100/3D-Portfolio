import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { experiences, skills } from "../constants";
import CTA from "../component/CTA";
import { ScrollReveal, StaggerWrap, fadeUp, scaleIn } from "../component/Motion";

const About = () => {
  return (
    <section className="max-container page-bg">
      <ScrollReveal>
        <h1 className="head-text">
          Hello, I&apos;m{" "}
          <span className="blue-gradient_text font-semibold">Khoa</span>
        </h1>
      </ScrollReveal>

      <ScrollReveal delay={1}>
        <div className="mt-5 flex flex-col gap-3 text-slate-500 max-w-2xl">
          <p>
            A Vietnam-based{" "}
            <strong className="text-black-500">SAP Technical Consultant</strong> and{" "}
            <strong className="text-black-500">BTP Developer</strong> currently at{" "}
            <strong className="text-black-500">FPT Software</strong>. I specialize in
            SAP CAP, SAP Fiori, and SAP UI5 on the SAP Business Technology Platform.
          </p>
          <p>
            After 1.5 years as a Front-End & Software Engineer at Hitachi Vantara, I
            joined FPT Software in June 2025 to develop SAP enterprise applications
            for MM and FI modules — all on the non-ABAP BTP stack, backed by Spring Boot.
          </p>
        </div>
      </ScrollReveal>

      <div className="py-10 sm:py-14 flex flex-col">
        <ScrollReveal>
          <h3 className="subhead-text">
            Tech Stack
            <span className="section-line" />
          </h3>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <p className="mt-3 text-slate-500 text-sm">
            SAP BTP · SAP CAP · SAP Fiori · SAP UI5 · Spring Boot · JavaScript · TypeScript · React · Angular
          </p>
        </ScrollReveal>

        <StaggerWrap className="mt-10 sm:mt-12 grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={scaleIn}
              whileHover={{ y: -6, scale: 1.03 }}
              className="skill-card group"
              title={`${skill.name} — ${skill.type}`}
            >
              <div className="skill-icon-wrap">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-9 h-9 sm:w-10 sm:h-10 object-contain"
                />
              </div>
              <p className="text-xs font-semibold text-black-500 mt-3 text-center leading-tight">
                {skill.name}
              </p>
              <p className="text-[10px] text-slate-400 text-center mt-0.5">{skill.type}</p>
            </motion.div>
          ))}
        </StaggerWrap>
      </div>

      <div className="py-12 sm:py-16">
        <ScrollReveal>
          <h3 className="subhead-text">
            Work Experience
            <span className="section-line" />
          </h3>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <p className="mt-5 flex flex-col gap-3 text-slate-500 max-w-2xl">
            From front-end engineering at Hitachi Vantara to SAP BTP development at
            FPT Software — I bring a unique blend of modern web development and
            enterprise SAP expertise.
          </p>
        </ScrollReveal>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 sm:mt-12 flex"
        >
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name + experience.title}
                date={experience.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[80%] h-[80%] object-contain"
                    />
                  </div>
                }
                iconStyle={{ background: experience.iconBg, boxShadow: "0 0 0 4px rgba(43,119,231,0.15)" }}
                contentStyle={{
                  borderBottom: "6px solid #2b77e7",
                  boxShadow: "0 8px 30px rgba(43, 119, 231, 0.1)",
                  borderRadius: "16px",
                }}
              >
                <div>
                  <h3 className="text-black text-lg sm:text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p className="text-blue-500 font-medium" style={{ margin: 0 }}>
                    {experience.company_name}
                  </p>
                </div>
                <ul className="my-4 sm:my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point${index}`}
                      className="text-slate-500 font-normal pl-1 text-sm leading-relaxed"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </motion.div>
      </div>

      <hr className="border-slate-200" />

      <ScrollReveal>
        <CTA />
      </ScrollReveal>
    </section>
  );
};

export default About;
