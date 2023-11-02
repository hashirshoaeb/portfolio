
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	name: "Eichel",
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
	title: "Hey, I'm Eichel",
	description: ["I'm studying Information Systems at Carnegie Mellon University and finished my major's curriculum in just 2.5 years with three minors: Human-Computer Interaction, Global Systems, and Politics and Public Policy. I believe in blending different fields of study because there's magic at the intersection. I've worked on projects like MTMC to help small businesses with tech, and I'll be spending a semester in D.C. in Fall 2024 to bring together my interests. I'm on track to graduate in 3.5 years and always eager to learn. Check out my journey and let's chat about how different fields can come together!",
		"But beyond the campus, my commitment to security and diplomacy is evidenced by my tenure with the ROK Defense Counterintelligence Command. Serving as a Counterintelligence Sergeant, I specialized in counterterrorism, focusing on diplomatic and public relations analysis. My role extended to trend analysis in counterintelligence and simultaneous interpretation. Moreover, as the Squad Leader of the Counterintelligence & Counterterrorism Unit, I embraced the responsibility of guiding a dedicated team.",
		"With study abroad to Shanghai as well, multiple work and project experiences, rigorous courses and student organization commitments, I aim to blend the academic rigor with real-world experience. I invite you to explore my profile, where technology, global perspectives, and policy intertwine."
	],
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "https://docs.google.com/document/d/1WegXKcHr6tQLfe0wEVPixmImnkGPYRmS2o3RjKh7NGU/edit?usp=sharing",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "Who I am",
	description: [
		"I am a junior in Carnegie Mellon University studying Bachelor of Science in Information Systems. With Double Minor in Human-Computer Interaction and Global Systems and Management, I had multiple global exposures.",
		"-",
		"-",
	],
}

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
			title: "StarBook",
			description: "A digital diary and mood tracking app that helps you in keeping track of your mood and productivity throughout the month/year.",
			icons: [
				{
					icon: faAppStore,
					link: "https://apps.apple.com/us/app/starbook-journal-ai-diary/id1552418289",
				},
				{
					icon: faGithub,
					link: "https://github.com/eichel-choi/star_book",
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
					link: "https://github.com/eichel-choi/portfolio",
				},
			]
		},
	],
}

export const contact = {
	title: "Get in touch",
	description: "Coffee Chat! Please do not hesitate to schedule a meeting. Alternatively, feel free to reach out directly by email at eichelchoi@cmu.edu.",
	buttons: [
		{
			title: "Email Me",
			link: "mailto:eichelchoi@cmu.edu",
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
	title: "Sebin (Eichel) Choi | Strategic Resource Planner | Technical Product Manager | Technical Sales Engineer",
	description: "Information Systems Junior in Carnegie Mellon University with Minor in puter Interaction, Global Systems and Management, Politics and Public Policy",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "@eichel-choi",
	description: "Strategic Resource Planner | Technical Product Manager | Technical Sales Engineer",
	cards: [
		{
			title: "My website",
			link: "https://eichel-sc.com/",
		},
		{
			title: "MediMili Demo",
			link: "https://youtu.be/QtUpV1qLMqs?si=_Y2vYyEJPl0h6i7T",
		},
		{
			title: "Handshake",
			link: "https://cmu.joinhandshake.com/stu/users/25761346",
		},
		{
			title: "My GitHub",
			link: "https://github.com/eichel-choi/",
		},
		{
			title: "My LinkedIn",
			link: "https://www.linkedin.com/in/eichel-sc/",
		},
	]
}