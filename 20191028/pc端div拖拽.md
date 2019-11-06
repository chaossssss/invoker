适用于里面元素有多个，控制最外层div的情况
```
<div id="moveBar">
    <video id="banner"></video>
</div>
$(function () {
    dragPanelMove("#banner","#moveBar");
    function dragPanelMove(downDiv,moveDiv){
        $(downDiv).mousedown(function (e) {
                var isMove = true;
                var div_x = e.pageX - $(moveDiv).offset().left;
                var div_y = e.pageY - $(moveDiv).offset().top;
                $(document).mousemove(function (e) {
                    if (isMove) {
                        var obj = $(moveDiv);
                        obj.css({"left":e.pageX - div_x, "top":e.pageY - div_y});
                    }
                }).mouseup(
                    function () {
                    isMove = false;
                });
        });

    }

});
```