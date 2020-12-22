import React from 'react';
import SingleService from '../SingleService/SingleService';

const ServiceList = () => {
    return (
        <div>
            <h3 className="d-flex justify-content-between"><span>Service</span><span>Zahid Robin</span></h3>
                <div className="admin-content">
                <div className="row">
                    <SingleService></SingleService>
                    <SingleService></SingleService>
                </div>
            </div>
        </div>
    );
};

export default ServiceList;