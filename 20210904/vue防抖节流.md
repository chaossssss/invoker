1.
export default {
    debounce(fn, delay = 300) {   //默认300毫秒
        var timer;
        return function() {
            var args = arguments;
            if(timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(() => {
                fn.apply(this, args);   // this 指向vue
            }, delay);
        };
    }
}

import utils from "@/js/utils";
 
export default {
 
    methods: {
        search: utils.debounce(function() {
            let v = this;
            let serchURL = `/movie/search?q=${v.searchText}&start=0&count=10`;
            v.$axios
             .get(serchURL)
             .then(response => {
                  v.processSearchData(response.data);
             })
             .catch(error => {
                 console.log(error)
             })
             .finally()
         })
    }
 
}



2.
data(){
	return {
		timeou: null //定义一个变量存放定时器
	}
}
methods: {
//防抖 
/*
@params
	func: 函数
	wait: 延迟时间
*/
	debounce (func, wait) {
      if (this.timeout) clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        func()
      }, wait)
    },
    // input 实时输入
    inputChange (v) {
      this.debounce(this.search, 2000)
    },
    // enter事件 
    enterEvent () {
    	//有定时器任务，清除定时器任务，避免调用两次search方法
      if (this.timeout) clearTimeout(this.timeout)
      this.search()
    },
    search() {
		// 搜索逻辑
	}
}



3.
export default {
  components: {},
  data() {
    return {
      formSearch: {
        Num: '',
        timer: null
      }
    };
  },
   watch: {
    'formSearch.Num': {
      handler(value) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          this.handleFormSearch();
        }, 1500)
      },
      deep: true
    }
  },
  methods: {
    locale,
    handleFormSearch() {
     //查询方法
    }
  }
};