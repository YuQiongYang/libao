import http from '../../client-utils/httpclient.js'

const state = {
    id:'',
    dataset:[],
    params:{type:'synthesize'}
}

const mutations = {
    changeDataset(state){
        http.getCt('restaurant',state.params).then((res) => {
            state.dataset = res.data
        })
    }
}
const actions = {
    changeDataset(content){
        content.commit('changeDataset');
    }
}
export default {
    state,
    mutations,
    actions
}
