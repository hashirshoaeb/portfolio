import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import styles from './Chunk.module.css';

export const Experience = ({ title, chunks }) => {
    return (
        <div id="experience" className="bg-light py-5 px-5">
            <div className="container">
                <h1 className="text-primary fw-bold">Experience</h1>
                <div className="d-flex flex-row flex-wrap justify-content-center">
                    {chunks.map((value, index) => (
                        <Chunk
                            key={index}
                            company={value.company}
                            title={value.title}
                            date={value.date}
                            location={value.location}
                            description={value.description}
                            skills={value.skills}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export const Chunk = ({ title, company, date, description, location, skills }) => {

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

    const titleStyle = {
        fontSize: "2rem", // Adjust this value as needed
    };
    return (
        <div className={`card py-3 px-3 mx-sm-4 my-4 card-work ${styles.card}`}>
            <div className="card-body">

                <div style={rowStyle}>
                    <h4 className="text-primary" style={titleStyle}>{company}</h4>
                    <p className="text-dark">{date}</p>
                </div>
                <div style={rowStyle}>
                    <h5 className="text-dark">
                        {title}
                    </h5>
                    <p className="text-dark">{location}</p>
                </div>

                <div style={rowStyle}>
                    <div className="text-dark">
                        <ul>
                            {description.map((line, index) => (
                                <li key={index}>{line}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {skills && (
                    <div>
                        {skills.map((skills, index) => (
                            <div key={index} style={courseBoxStyle}>
                                <p style={courseTextStyle}>{skills}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
