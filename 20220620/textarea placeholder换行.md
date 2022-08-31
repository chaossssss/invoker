[placeholder中 文字添加换行方法](https://blog.csdn.net/zeroyulong/article/details/80339412)


普通html
<textarea id="textarea" maxlength="100" placeholder="凭借传奇美味&#13;&#10;让时光充满回味"  ></textarea>

vue


<textarea :placeholder="placeHolder" ></textarea>
 
// data中
placeHolder: '凭借传奇美味\n让时光充满回味'
 
// 或
placeHolder: `
凭借传奇美味
让时光充满回味
