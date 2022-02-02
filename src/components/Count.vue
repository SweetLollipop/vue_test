<template>
    <div>
        <h1>当前求和为:{{sum}}</h1>
        <h1>当前求和乘以10为:{{bigSum}}</h1>
        <h3>我在{{school}},学习{{subject}}</h3>
        <h3 style="color:red">下方Person组件中的总人数是:{{personList.length}}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <!-- <button @click="ADD(n)">+</button>
        <button @click="MINUS(n)">-</button> -->
        <button @click="incrementOdd(n)">当前求和为奇数再加</button>
        <button @click="incrementWait(n)">等一等再加</button>
        <!-- <button @click="addOdd(n)">当前求和为奇数再加</button>
        <button @click="addWait(n)">等一等再加</button> -->
    </div>
</template>

<script>
import { mapState,mapGetters,mapActions,mapMutations } from 'vuex'
export default {
    name:'Count',
    data(){
        return{
            n:1, //用户选择的数字
        }
    },
    computed:{
        //借助mapState生成计算属性,从state中读取数据。（对象写法）
        // ...mapState({sum:'sum',school:'school',subject:'subject'}),
        
        //借助mapState生成计算属性,从state中读取数据。（数组写法）
        // ...mapState(['sum','school','subject','personList']),
        ...mapState('countOptions',['sum','school','subject']),
        ...mapState('personOptions',['personList']),

        /* ********************************** */
        /* bigSum(){
            return this.$store.getters.bigSum
        }, */
        //借助mapGetters生成计算属性,从getters中读取数据。（对象写法）
        // ...mapGetters({bigSum:'bigSum'})

        //借助mapGetters生成计算属性,从getters中读取数据。（数组写法）
        ...mapGetters('countOptions',['bigSum'])
    },
    methods:{
        //程序员亲自写方法increment\decrement
        /* increment(){
            this.$store.commit('ADD',this.n)  
        },
        decrement(){
            this.$store.commit('MINUS',this.n)
        }, */

        //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations,单模板中的increment方法必须加形参n(对象写法)
        // ...mapMutations({increment:'ADD',decrement:'MINUS'}),
        ...mapMutations('countOptions',{increment:'ADD',decrement:'MINUS'}),

        //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations,单模板中的increment方法必须加形参n(数组写法)
        // ...mapMutations(['ADD','MINUS']),

        /* ************************************ */
        /* incrementOdd(){
            this.$store.dispatch('addOdd',this.n)
        },
        incrementWait(){
            this.$store.dispatch('addWait',this.n)
        }, */

        //借助mapActions生成对应的方法，方法中会调用dispatch去联系actions,单模板中的incrementOdd方法必须加形参n(对象写法)
        // ...mapActions({incrementOdd:'addOdd',incrementWait:'addWait'}),
        ...mapActions('countOptions',{incrementOdd:'addOdd',incrementWait:'addWait'}),

        //借助mapActions生成对应的方法，方法中会调用dispatch去联系actions,单模板中的incrementOdd方法必须加形参n(数组写法)
        // ...mapActions(['addOdd','addWait']),

    },
    mounted(){
        const x = mapState({sum:'sum',school:'school',subject:'subject'})
        // console.log(x)
    }
}
</script>

<style lang="css">
    button{
        margin-left: 5px;
    }
</style>