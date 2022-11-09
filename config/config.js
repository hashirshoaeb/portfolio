
import profile from './profile.jpg';
import dormguide1 from './dormguide1.png';
import dormguide2 from './dormguide2.png';
import dormguide3 from './dormguide3.png';
import dormguide4 from './dormguide4.png';
import dormguide5 from './dormguide5.png';
import dormguide6 from './dormguide6.png';

import { faAppStore, faGithub, faGooglePlay, faChrome } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	name: "Wesley",
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
	title: "Hey, I'm Wesley",
	description: "A Computer Science senior at Georgia Institute of Technology",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "https://drive.google.com/file/d/1fmZelIvGI2SS8oAYQYTAXd44vl2vjPdy/view?usp=sharing",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "Who I am",
	description: [
		"I am a senior at Georgia Institute of Technology graduating Fall 2022 with a degree in Computer Science with specialties in people and information networks. I have been heavily investing my time learning new skills in front end development these past two years",
		"I have worked hard this past year on three major projects: HipHop2020, dormguide, and MusicEditor",
		"The tech industry is quickly evolving which is why I am proud to have spent years developing skills in Java, algorithms, data structures, and design that have allowed me to bring that knowledge to every team I am a part of. I believe in the power of open-source and collaboration as the only way to beat the ever increasing complexity of development is with help. I love the challenge of learning new skills so I welcome the opportunity to visit an unfamiliar tech stack.",
	],
}

export const work = {
	title: "What I do",
	cards: [
		{
			title: "Mobile App Development",
			description: "I create pixel perfect iOS and Android apps using React Native.",
			icons: null,
		},
		{
			title: "Web Development",
			description: "I have lead an institute funded team since 2021 in replacing outdated interfaces.",
			icons: null,
		},
		{
			title: "Java Development",
			description: "I have been using Java for school and work for over 6 years.",
			icons: null,
		}

	],
}

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "Working Dogs Endurance",
			description: "Collaboration between Georgia Institute of Technology and University of Pennsylvania measuring working dogs endurance levels with heart rate deflection point algorithms.",
			icons: [
			]
		},
		{
			title: "Dungeon Crawler",
			description: "A JavaFX dungeon crawler game. Featuring randomly generated levels, potions, items, and weapons.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/WDaven/dungeon-game",
				},
			]
		},
		{
			title: "Hiphop2020",
			description: "Virtual reality HipHop pedagogical archive. Headed by Dr. Jocelyn Wilson as a part of FourFourBeatProject. ",
			icons: [
				{
					icon: faChrome,
					link: "https://www.fourfourbeatproject.org/",
				},
			],
		},
		{
			title: "dormguide",
			description: "A react native app allowing Georgia Tech students to find the best dorms on campus.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/WDaven/public-dormguide",
				},
				{
					icon: faAppStore,
					link: "https://apps.apple.com/us/app/dormguide/id6443801396",
				},
				{
					icon: faGooglePlay,
					link: "https://play.google.com/store/apps/details?id=dorm.finder&hl=en_US&gl=US",
				},
			],
			images: [
				dormguide1.src,
				dormguide2.src,
				dormguide3.src,
				dormguide4.src,
				dormguide5.src,
				dormguide6.src,
			],
		},
	],
}

export const contact = {
	title: "Get in touch",
	description: "Please do not hesitate to reach out directly by email at daven.wesley@gmail.com.",
	buttons: [
		{
			title: "Email Me",
			link: "mailto:daven.wesley@gmail.com",
			isPrimary: true,
		},
	]
}

// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "Wesley Davenport | Computer Science | React Native | Java developer",
	description: "I create mobile apps, websites, and Java applications. I graduated from Georgia Institute of Technology (GT) in 2022 with a degree in Computer Science.",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "@Wesley Davenport",
	description: "Software Developer | React Native | Java | React.js",
	cards: [
		{
			title: "My website",
			link: "https://wesleydavenport.dev/",
		},
		{
			title: "dormguide",
			link: "https://apps.apple.com/us/app/dormguide/id6443801396",
		},
		{
			title: "My GitHub",
			link: "https://github.com/WDaven/",
		},
		{
			title: "My LinkedIn",
			link: "https://www.linkedin.com/in/wesley-davenport-94768a149/",
		},
	]
}