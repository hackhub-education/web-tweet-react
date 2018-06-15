import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { baseUrl } from '../../config'

class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)     
        this.handleLogin = this.handleLogin.bind(this)
    }

    handleUsernameChange(e) {
        this.setState({
            username: e.target.value
        })
    }

    handlePasswordChange(e) {
        this.setState({
            password: e.target.value
        })
    }

    handleLogin() {
        let that = this
        axios.post(baseUrl + '/auth/login', this.state)
            .then(res => {
                res.data.token && that.props.handleTokenUpdate(res.data.token)
            })
    }

    render() {
        return (
            <div className="col-2of5 bg-white profile user-auth">            
                <h3>Log in to Web Tweet</h3>
                <form id="login-form">
                    <input className="input-auth" type="text" placeholder="Username" onChange={this.handleUsernameChange} />
                    <input className="input-auth" type="password" placeholder="Password" onChange={this.handlePasswordChange} />
                    <button className="btn-primary" type="button" onClick={this.handleLogin}>Log in</button>
                </form>
                <h6>New to Web Tweet? <Link to="/signup">Sign up Now</Link></h6>
            </div>
        );
    }
}

export default LoginForm;
