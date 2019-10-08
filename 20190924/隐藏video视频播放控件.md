```
<!--用css隐藏video视频播放控件-->
<style type="text/css">
    video::-webkit-media-controls{
        display:none !important;
    }
</style>

<!--用js隐藏video视频播放控件-->
<script type="text/javascript">
    var video=document.getElementById("video"); 
    video.controls=false;
</script>
```