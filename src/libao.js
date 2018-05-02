import Vue from 'vue';

import router from './client-router/client-router'
import store from './vuex/store';

import libaoComponent from './li-components/libao/libao.vue'

//记得放在Vue中进行实例
new Vue({
    el: '#libao',
    router,
    store,
    render: h => h(libaoComponent)
})