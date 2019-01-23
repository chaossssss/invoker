for(var i = 0;i < 36;i++){
    setTimeout((function(i){
        return function(){
            var k = 1984;
            console.log(k+i)

        }
    })(i),i*200)
}