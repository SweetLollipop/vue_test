<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h1>{{msg}}</h1>
        <h2>学生名称:{{name}}</h2>
        <h2>学生性别:{{sex}}</h2>
        <h2>学生年龄:{{studentAge}}</h2>
        <button @click="updateAge">尝试修改收到的年龄</button>
    </div>
</template>

<script>
    // 组件交互相关的代码（数据、方法等等）
    export default{
        name:'Student',
        data(){
            return{
                msg:'我是一个尚硅谷的学生',
                studentAge:this.age,
            }
        },
        // props:['name','sex','age'], // 简单接收
        //声明接收形参及类型
        /* props:{
            name:String,
            age:Number,
            sex:String,
        }, */
        //声明接收形参及类型，必要性的限制
        props:{
            name:{
                type:String,
                required:true,
            },
            age:{
                type:Number,
                default:0 //默认值
            },
            sex:{
                type:String,
                require:true,
            },
        },
        methods:{
            updateAge(){
                this.studentAge++
            }
        },
    }
</script>

<style>
    /* 组件的样式 */
    .demo{
        background-color: gray;
    }
</style>