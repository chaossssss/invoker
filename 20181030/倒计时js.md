var now=new Date();
var end=new Date(2018,9,27,10,59,00);//结束的时间：年，月，日，分，秒（月的索引是0~11）
/*两个时间相减,得到的是毫秒ms,变成秒*/
var result=Math.floor(end-now)/1000; 

var interval=setInterval(sub,1000); //定时器 调度对象
/*封装减1秒的函数*/
function sub(){
    if (result>1) {
       result = result - 1; 
       var second = Math.floor(result % 60) > 9 ? String(Math.floor(result % 60)) : '0'+Math.floor(result % 60) ;     // 计算秒 ，取余  
       var minite = Math.floor((result / 60) % 60) > 9 ? String(Math.floor((result / 60) % 60)) : '0'+Math.floor((result / 60) % 60); //计算分 ，换算有多少分，取余，余出多少秒
       var hour = Math.floor((result / 3600) % 24) > 9 ? String(Math.floor((result / 3600) % 24)) : '0'+Math.floor((result / 3600) % 24); //计算小时，换算有多少小时，取余，24小时制除以24，余出多少小时
       var day = Math.floor(result / (3600*24)) > 9 ? String(Math.floor(result / (3600*24))) : '0'+Math.floor(result / (3600*24));  //计算天 ，换算有多少天
     
       // $("#remainTime").html(day + "天" + hour + "小时" + minite + "分" + second + "秒");
       // console.log(day.substr(0,1));
       // console.log(day.substr(1,1));
       // console.log(second);
       console.log(day + "天" + hour + "小时" + minite + "分" + second + "秒")
    } else{

        // alert("倒计时结束！");
        // window.clearInterval(interval);//这里可以添加倒计时结束后需要执行的事件 
    }
};