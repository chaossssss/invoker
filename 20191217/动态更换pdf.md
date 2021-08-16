https://blog.csdn.net/qq_26118603/article/details/78963486
```
<div class="pdf" >  
<iframe  id ="pdf_page"  name ="pdf_page" style="width:1500px;height:640px"  >  
</iframe>  
</div>  


<script type="text/javascript" src="static/js/web/jquery-1.8.3.js"></script>
<script type="text/javascript" src="static/js/jq/jquery.media.js"></script>
<script type="text/javascript">  
$(document).ready(function(){  
    var url="static/images/upload/20180103/201801031700182ff553eb.pdf";//这里就可以做url动态切换--主要是使用iframe
    $("#pdf_page").attr("src",url);  
    $(".pdf").media();  
}); 
```