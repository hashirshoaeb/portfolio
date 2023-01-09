
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	name: "Rob",
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
	title: "Hi, I'm Rob",
	description: "A software engineer focused on IoT and other distributed applications.",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		// {
		// 	title: "Resume",
		// 	link: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
		// 	isPrimary: false,
		// },
	],
}

export const about = {
	title: "Who I am",
	description: [
		"I graduated from the University of Illinois at Urbana-Champaign in 1992 with a degree in Computer Science.",
	],
}

export const work = {
	title: "What I do",
	cards: [
		{
			title: "Distributed Application Development",
			description: ".",
			icons: null,
		},
		{
			title: "Platform Engineering",
			description: ".",
			icons: null,
		}
	],
}

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "Phoenix Framework-contributor",
			description: "Complete web application framework for Elixir.",
			icons: [
				{
					// banner: "/phoenix.png",
					icon: faGithub,
					link: "https://github.com/phoenixframework/phoenix",
				},
			],
		},
		// {
		// 	title: "StarBook",
		// 	description: "A digital diary and mood tracking app that helps you in keeping track of your mood and productivity throughout the month/year.",
		// 	icons: [
		// 		{
		// 			icon: faAppStore,
		// 			link: "https://apps.apple.com/us/app/starbook-journal-ai-diary/id1552418289",
		// 		},
		// 		{
		// 			icon: faGithub,
		// 			link: "https://github.com/hashirshoaeb/star_book",
		// 		},
		// 	]
		// },
		// {
		// 	title: "QuranTalk",
		// 	description: "An emotional well being and mental health app. The app helps people to navigate their emotions in the light of the Quran.",
		// 	icons: [
		// 		{
		// 			icon: faAppStore,
		// 			link: "https://apps.apple.com/us/app/qurantalk/id1563425149",
		// 		},
		// 		{
		// 			icon: faGooglePlay,
		// 			link: "https://play.google.com/store/apps/details?id=com.ayahemotion.quran_talk",
		// 		},
		// 	]
		// },
		// {
		// 	title: "Portfolio",
		// 	description: "A portfolio website template that helps you showcase your work, projects and skills as a software developer or freelancer.",
		// 	icons: [
		// 		{
		// 			icon: faGithub,
		// 			link: "https://github.com/hashirshoaeb/portfolio",
		// 		},
		// 	]
		// },
	],
}

export const contact = {
	title: "Get in touch",
	description: "Coffee Chat! Please do not hesitate to schedule a meeting. Alternatively, feel free to reach out directly by email at mullen.rob@gmail.com.",
	buttons: [
		{
			title: "Email Me",
			link: "mailto:mullen.rob@gmail.com",
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
	title: "Rob Mullen | Software Engineer",
	// description: "I create mobile apps and static websites. I graduated from National University of Sciences and Technology (NUST) in 2020 with a degree in Computer Engineering.",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "@robmullen",
	description: "Software Engineer",
	cards: [
		{
			title: "My website",
			link: "https://rob-mullen.com/",
		},
		{
			title: "My GitHub",
			link: "https://github.com/RobMullen/",
		},
		{
			title: "My LinkedIn",
			link: "https://www.linkedin.com/in/robert-mullen/",
		},
	]
}
