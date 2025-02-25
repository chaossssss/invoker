[关于Element-ui中 表格（Table）组件中 toggleRowSelection 方法设置默认多选项 但是不勾选的问题](https://blog.csdn.net/weixin_42293178/article/details/125502952)

问题：
Element-ui中，表格（Table）的 toggleRowSelection 方法无法默认选中的情况。

项目的业务需求
成功新建一个任务，然后点击编辑进来，把之前选中的模版复显出来（勾选中）。

操作步骤
从列表页面，点击编辑按钮跳转到编辑页面，同时请求模版列表接口和任务详情接口，把模版列表渲染到table里面，然后通过详情接口拿到这个任务选中的模版，通过this.$refs.xxx.toggleRowSelection(row, true)方法进行勾选。

出现的问题如下：
因为两个接口是并行请求的，所以会出现全选按钮状态正常，但是选中的模版没有进行勾选。尝试多次刷新，我发现有时候正常复现，有时候会如下图这种情况。

1.错误情况
2.正常情况


问题分析
查看了网上很多教程，发现好多教程都说是渲染问题，用this.$nextTick来进行解决，我试了试发现不满足需求

 this.$nextTick(() => {
  list.forEach(row => {
     this.$refs.xxx.toggleRowSelection(data.find(row, true)
   });
 })
1
2
3
4
5
不断刷新页面，我发现有时候渲染正常，有时候渲染失败，猜到应该是list接口跟详情接口同时请求导致这个问题的。然后我去翻了翻toggleRowSelection的源码，找到了渲染失败的原因。

解决方法一
export function toggleRowStatus(statusArr, row, newVal) {
  let changed = false;
  const index = statusArr.indexOf(row);
  const included = index !== -1;

  const addRow = () => {
    statusArr.push(row);
    changed = true;
  };
  const removeRow = () => {
    statusArr.splice(index, 1);
    changed = true;
  };

  if (typeof newVal === 'boolean') {
    if (newVal && !included) {
      addRow();
    } else if (!newVal && included) {
      removeRow();
    }
  } else {
    if (included) {
      removeRow();
    } else {
      addRow();
    }
  }
  return changed;
}
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
在做对比的时候使用了 const index = statusArr.indexOf(row)。
因为封装的table的数据是来自模版列表接口返回的list，而选中的模版是从详情接口里面获取的，对象的引用改变了。
所以 statusArr.indexOf(row) 找不到对象，toggleRowSelection 不会生效。

通过唯一属性从模版列表中获取到指定数据，然后使用toggleRowSelection方法改变选中状态
list--模版列表
selectData--详情接口返回选中的模版

this.$nextTick(() => {
  list.forEach(row => {
    this.$refs.xxx.toggleRowSelection(selectData.find(item => { return row.id == item.id }), true)
  });
})
1
2
3
4
5
6
7
8
解决方法二
我看源代码有个 updateSelectionByRowKey 函数，这个看起来就是通过rowkey来比较的。但是前提是有reserve selection的列。而触发这个函数的其中一个条件就是设置data。

updateSelectionByRowKey() {
  const states = this.states;
   const { selection, rowKey, data } = states;
   const selectedMap = getKeysMap(selection, rowKey);
   data.forEach(row => {
     const rowId = getRowIdentity(row, rowKey);
     const rowInfo = selectedMap[rowId];
     if (rowInfo) {
       selection[rowInfo.index] = row;
     }
   });
 }
1
2
3
4
5
6
7
8
9
10
11
12
所以我们可以先 toggleRowSelection 然后再渲染table，这样的话就能勾选上了。
也就是说先请求详情接口设置默认项 this.$refs.xxx.toggleRowSelection(data.find(row, true)，然后在回调里面请求模版列表接口渲染table。
通过看源码，发现这两种方法都能解决，同时请求两个接口导致table复选框勾选失败的问题。如果大佬们发现有更好的方法，欢迎指导指导，谢谢！