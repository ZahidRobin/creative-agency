import React from 'react';
import { Button } from 'react-bootstrap';
import './Footer.css'
const Footer = () => {
    return (
        <div style={{paddingBottom: '20px'}} className="container">
            <div style={{padding: '60px 0'}} className="row">
                <div className="col-md-5 col-sm-6 col-12">
                    <div className="contact-desc">
                        <h2>Let us handle your project, professionally.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos similique sed natus.</p>
                    </div>
                </div>
                <div className="col-md-6 offset-md-1 col-sm-6 col-12">
                    <div className="contact-form">
                    <form>
                        <div className="form-group">
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Your email address"/>
                            
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" id="company-name" placeholder="Your name/company's name"/>
                        </div>
                        <div className="form-group">
                            <textarea name="" id="" className="form-control" placeholder="Your message" cols="30" rows="10"></textarea>
                        </div>
                        <Button style={{padding: '5px 60px'}} variant="dark">Send</Button>
                    </form>
                    </div>
                </div>
            </div>
            <p className="text-center">copyright organic labs {new Date().getFullYear()}</p>
        </div>
    );
};

export default Footer;