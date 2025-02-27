v-model可以在组件上使用，以实现双向绑定。
:prop是v-bind的快捷方式。
例如：
<BlogPost :title="post.title" />与<BlogPost v-bind:title="post.title" />完全相同



v-model只是一个快捷方式：
```
:modelValue="value"
  @update:modelValue="newValue => value = newValue"
```
而在原生组件v-model上，它只是以下内容的快捷方式：
```
:modelValue="value"
  @input="newValue => event => value = event.target.value"
```

正如你所看到的，与v-bind不同，v-model允许从子组件内部更改值。
所以如果你使用'v-model'，@update:modelValue="newValue => searchText = newValue"这一行可以被删除。