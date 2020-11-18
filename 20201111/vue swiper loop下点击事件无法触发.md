<div
  class="fw-list swiper-slide"
  v-for="(item, index) in navList"
  :data-url="item.url"
  :data-id="item.query"
  :key="index"
>
  <div
    :class="item.isCurrent ? 'text-gb' : 'unCurrent'"
  >
    {{ item.title }}
  </div>
</div>


_this.mySwiper = new Swiper(_this.$refs.fwSwiper, {
  direction: "vertical",
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 30,
  speed: 1000,
  loop: true,
  // loopedSlides: 3,
  prevButton: ".fw-box .fws-up",
  nextButton: ".fw-box .fws-down",
  observer: true, //修改swiper自己或子元素时，自动初始化swiper
  observeParents: true, //修改swiper的父元素时，自动初始化swiper
  onClick:function(swiper){
    // console.log(swiper)
    let url = swiper.clickedSlide.attributes["data-url"].nodeValue
    let id = swiper.clickedSlide.attributes["data-id"].nodeValue
    _this.naviTo(url,id)
  }
});