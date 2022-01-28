<template>
    <div>
        <Test/>
        <Test2/>
    </div>
</template>

<script>
    // 引入组件
    import Test from './components/Test.vue'
    import Test2 from './components/Test2.vue'
    export default {
        name:'App',
        components:{Test,Test2}
    }
</script>

<style>
    
</style>