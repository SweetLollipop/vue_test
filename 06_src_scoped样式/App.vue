<template>
    <div>
        <h1 class="title">你好啊</h1>
        <School/>
        <hr>
        <Student/>
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
                
            }
        },
        components:{
            School,
            Student,
        },
        methods:{
           
        }
    }
</script>

<style scoped>
    .title{
        color:red;
    }
</style>