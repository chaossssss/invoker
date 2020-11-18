export function _debounce(fn, delay=200) {
	var timer;
	return function () {
			var th = this;
			var args = arguments;
			if (timer) {
					clearTimeout(timer);
			}
			timer = setTimeout(function () {
					timer = null;
					fn.apply(th, args);
			}, delay);
	};
}

methods: {
  //一编三定
  ybsdlist: _debounce(function () {

  }, 0),
}