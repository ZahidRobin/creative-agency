import React from 'react';
import Client from '../Client/Client';
import Feedbacks from '../Feedbacks/Feedbacks';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Works from '../Works/Works';

import './Home.css';
const Home = () => {
    return (
        <div>
            <div className="container-fluid header-area">
                <Header></Header>
            </div>
            <div className="container">
                <Client></Client>
                <Services></Services>
            </div>
            <div className="container-fluid carousel-area">
                <Works></Works>
            </div>
            <div className="container">
                <Feedbacks></Feedbacks>
            </div>
            <div className="container-fluid footer-area">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;