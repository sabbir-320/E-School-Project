import React from 'react';

const Testimonial = () => {
    return (
        <div className="container mt-5">
            <h1 className="text-center">Testimonial</h1>
            <div className="row">
                <div className="col-md-4 d-flex justify-content-center">
                    <img className="img-fluid" src="photos/man.png" alt="" style={{ width: "120px" }} />
                </div>
                <div className="col-md-8 d-flex justify-content-center align-items-center ">
                    <p>There are many variations of passages of Lorem Ipsum available, but the
                    majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;