import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link'
import styles from './Chunk.module.css';

export const Education = ({ title, chunks }) => {
    return (
        <div id="projects" className="bg-secondary py-5 px-5">
            <div className="container">
                <h1 className="text-primary fw-bold">Education</h1>
                <div className="d-flex flex-row flex-wrap justify-content-center">
                    {chunks.map((value, index) => (
                        <Chunk
                            key={index}
                            title={value.title}
                            date={value.date}
                            degree={value.degree}
                            location={value.location}
                            courses={value.courses}
                        // icons={value.icons} 
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

export const Chunk = ({ title, date, degree, location, courses }) => {

    const courseBoxStyle = {
        border: "1px solid #ccc",
        borderRadius: "4px",
        padding: "4px 8px",
        listStyleType: "none",
        display: "inline-block",
        whiteSpace: "normal",
        wordBreak: "break-word",
        marginBottom: "8px",
        backgroundColor: "#fff",
        marginRight: "8px",
    };

    const courseTextStyle = {
        color: "#000",
        fontSize: "0.85rem",
        margin: "0",
    };

    return (
        <div className={`card py-3 px-3 mx-sm-4 my-4 card-work ${styles.card}`}>
            <div className="card-body">
                <h4 className="text-primary">{title}</h4>
                <p className="text-dark">{date}</p>
                <p className="text-dark">{degree}</p>
                <p className="text-dark">{location}</p>
            </div>
            {courses && (
                <div>
                    <p>Related courseworks:</p>
                    {courses.map((course, index) => (
                        <div key={index} style={courseBoxStyle}>
                            <p style={courseTextStyle}>{course}</p>
                        </div>
                    ))}
                </div>
            )}
            {/* <div className="text-end" style={{ position: "absolute", bottom: "10px", right: "10px" }}>
                {icons && icons.map((value, index) => (
                    <Link key={index} href={value.link}>
                        <a target="_blank" rel="noreferrer">
                            <FontAwesomeIcon className="icon-style mx-1" icon={value.icon} size="2x" />
                        </a>
                    </Link>
                ))}
            </div> */}
        </div>
    );
};
