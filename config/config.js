
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay, faChrome } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	name: "Hashir",
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
	title: "Hello World, I'm Zihe Ji",
	description: "A Software Engineering Enthusiast and a CSE Student at University of Washington",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "Who I am",
	description: [
		// "I graduated from National University of Sciences and Technology (NUST) in 2020 with a degree in Computer Engineering. I kick started my professional career as a mobile application developer working remotely for a UK based startup — Lessgo.",
		// "The tech industry is ever-evolving and I love being able to grow with it, while continually solidifying the fundamentals. I opensource my code from a place of empathy - for future developers, teammates, users, and with accessibility in mind. I also love joining communities, helping and mentoring new developers, and supporting organizations to promote diversity in tech. I’m sharing my programming journey on instagram, helping people who are just getting into the space of programming.",
		// "When I’m not programming, I focus on my hobbies which are: diary writing, doodling, meeting people and growing my network.",
		"I'm an undergraduate student at University of Washington, Seattle, double majoring in Computer Science and Applied Computational and Mathematical Science. ",
		"I'm passionate about software engineering since I love to build impactful solutions that can help people and always open to new ideas and opportunities. Building many projects in the past few years, I have gained a lot of experience about software engineering and machine learning especially in Java, Python, and JavaScript.",
		"I'm enthusiastic about Researching and Teaching too. I taught CSE 413: Programming Language and Implementation in Spring 2023 and I'm currently working on a research project about Automated Testing Generation with Professor Michael Ernst.",
		"Besides programming, I love playing games and creating content on Social Medias. And I'm currently learning Unity2D and looking for building my own games."
	],
}

// export const skills = {
// 	title: "What I do",
// 	cards: [
// 		{
// 			title: "Mobile App Development",
// 			description: "I create pixel perfect iOS and Andriod apps using Flutter.",
// 			icons: null,
// 		},
// 		{
// 			title: "Web Development",
// 			description: "I create responsive static websites using Reactjs.",
// 			icons: null,
// 		}
// 	],
// }

export const work = {
	title: "What I do",
	cards: [
		{
			title: "Mobile App Development",
			description: "I create pixel perfect iOS and Andriod apps using Flutter.",
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
			title: "Idea Factory",
			description: "A web application that provides platform for people to share their project ideas and find collaborators.",
			icons: [
				{
					icon: faChrome,
					link: "https://www.ideafactoryuw.com/",
				},
				{
					icon: faGithub,
					link: "https://github.com/orgs/uwIdeaFactory/repositories",
				},
			],
			skills: ["ReactJS", "NodeJS", "MongoDB", "Google Firebase"],
		},

		{
			title: "HuskyShake",
			description: "A localtion-based app designed for the UW campus to help students communicate and find study partners, events, and more based on their location.",
			icons: [
				{
					icon: faAppStore,
					link: "https://apps.apple.com/us/app/qurantalk/id1563425149",
				},
				{
					icon: faGooglePlay,
					link: "https://play.google.com/store/apps/details?id=com.ayahemotion.quran_talk",
				},
			]
		},
		{
			title: "Portfolio",
			description: "A portfolio website template that helps you showcase your work, projects and skills as a software developer or freelancer.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/hashirshoaeb/portfolio",
				},
			]
		},
		{
			title: "Portfolio",
			description: "A portfolio website template that helps you showcase your work, projects and skills as a software developer or freelancer.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/hashirshoaeb/portfolio",
				},
			]
		},
		{
			title: "Portfolio",
			description: "A portfolio website template that helps you showcase your work, projects and skills as a software developer or freelancer.",
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
	title: "Contact",
	description: "I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
	buttons: [
		{
			title: "Work Email",
			link: "mailto:skycoder0820@gmail.com",
			isPrimary: true,
		},
		{
			title: "Academic Email",
			link: "mailto:zihej2@cs.washington.edu",
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
	title: "Hashir Shoaib | Computer Engineer | Flutter | Reactjs developer",
	description: "I create mobile apps and static websites. I graduated from National University of Sciences and Technology (NUST) in 2020 with a degree in Computer Engineering.",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "@hashirshoaeb",
	description: "Computer Engineer | Flutter | Reactjs Developer",
	cards: [
		{
			title: "My website",
			link: "https://hashirshoaeb.com/",
		},
		{
			title: "QuranTalk App",
			link: "https://www.qurantalk.app/",
		},
		{
			title: "StarBook App",
			link: "https://starbook.dev/",
		},
		{
			title: "My GitHub",
			link: "https://github.com/Kuro1Fury",
		},
		{
			title: "My LinkedIn",
			link: "https://www.linkedin.com/in/hashirshoaeb/",
		},
	]
}