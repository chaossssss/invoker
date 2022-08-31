[ios和安卓嵌套h5 ios上传文件无法选择文件的问题](https://blog.csdn.net/s1012544671/article/details/123992521)

<input type="file" ref="file" @change="fileChange($event)" :accept="phone == true?'*/*':''"  style="display:none">


isPhone(){
        let ua = navigator.userAgent.toLowerCase()
        if(ua.indexOf("android") != -1){
          this.phone = true                 //true是安卓 false是ios
        }else if(ua.indexOf("iphone") != -1){
          this.phone = false
        }
}