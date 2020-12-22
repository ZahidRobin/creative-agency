import React from 'react';
import service1 from '../../../images/icons/service1.png';
import service2 from '../../../images/icons/service2.png';
import service3 from '../../../images/icons/service3.png';
import Service from '../Service/Service';
import './Services.css';
const services = [
    {
        img: service1,
        title: 'Web & Mobile design'
    },
    {
        img: service2,
        title: 'Graphic design'
    },
    {
        img: service3,
        title: 'Web development'
    },
]
const Services = () => {
    return (
        <section className="services-area">
            <h2 className="text-center mb-5">Provide awesome <span style={{color: '#7AB259'}}>services</span></h2>
            <div className="row">
            {
                services.map(ser => <Service details={ser}></Service>)
            }
            </div>
        </section>
    );
};

export default Services;