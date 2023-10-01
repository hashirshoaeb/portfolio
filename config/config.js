
import profile from './profile.png';
import ideafactorylogo from './ideafactorylogo.png';
import { faGithub, faChrome, faGoogleDrive, faFile } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as FileIcon } from './file-alt-solid.svg';

export const navigation = {
	name: "Zihe",
	links: [
		{
			title: "About",
			link: "#about",
		},
		{
			title: "Education",
			link: "#education",
		},
		{
			title: "Experience",
			link: "#experience",
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
			link: "https://drive.google.com/file/d/1GB9PWAnfy3N_eL6sRN51-L_O-7mWRgoM/view?usp=sharing",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "Who I am",
	description: [
		"I'm an undergraduate student at University of Washington, Seattle, double majoring in Computer Science and Applied Computational and Mathematical Science and plan to graduate in Spring 2024. ",
		"I'm passionate about software engineering since I love to build impactful solutions that can help people and always open to new ideas and opportunities. Having undertaken numerous projects in recent years, I have acquired extensive experience in the domains of software engineering and machine learning, with a strong focus on Java, Python, JavaScript, and related frameworks and middlewares.",
		"I'm enthusiastic about Researching and Teaching too. I taught CSE 413 and CSE 341: Programming Language and Implementation in Spring 2023 and Fall 2023. Additionally, I'm currently working on a research project about Automated Testing Generation with Professor Michael Ernst in UW's PLSE lab.",
		"Besides programming, I love playing games and creating content on Social Medias. And I'm currently learning Unity2D and looking for building my own games."
	],
}


export const education = {
	title: "Education",
	chunks: [
		{
			title: "University of Washington - Seattle Campus",
			location: "Seattle, WA",
			degree: "Bachelor of Science in Computer Science, Bachelor of Science in Applied Computational and Mathematical Science",
			date: "September 2020 - June 2024",
			courses: ["Software Engineering", 'Programming Language', 'Algorithm', 'Database Systems', 'System Programming', 'Machine Learning', 'Deep Learning', 'Artificial Intelligence'],
			GPA: "3.8/4.0",
		},
	],
}

export const experience = {
	title: "Experience",
	chunks: [
		{
			title: "Software Development Engineer Intern - BackEnd",
			company: "Ant Group",
			location: "Shanghai, China",
			description: [
				"Developed and optimized critical APIs and features for high-availability applications, ensuring compliance with regulatory requirements, minimizing online banking business risk, and elevating operational efficiency",
				"Collaborated with fellow software engineers and led the frontend team to meet business and product requirements, overseeing maintenance and enhancement of critical features vital to the organization\'s objective",
				"Employed Sofaboot, asynchronous command, batch-processing frameworks, oceanbase, and message queue technologies to streamline the software development lifecycle, bolstering development speed and scalability.",
				"Acquired proficiency in end-to-end software development processes, encompassing rigorous self-testing across diverse environments, configuring gray environment switches for controlled deployments, proactive monitoring, and proactively establishing contingency plans to address potential online risks proactively."],
			date: "June 2023 - September 2023",
			skills: ["Java", "Spring Boot", "MySQL", "MyBatis", "Oceanbase", "SofaBoot", "Asynchronous Command", "Batch Processing"],
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
			skills: ["JavaScript", "ReactJS", "NodeJS", "MongoDB", "Google Firebase", "React Testing Library"],
		},
		{
			title: "Bird Classification",
			description: "A paper that performs analysis on the performance of unimodaility and multimodaility model on bird classification.",
			icons: [
				{
					icon: faGoogleDrive,
					link: "https://drive.google.com/file/d/1SzuPlqY9p--ED6__cYkYe2GyCWdSyRq1/view?usp=sharing",
				},
			],
			skills: ["Python", "PyTorch", "LaTeX", "Librosa", "AudioCLIP", "Resnet"],
		},
		{
			title: "HuskyShake",
			description: "A location-based app designed for the UW campus to help students communicate and find study partners, events, and more based on their location.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/HuskyShake/demo-repository",
				},
			],
			skills: ["JavaScript", "React Native", "Expo", "Google Firebase"],
		},
		{
			title: "Kalah AI",
			description: "An AI agent that plays Kalah game using Minimax algorithm with Alpha-Beta pruning and Heuristic function.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/Kuro1Fury/Kalah-AI",
				},
			],
			skills: ["Python", "Minimax", "Alpha-Beta Pruning"],
		},
		{
			title: "UMessage",
			description: "An application that allows users to send messages to each other with advanced recommendation algorithms and data structures.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/Kuro1Fury/UMessage",
				},
			],
			skills: ["Java", "JUnit5"]
		},
		{
			title: "HuskyMap",
			description: "A web application that allows users to search for locations and find the shortest path between them inside UW campus.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/Kuro1Fury/Husky-Map",
				},
			],
			skills: ["Java", "ReactJS", "JUnit5", "Spark"]
		},
		{
			title: "Appointment Reservation System",
			description: "A Java application that allows patient and service providers to reserve appointments and manage appointments.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/Kuro1Fury/Vaccine-Scheduler",
				},
			],
			skills: ["Java", "SQL", "Microsoft Azure"]
		},
		{
			title: "Global Temperature Change Visualization",
			description: "A simple R Shiny App that visualizes the global temperature change from different scales and perspectives.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/Kuro1Fury/Global-Temperature-Change",
				},
			],
			skills: ["R", "Shiny"]
		},
	],
}

export const contact = {
	title: "Contact & Links",
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
			isPrimary: false,
		},
		{
			title: "LinkedIn",
			link: "https://www.linkedin.com/in/zihe-ji/",
			isPrimary: false,
		},
		{
			title: "GitHub",
			link: "https://github.com/Kuro1Fury",
			isPrimary: false,
		},
		// {
		// 	title: "Schedule Meeting",
		// 	link: "",
		// 	isPrimary: false,
		// },
	]
}

// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "Zihe Ji's Portfolio",
	// description: "I create mobile apps and static websites. I graduated from National University of Sciences and Technology (NUST) in 2020 with a degree in Computer Engineering.",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "@zihej2",
	description: "Software Engineer | Student @ UW | TA @ UW | Researcher @ UW",
	cards: [
		{
			title: "My website",
			link: "https://kuro1fury.github.io/",
		},
		{
			title: "Resume",
			link: "https://drive.google.com/file/d/10uXyQMr-CkaPliQG_WsTTsFN0UnSF_Dk/view?usp=sharing",
		},
		{
			title: "My GitHub",
			link: "https://github.com/Kuro1Fury",
		},
		{
			title: "My LinkedIn",
			link: "https://www.linkedin.com/in/ziheji/",
		},
	]
}