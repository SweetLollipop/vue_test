// 该文件是整个项目的入口文件
import Vue from 'vue'  //引入残缺版的vue
import App from './App.vue' 
// import vueResource from 'vue-resource' //引入插件vue-resource
// import store from './store' //引入store,可省略index.js
// import VueRouter from 'vue-router'
// import router from './router'
// import ElementUI from 'element-ui';  //引入ElementUI组件库
// import 'element-ui/lib/theme-chalk/index.css';  //引入ElementUI全部样式
import { Button, Row,  DatePicker } from 'element-ui' //按需引入element-ui

// 关闭vue的生产提示
Vue.config.productionTip = false

//使用插件
// Vue.use(vueResource)
// Vue.use(VueRouter)
// Vue.use(ElementUI)
Vue.component(Button.name, Button);
Vue.component(Row.name, Row);
Vue.component(DatePicker.name, DatePicker);

/*
  关于不同版本的Vue:
    1.vue. js与vue. runtime .XXX. js的区别:
      (1).vue.js是完整版的Vue,包含:核心功能+模板解析器。
      (2).vue.runtime.xx.js是运行版的Vue,只包含:核心功能;没有模板解析器。
    2.因为vue.runtime.XX.js没有模板解析器，所以不能使用template配置项，需要使用
      render函数接收到的createElement函数去指定具体内容。
*/

// 创建Vue实例对象--vm
new Vue({
  // 将App组件放入容器中
  render: h => h(App),  //渲染，带有返回值
  // store, //配置store使得vm和vc都能附带上,store:store简写形式
  // router, //配置router
  /* beforeCreate(){
    Vue.prototype.$bus = this
  } */
}).$mount('#app')  //等价于配置el:'#app',