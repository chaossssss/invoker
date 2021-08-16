修改单选框边框
```
radio .wx-radio-input {
  border: 1rpx solid #ed8f35;
}
```
网上修改单选框背景颜色，实测无效
```
radio .wx-radio-input.wx-radio-input-checked{
   border: none;
   background: #f00; 
}
```
实际有用的方法
```
<radio value="{{item.name}}" checked="{{item.checked}}" color="#ed8f35" />{{item.value}}
```