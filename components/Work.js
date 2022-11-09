import {React, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';

export const Skills = ({ title, cards }) => {
	return (
		<div id="skills" className="bg-secondary py-5 px-5">
			<div className="container">
				<h1 className="text-primary fw-bold">{title}</h1>
				<div className="d-flex flex-row flex-wrap justify-content-center">
					{cards.map((value, index) => (
						<Card
							key={index}
							title={value.title}
							description={value.description}
							link={value.link} />
					))}
				</div>
			</div>
		</div>
	);
}

export const Projects = ({ title, cards }) => {
	return (
		<div id="projects" className="bg-primary py-5 px-5">
			<div className="container">
				<h1 className="text-light fw-bold">Projects</h1>
				<div className="d-flex flex-row flex-wrap justify-content-center">
					{cards.map((value, index) => (
						<Card
							key={index}
							title={value.title}
							description={value.description}
							icons={value.icons}
							images = {value.images}
						/>
					))}

				</div>
				{/* <div className="text-center">
					<button type="button" className="btn btn-outline-light">See More</button>
				</div> */}
			</div>
		</div>
	);
}

export const Card = ({ title, description, icons, images }) => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const [index, setIndex] = useState(0);
	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};
	console.log(images)
	if (typeof images !== 'undefined') {
		return (
			<div className="card py-3 px-3 mx-sm-4 my-4 card-work" style={{width: "20rem"}}>
				<h4 className="text-primary">{title}</h4>

					<img
						className="card-img-top" style ={{width:'auto', maxwidth:'100%', height:'auto', maxHeight:'250px', objectFit: 'cover', objectPosition:'50% 0%'}}
						src={images[0]}
						alt="Project image"
						onClick={() => setShow(true)}

					/>

				<Modal show={show} onHide={handleClose} style={{maxHeight:'100vh'}}>
					<Modal.Header closeButton>
						<Modal.Title>{title}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Carousel activeIndex={index} onSelect={handleSelect} >
							{images.map((value, index) => (
								<Carousel.Item key={index}>
									<img
										className="d-block w-100 rounded-4"
										src={value}
										alt="First slide"
									/>
								</Carousel.Item>
							))}
						</Carousel>

					</Modal.Body>

				</Modal>


				<p className="text-dark">{description}</p>
				<div className="text-end">
					{icons && icons.map((value, index) => (
						<Link key={index} href={value.link}>
							<a target="_blank" rel="noreferrer">
								<FontAwesomeIcon className="icon-style mx-1" icon={value.icon} size="2x"/>
							</a>
						</Link>
					))}
				</div>
			</div>
		);
	} else {
		return (
			<div className="card py-3 px-3 mx-sm-4 my-4 card-work" style={{width: "20rem"}}>
				<h4 className="text-primary">{title}</h4>
				<p className="text-dark">{description}</p>
				<div className="text-end">
					{icons && icons.map((value, index) => (
						<Link key={index} href={value.link}>
							<a target="_blank" rel="noreferrer">
								<FontAwesomeIcon className="icon-style mx-1" icon={value.icon} size="2x"/>
							</a>
						</Link>
					))}
				</div>
			</div>
		);
	}
}


