```
function changeDetSelect(key,treeData){
    var arr = []; // 在递归时操作的数组
    var returnArr = []; // 存放结果的数组
    var depth = 0; // 定义全局层级
    // 定义递归函数
    function childrenEach(childrenData, depthN) {
        for (var j = 0; j < childrenData.length; j++) {
            depth = depthN; // 将执行的层级赋值 到 全局层级
            arr[depthN] = (childrenData[j].value);
            if (childrenData[j].value == key) {
                returnArr = arr.slice(0, depthN+1); //将目前匹配的数组，截断并保存到结果数组，
                break
            } else {
                if (childrenData[j].children) {
                    depth ++;
                    childrenEach(childrenData[j].children, depth);
                }
            }
        }
        return returnArr;
    }
    return childrenEach(treeData, depth);
}
```
value 是要找的字段名
children 是子数组