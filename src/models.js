import { baseUrl } from './config'

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
        }
    }
}