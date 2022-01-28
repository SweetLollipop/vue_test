<template>
    <div>
        <button @click="isShow=!isShow">显示/隐藏</button>
        <transition name="hello" appear>
            <h1 v-show="isShow">你好啊!</h1>
        </transition>
    </div>
</template>

<script>
    export default{
        name:'Test',
        data(){
            return{
                isShow:true
            }
        }
    }
</script>

<style scoped>
 h1{
     background-color: orange;
 }
 
 /* 进入的起点|离开的终点 */
 .hello-enter, .hello-leave-to{
     transform: translate(-100%);
 }
 /* 进入的终点|离开的起点*/
 .hello-enter-to, .hello-leave{
     transform: translate(0px);
 }
 /* 进入的过渡|离开的过渡*/
 .hello-enter-active, .hello-leave-active{
    transition: 0.5s linear;
 }
</style>