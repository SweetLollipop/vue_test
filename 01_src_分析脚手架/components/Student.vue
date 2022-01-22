<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>学生名称:{{studentName}}</h2>
        <h2>学生年龄:{{age}}</h2>
    </div>
</template>

<script>
    // 组件交互相关的代码（数据、方法等等）
    export default{
        name:'Student',
        data(){
            return{
                studentName:'张三',
                age:18,
            }
        },
    }
</script>

<style>
    /* 组件的样式 */
    .demo{
        background-color: orange;
    }
</style>