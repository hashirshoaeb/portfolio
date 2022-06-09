
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	name: "David",
	links: [
		{
			title: "Sobre mi",
			link: "#about",
		},
		{
			title: "Proyectos",
			link: "#projects",
		},
		{
			title: "Links",
			link: "/links",
		},
	],
}
export const intro = {
	title: [
		"David",
		" Bautista "
	],
	description: [
		"Economista - Universidad Santo Tomas - Bogota.D.C, Colombia."
	],

	image: profile.src,
	buttons: [
		{
			title: "Mis Redes y Plataformas",
			link: "/links",
			isPrimary: false,
		},
		{
			title: "Currículum",
			link: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "¿Quien Soy?",
	description: [
		"Soy un economista de la Universidad Santo Tomas, interesado por la ciencia de datos especialmente en los procesos de análisis e interpretación de datos. Así mismo considero que mi conocimiento y formación académica construida como economista me permite la implementación del componente de análisis crítico más allá del simple manejo de datos.",
		"Al mismo tiempo que realizaba mi formación profesional como economista me interese por el mundo de los lenguajes de programación, estos me han permitido combinar mi pasión por la economía y el análisis de datos. Actualmente los lenguajes de programación que mas uso orientados a la ciencia y análisis de datos son Python y R."
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
	title: "Proyectos",
	cards: [
		{
			title: "Geihdanepy",
			description: "Un módulo de Python código abierto creado con el fin de que las personas puedan acceder de forma más ágil a la información de la Gran Encuesta Integrada De Hogares del DANE en Colombia.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/BautistaDavid/geihdanepy",
				},
			]
		},
		{
			title: "Labour Economics Web App",
			description: "Una aplicación web que presenta modelos de Machine Learning que buscan predecir la probabilidad de que una persona este empleada en el contexto colombiano, esto usando datos de la Gran Encuesta Integrada De Hogares.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/BautistaDavid/MLxLabour_Economics",
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



// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "David Bautista | Economista",
	description: "I create mobile apps and static websites. I graduated from National University of Sciences and Technology (NUST) in 2020 with a degree in Computer Engineering.",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "David Felipe Bautista",
	description: "Economista",
	cards: [
		{
			title: "GitHub",
			link: "https://github.com/BautistaDavid/",
		},
		{
			title: "Twitter",
			link: "https://twitter.com/PipeBau_",
		},
		{
			title: "LinkedIn",
			link: "https://starbook.dev/",
		},
		{
			title: "Mi Blog ",
			link: "https://github.com/BautistaDavid/",
		},
		{
			title: "My LinkedIn",
			link: "https://www.linkedin.com/in/hashirshoaeb/",
		},
	]
}