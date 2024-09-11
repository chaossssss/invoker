[el-input校验， 只能输入数字，小数点后两位，不能小于或大于多少](https://devpress.csdn.net/viewdesign/64376a68986c660f3cf93b04.html)


在el-input写入这段代码是校验小数点后面限制两位

oninput="if(value.indexOf('.')>0){value=value.slice(0,value.indexOf('.')+3)}"