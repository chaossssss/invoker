var isdrag = true;
var tempX, x, tempY, y;

function dragStart(e) {
    isdrag = true;
    tempX = parseInt($("#testDrag").css("left") + 0);
    tempY = parseInt($("#testDrag").css("top") + 0);
    x = e.touches[0].pageX;
    y = e.touches[0].pageY;
}

function dragMove(e) {
    if (isdrag) {
        var curX = tempX + e.touches[0].pageX - x;
        var curY = tempY + e.touches[0].pageY - y;
        //边界判断
        curX = curX < 0 ? 0 : curX;
        curY = curY < 0 ? 0 : curY;
        curX = curX < document.documentElement.clientWidth - 80 ? curX : document.documentElement.clientWidth - 80;
        curY = curY < document.documentElement.clientHeight - 80 ? curY : document.documentElement.clientHeight - 80;
        $("#testDrag").css({
            "left": curX,
            "top": curY
        });
        //禁止浏览器默认事件
        e.preventDefault();
    }
}

function dragEnd() {
    isdrag = false;
}

$(function() {
    document.getElementById("testDrag").addEventListener("touchstart", dragStart);
    document.getElementById("testDrag").addEventListener("touchmove", dragMove);
    document.getElementById("testDrag").addEventListener("touchend", dragEnd);
});
