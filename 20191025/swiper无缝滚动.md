1.设置属性

freeMode:true,

autoplay: 1

2.然后再修改或者覆盖样式

.swiper-container-free-mode>.swiper-wrapper {
    -webkit-transition-timing-function: linear; /*之前是ease-out*/
    -moz-transition-timing-function: linear;
    -ms-transition-timing-function: linear;
    -o-transition-timing-function: linear;
    transition-timing-function: linear;
    margin: 0 auto;
}

————————————————
版权声明：本文为CSDN博主「散粉思考者」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/qq_38619931/article/details/80307495