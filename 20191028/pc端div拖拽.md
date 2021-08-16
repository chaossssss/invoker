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



js版本
    window.onload=function(){
        let drag=document.getElementById('box');
        drag.onmousedown=function(e){
            let e = e || window.event;
            let diffX=e.clientX-drag.offsetLeft;
            let diffY=e.clientY-drag.offsetTop;
            drag.onmousemove=function(e){
                let left=e.clientX-diffX;
                let top=e.clientY-diffY;
                if(left<0){
                    left=0;
                }else if(left>window.innerWidth-drag.offsetWidth){
                    left=window.innerWidth-drag.offsetWidth;
                }
                if(top<0){
                    top=0;
                }else if(top>window.innerHeight-drag.offsetHeight){
                    top=window.innerHeight-drag.offsetHeight
                }
                drag.style.left=left+'px';
                drag.style.top=top+'px';
            }
            drag.onmouseup=function(e){
                this.onmousemove=null;
                this.onmouseup=null;
            }
        }
    }
```