import React from 'react';
import './Service.css';
const Service = ({details}) => {
    return (
        <div className="col-md-4 col-sm-6">
            <div className="single-service text-center">
                <img src={details.img} alt=""/>
                <h3>{details.title}</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
    );
};

export default Service;