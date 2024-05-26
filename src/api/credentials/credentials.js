import api from '../api.js';
export default {
    credentialPost(params){
        return api.post(`/${params.url}`,params)
    },
    credentialGet(params){
        return api.get(`/${params.url}`,{params})
    },
}