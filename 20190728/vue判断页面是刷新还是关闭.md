对vue的生命周期理解还是不足
需求：页面关闭的时候清除localstorage
原本以为页面关闭会触发beforeDestory，然而试了下没有用
网上查了页面刷新会触发window.onload
```
window.onload = function(){
  if(!window.sessionStorage["tempFlag"]){
	//页面关闭
  }else{
    //页面刷新
    window.sessionStorage.removeItem("tempFlag");
  }
}
window.onunload = function (){
  window.sessionStorage["tempFlag"] = true;
}
window.onbeforeunload = function (){
  window.sessionStorage["tempFlag"] = true;
}
```