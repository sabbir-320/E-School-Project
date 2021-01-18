import React from 'react';
import Banner from './Banner';
import Navbar from './Navbar';
import './HeaderCom.style.css';

const Header = () => {
    return (
        <div className="header-container">
            <div className="container">
                <Navbar></Navbar>
                <Banner></Banner>
            </div>
        </div>
    );
};

export default Header;