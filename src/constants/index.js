import { hitachivantara } from "../assets/images";
import {
  contact,
  css,
  git,
  github,
  javascript,
  linkedin,
  nodejs,
  react,
  redux,
  tailwindcss,
  typescript,
  postgresql,
  mysql,
  spring,
  angular,
  kwe,
  dksh,
  html,
  portfolio,
} from "../assets/icons";

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
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
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
    imageUrl: angular,
    name: "Angular",
    type: "Frontend",
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
    date: "May 2022 - January 2023",
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
    iconUrl: kwe,
    theme: "btn-back-light-white",
    name: "Logistics",
    description: [
      "Adaptation of a logistics application from desktop to web application.",
      "As a Front-End developer, my responsibilities are to create a new UI/UX design, migrate data from the customer's desktop application to the web,",
      "and build functionalities based on customer requirements.",
    ],
    link: "",
  },
  {
    iconUrl: dksh,
    theme: "btn-back-red",
    name: "Market Expansion Services",
    description: [
      "Our mission is to design and develop an exceptional web application, that not only offers an easy-to-use interface, but also a visually appealing look and seamless user interaction.",
      "Our team is dedicated to creating a top-notch platform that will exceed your expectations.",
    ],
    link: "",
  },
  {
    iconUrl: portfolio,
    theme: "btn-back-blue",
    name: "3D Portfolio",
    description:
      "Create an exceptional 3D portfolio that boldly presents cutting-edge features, stunning images, and comprehensive information specifically tailored for employers",
    link: "https://henri280100.github.io/3D-Portfolio/",
  },
  //   {
  //     iconUrl: snapgram,
  //     theme: "btn-back-pink",
  //     name: "Chat Application",
  //     description:
  //       "Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
  //     link: "https://github.com/adrianhajdin/social_media_app",
  //   },
  //   {
  //     iconUrl: estate,
  //     theme: "btn-back-black",
  //     name: "E-Commerce web application",
  //     description:
  //       "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
  //     link: "https://github.com/adrianhajdin/projects_realestate",
  //   },
];
