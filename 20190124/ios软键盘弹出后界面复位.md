$('input,textarea').on('blur',function(){
window.scroll(0,0);
});
$('select').on('change',function(){
window.scroll(0,0);
});
原理就是弹起键盘的时候，window.scrollY会从0变到键盘的高度（例如：200），当输入框焦点失去后让scrollY回到0就好了。