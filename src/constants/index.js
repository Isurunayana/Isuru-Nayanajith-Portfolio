import {
  abromart,
  backend,
  bootstrap,
  codedrops,
  corrtex,
  creator,
  css,
  fib,
  figma,
  git,
  github,
  gitlab,
  gmail,
  html,
  instagram,
  jQuery,
  javascript,
  linkedin,
  mobile,
  reactjs,
  redux,
  restro,
  tailwind,
  twitter,
  typescript,
  xdd,
  a,
  b,
  c,
  d,
  e,
  f,
  web
} from "../assets";

export const navLinks = [
  {
    id: "home",
    desktop: "",
    title: "Home",
  },
  {
    id: "work",
    desktop: "work",
    title: "Work",
  },
  {
    id: "contact",
    desktop: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Modern UI/UX Design",
    icon: web,
  },
  {
    title: "Responsive Web Design",
    icon: mobile,
  },
  {
    title: "Custom Web Design",
    icon: backend,
  },
  {
    title: "Frontend Web Development",
    icon: creator,
  },
];

const technologies = [
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Adobe XD",
    icon: xdd,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "jQuery",
    icon: jQuery,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
 
];

const experiences = [
  {
    title: "UI UX Designer  ",
    company_name: "Freelancer",
    icon: codedrops,
    iconBg: "#383E56",
    date: "2019 - Present",
    points: [
      "Designed intuitive and visually appealing user interfaces for web and mobile applications.",
      "Created wireframes, prototypes, and high-fidelity designs to enhance user experience.",
      "Collaborated with developers to ensure seamless implementation of UI designs.",
      "Conducted user research and usability testing to refine and improve designs.",
    ],
  },
  {
    title: "UI UX Designer",
    company_name: "BOC Head Office",
    icon: codedrops,
    iconBg: "#383E56",
    date: "May 2024 - Oct 2024",
    points: [
      "Developed modern and responsive UI designs for internal banking systems.",
      "Improved user workflows by enhancing interface layouts and usability.",
      "Worked closely with stakeholders to align designs with business goals.",
      "Contributed to the redesign of key banking applications for better accessibility and user engagement.",
    ],
  },
];

const socials = [
  {
    image: linkedin,
    link: "https://www.linkedin.com/in/isuru-nayanajith-8b695a250/"
  },
  {
    image: github,
    link: "https://github.com/Isurunayana"
  },

  {
    image: instagram,
    link: "https://www.instagram.com/isuru_izyy?igsh=Njd6YWZsNmwweDJp"
  },
  {
    image: gmail,
    link: "mailto:isurunayanajith50@gmail.com"
  }
]

const projects = [
  {
    name: "Visitor Management Website",
    description:
      "A digital visitor tracking system for secure and efficient check-ins at institutions.",
    tags: [
      {
        name: "figma",
        color: "blue-text-gradient",
      },
     
    ],
    image: a,
   
  },
  {
    name: "Ecommerce Website",
    description:
      "A fully responsive online store with a seamless shopping experience and secure checkout.",
    tags: [
      {
        name: "figma",
        color: "green-text-gradient",
      },
    
    ],
    image: b,
  
  },
  {
    name: "Financial Mobile App",
    description:
      "A mobile solution for managing finances, tracking expenses, and budgeting effectively.",
    tags: [
      {
        name: "figma",
        color: "orange-text-gradient",
      },
    
    ],
    image: c,
   
  },
  {
    name: "Financial Mobile App",
    description:
      " A user-friendly app for real-time financial insights and transaction management.",
    tags: [
      {
        name: "figma",
        color: "pink-text-gradient",
      },
    ],
    image: d,
    
  },

  {
    name: "Financial Dashboard ",
    description:
      "A data-driven dashboard providing financial analytics and performance tracking.",
    tags: [
      {
        name: "figma",
        color: "orange-text-gradient",
      },
    ],
    image: e,
    
  },

  {
    name: "Finance Security Application",
    description:
      "A secure platform ensuring safe financial transactions with encryption and fraud detection.",
    tags: [
      {
        name: "figma",
        color: "blue-text-gradient",
      },
    ],
    image: f,
    
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export { services, technologies, experiences,testimonials, projects, socials };
