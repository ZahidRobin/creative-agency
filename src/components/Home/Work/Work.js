import React from 'react';
import './Work.css';
const Work = ({data}) => {
    return (
        <div className="work">
            <img src={data.img} alt=""/>
        </div>
    );
};

export default Work;