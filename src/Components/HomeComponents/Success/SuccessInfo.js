import React from 'react';
import './Success.css'
// style={{width: "5rem"}}
const SuccessInfo = ({ info }) => {

    return (
        <div className="col-md-3 mt-5">
            <div class="card text-center success-container">
                <img class=" img-fluid" src={info.img} alt="card"/>
                <div class="card-body">
                    <h5 class="card-title"> {info.header} </h5>
                    <p class="card-text"> {info.article} </p>
                </div>
            </div>
        </div>
    );
};

export default SuccessInfo;