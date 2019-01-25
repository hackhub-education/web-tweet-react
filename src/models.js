import { baseUrl } from './config'
import axios from 'axios'
import history from './module/navigation'

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
            return { ...state, token: null }
        }
    },
    effects: {
        async updateProfile(profile, rootState) {
            const response = await axios.put(baseUrl + '/profile/' + profile._id, profile, {
                headers: {
                    Authorization: 'Bearer ' + rootState.user.token
                }
            })
            this.update({ profile: response.data.profile })
            history.push('/profile')

        },
        async loginUser(user) {
            const { data: { token, profile } } = await axios.post(baseUrl + '/auth/login', user)
            token && this.update({ token, profile })
            history.replace(profile.location && profile.bio ? '/' : '/profile/edit')
        },
        async signUp(newUser) {
            const { data: { error, token, profile } } = await axios.post(baseUrl + '/auth/signup', newUser)
            if (error) {
                console.log(error)
            } else {
                token && this.update({ token, profile })
                history.replace('/')
            }
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
            const res = await axios.get(baseUrl + '/tweet')
            this.feed(res.data.tweets)
        },
        postData(newTweet, rootState) {
            return axios.post(baseUrl + '/tweet', { content: newTweet }, {
                headers: {
                    Authorization: 'Bearer ' + rootState.user.token
                }
            }).then(res => {
                this.add(res.data.tweet)
            })
        },
        async removeData(tweetID, rootState) {

            const res = await axios.delete(baseUrl + '/tweet/' + tweetID, {
                headers: {
                    Authorization: 'Bearer ' + rootState.user.token
                }
            })
            res.data.success ? this.remove(tweetID) : console.log(res.data.error)

        }
    }
}