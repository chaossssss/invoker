[记修改ElementUI的时间控件DateTimePicker样式踩坑日记](https://blog.csdn.net/qq_42335214/article/details/112705193)

去除分钟列表

popper-class

<style lang='stylus'>
.noneMinute 
 .el-time-spinner__wrapper
   width 100% !important
 .el-scrollbar:nth-of-type(2)
   display none
 
</style>


元素生成在最外层
改全局