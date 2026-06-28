import {
  contact,
  css,
  git,
  github,
  html,
  javascript,
  linkedin,
  kwe,
  dksh,
  cisd,
  react,
  tailwindcss,
  typescript,
  tg,
  pc,
  sap,
  spring,
  angular,
  fpt
} from "../assets/icons";
import { hitachivantara } from "../assets/images";

export const skills = [
  { imageUrl: sap, name: "SAP CAP", type: "SAP BTP" },
  { imageUrl: sap, name: "SAP Fiori", type: "SAP BTP" },
  { imageUrl: sap, name: "SAP UI5", type: "SAP BTP" },
  { imageUrl: spring, name: "Spring Boot", type: "Backend" },
  { imageUrl: javascript, name: "JavaScript", type: "Frontend" },
  { imageUrl: typescript, name: "TypeScript", type: "Frontend" },
  { imageUrl: react, name: "React", type: "Frontend" },
  { imageUrl: angular, name: "Angular", type: "Frontend" },
  { imageUrl: html, name: "HTML", type: "Frontend" },
  { imageUrl: css, name: "CSS", type: "Frontend" },
  { imageUrl: tailwindcss, name: "Tailwind CSS", type: "Frontend" },
  { imageUrl: git, name: "Git", type: "Tools" },
  { imageUrl: github, name: "GitHub", type: "Tools" },
];

export const experiences = [
  {
    title: "SAP Technical Consultant · BTP Developer",
    company_name: "FPT Software",
    icon: fpt,
    iconBg: "#FFF3EB",
    date: "June 11, 2025 - Present",
    points: [
      "Developing enterprise applications on SAP Business Technology Platform using SAP CAP, SAP Fiori, and SAP UI5 (non-ABAP stack).",
      "Delivering CISD 1 (MM — Materials Management) and CISD 2 (FI — Financial Accounting) modules for enterprise clients.",
      "Building OData services, custom Fiori apps, and responsive UI5 interfaces integrated with SAP S/4HANA backends.",
      "Collaborating with functional consultants and cross-functional teams to translate business requirements into technical solutions.",
    ],
  },
  {
    title: "Front-End & Software Engineer",
    company_name: "Hitachi Vantara Vietnam",
    icon: hitachivantara,
    iconBg: "#FFF",
    date: "January 2022 - July 2023",
    points: [
      "Developed and maintained enterprise web applications using React.js, Angular, and TypeScript.",
      "Delivered KWE Logistics and DKSH Market Expansion Services projects — migrating legacy desktop apps to modern web platforms.",
      "Implemented responsive UI/UX with Redux state management, Kendo UI, and Angular Material.",
      "Worked closely with designers, product managers, and backend teams to ship high-quality, cross-browser compatible products.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/Henri280100",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/khoa-pham28",
  },
];

export const projects = [
  {
    imageUrl: cisd,
    iconUrl: sap,
    theme: "btn-back-blue",
    company: "FPT Software",
    module: "SD MM",
    name: "CISD 1 — Materials Management",
    description: [
      "SAP BTP development for Materials Management (MM) module on the CISD 1 project.",
      "Built custom SAP Fiori applications and SAP UI5 interfaces for inventory and procurement workflows.",
      "Developed OData services with SAP CAP to integrate with SAP S/4HANA backend systems.",
      "Collaborated with functional consultants to implement business logic and ensure module compliance.",
    ],
  },
  {
    imageUrl: cisd,
    iconUrl: sap,
    theme: "btn-back-blue",
    company: "FPT Software",
    module: "FI",
    name: "CISD 2 — Financial Accounting",
    description: [
      "Restructured the project to align with the client's needs and organizational structure.",
      "Integrated SAP S/4HANA with SAP HANA DB Cloud to run in parallel using POST, PATCH, GET, and DELETE methods.",
      "Provided technical solutions to resolve customer issues and ensure smooth system operations.",
      "Designed and developed SAP Fiori apps for financial reporting, ledger management, and accounting processes.",
    ],
    link: "",
  },
  {
    imageUrl: kwe,
    iconUrl: kwe,
    theme: "btn-back-light-white",
    company: "Hitachi Vantara",
    module: null,
    name: "KWE Logistics",
    description: [
      "Adapted a logistics application from desktop to a modern web application.",
      "Created new UI/UX design and migrated data from the customer's legacy desktop platform.",
      "Developed modules using ReactJS, Redux, and Kendo UI for enhanced user engagement.",
      "Investigated requirements and documented modules on Jira for team reference.",
    ],
    link: "",
  },
  {
    imageUrl: dksh,
    iconUrl: dksh,
    theme: "btn-back-light-white",
    company: "Hitachi Vantara",
    module: null,
    name: "DKSH Market Expansion Services",
    description: [
      "Design and develop an exceptional web application, that not only offers an easy-to-use interface, but also a visually appealing look and seamless user interaction.",
      "Using Angular Material to design and enhance UI/UX.",
      "Using Angular 8 and TypeScript.",
      "Conduct application analysis to optimize performance.",
      "Fix delay loading data from FrontEnd side.",
    ],
  },
  {
    iconUrl: tg,
    theme: "btn-back-light-white",
    name: "E-commerce web application",
    description: [
      "A personal project to practice and improve my skills in web development when I was in military service.",
      "The project is a web application that allows users to browse and purchase products online.", 
      "Implemented features such as product search, shopping cart, and user authentication.",
      "Utilized NextJS and Spring Boot for the front-end and back-end development.",
      "Implemented responsive design to ensure a consistent user experience across different devices and screen sizes.",
    ],
    link: "",
  },
  {
    iconUrl: pc,
    theme: "btn-back-light-white",
    name: "PC Craft",
    description: [
      "A personal project to explore no-code tools and improve my UI/UX skills using Framer.",
      "The project is a modern showcase website built to highlight a custom PC setup service.", 
      "Designed interactive components such as testimonials, product highlights, contact form, and smooth page transitions.",
      "Utilized Framer’s visual editor and custom code overrides to implement responsive layout and text truncation logic.",
      "Focused on clean design, performance, and mobile responsiveness to ensure a seamless user experience across devices.",
    ],
    link: "https://pccraft.framer.website/",
  },
];
