import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <nav className="nav-bar">
                <div className="container nav-container">
                    <ul>
                        <li><a href="index.html"><img className="logo" src={this.props.logo} alt="webdxd" /></a></li>
                        <li><a href="index.html">Home</a></li>
                    </ul>
                    <div>
                        <a href="profile.html"><img className="avatar-sm" src={this.props.avatar} alt="avatar" /></a>
                        {/* Remember to close image tag */}
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;
