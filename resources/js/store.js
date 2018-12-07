export default {
    state: {
        welcomeMessage: 'welcome to my vue.app'
    },
    mutations: {},
    actions: {},
    getters: {
        welcome(state) {
            return state.welcomeMessage;
        }
    }
};