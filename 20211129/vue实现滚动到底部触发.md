 document
      .querySelector("#mainBox")
      .addEventListener("scroll", throttle(_this.handleScroll, 800), false);
 handleScroll(e) {
      //变量scrollTop是滚动条滚动时，距离顶部的距离
      let scrollTop = e.target.scrollTop;
      this.scrollTop = scrollTop;
      //变量windowHeight是可视区的高度
      let windowHeight = e.target.clientHeight;
      //变量scrollHeight是滚动条的总高度
      let scrollHeight = e.target.scrollHeight;
      //滚动条到底部的条件
      if (scrollTop + windowHeight >= scrollHeight) {
       //触发更多函数
        }
      }
    },