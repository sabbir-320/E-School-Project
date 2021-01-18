import React from 'react';
import './Course.css'

const CourseInfo = ({info}) => {
    return (
        <div className="col-md-4">
            <div className="card">
                <img className="img-fluid"src={info.img} alt=""/>
                <div className="card-body">
                    <h5> {info.title} </h5>
                    <p> {info.article} </p>
                    <button className="nav-btn">Buy Course</button>
                </div>
                <div className="card-footer footer-container">
                    <div className="row">
                        <div className="col-md-6 d-flex">
                            <img className="img-fluid"src="icon/calendar.png" alt=""/>
                            <p> {info.date} </p>
                        </div>
                        <div className="col-md-6 d-flex">
                            <img className="img-fluid" src="icon/people.png" alt=""/>
                            <p> {info.seat} </p>
                        </div>
                    </div>
                </div>
            </div>      
        </div>
    );
};

export default CourseInfo;