<template>
    <!-- 组件的结构 -->
    <div class="student">
        <h2>学生名称:{{studentName}}</h2>
        <h2>学生性别:{{sex}}</h2>
        <button @click="sendStudentName">把学生名给School组件</button>
    </div>
</template>

<script>
    // 组件交互相关的代码（数据、方法等等）
    export default{
        name:'Student',
        data(){
            return{
                studentName:'张三',
                sex:'男',
            }
        },
        mounted(){
            // console.log('School',this.x)
        },
        methods:{
            sendStudentName(){
                this.$bus.$emit('hello',this.studentName)
            }
        }
    }
</script>

<style lang="less" scoped>
    /* 组件的样式 */
    .student{
        background-color: orange;
        padding: 5px;
        margin-top: 30px;
    }
</style>