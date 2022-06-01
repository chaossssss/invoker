[js数组扁平化](https://www.cnblogs.com/yinping/p/11232361.html)

function iterTree2(arr) {
  while(arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}