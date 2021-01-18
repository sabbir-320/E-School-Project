import React from 'react';
import SuccessInfo from './SuccessInfo';

const Success = () => {
    const successData = [
        {
            img: 'icon/book.png',
            header: "1500+ Topics",
            article: "Books is your knolage"
        },
        {
            img: 'icon/Students.png',
            header: "1800+ Students",
            article: "Students is our future"
        },  {
            img: 'icon/Test.png',
            header: "9k+ Test Tokens",
            article: "Test is our exam"
        },  {
            img: 'icon/student.png',
            header: "2000+ Students",
            article: "A student is no falls"
        },
    ]
    return (
        <div className="container mt-5">
            <div className="row">
                {
                    successData.map(x => <SuccessInfo info={x}></SuccessInfo>)
                }
            </div>
        </div>
    );
};

export default Success;