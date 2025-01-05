
import profile from './profile.png';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
  name: "Joseph",
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
    // {
    //   title: "Blog",
    //   link: "https://medium.com/@hashirshoaeb",
    // }
  ],
}
export const intro = {
  title: "Hey, I'm Joseph",
  description: "A transportation engineer using data and domain knowledge to improve public transit for riders and operators.",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "Resume",
      link: "https://drive.google.com/file/d/1HkIOMv1ku-ncGpFHFPbAgN7CXjBR66Vr/view?usp=drive_link",
      isPrimary: false,
    },
  ],
}

export const about = {
  title: "Who I am",
  description: [
    "I am currently pursuing a PhD at Northeastern University, advised by Prof. Haris Koutsopoulos.",
    "I have experience with implementation projects, solving technical challenges and managing teams of practitioners and developers.",
    "When I'm not thinking about transit, I am reading nonfiction, playing the guitar, or practicing salsa!"
  ],
}

export const work = {
  title: "What I do",
  cards: [
    {
      title: "Transit Data Analytics",
      description: "Evaluating service reliability from the perspective of riders and operators.",
      icons: null,
    },
    {
      title: "Transit Operations Control",
      description: "Develop control techniques to improve service reliability and save rider wait times.",
      icons: null,
    },
    {
      title: "Building Decision Tools",
      description: "End-to-end solutions for operational staff to make better service decisions.",
      icons: null
    }
  ],
}

export const projects = {
  title: "Talks",
  cards: [
    {
      title: "Transit Operations Control and AI in Practice (2023)",
      description: "Guest Lecture for Course in Behavioral Science, AI, and Urban Mobility at MIT (Prof. Jinhua Zhao).",
      icons: [
        // {
        //   icon: faGithub,
        //   link: "https://github.com/joerovar",
        // },
      ]
    },
    {
      title: "Decision Support Tool for Bus Dispatching in Chicago (2023)",
      description: "Young Member Webinar Series at TRB Transit Data Committee.",
      icons: [
      ]
    },
    {
      title: "Clustering Analysis for Understanding Bus Driver Work Preferences (2024)",
      description: "Talk at Transit Data Conference in London (UK)",
      icons: [
        // {
        //   icon: faGithub,
        //   link: "https://github.com/hashirshoaeb/portfolio",
        // },
      ]
    },
  ],
}

export const contact = {
  title: "Get in touch",
  description: "Feel free to reach out directly by email at rodriguez.josep@northeastern.edu.",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:rodriguez.josep@northeastern.edu",
      isPrimary: true,
    },
    // {
    //   title: "Schedule Meeting",
    //   link: "https://topmate.io/hashirshoaeb",
    //   isPrimary: false,
    // },
  ]
}

// SEARCH ENGINE 
export const SEO = {
  // 50 - 60 char  
  title: "Joseph Rodriguez",
  description: "I create mobile apps and static websites. I graduated from National University of Sciences and Technology (NUST) in 2020 with a degree in Computer Engineering.",
  image: profile.src,
}

export const links = {
  image: profile.src,
  title: "@joerovar",
  description: "Transit Researcher | Analyst | Developer",
  cards: [
    {
      title: "My website",
      link: "https://joerovar.github.io/",
    },
    {
      title: "My GitHub",
      link: "https://github.com/joerovar/",
    },
    {
      title: "My LinkedIn",
      link: "https://www.linkedin.com/in/josephrodrivar/",
    },
  ]
}