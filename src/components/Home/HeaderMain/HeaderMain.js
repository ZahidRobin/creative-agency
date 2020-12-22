import {Button } from 'react-bootstrap';
import React from 'react';
import frame from '../../../images/logos/Frame.png';
import './HeaderMain.css';
const HeaderMain = () => {
    return (
        <div className="row headermain-area">
            <div className="col-md-5">
                <div className="headermain-descriptiom">
                    <h1>Let's Grow Your<br/> Brain To The<br/> Next Level</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, earum eligendi. Veniam.</p>
                    <Button style={{padding: '5px 40px'}} variant="dark">Hire us</Button>
                </div>
            </div>
            <div className="col-md-6 offset-md-1">
                <img src={frame} alt=""/>
            </div>
        </div>
    );
};

export default HeaderMain;