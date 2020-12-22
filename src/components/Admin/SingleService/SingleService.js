import React from 'react';
import img1 from '../../../images/icons/service1.png';
import './SingleService.css';
const SingleService = () => {
    return (
        <div className="col-md-5 col-sm-6 col-12">
            <div className="singleServices">
                <div className="singleServiceHeader d-flex justify-content-between">
                    <img src={img1} alt=""/>
                    <button className={`btn btn-default`}>Pending</button>
                </div>
                <h3>Web & Mobile services</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, numquam. Quasi, facere.</p>
            </div>
        </div>
    );
};

export default SingleService;