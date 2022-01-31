<template>
    <div class="container">
        <Category title="游戏">
            <template scope="atguigu">
                <ul>
                    <li v-for="(g,index) in atguigu.games" :key="index">{{g}}</li>
                </ul>
            </template>
        </Category>
        <Category title="游戏">
            <!-- ES6的结构赋值scope="{games}" -->
            <template scope="{games}">
                <ol>
                    <li style="color:red" v-for="(g,index) in games" :key="index">{{g}}</li>
                </ol>
            </template>
        </Category>
        <Category title="游戏">
            <template slot-scope="{games}">
                <h4 v-for="(g,index) in games" :key="index">{{g}}</h4>
            </template>
        </Category>
    </div>
</template>

<script>
    import Category from './components/Category.vue'
    export default {
        name:'App',
        components: { Category },
    }
</script>

<style lang="css" scoped>
    .container, .foot{
        display: flex;
        justify-content: space-around; /* 主轴的对齐方式 */
    }
    video{
        width: 100%;
    }
    img{
        width: 100%;
    }
    h4{
        text-align: center;
    }
</style>