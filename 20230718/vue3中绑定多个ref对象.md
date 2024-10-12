for循环中，如果给每一个元素绑定一个特定的ref值（ref="xxx"），那么就要定义N多个变量来分别接受它们，显然不现实。

1、在setup中定义一个常量xxxrefs用来接受所有for循环设置ref的元素，ref中必须要是空数组 

const uploadRefs = ref([])
2、页面中for循环中必须要用el = > {inputs[index] = el}绑定input元素的ref值（将所有的ref元素放到数组中）

:ref="el=>{uploadRefs[index]=el}"
3、JS中，通过索引获取对应的ref元素uploadRefs.value[index]

uploadRefs.value[val].xxxxx()