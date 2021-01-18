import React from 'react';
import './HeaderCom.style.css'
const Banner = () => {
    return (
        <div className="row banner-container">
            <div className="col-md-6">
                <p className="p-style">Are you ready to Learn?</p>
                <h1>Learn With fun<br />on <span>any schedule</span></h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel officiis temporibus facilis nihil explicabo cum velit quasi blanditiis tempore ipsum inventore porro, earum reiciendis quibusdam.</p>
                <button className="nav-btn">Get Started</button>
            </div>
            <div className="col-md-6">
                <img className="img-fluid" src="photos/banner-logo.png" alt="banner-logo" style={{width: "100%", height: "", marginLeft: "0 auto"}}/>
            </div>
        </div>
    );
};

export default Banner;