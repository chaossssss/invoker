//监听播放时间
var video = document.getElementById('video');
//使用事件监听方式捕捉事件
video.addEventListener("timeupdate",function(){
    var timeDisplay;
	//用秒数来显示当前播放进度video.currentTime每次显示不一定相同
	timeDisplay = video.currentTime.toFixed(1);
	console.log(Math.floor(video.currentTime))
    //当视频播放到 4s的时候做处理
	if(timeDisplay == 4){
	        //处理代码
	}
},false);
