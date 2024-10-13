import React from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <div>
            <Header />
            <Introduction />
            <Portfolio />
            <Footer />
        </div>
    );
}

export default App;
