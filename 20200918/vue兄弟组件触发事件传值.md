组件2触发事件，调用组件1的方法

```
// 父组件
<template>
    <child1 ref="child1Container"></child1>
    <child2 @save="save"></child2>
</template>
 
<script>
    import Header from './components/child1';
    import SubRoute from './components/child2';
 
    export default {
        name: 'App',
        components: {
            child1,
            child2
        },
        methods: {
            save(){
                this.$refs.child1Container.aaa();
            }
        }
    }
 
</script>
 
// 子组件1
<template>
    <div>我是子组件11111</div>
    <div @click="aaa"></div>
</template>
 
<script>
    export default {
        name: 'App',
        methods: {
            aaa(){
                console.log('我是子组件1里面的方法");
            }
        }
    }
 
</script>
 
// 子组件2
<template>
    <div>我是子组件22222</div>
    <div @click="save"></div>
</template>
 
<script>
    export default {
        name: 'App',
        methods: {
            save(){
                this.$emit('save');
            }
        }
    }
 
</script>
```

