```
/**
 * @param base64Codes
 *            图片的base64编码
 */
function sumitImageFile(base64Codes){
    var formData = new FormData(); //这里连带form里的其他参数也一起提交了,如果不需要提交其他参数可以直接FormData无参数的构造函数
     var url = "上传url";
    //convertBase64UrlToBlob函数是将base64编码转换为Blob
    formData.append("imageName",convertBase64UrlToBlob(base64Codes));  //append函数的第一个参数是后台获取数据的参数名,和html标签的input的name属性功能相同
     
    //ajax 提交form
    if(window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else if(window.ActiveXObject) {
        xmlhttp = new ActiveXObject();
    }

    xmlhttp.open("POST", url, true);
    xmlhttp.send(formData);
    xmlhttp.onload = function(e) {
        if(this.status == 200) {
            var obj = eval("(" + this.responseText + ")");
            var re = obj["return"];
           
        }
    };
}


/**
 * 将以base64的图片url数据转换为Blob
 * @param urlData
 *            用url方式表示的base64图片数据
 */

function convertBase64UrlToBlob(urlData){
    var bytes=window.atob(urlData.split(',')[1]);        //去掉url的头，并转换为byte
    //处理异常,将ascii码小于0的转换为大于0
    var ab = new ArrayBuffer(bytes.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < bytes.length; i++) {
        ia[i] = bytes.charCodeAt(i);
    }
    return new Blob( [ab] , {type : 'image/png'});
}
```