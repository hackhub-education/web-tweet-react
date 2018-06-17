import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import axios from 'axios';
import { connect } from 'react-redux'

import { baseUrl } from '../../config'

class SignupForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            repeatPassword: '',
            validForm: false
        }
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleRepeatPasswordChange = this.handleRepeatPasswordChange.bind(this)
        this.handleSignup = this.handleSignup.bind(this)
        this.formUpdate = this.formUpdate.bind(this)
    }

    formUpdate(updateValue) {
        let prevState = this.state
        let formContent = {
            ...prevState,
            ...updateValue
        }
        formContent.validForm = formContent.username && formContent.password && formContent.password === formContent.repeatPassword
        this.setState(formContent)
    }

    handleUsernameChange(e) {
        this.formUpdate({ username: e.target.value })
    }

    handlePasswordChange(e) {
        this.formUpdate({ password: e.target.value })
    }

    handleRepeatPasswordChange(e) {
        this.formUpdate({ repeatPassword: e.target.value })
    }

    handleSignup() {
        let that = this
        axios.post(baseUrl + '/auth/signup', this.state)
            .then(res => {
                if (res.data.error) {
                    console.log(res.data.error)
                } else {
                    res.data.token && that.props.updateUser({ token: res.data.token, profile: res.data.profile })
                }
            })
    }

    render() {
        return (
            <div className="col-2of5 bg-white profile user-auth">
                <h3>Log in to Web Tweet</h3>
                <input className="input-auth" type="text" placeholder="Username" onChange={this.handleUsernameChange} />
                <input className="input-auth" type="password" placeholder="Password" onChange={this.handlePasswordChange} />
                <input className="input-auth" type="password" placeholder="Repeat password" onChange={this.handleRepeatPasswordChange} />
                <button className="btn-primary" type="button" onClick={this.handleSignup} disabled={this.state.validForm ? '' : 'disabled'}>Sign up</button>
                <h6>Have an account? <Link to="/login">Log in</Link></h6>
            </div>
        );
    }
}

const mapDispatch = dispatch => ({
    updateUser: (user) => dispatch.user.update(user)
})

export default connect(null, mapDispatch)(SignupForm);