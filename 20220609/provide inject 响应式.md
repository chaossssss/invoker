基本类型 需要转成函数

// 父组件:
{
  provide() {
    return {
      reactiveMsg: () => this.msg
    }
  },
}

// 子组件:
{
  inject: ['reactiveMsg'],

  computed: {
    computedProperty() {
      return this.reactiveMsg()
    }
  },
  watch: {
    computedProperty() {
        console.log('数据改变')
    }
  }
}


如果是object 可以直接用
<template>
    <div class="menu">
        <label>父组件输入框：</label>
        <input v-model="level.name" @change="levelChange(level.name)"/>
        <!-- 子组件 -->
        <my-list></my-list>
    </div>
</template>
 
<script>
import MyList from '@/pages/user/children/MyList'
 
export default {
    components:{MyList},
 
    provide(){
        return {
            userLevel:this.level,
        } 
    },
 
    data(){
        return{
            level:{name:"初始化"},
        }  
    },
 
    methods:{
        levelChange(val){
            this.userLevel = this.level;
            console.log(this.userLevel )//可以打印出对象属性name值改变了
        }
    }
}
</script>



<template>
    <div class="my-list"> 
        <p>子组件接收数据：{{userLevel.name}}</p>
        <label>父组件输入框:</label><input type="text"  v-model="userLevel.name">
    </div>
</template>
 
<script>
export default {
    // inject:['userLevel'],
    inject:{
        userLevel:{
            default:()=>{}
        },
    },
 
    data(){
        return{
        }
    } 
}
</script>