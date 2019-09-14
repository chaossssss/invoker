$(function () {
    var $blin = $(".light p"),//所有彩灯
        $prize = $(".play li").not("#btn"),//含谢谢参与的所有奖品
        $change = $("#change"),//显示剩余机会
        $btn = $("#btn"),//开始抽奖按钮
        length = $prize.length,//奖品总数
        data = {count: 5},//次数
        bool = true,//判断是否可点击,true为可点击
        mark = 0,//标记当前位置，区间为0-7
        timer;//定时器

    init();
    //默认动画效果
    function init() {
        // timer = setInterval(function () {
        //     //不能调用animate函数，不然标记会有问题
        //     $blin.toggleClass("blin");//彩灯动画
        //     //九宫格动画
        //     length++;
        //     length %= 8;
        //     $prize.eq(length - 1).removeClass("select");
        //     $prize.eq(length).addClass("select");

        //     //位置标记的改变
        //     mark++;
        //     mark %= 8;
        // }, 1000);
    }

    //点击抽奖
    $btn.click(function () {
        if (bool) {//若未按下
            bool = false;
            clickFn();
        }
    });

    function prizeImg(x){
        $("#lucky_img img").attr("src","/images/fr/prize0"+ x +".png?v=002");
        $(".lucky").show();
    }

    //点击旋转
    function clickFn() {
        clearInterval(timer);//点击抽奖时清除定时器
        
        // var random = [1, 2, 3, 4, 5, 6, 7, 8];//抽奖概率
        //data为随机出来的结果，根据概率后的结果
        random = 1;//1-8的随机数
        mark += random;
        mark %= 8;


        //默认先转4圈
        random += 32;//圈数 * 奖品总数
        //调用旋转动画
        for (var i = 1; i <= random; i++) {
            setTimeout(animate(), 2 * i * i);//第二个值越大，慢速旋转时间越长
        }
        //停止旋转动画
        setTimeout(function () {
            console.log("中了" + mark);
            setTimeout(function () {
                bool = true;
                prizeImg(mark)
            }, 1000);
        }, 2 * random * random);
    }

    //动画效果
    function animate() {
        return function () {
            $blin.toggleClass("blin");//彩灯动画
            //九宫格动画
            length++;
            length %= 8;
            $prize.eq(length - 1).removeClass("select");
            $prize.eq(length).addClass("select");
        }
    }

    //中奖信息提示
    $("#close,.win,.btn").click(function () {
        clearInterval(timer);//关闭弹出时清除定时器
        init();
    });
});


$('.pointer').click(function (){
    //function Luckdraw(){
        if(bRotate)return;
        var item;
        //var item = "7";
        $.post("/fr/CjForm", {
            mano: "@(ViewBag.MaNo)"
        }, function(data) {
            if(data == "0"){
                $(".info").show();
                // $(".prize_num p").html("0");
            }else if(data == "-1"){
                swal({
                    title: "OMG!", 
                    text: "您的抽奖机会已使用完毕，感谢您的关注!",
                    imageUrl: "/images/fr/whale.png",
                    showCancelButton: false,
                    confirmButtonText: "确定",
                    confirmButtonColor: "#108dd8"
                },
                function(isconfirm){
                    // $(".prize_num p").html("0");
                });
            }else if(data == "-2"){
                swal({
                    title: "OMG!", 
                    text: "很抱歉，活动已经结束啦，感谢您的关注!",
                    imageUrl: "/images/fr/whale.png",
                    showCancelButton: false,
                    confirmButtonText: "确定",
                    confirmButtonColor: "#108dd8"
                },
                function(isconfirm){
                    // $(".prize_num p").html("0");
                });
            }else{
                item = data ;
                console.log(item)
                switch (item) {
                    case "1":
                        rotateFn(1, 0, '一等奖：海尔对开门冰箱');
                        break;
                    case "2":
                        rotateFn(2, 270, '二等奖：55英寸智能高清电视');
                        break;
                    case "3":
                        rotateFn(3, 225, '三等奖：时尚拎包+高端炒锅一个');
                        break;
                    case "4":
                        rotateFn(4, 315, '四等奖：精美刀具+高端炒锅一个');
                        break;
                    case "5":
                        rotateFn(1, 135, '一等奖：海尔对开门冰箱');
                        break;
                    case "6":
                        rotateFn(2, 90, '二等奖：55英寸智能高清电视');
                        break;
                    case "7":
                        rotateFn(3, 45, '三等奖：时尚拎包+高端炒锅一个');
                        break;
                    case "8":
                        rotateFn(4, 180, '四等奖：精美刀具+高端炒锅一个');
                        break;
                }
            } 
        })           
});