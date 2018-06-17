import React, { Component } from 'react';
import { connect } from 'react-redux'

import Nav from './Nav';
import TweetList from './tweet/TweetList'
import TweetPost from './tweet/TweetPost';
import SideBar from './Sidebar';

class Page extends Component {

    componentWillMount() {
        this.props.loadData()
    }

    render() {
        return (
            <div>
                <Nav profile={this.props.profile} token={this.props.token} />
                <div className="container">
                    <SideBar profile={this.props.profile} handleUserUpdate={this.handleUserUpdate} handleLogout={this.handleLogout} token={this.props.token} />
                    <div className="col-3of5 bg-white">
                        {this.props.token && <TweetPost profile={this.props.profile} handleNewPost={this.handleNewPost} token={this.props.token} />}
                        <TweetList tweets={this.props.tweets} token={this.props.token} profile={this.props.profile} handleDeletePost={this.handleDeletePost} />
                    </div>
                </div>
            </div>
        );
    }
}

const mapState = state => ({
    profile: state.user.profile,
    token: state.user.token,
    tweets: state.tweets
})

const mapDispatch = dispatch => ({
    loadData: () => dispatch.tweets.loadData()
})

export default connect(mapState, mapDispatch)(Page);

// export default Page;
