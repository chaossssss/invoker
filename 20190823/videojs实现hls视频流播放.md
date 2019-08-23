<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta http-equiv="x-ua-compatible" content="ie=edge,chrome=1">
		<link href="./css/video-js.min.css" rel="stylesheet">
		<script src="./js/video.min.js"></script>
		<script type="text/javascript" src="/js/jquery.min.js"></script>
	</head>
	<body>
		<div>
			<video id='myvideo' width=960 height=540 class="video-js vjs-default-skin" controls>
			    <!-- hls直播源地址：CCTV1高清 -->
			    <source src="http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8">    
			</video>
		</div>
		<script> 
		    var player = videojs('myvideo', {}, function(){console.log('videojs播放器初始化成功')})
		    player.play();
		</script>
	</body>
</html>