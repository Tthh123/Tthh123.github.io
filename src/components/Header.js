import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="logo">My Portfolio</div>
            <nav>
                <ul>
                    <li><a href="#intro">About</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
