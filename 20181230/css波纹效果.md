@keyframes warn {
0% {
transform: scale(0.3);
-webkit-transform: scale(0.3);
opacity: 0.0;
}

25% {
transform: scale(0.3);
-webkit-transform: scale(0.3);
opacity: 0.1;
}

50% {
transform: scale(0.5);
-webkit-transform: scale(0.5);
opacity: 0.3;
}

75% {
transform: scale(0.8);
-webkit-transform: scale(0.8);
opacity: 0.5;
}

100% {
transform: scale(1);
-webkit-transform: scale(1);
opacity: 0.0;
}
}


/* 保持大小不变的小圆点 */
.dot {
position: absolute;
width: 7px;
height: 7px;
left: -4px;
top: -4px;
-webkit-border-radius: 50%;
-moz-border-radius: 50%;
border: 1px solid #dd0c0f;
border-radius: 50%; 
background-color:#dd0c0f; /* 实心圆 ，如果没有这个就是一个小圆圈 */
z-index: 2;
}


/* 产生动画（向外扩散变大）的圆圈 第一个圆 */
.pulse {
position: absolute;
width: 35px;
height: 35px;
left: -18px;
top: -18px;
border: 1px solid #df3f41;
-webkit-border-radius: 50%;
-moz-border-radius: 50%;
border-radius: 50%;
z-index: 1;
opacity: 0;
-webkit-animation: warn 2s ease-out;
-moz-animation: warn 2s ease-out;
animation: warn 2s ease-out;
-webkit-animation-iteration-count: infinite;
-moz-animation-iteration-count: infinite;
animation-iteration-count: infinite;
box-shadow: 1px 1px 30px #df3f41; /* 阴影效果 */
}