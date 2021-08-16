用jszip和FileSaver.js
```
<!DOCTYPE html>
<html lang="zh-cn">  
    <head>  
        <meta charset="UTF-8"/>  
        <script type="text/javascript" src="js/jszip.min.js"></script>
        <script src="js/FileSaver.js"></script>
        <script src="js/jquery-3.3.1.min.js"></script>
    </head>  
    <body> 
        <button id="download">下载</button>
 

        <script>
        window.onload=function(){
            document.getElementById('download').onclick = function(){
                var zip = new JSZip();//*****创建实例，zip是对象实例
                var file_name = 'pic.zip';
                var array=['img/1.jpg','img/2.jpg','img/7.png'];
                var len=function(arr){
                    var l = 0;
                    for(var key in arr){
                        l++;
                    }
                    return l;
                }
                for(let i=0;i<array.length;i++){
                    //对每一个图片链接获取base64的数据，并使用回调函数处理
                    getBase64Image(array[i],function(dataURL){
                        //对获取的图片base64数据进行处理
                        var img_arr = dataURL.split(',');
                        zip.file(i.toString()+'.jpg',img_arr[1],{base64: true});//根据base64数据在压缩包中生成jpg数据
                        var ziplength = len(zip.files);
                        if(ziplength==array.length){//当所有图片都已经生成打包并保存zip
                            zip.generateAsync({type:"blob"})
                            .then(function(content) {
                                //console.log(content);
                                saveAs(content, file_name);
                            });
                        }
                    });
                    
                }
                    
                        
                
            }
        
        }
        //****传入图片链接，返回base64数据
        function getBase64Image(images,callback) {
            var img = new Image();
            var canvas = document.createElement("canvas");
            img.onload = function(){
                canvas.getContext("2d").drawImage(img,0,0);
                var dataURL=canvas.toDataURL();//使用canvas获取图片的base64数据
                
                callback?callback(dataURL):null; //调用回调函数
      
            } 
            img.src = images;
        }
        </script>
    </body>
</html>
```
[客户端将URL文件或图片通过jszip打包成zip压缩包](https://blog.csdn.net/qq_21895821/article/details/89924390)
[Jszip的使用和打包下载图片](https://www.cnblogs.com/liwxmyself/p/10270986.html)