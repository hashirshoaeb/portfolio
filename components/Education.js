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
                            GPA={value.GPA}
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

export const Chunk = ({ title, date, degree, location, courses, GPA }) => {

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

    const rowStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
    };

    const degreeStyle = {
        // bold
        // fontWeight: "bold",
        color: "#000",
        fontSize: "1.1rem",
        // margin: "0",
    };

    const titleStyle = {
        fontSize: "2rem", // Adjust this value as needed
    };

    return (
        <div className={`card py-3 px-3 mx-sm-4 my-4 card-work ${styles.card}`}>
            <div className="card-body">
                <div style={rowStyle}>
                    <h4 className="text-primary" style={titleStyle}>{title}</h4>
                    <p className="text-dark">{date}</p>
                </div>
                <div style={rowStyle}>
                    <h5 className="text-dark" style={degreeStyle}>
                        {degree.split(", ").map((item, index) => (
                            <React.Fragment key={index}>
                                {item}
                                {index < degree.split(", ").length - 1 && <br />}
                            </React.Fragment>
                        ))}
                    </h5>
                    <p className="text-dark">{location}</p>
                </div>
                <p className="text-dark">GPA: {GPA}</p>

                {courses && (
                    <div>
                        {/* <p>Related courseworks:</p> */}
                        {courses.map((course, index) => (
                            <div key={index} style={courseBoxStyle}>
                                <p style={courseTextStyle}>{course}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
