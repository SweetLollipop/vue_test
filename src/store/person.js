//人员管理相关的配置
import axios from "axios"
import { nanoid } from "nanoid"
const personOptions = {
    namespaced:true, //开启命名空间
    //准备actions-用于响应组件中的动作
    actions:{
        addPersonWang(context,value){
            if(value.name.indexOf('王') === 0){
                context.commit('ADD_PERSON',value)
            }else{
                alert('添加的人必须姓王!')
            }
        },
        addPersonServer(context){
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response => {
                    context.commit('ADD_PERSON',{id:nanoid(),name:response.data})
                },
                error => {
                    alert(error.message)
                }
            )
        }
    },
    //准备mutations-用于操作数据（state）
    mutations:{
        ADD_PERSON(state,value){
            state.personList.unshift(value)
        }
    },
    //准备state-用于存储数据）
    state:{
        personList:[
            {id:'001',name:'张三'}
        ]
    },
    //准备getters-用于将state中的数据进行加工
    getters:{
        firstPersonName(state){
            return state.personList[0].name
        }
    },
}
export default personOptions