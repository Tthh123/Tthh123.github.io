import React from 'react';
import './Portfolio.css';

function Portfolio() {
    const projects = [
        { name: "Project 1", description: "A React-based project.", link: "https://github.com/yourname/project1" },
        { name: "Project 2", description: "A full-stack web app.", link: "https://github.com/yourname/project2" },
    ];

    return (
        <section id="portfolio" className="portfolio">
            <h2>Portfolio</h2>
            <div className="project-list">
                {projects.map((project, index) => (
                    <div className="project" key={index}>
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Portfolio;
