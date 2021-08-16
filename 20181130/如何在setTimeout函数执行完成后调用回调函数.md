function foo(callback) {    
    var a = false;
    setTimeout(function(){
        a = true;
    },1000);
    var timer = setInterval(function(){
        if(a)
        {
            clearInterval(timer);
            callback(); 
        }
    },100);
}