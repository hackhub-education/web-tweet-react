import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class LoginForm extends Component {

    state = {
        username: '',
        password: ''
    }

    handleUsernameChange = e => {
        this.setState({username: e.target.value})
    }

    handlePasswordChange = e => {
        this.setState({password: e.target.value})
    }

    handleLogin = () => {
        this.props.loginUser(this.state)
    }

    render() {
        const { username, password } = this.state;
        // is the form valid now?
        const isFormValid =  username && password;
        return (
            <div className="profile user-auth">            
                <h3>Log in to Web Tweet</h3>
                <form id="login-form">
                    <input className="input-auth" type="text" placeholder="Username" onChange={this.handleUsernameChange} />
                    <input className="input-auth" type="password" placeholder="Password" onChange={this.handlePasswordChange} />
                    <button className="btn-primary" type="button" onClick={this.handleLogin} disabled={isFormValid ? '' : 'disabled'}>Log in</button>
                </form>
                <h6>New to Web Tweet? <Link to="/signup">Sign up Now</Link></h6>
            </div>
        );
    }
}

// export default LoginForm;

const mapDispatch = dispatch => ({
    updateUser: (user) => dispatch.user.update(user),
    loginUser: (user) => dispatch.user.loginUser(user)
})

export default connect(null, mapDispatch)(LoginForm);