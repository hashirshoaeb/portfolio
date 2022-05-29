
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	name: "Rajan",
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
}
export const intro = {
	title: "Hey, I'm Rajan",
	description: "A Computer Engineer creating mobile apps.",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "Who I am",
	description: [
		"Hi, my name is Rajan Kumar. I like computers, music, dogs, books, physics, photography and traveling to discover the world. A junior at University of Delhi having my B.Tech in Information Technology and Mathematical Innovation with minor in Managment and currently looking forward to working with a start-up. I'll graduate in May 2024.",
		"The tech industry is ever-evolving and I love being able to grow with it, while continually solidifying the fundamentals. Fixing bugs on the go, creating products at a rapid fast speed, debugging the code for errors and working with a bunch of awesome people is something I am looking forward to. I also love joining communities, helping and mentoring new developers, and supporting organizations to promote diversity in tech.",
		"As an android developer, I enjoy using my obsessive attention to detail, my unequivocal love for making things, and my mission-driven work ethic to create something amazing. That's why I’m excited to make a big impact at a high growth company.",
	],
}

export const work = {
	title: "What I do",
	cards: [
		{
			title: "Mobile App Development",
			description: "I create pixel perfect Andriod apps using Java.",
			icons: null,
		},
		{
			title: "Web Development",
			description: "I create responsive static websites using Reactjs.",
			icons: null,
		}
	],
}

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "Chain Reaction Game",
			description: "A strategy game for 2 to 8 players. The objective of Chain Reaction is to take control of the board by eliminating your opponents' orbs.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/rohanbabbar04/Chain-Reaction-Game",
				},
				
			]
		},
		{
			title: "Chatters Chat",
			description: "A Open source chatting application to communicate with our loved once fastly and securely.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/rajandu/Chatter-chat",
				},
			]
		},
		{
			title: "University Management System",
			description: "A System to manage the administration of Universities and Colleges",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/hashirshoaeb/portfolio",
				},
			]
		},
	],
}

export const contact = {
	title: "Get in touch",
	description: "Coffee Chat! Please do not hesitate to schedule a meeting. Alternatively, feel free to reach out directly by email at smartrajanmuz@gmail.com.",
	buttons: [
		{
			title: "Email Me",
			link: "mailto:smartrajanmuz@gmail.com",
			isPrimary: true,
		},
		{
			title: "Schedule Meeting",
			link: "",
			isPrimary: false,
		},
	]
}

// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "Rajan Kumar | Computer Engineer | Java | App developer",
	description: "I create mobile apps and static websites. I'll graduated from Delhi University (DU) in 2024 with a degree in Information Technology and Mathematical Innovation.",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "@rajankumar",
	description: "Computer Engineer | Java | Reactjs Developer",
	cards: [
		{
			title: "My website",
			link: "https://rajandu.github.io/",
		},
		{
			title: "Instagram",
			link: "https://www.instagram.com/rajan_muz/",
		},
		{
			title: "My GitHub",
			link: "https://github.com/rajandu/",
		},
		{
			title: "My LinkedIn",
			link: "https://www.linkedin.com/in/smart-rajan/",
		},
	]
}