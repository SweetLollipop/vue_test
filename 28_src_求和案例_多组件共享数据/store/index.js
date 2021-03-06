// 该文件用于创建Vuex中最为核心的store

import Vuex from 'vuex' //引入Vuex
import Vue from 'vue' //引入Vue

Vue.use(Vuex) //令Vue使用Vuex插件

//准备actions-用于响应组件中的动作
//context相当于miniStore
const actions = {
    /* //内部没有什么业务逻辑可省略,让Count直接提交commit到mutations
    add(context,value){
        // console.log("action中的add被调用了",context,value)
        context.commit('ADD',value)
    },
    minus(context,value){
        context.commit('MINUS',value)
    }, */
    addOdd(context,value){
        if(context.state.sum % 2){
            context.commit('ADD',value)
        }
    },
    addWait(context,value){
        setTimeout(()=>{
            context.commit('ADD',value)
        },500)
    }
}
//准备mutations-用于操作数据（state）
const mutations = {
    ADD(state,value){
        // console.log('mutations中的ADD被调用了',state,value)
        state.sum += value
    },
    MINUS(state,value){
        state.sum -= value
    },
    ADD_PERSON(state,value){
        state.personList.unshift(value)
    }
}
//准备state-用于存储数据）
const state = {
    sum:0, //当前的和
    school:'尚硅谷',
    subject:'前端',
    personList:[
        {id:'001',name:'张三'}
    ]
}
//准备getters-用于将state中的数据进行加工
const getters = {
    bigSum(state){
        return state.sum*10
    }
}
// 创建并暴露store
export default new Vuex.Store({
    actions:actions,
    mutations:mutations,
    state:state,
    getters:getters,
})