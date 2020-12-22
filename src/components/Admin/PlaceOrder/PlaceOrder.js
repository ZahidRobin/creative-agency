import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './PlaceOrder.css';
const PlaceOrder = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <h3 className="d-flex justify-content-between"><span>Order</span><span>Zahid Robin</span></h3>
            <div className="row">
                <div className="admin-content">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group col-md-7 col-sm-9 col-12">
                        <input type="text" className="form-control" name="name" ref={register({ required: true})} placeholder="Your name/Company's name"/>
                    </div>
                    <div className="form-group col-md-7 col-sm-9 col-12">
                        <input type="email"  className="form-control" name="email" ref={register({ required: true})}  placeholder="Your email address" />
                    </div>
                    <div className="form-group col-md-7 col-sm-9 col-12">
                        <input type="text" className="form-control" name="orderType" ref={register({ required: true})} placeholder="Order type.eg: Graphic design"/>
                    </div>
                    <div className="form-group col-md-7 col-sm-9 col-12">
                        <textarea  className="form-control" name="details" ref={register({ required: true})} placeholder="Porject details"/>
                    </div>
                   <div className="form-group col-md-7 col-sm-9 col-12">
                    <div className="row">
                            <div className="form-group col-md-6 col-sm-12 col-12">
                                <input type="number" name="price" placeholder="Price" className="form-control" />
                            </div>
                            <div className="form-group col-md-6 col-sm-12 col-12">
                                <input type="file" name="projectFile" placeholder="File" className="form-control" />
                            </div>
                    </div>
                   </div>
                    <div className="form-group">
                        <Button style={{padding: '5px 60px',marginLeft:'15px'}} variant="dark">Send</Button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;