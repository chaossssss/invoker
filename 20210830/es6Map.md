map 键的范围不限于字符串，各种类型的值包括对象都可以当作键

object 字符串-值
map 值-值

const map = new Map([
  ['name','张三'],
  ['title','Author']
])




const items = [
  ['name','张三'],
  ['title','Author']
]

const map = new Map()

items.forEach(
  ([key, value]) => map.set(key, value)
)



map.set(['a'], 5555)
map.get(['a'])  // undefined
['a']内存地址不一样