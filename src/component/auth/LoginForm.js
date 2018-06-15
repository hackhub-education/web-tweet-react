import React, { Component } from 'react';

class LoginForm extends Component {

    render() {
        return (
            <div className="col-2of5 bg-white profile user-auth">            
                <h3>Log in to Web Tweet</h3>
                <form id="login-form">
                    <input className="input-auth" type="text" placeholder="Username" id="username" />
                    <input className="input-auth" type="password" placeholder="Password" id="password" />
                    <button className="btn-primary" type="button" id="login-btn">Log in</button>
                    <h6>New to Web Tweet? <a href="signup.html">Sign up Now</a></h6>
                </form>
            </div>
        );
    }
}

export default LoginForm;
