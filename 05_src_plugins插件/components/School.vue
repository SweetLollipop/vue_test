<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>学校名称:{{name | mySlice}}</h2>
        <h2>学校地址:{{address}}</h2>
        <button @click="test">点我测试一下hello方法</button>
    </div>
</template>

<script>
    // 组件交互相关的代码（数据、方法等等）
    export default{
        name:'School',
        data(){
            return{
                name:'尚硅谷atguigu',
                address:'北京',
            }
        },
        methods:{
            test(){
                this.hello()
            }
        }
    }
</script>

<style>
    /* 组件的样式 */
    .demo{
        background-color: gray;
    }
</style>