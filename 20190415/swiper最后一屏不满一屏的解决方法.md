最后一屏底部自动高度的方法为

slidesPerView: 'auto',
css代码

.foot{height: auto !important;}
但是这种情况会出现滚动到最后一屏的时候，再网上滚会滚动2屏解决办法 是增加onTransitionEnd函数 注意是onTransitionEnd 不是onSlideChangeEnd 我先前老没用

      onTransitionEnd: function(swiper){
    if(swiper.progress==1){
      swiper.activeIndex=swiper.slides.length-1
    }
          }
加上去就可以了！