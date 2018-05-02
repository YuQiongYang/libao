import http from '../../client-utils/httpclient.js'

const state = {
    id:'',
    dataset:[],
    params:{type:'synthesize'}
}

const mutations = {
    changeParams(state){
        http.getCt('restaurant',state.params).then((res) => {
            state.dataset = res.data
            console.log(state.params)
            console.log(state.dataset)
        })
    }
}
const actions = {
    changeParams(content){
        content.commit('changeParams');
    }
}
export default {
    state,
    mutations,
    actions
}
