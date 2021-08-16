```
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title></title>
    <script type="text/javascript" src="/Scripts/jquery-1.10.2.js"></script>
    <script type="text/javascript">
        function vSetImg(obj) {
            $(obj).removeAttr("poster");
            var vimg = $("<img/>")[0];
            captureImage(obj, vimg);
            console.log($(vimg).attr("src"));
            $(obj).attr("poster", $(vimg).attr("src"));
            //展示获取的第一帧图片
            $(".img").attr("src", $(vimg).attr("src"));
        };
        var scale = 0.8;
        function captureImage(video, output) {
            try {
                var videocanvas = $("<canvas/>")[0];
                videocanvas.width = video.videoWidth * scale;
                videocanvas.height = video.videoHeight * scale;
                videocanvas.getContext('2d').drawImage(video, 0, 0, videocanvas.width, videocanvas.height);
                output.src = videocanvas.toDataURL("image/png");
                delete videocanvas;
            } catch (e) {
                output.src = "加载动画.gif";
            }
        };
    </script>
</head>
<body>
    <div>
        <video preload="metadata" onloadeddata='vSetImg(this)' width="420" height="280" src="VID_20191101_203801.mp4">
            <source src="VID_20191101_203801.mp4" type="video/mp4" />
        </video>
    </div>
    <div>
        <img class="img" src="" />
    </div>
</body>
</html>
```