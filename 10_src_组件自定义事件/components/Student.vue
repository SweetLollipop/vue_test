<template>
    <!-- 组件的结构 -->
    <div class="student">
        <h2>学生名称:{{studentName}}</h2>
        <h2>学生性别:{{sex}}</h2>
        <h2>当前求和为:{{number}}</h2>
        <button @click="add">点我number++</button>
        <button @click="sendStudentName">把学生名传给App</button>
        <button @click="unbind">解绑atguigu事件</button>
        <button @click="death">销毁当前Student组件的实例对象（vc）</button>
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
                number:0,
            }
        },
        methods:{
            add(){
                console.log('add回调被调用了')
                this.number++
            },
            sendStudentName(){
                // 触发Student组件实例身上绑定的atguigu事件
                this.$emit('atguigu',this.studentName,666,888,999)
                // this.$emit('demo')
                // this.$emit('click')
            },
            unbind(){
                this.$off('atguigu')  //解绑一个自定义事件
                // this.$off(['atguigu','demo'])  //解绑多个自定义事件
                // this.$off()  //解绑所有自定义事件
            },
            death(){
                this.$destroy()  //销毁了当前Student组件的实例,销毁后所有Student实例的自定义事件全都不奏效了。
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