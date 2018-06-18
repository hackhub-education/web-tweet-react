import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            validForm: false
        }
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }

    formUpdate(updateValue) {
        let prevState = this.state
        let formContent = {
            ...prevState,
            ...updateValue
        }
        formContent.validForm = formContent.username && formContent.password
        this.setState(formContent)
    }

    handleUsernameChange(e) {
        this.formUpdate({ username: e.target.value })
    }

    handlePasswordChange(e) {
        this.formUpdate({ password: e.target.value })
    }

    handleLogin() {
        this.props.loginUser(this.state)
    }

    render() {
        return (
            <div className="col-2of5 bg-white profile user-auth">
                <h3>Log in to Web Tweet</h3>
                <input className="input-auth" type="text" placeholder="Username" onChange={this.handleUsernameChange} />
                <input className="input-auth" type="password" placeholder="Password" onChange={this.handlePasswordChange} />
                <button className="btn-primary" type="button" onClick={this.handleLogin} disabled={this.state.validForm ? '' : 'disabled'}>Log in</button>
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