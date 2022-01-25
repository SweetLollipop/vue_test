<template>
    <!-- 组件的结构 -->
    <div class="student">
        <h2>学生名称:{{studentName}}</h2>
        <h2>学生性别:{{sex}}</h2>
        <button @click="sendStudentName">把学生名传给App</button>
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
        methods:{
            sendStudentName(){
                // 触发Student组件实例身上的atguigu事件
                this.$emit('atguigu',this.studentName,666,888,999)
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