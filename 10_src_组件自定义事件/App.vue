<template>
    <div class="app">
        <h1>{{msg}},学生姓名是:{{studentName}}</h1>
        <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
        <School :getSchoolName="getSchoolName"/>

        <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第一种写法，使用@或v-on） -->
        <!-- 自定义atguigu事件:只要被绑定的组件有数据or结构变化，该事件就会被触发(.once一次性) -->
        <!-- <Student v-on:atguigu.once="getStudentName"/> -->

        <!-- 同上(一次性) -->
        <!-- <Student @atguigu="getStudentName" @demo="m1"/> -->

        <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第二种写法，使用ref和mounted()）-->
        <Student ref="student" @click.native="show"/>
    </div>
</template>

<script>
    // 引入组件
    import School from './components/School.vue'
    import Student from './components/Student.vue'
    export default {
        name:'App',
        data(){
            return{
               msg:'你好啊!', 
               studentName:'',
            }
        },
        components:{
            School,
            Student,
        },
        methods:{
           getSchoolName(schoolName){
               console.log('App收到了学校名:',schoolName)
           },
           getStudentName(studentName,...params){
               console.log('App收到了学生名:',studentName,...params)
               this.studentName = studentName
           },
           m1(){
               console.log('demo事件被触发了!')
           },
           show(){
               alert(123)
           }
        },
        mounted(){
            //student组件[绑定]自定义atguigu事件触发getStudentName方法
            this.$refs.student.$on('atguigu',this.getStudentName)

            //student组件[绑定]自定义atguigu事件触发getStudentName方法(一次性)
            // this.$refs.student.$once('atguigu',this.getStudentName)
        }
    }
</script>

<style scoped>
    .app{
        background-color: gray;
        padding: 5px;
    }
</style>