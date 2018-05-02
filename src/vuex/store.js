import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import params from '../li-components/index/params.js'

const store = new Vuex.Store({
    modules: {
        params,
    }
})

export default store;