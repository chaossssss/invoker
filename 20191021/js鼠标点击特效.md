网上看到的js鼠标点击特效，做个记录
<!-- more -->
```
        //鼠标点击出现爱心特效
		(function(window,document,undefined){
			var hearts = [];
			window.requestAnimationFrame = (function(){
				return window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				window.oRequestAnimationFrame ||
				window.msRequestAnimationFrame ||
				function (callback){
					setTimeout(callback,1000/60);
				}
			})();
			init();
			function init(){
				css(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: absolute;}.heart:after{top: -5px;}.heart:before{left: -5px;}");
				attachEvent();
				gameloop();
			}
			function gameloop(){
				for(var i=0;i<hearts.length;i++){
					if(hearts[i].alpha <=0){
						document.body.removeChild(hearts[i].el);
						hearts.splice(i,1);
						continue;
					}
					hearts[i].y--;
					hearts[i].scale += 0.004;
					hearts[i].alpha -= 0.013;
					hearts[i].el.style.cssText = "left:"+hearts[i].x+"px;top:"+hearts[i].y+"px;opacity:"+hearts[i].alpha+";transform:scale("+hearts[i].scale+","+hearts[i].scale+") rotate(45deg);background:"+hearts[i].color;
				}
				requestAnimationFrame(gameloop);
			}
			function attachEvent(){
				var old = typeof window.οnclick==="function" && window.onclick;
				window.onclick = function(event){
					old && old();
					createHeart(event);
				}
			}
			function createHeart(event){
				var d = document.createElement("div");
				d.className = "heart";
				hearts.push({
					el : d,
					x : event.clientX - 5,
					y : event.clientY - 5,
					scale : 1,
					alpha : 1,
					color : randomColor()
				});
				document.body.appendChild(d);
			}
			function css(css){
				var style = document.createElement("style");
				style.type="text/css";
				try{
					style.appendChild(document.createTextNode(css));
				}catch(ex){
					style.styleSheet.cssText = css;
				}
				document.getElementsByTagName('head')[0].appendChild(style);
			}
			function randomColor(){
				return "rgb("+(~~(Math.random()*255))+","+(~~(Math.random()*255))+","+(~~(Math.random()*255))+")";
			}
		})(window,document);
		


		// 另一种
		var a_idx = 0;
		jQuery(document).ready(function($) {
		    $("body").click(function(e) {
		var a = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正" ,"法治", "爱国", "敬业", "诚信", "友善");
		var $i = $("<span/>").text(a[a_idx]);
		        a_idx = (a_idx + 1) % a.length;
		var x = e.pageX,
		        y = e.pageY;
		        $i.css({
		"z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
		"top": y - 20,
		"left": x,
		"position": "absolute",
		"font-weight": "bold",
		"color": "#ff6651"
		        });
		        $("body").append($i);
		        $i.animate({
		"top": y - 180,
		"opacity": 0
		        },
		        1500,
		function() {
		            $i.remove();
		        });
		    });
		});
		//再一种

		onload = function() {
		    var click_cnt = 0;
		    var $html = document.getElementsByTagName("html")[0];
		    var $body = document.getElementsByTagName("body")[0];
		    $html.onclick = function(e) {
		        var $elem = document.createElement("b");
		        $elem.style.color = "#E94F06";
		        $elem.style.zIndex = 9999;
		        $elem.style.position = "absolute";
		        $elem.style.select = "none";
		        var x = e.pageX;
		        var y = e.pageY;
		        $elem.style.left = (x - 10) + "px";
		        $elem.style.top = (y - 20) + "px";
		        clearInterval(anim);
		        switch (++click_cnt) {
		             case 1:
		                $elem.innerText = "欢迎";
		                break;
		            case 2:
		                $elem.innerText = "OωO";
		                break;
		            case 4:
		                $elem.innerText = "(๑•́ ∀ •̀๑)";
		                break;
		            case 6:
		                $elem.innerText = "(๑•́ ₃ •̀๑)";
		                break;
		 case 7:
		                $elem.innerText = "别";
		                break;
		            case 8:
		                $elem.innerText = "(๑•̀_•́๑)";
		                break;
		 case 9:
		                $elem.innerText = "点";
		                break;
		            case 10:
		                $elem.innerText = "（￣へ￣）";
		                break;
		 case 11:
		                $elem.innerText = "我";
		                break;
		            case 12:
		                $elem.innerText = "(╯°口°)╯(┴—┴";
		                break;
		 case 13:
		                $elem.innerText = "怪";
		                break;
		            case 14:
		                $elem.innerText = "૮( ᵒ̌皿ᵒ̌ )ა";
		                break;
		 case 15:
		                $elem.innerText = "痒";
		                break;
		            case 16:
		                $elem.innerText = "╮(｡>口<｡)╭";
		                break;
		 case 17:
		                $elem.innerText = "哼！";
		                break;
		            case 18:
		                $elem.innerText = "( ง ᵒ̌皿ᵒ̌)ง⁼³₌₃";
		                break;
		            case 20:
		            case 21:
		            case 22:
		            case 23:
		            case 24:
		            case 25:
		                $elem.innerText = "(ꐦ°᷄д°᷅)";
		                break;
		             case 28:
		                $elem.innerText = "请";
		                break; 
		            case 30:
		                $elem.innerText = "问";
		                break; 
		           case 32:
		                $elem.innerText = "你";
		                break; 
		           case 34:
		                $elem.innerText = "累";
		                break;
		           case 36:
		                $elem.innerText = "么";
		                break;
		           case 38:
		                $elem.innerText = "需";
		                break;
		           case 40:
		                $elem.innerText = "要";
		                break;
		           case 42:
		                $elem.innerText = "休";
		                break;
		           case 44:
		                $elem.innerText = "息";
		                break;
		           case 46:
		                $elem.innerText = "下";
		                break;
		           case 48:
		                $elem.innerText = "在";
		                break;
		           case 50:
		                $elem.innerText = "学";
		                break;
		           case 52:
		                $elem.innerText = "习";
		                break;
		           case 54:
		                $elem.innerText = "也";
		                break;
		           case 56:
		                $elem.innerText = "不";
		                break;
		           case 58:
		                $elem.innerText = "迟";
		                break;
		           case 60:
		                $elem.innerText = "啊";
		                break;
		            case 61:
		            case 62:
		            case 63:
		            case 64:
		            case 65:
		                $elem.innerText = "OωO";
		                break;
		             case 74:
		                $elem.innerText = "(๑•́ ∀ •̀๑)";
		                break;
		            case 86:
		                $elem.innerText = "(๑•́ ₃ •̀๑)";
		                break;
		            case 98:
		                $elem.innerText = "(๑•̀_•́๑)";
		                break;
		            case 100:
		                $elem.innerText = "（￣へ￣）";
		                break;
		            case 112:
		                $elem.innerText = "(╯°口°)╯(┴—┴";
		                break;
		            case 124:
		                $elem.innerText = "૮( ᵒ̌皿ᵒ̌ )ა";
		                break;
		            case 136:
		                $elem.innerText = "╮(｡>口<｡)╭";
		                break;
		            case 148:
		                $elem.innerText = "( ง ᵒ̌皿ᵒ̌)ง⁼³₌₃";
		                break;
		            default:
		                $elem.innerText = "❤";
		                break;
		        }
		        $elem.style.fontSize = Math.random() * 10 + 20 + "px";
		        var increase = 0;
		        var anim;
		        setTimeout(function() {
		            anim = setInterval(function() {
		                if (++increase == 150) {
		                    clearInterval(anim);
		                    $body.removeChild($elem);
		                }
		                $elem.style.top = y - 20 - increase + "px";
		                $elem.style.opacity = (150 - increase) / 120;
		            }, 8);
		        }, 70);
		        $body.appendChild($elem);
		    };
		};

```