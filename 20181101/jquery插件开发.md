<div class="nav-line clearfix">
	<div class="nav-line-text on">集成整装</div>
	<div class="nav-line-text">集成卫浴</div>
	<div class="nav-line-text">集成厨房</div>
	<div class="nav-line-text">集成整装</div>
</div>


(function($) {        
	$.fn.tabBox = function(option) {   
		$(option.navLine).children().on(option.event,function(){
			$(option.navLine).children().removeClass(option.currentClass);
			var i = $(this).index();
			$(this).addClass(option.currentClass);
			$(option.navCon).children().hide().eq(i).show();
		})
	};      
})(jQuery); 
$(".nav-line").tabBox({
	navLine: '.nav-line',
	navCon: '.nav-brand',
	event: 'click',
	currentClass: 'on'
});