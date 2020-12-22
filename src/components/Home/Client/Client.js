import React from 'react';
import './Client.css';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airbnb from '../../../images/logos/airbnb.png';
const Client = () => {
    return (
        <div className="row client-area">
            <div className="col-md-2 col-sm-4 col-6 offset-md-1">
                <img src={slack} alt=""/>
            </div>
            <div className="col-md-2 col-sm-4 col-6">
                <img src={google} alt=""/>
            </div>
            <div className="col-md-2 col-sm-4 col-6">
                <img src={uber} alt=""/>
            </div>
            <div className="col-md-2 col-sm-4 col-6">
                <img src={netflix} alt=""/>
            </div>
            <div className="col-md-2 col-sm-4 col-6">
                <img src={airbnb} alt=""/>
            </div>
        </div>
    );
};

export default Client;