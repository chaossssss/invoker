```
componentA
<template>

<div  class="dv">

我是组件A

<componentB  text='ttt'  msg="yeye"></componentB>

</div>

</template>

componentB
<template>

<div  class="dv">

我是B

<span>传递给我的是{{text}}</span>

<componentC  v-bind="$attrs"></componentC>

</div>

</template>

componentC
<template>

<div  class="dv">

我是c

<span>我要爷爷的{{msg}}</span>

</div>

</template>

```