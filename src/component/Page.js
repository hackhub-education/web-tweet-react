import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';


import Nav from './Nav';
import TweetList from './tweet/TweetList'
import TweetPost from './tweet/TweetPost';
import SideBar from './Sidebar';

class Page extends Component {

    componentWillMount() {
        this.props.loadData()
    }

    render() {
        const props = this.props
        return (
            <div>
                <Nav profile={props.profile} token={props.token} />
                <div className="container">
                    <SideBar profile={props.profile} handleUserUpdate={props.updateUser} handleLogout={props.logout} token={props.token} />
                    <div className="col-3of5 bg-white">
                        {props.token && <TweetPost profile={props.profile} handleNewPost={props.addTweet} token={props.token} />}
                        <TweetList tweets={props.tweets} token={props.token} profile={props.profile} handleDeletePost={props.removeTweet} />
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
    loadData: () => dispatch.tweets.loadData(),
    updateUser: (user) => dispatch.user.update(user),
    logout: () => dispatch.user.logout(),
    addTweet: (tweet) => dispatch.tweets.add(tweet),
    removeTweet: (id) => dispatch.tweets.remove(id)
})

export default withRouter(connect(mapState, mapDispatch)(Page));

// export default Page;
