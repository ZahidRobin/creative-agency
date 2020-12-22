import React from 'react';
import './Feedback.css';
const Feedback = ({feedback}) => {
    return (
        <div className="col-md-4 col-sm-6 col-12">
            <div className="single-feedback">
                <div className="feedback-title">
                    <img src={feedback.img} alt=""/>
                    <div>
                        <h3>{feedback.name}</h3>
                        <h5>{feedback.company}</h5>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, qui debitis iure id odit asperiores.</p>
            </div>
        </div>
    );
};

export default Feedback;