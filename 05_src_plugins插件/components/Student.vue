<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>学生名称:{{name}}</h2>
        <h2>学生性别:{{sex}}</h2>
        <input type="text" v-fbind:value="name">
    </div>
</template>

<script>
    // 组件交互相关的代码（数据、方法等等）
    export default{
        name:'Student',
        data(){
            return{
                name:'张三',
                sex:'男',
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