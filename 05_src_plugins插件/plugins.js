export default {
    install(Vue,x,y,z){
        console.log('@@@install',Vue,x,y,z)

        // 全局的过滤器
        Vue.filter('mySlice',function(val){
            return val.slice(0,4)
        })

        // 定义全局指令
        Vue.directive('fbind',{
            // 指令与元素成功绑定时（一上来）
            bind(element,binding){ 
                console.log("bind",this) //此处的this是Window
                element.value = binding.value   //element指input,binding.value指绑定关系的值
            },
            // 指令所在元素被插入页面时
            inserted(element,binding){
                console.log("inserted",this) //此处的this是Window
                element.focus()
            },
            // 指令所在的模板被重新解析时
            update(element,binding){
                console.log("update",this) //此处的this是Window
                element.value = binding.value   //element指input,binding.value指绑定关系的值
            },
        })

        // 定义混入
        Vue.mixin({
            data(){
                return{
                    x:100,
                    y:200,
                }
            }
        })

        // 给Vue原型上添加一个方法(vm和vc就都能用了)
        Vue.prototype.hello = ()=>{alert('你好啊')}
    }
}