import React from 'react';

export const Contact = ({ title, description, buttons }) => {
	return (
		<div id="contact" className="bg-white py-5 px-5">
			<div className="container">
				<h1 className="text-primary fw-bold">{title}</h1>
				<div className="px-sm-5">
					<p>{description}</p>
					<div className="">
						{buttons.map((value, index) => (
							(value.isPrimary) ?
								<a key={index} class="btn btn-primary my-1 mx-3" href={value.link}>{value.title}</a>
								:
								<a key={index} class="btn btn-outline-primary my-1 mx-3" href={value.link}>{value.title}</a>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export const Footer = () => {
	return (
		<footer className="bg-secondary text-center py-2 px-5">
			<div className="container text-muted">
				<small>&copy; 2021 <a href="https://github.com/hashirshoaeb">hashirshoaeb</a>. Open sourced with love under <a href="https://github.com/hashirshoaeb/portfolio/blob/main/LICENSE">MIT</a> License </small>
			</div>
		</footer>
	);
}