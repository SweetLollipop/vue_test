<template>
    <div>
        <Student name="李四" :age="18" sex="女"/>
    </div>
</template>

<script>
    // 引入组件
    import Student from './components/Student.vue'
    export default {
        name:'App',
        data(){
            return{
                
            }
        },
        components:{
             Student,
        },
        methods:{
           
        }
    }
</script>

<style>

</style>