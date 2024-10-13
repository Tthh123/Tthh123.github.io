import React from 'react';
import './Introduction.css';

function Introduction() {
    return (
        <section id="intro" className="introduction">
            <h1>Hi, my name is <span className="name">Your Name</span>.</h1>
            <p>I'm an independent software developer with a passion for creating web applications.</p>
            <p>Check out my work below!</p>
        </section>
    );
}

export default Introduction;
