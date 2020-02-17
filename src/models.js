import { baseUrl } from './config'
import axios from 'axios'

export const user = {
  state: {
    profile: {},
    token: ''
  },
  reducers: {
    update(state, user) {
      return {
        ...state,
        ...user
      }
    },
    logout(state) {
      delete state.token
      return { ...state }
    }
  },
  effects: {
    async loginUser(credentials) {
      axios.post(baseUrl + '/auth/login', credentials)
      .then(res => {
        res.data.token && this.update(res.data)
      })
    },
    async signupUser(credentials) {
      axios.post(baseUrl + '/auth/signup', credentials)
      .then(res => {
        res.data.token && this.update(res.data)
      })
    },
  }
}

export const tweets = {
  state: [],
  reducers: {
    replace(state, tweets) {
      return [
        ...state,
        ...tweets
      ]
    }
  },
  effects: {
    async fetchTweets() {
      axios.get(baseUrl + '/tweet')
      .then(res => {
        this.replace(res.data.tweets)
      })
    }
    
  }
}