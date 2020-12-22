import React, { useContext, useState } from 'react';
import logo from '../../images/logos/logo.png';
import google from "../../images/logos/google1.png";
import './Login.css';
import { Link, useHistory, useLocation } from 'react-router-dom';
// import { UserContext } from '../../App';
// import { handleGoogleLogin, initializeLoginFramework } from './LoginManager';
const Login = () => {
    const [user, setUser] = useState({
        name: '',
        email: ''
    })
    // initializeLoginFramework();
    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const googleSignIn = () => {
        // handleGoogleLogin()
        // .then(res => {
        //   setLoggedInUser(res);
        //   history.replace(from);
        // })
    }

    return (
        <div className="container">
            <div className="login-section">
                <div className="row">
                    <div className="col-md-6 col-sm-10 offset-sm-1 col-12 offset-md-3">
                            <Link to="/"><img src={logo} alt=""/></Link>
                            <div className="login-area">
                                <h2>Login With</h2>
                                <Link to="/admin"><button onClick={googleSignIn} className="socialButton">
                                    <img src={google}/><span>Continue with Google</span></button></Link>
                                <p>Don't have an account? <Link to="/login">Create an account</Link></p>
                            </div>
                        </div>
                    </div>
                </div> 
        </div>
    );
};

export default Login;