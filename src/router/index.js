// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router"
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

//创建并暴露一个路由器
const router = new VueRouter({
    routes:[
      {
        name:'concern',
        path:'/about',
        component:About,
      }, 
      {
        name:'house',
        path:'/home',
        component:Home,
        children:[
          {
            name:'jour',
            path:'news',  //子路由不加斜杠
            component:News,
          },
          {
            name:'tidings',
            path:'message',
            component:Message,
            children:[
              {
                name:'particular',
                path:'detail/:id/:title',
                component:Detail,

                //props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件。
                // props:{a:1,b:'hello'},

                //props的第二种写法，值为布尔值，若布尔值为真，就会把路由组件收到的所有params参数，以props的形式传给Detail组件
                props:true,

                //props的第三种写法，值为函数,query参数
                /* props($route){
                  return {id:$route.query.id,title:$route.query.title}
                }, */
                /* props({query}){
                  return {id:query.id,title:query.title}
                }, */
                /* props({query:{id,title}}){
                  return {id,title}
                }, */
              }
            ]
          },
        ]
      },   
    ]
})

//全局前置路由守卫-初始化的时候被调用、每次路由切换之前被调用
router.beforeEach((to,from,next)=>{
  console.log(to,from)
  if(to.path==='/home/news' || to.path==='/home/message'){
    if(localStorage.getItem('school')==='atguigu'){
      next()
    }else{
      alert('学校名不对，无权限查看!')
    }
  }else{
    next()
  }
})

export default router