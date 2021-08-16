
看《JavaScript高级程序设计》，记下笔记。

function SuperType(){
	this.property = true;
}

SuperType.prototype.getSuperValue = function(){
	return this.property;
}

function SubType(){
	this.subproperty = false;
}

//继承了SuperType
SubType.prototype = new SuperType();
// var superType = new SuperType();
// SubType.prototype = superType;

SubType.prototype.getSubValue = function(){
	return this.subproperty;
}

var instance = new SubType();
console.log(instance.getSuperValue());	//true
console.log(instance.getSubValue());	//false


SubType.prototype原型对象
SubType.prototype.getSubValue原型属性
SubType原型继承了SuperType实例
调用instance.getSuperValue()经历三个搜索步骤
1.搜索实例
2.搜索SubType.prototype
3.搜索SuperType.prototype