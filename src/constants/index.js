import {
  contact,
  css,
  git,
  github,
  html,
  javascript,
  linkedin,
  logistics,
  mes,
  mysql,
  postgresql,
  react,
  redux,
  spring,
  tailwindcss,
  typescript,
  tg
} from "../assets/icons";
import { hitachivantara } from "../assets/images";

export const skills = [
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: postgresql,
    name: "PostgreSQL",
    type: "Database",
  },
  {
    imageUrl: mysql,
    name: "Mysql",
    type: "Database",
  },
  {
    imageUrl: spring,
    name: "Spring",
    type: "BackEnd",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Front-End Developer",
    company_name: "Hitachi Vantara VietNam",
    icon: hitachivantara,
    iconBg: "#FFF",
    date: "January 2022 - March 2023",
    points: [
      "I specialize in the development and maintenance of web applications using React.js, Angular, and other related technologies.",
      "When working with cross-functional teams, including designers, product managers, and fellow developers, I ensure that we create high-quality products.",
      "My experience includes implementing responsive design and ensuring cross-browser compatibility. I am also confident in providing constructive feedback during code reviews.",
      "If you choose to work with me on your next project, rest assured that you will be getting the best.",
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
    iconUrl: logistics,
    theme: "btn-back-light-white",
    name: "KWE Logistics",
   description: [
      "Adaptation of a logistics application from desktop to web application.",
      "As a Front-End developer, my responsibilities are to create a new UI/UX design, migrate data from the customer's desktop application to the web,",
      "Using ReactJS to develop modules.",
      "Using Redux to manage data.",
      "Using KenduUI to design and enhance UI/UX for better user engagement.",
      "Converted legacy Windows applications to web-based platform.",
      "Investigate requirements and hidden logics in the legacy platform.",
      "Documented Modules on Jira for team reference."
    ],
  },
  {
    iconUrl: mes,
    theme: "btn-back-light-white",
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
    iconUrl: "PC",
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
