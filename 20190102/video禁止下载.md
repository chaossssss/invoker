1、屏蔽鼠标右键：<body oncontextmenu = "return false">

2、屏蔽视频播放器右下角三个点的下载按钮（chrome会显示）：

<video class="edui-upload-video  vjs-default-skin  video-js" controls="true" controlslist="nodownload" preload="none" width="420" height="280" src="" data-setup="{}" controlslist="nodownload" poster=""></video>

Vedio是需要提供一个视频地址，所以这两种方式并不是彻底屏蔽下载链接（也可能有其他方式）。

所以，如果不需要被恶意转载或者共享的视频，不建议使用vedio标签。
