1.通过files属性可以访问<input id="XX" type="files".../>的所有选中的文件，document.getElemnetById("XX").files,通过files属性获得的是一个FileList对象数组，他的每个元素都是File对象，可以通过(name size type等属性)对每个元素的访问。
```
<body>
浏览图片：<input type="file" id="images" multiple="multiple" accept="image/jpg" />//accept是过滤文件类型为图片类
<input type="button" value="显示内容" οnclick="showDetail()" />
<script type="text/javascript">
  var showDetail=function(){
      var img=document.getElementById("images");
      var fileList=img.files;//通过files属性获得元素img上传域的所有文件
      for(var i=0;i<fileList.length;i++)
      {
          var file=fileList[i];
          div=document.createElement("div");
          
          document.body.innerHTML="第"+(i+1)+"个文件的文件名是:"+file.name+",该文件类型是："+file.type+",该文件大小是："+file.size;
          document.body.appendChild(div);
     }   
}
</script>
</body>
```

2.FileReader对象：一般用FileReader对象来读取文件内容，有readAsText(file,encoding)（读取文本）,readAsBinaryString(file)（读取二进制）,readAsDataURL(file)（以dataurl的方式读取）方法，FileReader的result属性返回结果。
```
浏览文件：<input id="file1" type="file" /><br />
<div id="result"></div>
<input type="button" value="读取文本文件" οnclick="readText();"/><br />
<input type="button"  value="读取二进制文件" οnclick="readBinary();"/><br />
<input type="button"  value="读取文本路径" οnclick="readURL();"/><br />
<script type="text/javascript">
  var reader=null;
  if(FileReader)//创建对象
  {reader=new FileReader();}
  else
  {alert("浏览器不支持FileReader");}
  var readText=function(){//读取文本文件的方法
      if(/text\/\w+/.test(document.getElementById("file1").files[0].type))
      {//读取所选中的第一个文件，有两个参数，第一个参数为该文件，第二个参数为以什么方式
          reader.readAsText(document.getElementById("file1").files[0],"gbk");
          reader.οnlοad=function(){//加载方法
              document.getElementById("result").innerHTML=reader.result;//通过filereader对象的result属性来获得内容
          };
      }
      else{
          alert("你选的文件不是文本文件");
          }
  }
  var readBinary=function(){//读取二进制文件的方法
      reader.readAsBinaryString(document.getElementById("file1").files[0]);
      reader.οnlοad=function(){
          document.getElementById("result").innerHTML=reader.result;
      };
  }
  var readURL=function(){//以数据路径读取文件的方法，只有一个参数（file）
      reader.readAsDataURL(document.getElementById("file1").files[0]);
      reader.οnlοad=function(){
          document.getElementById("result").innerHTML=reader.result;
      };
  }
 </script>
```