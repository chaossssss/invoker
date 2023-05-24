[vue3 的基本使用](https://blog.csdn.net/luofei_create/article/details/124968048)

命名空间组件[【vue3】setup 语法糖 - 命名空间组件](https://blog.csdn.net/weixin_41897680/article/details/124683902)
可以减少引用

Teleport Teleport 是一种能够将我们组件 html 结构移动到指定位置的技术
//弹窗实现

<script setup>
import { ref,inject } from 'vue';
let isShow = ref(false)
</script>

<template>
  <div>
      <button @click="isShow = true">点我弹窗</button>
      <teleport to="body"> //定位到body
        <div class="mask" v-if="isShow">
            <div class="dialog">
                <h4>我是一个弹窗</h4>
                <h5>内容</h5>
                <h5>内容</h5>
                <h5>内容</h5>
                <button @click="isShow = false">关闭</button>
            </div>
        </div>
      </teleport>
  </div>
</template>

<style>
.dialog{
    width: 300px;
    height: 300px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: blueviolet;
    margin: 0 auto;
}
.mask{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
}
</style>
