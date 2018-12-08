import { getLocalUser } from './helpers/auth'

export default {
    state: {
        currentUser: getLocalUser(),
        isLoggedIn: !!getLocalUser(),
        loading: false,
        auth_errorr: null,
        customers: []
    },
    mutations: {
        login(state) {
            state.loading = true
            state.auth_errorr = null
        },
        loginSuccess(state, payload) {
            state.auth_errorr = null
            state.isLoggedIn = true
            state.loading = false
            state.currentUser = Object.assign({}, payload.user, {token: payload.access_token})

            localStorage.setItem('user', JSON.stringify(state.currentUser))
        },
        loginFailed(state, payload) {
            state.loading = false  
            state.auth_error = payload.error
        },
        logout(state){
            localStorage.removeItem('user')
            state.isLoggedIn = false
            state.currentUser = null
        }
    },
    actions: {
        login(context) {
            context.commit('login')
        }

    },
    getters: {
        isLoading(state) {
            return state.loading
        },
        isLoggedIn(state) {
            return state.isLoggedIn
        },
        currentUser(state) {
            return state.currentUser
        },
        authError(state) {
            return state.auth_errorr
        },
        customers(state) {
            return state.customers
        }

    }
};