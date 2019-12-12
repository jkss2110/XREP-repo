import React from 'react';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import Header from './common/Header';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import HomeContent from './HomeContent';

function App() {

    function getPage() {
        const route = window.location.pathname;
        if (route === '/about') {
            return <AboutPage />;
        }
        return <HomePage />;
    }
    return (
        <div className="container-fluid">
            <Header />
            {getPage()}
            <HomeContent />
        </div>
    );

}

export default App;