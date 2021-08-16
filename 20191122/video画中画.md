var video = document.createElement("VIDEO");
var togglebtn = document.getElementById('btn');
//添加画中画功能开启关闭事件
togglebtn.addEventListener('click', function() {
	if (!document.pictureInPictureElement) {//开启
		video.requestPictureInPicture().catch(error => {
			console.log(error,'Video failed to enter Picture-in-Picture mode.');
		});
	} else {//关闭
		document.exitPictureInPicture().catch(error => {
			console.log(error,'Video failed to leave Picture-in-Picture mode.');
		});
	}
});
//video元素添加事件
video.addEventListener('enterpictureinpicture', function(event) {
	console.log('Video entered Picture-in-Picture mode.');
});
//video元素添加事件
video.addEventListener('leavepictureinpicture', function(e) {
	console.log('Video left Picture-in-Picture mode.');
});
————————————————
版权声明：本文为CSDN博主「万少博」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/wanshaobo888/article/details/86308370