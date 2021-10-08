方法一
<img class=avator' :src="data.picture" :onerror="defaultImg">

data(){
   return {
       defaultImg: 'this.src="' + require('../../assets/images/moren.png') + '"'
   }
}

方法二
< img src=“123” @error=“defImg()” />
defaultImg: require("./img/defPic.png")
defImg(){
  let img = event.srcElement;
  img.src = this.defaultImg;
  img.onerror = null; //防止闪图
}