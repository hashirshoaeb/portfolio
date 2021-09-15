
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
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
	title: "Hey, I'm Hashir",
	description: "I’m Computer Engineer. I create mobile apps and static websites.",
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
		"I graduated from National University of Sciences and Technology (NUST) in 2020 with a degree in Computer Engineering. I kick started my professional career as mobile application developer working remotely for a UK based startup — Lessgo.",
		"The tech industry is ever-evolving and I love being able to grow with it, while continually solidifying the fundamentals. I opensource my code from a place of empathy - for future developers, teammates, users, and with accessibility in mind. I also love joining communities, helping and mentoring new developers, and supporting organizations to promote diversity in tech. I’m sharing my programming journey on instagram, helping people who are just getting into the space of programming.",
		"When I’m not programming, I focus on my hobbies which are: diary writting, doodling, meeting people and growing my network.",
	],
}

export const work = {
	title: "What I do",
	cards: [
		{
			title: "Mobile App Development",
			description: "I create pixel perfect iOS and Andriod apps. Using Flutter.",
			icons: null,
		},
		{
			title: "Web Development",
			description: "I create responsive static websites. Using Reactjs.",
			icons: null,
		}
	],
}

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "StarBook",
			description: "A digital diary and mood tracking app that helps you in keeping track of your mood and productivity throughout the month/year.",
			icons: [
				{
					icon: faAppStore,
					link: "https://apps.apple.com/us/app/starbook-journal-ai-diary/id1552418289",
				},
				{
					icon: faGithub,
					link: "https://github.com/hashirshoaeb/star_book",
				},
			]
		},
		{
			title: "QuranTalk",
			description: "An emotional well being and mental health app. The app helps people to navigate their emotions in the light of the Quran.",
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
	],
}

export const contact = {
	title: "Get in touch",
	description: "Coffee Chat! Please do not hesitate to schedule a meeting. Alternatively, feel free to reach out directly by email at hashirshoaeb@gmail.com.",
	buttons: [
		{
			title: "Email Me",
			link: "#contact",
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
			link: "https://github.com/hashirshoaeb/",
		},
		{
			title: "My LinkedIn",
			link: "https://www.linkedin.com/in/hashirshoaeb/",
		},
	]
}