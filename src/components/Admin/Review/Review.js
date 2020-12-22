import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
const Review = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <h3 className="d-flex justify-content-between"><span>Review</span><span>Zahid Robin</span></h3>
            <div className="row">
                <div className="admin-content">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group col-md-7 col-sm-9 col-12">
                        <input type="text" className="form-control" name="name" ref={register({ required: true})} placeholder="Your name"/>
                    </div>
                    <div className="form-group col-md-7 col-sm-9 col-12">
                        <input type="email"  className="form-control" name="designation" ref={register({ required: true})}  placeholder="Company's designation name" />
                    </div>
                    <div className="form-group col-md-7 col-sm-9 col-12">
                        <textarea  className="form-control" name="description" ref={register({ required: true})} placeholder="Description"/>
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

export default Review;