<input id="tel" class="con-input" type="text"  maxlength="11" onkeyup='this.value=this.value.replace(/\D/gi,"")' placeholder="填写手机号" />

<input class="input-box mobile" maxlength="11" pattern="[0-9]*" onkeyup="this.value=this.value.replace(/[^0-9-]+/,'');" pattern="[0-9]*">

var mobile = $(".mobile").val();
var isTel = /^1[34578]\d{9}$/.test(mobile);