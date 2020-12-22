import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
  } from "react-router-dom";
import { NavLink } from 'react-router-dom'
import PlaceOrder from '../PlaceOrder/PlaceOrder';
import Review from '../Review/Review';
import ServiceList from '../ServiceList/ServiceList';
import logo from '../../../images/logos/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faTaxi, faCommentDots } from '@fortawesome/free-solid-svg-icons'
import './Admin.css';
const Admin = () => {
    const history = useHistory();
    if(window.location.pathname === "/admin"){
        history.push("/admin/order");
    }
    return (
        <Router>
                <div className="container dashboard-area">
                    <div className="row">
                        <div className="col-md-2 col-sm-6 sidebar-menu">
                            <Link onClick={() => history.push("/")} to="/"><img src={logo} alt=""/></Link>
                            <ul>
                                <li><NavLink to="/admin/order" activeClassName="selected"><FontAwesomeIcon icon={faShoppingCart} />Order</NavLink></li>
                                <li><NavLink to="/admin/service"><FontAwesomeIcon icon={faTaxi} />Service List</NavLink></li>
                                <li><NavLink to="/admin/review"><FontAwesomeIcon icon={faCommentDots} />Review</NavLink></li>
                            </ul>
                        </div>
                        <div className="offset-md-1 col-sm-12 col-md-9">
                            <Route path="/admin/order">
                                <PlaceOrder></PlaceOrder>
                            </Route>
                            <Route path="/admin/service">
                                <ServiceList></ServiceList>
                            </Route>
                            <Route path="/admin/review">
                                <Review></Review>
                            </Route>
                        </div>
                    </div>
                </div>
        </Router>
    );
};

export default Admin;