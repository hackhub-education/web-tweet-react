import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
            <nav className="nav-bar">
                <div className="container nav-container">
                    <ul>
                        <li><Link to="/"><img className="logo" src='/img/logo.png' alt="webdxd" /></Link></li>
                        <li><Link to="/">Home</Link></li>
                    </ul>
                    <div>
                        {this.props.token ? <Link to="/profile"><img className="avatar-sm" src={this.props.profile.avatarUrl} alt={this.props.profile.username} /></Link> : ''}
                        {/* Remember to close image tag */}
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;
