//求和相关的配置
const countOptions = {
    namespaced:true, //开启命名空间
    //准备actions-用于响应组件中的动作
    actions:{
        /* //内部没有什么业务逻辑可省略,让Count直接提交commit到mutations
        add(context,value){
            // console.log("action中的add被调用了",context,value)
            context.commit('ADD',value)  //context相当于miniStore
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
    },
    //准备mutations-用于操作数据（state）
    mutations:{
        ADD(state,value){
            // console.log('mutations中的ADD被调用了',state,value)
            state.sum += value
        },
        MINUS(state,value){
            state.sum -= value
        },
    },
    //准备state-用于存储数据）
    state:{
        sum:0, //当前的和
        school:'尚硅谷',
        subject:'前端', 
    },
    //准备getters-用于将state中的数据进行加工
    getters:{
        bigSum(state){
            return state.sum*10
        }
    },
}
export default countOptions