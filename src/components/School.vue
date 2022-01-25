<template>
    <!-- 组件的结构 -->
    <div class="school">
        <h2>学校名称:{{schoolName}}</h2>
        <h2>学校地址:{{address}}</h2>
        <button @click="sendSchoolName">把学校名传给App</button>
    </div>
</template>

<script>
    // 组件交互相关的代码（数据、方法等等）
    export default{
        name:'School',
        props:['getSchoolName'],
        data(){
            return{
                schoolName:'尚硅谷',
                address:'北京',
            }
        },
        methods:{
            sendSchoolName(){
                this.getSchoolName(this.schoolName)
            }
        }
    }
</script>

<style scoped>
    /* 组件的样式 */
    .school{
        background-color: skyblue;
        padding: 5px;
    }
</style>