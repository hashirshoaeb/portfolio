import React from 'react';

export const Intro = ({ title, description, image, buttons }) => {
	return (
		<div className="bg-secondary py-5 px-5">
			<div className="container">
				<div className=" row align-items-center">
					<div className="col-sm-6">
						<h1 className="text-primary fw-bold display-3">{title}</h1>
						<p>{description}</p>
						<div className="text-center">
							{buttons.map((value, index) => (
								(value.isPrimary) ?
									<a key={index} class="btn btn-primary my-1 mx-3" href={value.link}>{value.title}</a>
									:
									<a key={index} class="btn btn-outline-primary my-1 mx-3" href={value.link}>{value.title}</a>
							))}
						</div>
					</div>
					<div className="col-sm-6 text-center">
						<img className="img-fluid my-3 card-image" width="250" src={image} alt="profile of hashirshoaeb" />
					</div>
				</div>
			</div>
		</div>
	);
}

export const About = ({ title, description }) => {
	return (
		<div id="about" className="bg-white py-5 px-5">
			<div className="container">
				<h1 className="text-primary fw-bold">{title}</h1>
				<div className="px-sm-5">
					{description.map((value, index) => (
						<p key={index} >{value}</p>
					))}
				</div>
			</div>
		</div>
	);
}