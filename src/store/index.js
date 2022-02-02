// 该文件用于创建Vuex中最为核心的store

import Vuex from 'vuex' //引入Vuex
import Vue from 'vue' //引入Vue
import countOptions from './count'
import personOptions from './person'

Vue.use(Vuex) //令Vue使用Vuex插件

// 创建并暴露store
export default new Vuex.Store({
    modules:{
        countOptions:countOptions,
        personOptions:personOptions,
    }
})