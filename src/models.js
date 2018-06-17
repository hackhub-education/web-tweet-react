import { baseUrl } from './config'
import axios from 'axios'

export const user = {
    state: {
        profile: {}
    }, // initial state
    reducers: {
        // handle state changes with pure functions
        update(state, user) {
            return { ...state, ...user }
        },
        logout(state) {
            delete state.token
            return { ...state }
        }
    },
    effects: {
        async updateProfile(user) {
            axios.put(baseUrl + '/profile/' + user.profile._id, user.profile, {
                headers: {
                    Authorization: 'Bearer ' + user.token
                }
            }).then(res => {
                this.update({ profile: res.data.profile })
                user.history.push('/profile')
            })
        }
    }
}

export const tweets = {
    state: [], // initial state
    reducers: {
        // handle state changes with pure functions
        add(state, tweet) {
            return [...state, tweet]
        },
        remove(state, id) {
            return state.filter(tweet => tweet._id !== id);
        },
        feed(state, tweets) {
            return tweets
        }
    },
    effects: {
        async loadData() {
            let res = await fetch(baseUrl + '/tweet')
            let data = await res.json()
            this.feed(data.tweets)
        },
        async postData(newTweet) {

            axios.post(baseUrl + '/tweet', { content: newTweet.content }, {
                headers: {
                    Authorization: 'Bearer ' + newTweet.token
                }
            }).then(res => {
                this.add(res.data.tweet)
            })            
        }
    }
}