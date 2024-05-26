import credential from '../../api/credentials/credentials.js';
/* eslint-disable */
export default {
    state: {
        USER: '',
    },
    getters: {
        GET_CREDENTIAL: (state) => state.USER,
    },
    actions: {
        credentialPost({ commit }, payload){
            return new Promise((resolve, reject) => {
                credential.credentialPost(payload).then((response) => {
                    commit('CREDENTIAL', response.data)
                    resolve(response.data)
                }).catch((error) => {
                    reject(error)
                });
            })
        },
        credentialGet({ commit }, payload){
            return new Promise((resolve, reject) => {
                credential.credentialGet(payload).then((response) => {
                    resolve(response.data)
                    console.log(response)
                }).catch((error) => {
                    reject(error)
                });
            })
        },
    },
    mutations: {
        CREDENTIAL: (state, data) => {
            state.USER = data;
        },
    }
}
