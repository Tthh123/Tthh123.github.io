import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
            <p>
                <a href="https://github.com/yourname" target="_blank" rel="noopener noreferrer">GitHub</a> | 
                <a href="mailto:yourname@example.com">Email</a>
            </p>
        </footer>
    );
}

export default Footer;
