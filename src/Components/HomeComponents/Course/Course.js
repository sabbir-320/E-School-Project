import React from 'react';
import CourseInfo from './CourseInfo';

const Course = () => {
    const courseData = [
        {
            img: "photos/morder-psyc.png",
            title: "Modern Psychology",
            article: "Designation",
            date: "Start 20 April 2021",
            seat: "60 seats"

        }, {
            img: "photos/morderpsychology.png",
            title: "Modern Psychology",
            article: "Designation",
            date: "Start 20 May 2021",
            seat: "30 seats"

        }, {
            img: "photos/morderpychons.png",
            title: "Modern Psychology",
            article: "Designation",
            date: "Start 20 June 2021",
            seat: "20 seats"

        },
    ]
    return (
        <div className="container mt-5">
            <h1 className="text-center">Online Courses</h1>
            <div className="row">
                {
                    courseData.map(x => <CourseInfo info={x}></CourseInfo>)
                }
            </div>
        </div>
    );
};

export default Course;