import React from 'react';
import './Feedbacks.css';
import img1 from '../../../images/customer-1.png';
import img2 from '../../../images/customer-2.png';
import img3 from '../../../images/customer-3.png';
import Feedback from '../Feedback/Feedback';
const feedbackData = [
    {
        img: img1,
        name: 'Zahid Robin',
        company: 'CEO, Branstation',
    },
    {
        img: img2,
        name: 'Md Zahid',
        company: 'CEO, QueueTech',
    },
    {
        img: img3,
        name: 'Md Robin',
        company: 'CEO, Aamra',
    },
]
const Feedbacks = () => {
    return (
        <div className="feedbacks-area">
            <h2 className="text-center">Clients <span>Feedback</span></h2>
            <div className="row mt-5">
                {
                    feedbackData.map(feedback => <Feedback feedback={feedback}></Feedback>)
                }
            </div>
        </div>
    );
};

export default Feedbacks;