[echarts地图背景图](https://www.freesion.com/article/71311025586/)
var chart = echarts.init(document.getElementById("beijing"));
	
var img = new Image();
var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = chart.getWidth() * window.devicePixelRatio;
canvas.height = chart.getHeight() * window.devicePixelRatio;

var fullImage = new Image();
img.onload = function() {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    fullImage.src = canvas.toDataURL();
    setTimeout(function() {
        chart.resize();
    }, 100)
}
img.src = '(此处是背景图的base64编码)


然后在echarts中的opention中增加backgroundColor配置参数：

backgroundColor: {
  type: "pattern",
  repeat: "repeat",
  image: fullImage
},