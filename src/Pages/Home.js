import React from 'react';
import Course from '../Components/HomeComponents/Course/Course';
import Footer from '../Components/HomeComponents/Footer/Footer';
import Header from '../Components/HomeComponents/Header/Header';
import Success from '../Components/HomeComponents/Success/Success';
import Testimonial from '../Components/HomeComponents/Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Success></Success>
            <Course></Course>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;