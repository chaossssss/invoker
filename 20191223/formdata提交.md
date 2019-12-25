//通过FormData构造函数创建一个空对象
var formdata=new FormData();
//可以通过append()方法来追加数据
formdata.append("name","laotie");
//通过get方法对值进行读取
console.log(formdata.get("name"));//laotie
//通过set方法对值进行设置
formdata.set("name","laoliu");
console.log(formdata.get("name"));//laoliu

$.ajax({
    type: "POST",
    url:"massages",
    data:formData,
    contentType: false,
    processData: false,
    success: function(data) {
        if(data){
            alert("提交成功");
        }
    }
});
                