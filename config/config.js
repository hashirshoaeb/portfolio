import profile from "./profile.png";
import {
  faAppStore,
  faGithub,
  faGooglePlay,
} from "@fortawesome/free-brands-svg-icons";
import {} from "@fortawesome/free-solid-svg-icons";

export const navigation = {
  name: "Rafael Romero",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Contact",
      link: "#contact",
    },
    {
      title: "Links",
      link: "/links",
    },
  ],
};

export const work = {
  title: "What I Do",
  cards: [
    {
      title: "Web Developer | NEIU Student Media Board",
      description:
        "Developed a fully operational Express.js server to handle frontend form submissions with proper validation and error handling. Designed a NoSQL database in MongoDB for efficient CRUD operations.",
      icons: null,
    },
    {
      title: "IT Consultant | The Bakehouse Chicago",
      description:
        "Optimized inventory management, reducing waste by 15% using data analysis. Led sales strategy meetings and built Python data visualizations from Square API metrics to boost revenue by 15%.",
      icons: null,
    },
  ],
};

export const intro = {
  title: "Hey, I'm Rafael",
  description:
    "A Computer Science student passionate about building software and solving problems.",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "Resume",
      link: "https://docs.google.com/document/d/1DECWn_mN2xVfY2ukTULyCegvzugF9Bx3/edit?usp=sharing&ouid=101833502615017375700&rtpof=true&sd=true",
      isPrimary: false,
    },
  ],
};

export const about = {
  title: "Who I Am",
  description: [
    "I'm a Computer Science student at Northeastern Illinois University, minoring in Data Science. My passion lies in backend development, data analysis, and cloud computing.",
    "I have experience building REST APIs with Java (Spring Boot) and Python (Flask), designing databases (MongoDB, MySQL), and working with DevOps tools like Git and AWS. I also enjoy frontend development with React.",
    "Outside of coding, I stay active with hiking, mountain biking, and playing beach volleyball at Foster Beach every Friday. If you see me, say hi! :D",
  ],
};

export const projects = {
  title: "Projects",
  cards: [
    {
      title: "Inventory Management System",
      description:
        "An inventory tracking app for The Bakehouse Chicago, helping staff track missing items and streamline future orders. Built using Python, Flask, and Square API.",
    },
    {
      title: "Schedule Assistant API",
      description:
        "An API that automatically sends SMS notifications to Bakehouse employees with their weekly work schedule. Built with Java (Spring Boot) and Twilio.",
      icons: [
        {
          icon: faAppStore,
          link: "placeholder",
        },
      ],
    },
    {
      title: "NEIU Hack Fest 2024 - 2nd Place Winner",
      description:
        "Collaborated on a project that helps non-English speakers and seniors access rides more easily. Integrated Speak out-loud Translate API for multilingual support, enhancing accessibility. Built using React.js and JavaScript.",
    },
  ],
};

export const contact = {
  title: "Get in touch",
  description:
    "Feel free to reach out directly by email at rafael.rromero97@gmail.com.",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:rafael.rromero97@gmail.com",
      isPrimary: true,
    },
  ],
};

export const SEO = {
  title:
    "Rafael Romero | Software Developer | Java | Spring Boot | Data Science",
  description:
    "Computer Science student specializing in backend development (Spring Boot, Flask), data analysis, and cloud computing. Passionate about solving real-world problems with software.",
  image: profile.src,
};

export const links = {
  image: profile.src,
  title: "@rafaelrarr",
  description: "Software Developer | Data Analyst",
  cards: [
    {
      title: "My Website",
      link: "placeholder",
    },
    {
      title: "My LinkedIn",
      link: "https://linkedin.com/in/rafaelrr",
    },
    {
      title: "My GitHub",
      link: "https://github.com/rromero09/",
    },
  ],
};
