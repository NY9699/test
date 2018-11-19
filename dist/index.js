$(function(){
    let index=0;
    let timer=null;
    $(".banner-box .slide-item").eq(index).addClass("slide-fade-active");
    $(".banner-prev").click(function(){
        index++;
        if (index>$(".banner-box.slide-item").length-1){
            index=0
        }
        $(".banner-box .slide-item").removeClass("slide-fade-active");
        $(".banner-box .slide-item").eq(index).addClass("slide-fade-active");
    });
    $(".banner-next").click(function(){
        index--;
        if (index<0){
            index=$(".banner-nav .slide-item").length-1;
        }
        $(".banner-box .slide-item").removeClass("slide-fade-active");
        $(".banner-box .slide-item").eq(index).addClass("slide-fade-active");
    });
    timer=setInterval(function(){
        index--;
        if (index<0){
            index=$(".banner-nav .slide-item").length-1;
        }
        $(".banner-box .slide-item").removeClass("slide-fade-active");
        $(".banner-box .slide-item").eq(index).addClass("slide-fade-active");
    },2000);
    $(".banner-box").mouseenter(function(){
        clearInterval(timer)
    });
    $(".banner-box").mouseleave(function(){
        timer=setInterval(function(){
            index--;
            if (index<0){
                index=$(".banner-box .slide-item").length-1;
            }
            $(".banner-box .slide-item").removeClass("slide-fade-active");
            $(".banner-box .slide-item").eq(index).addClass("slide-fade-active");
        },2000);
    })
});
$(function(){
    var index=$("#slide-box .slide-wrapper .slide-fade").length-1;
    var timer=null;
    $("#slide-nav a").hover(
        function(){
            $("#slide-nav a").removeClass("slide_active");
            $(this).addClass("slide_active")
            $("#slide-box .slide-wrapper .slide-fade").removeClass("slide-active");
            $("#slide-box .slide-wrapper .slide-fade").eq($(this).index()).addClass("slide-active");
        }
    );
    timer=setInterval(function(){
        index++;
        if (index>$("#slide-box .slide-wrapper .slide-fade").length-1){
            index=0;
        }
        $("#slide-nav a").removeClass("slide_active");
        $("#slide-nav a").eq(index).addClass("slide_active");
        $("#slide-box .slide-wrapper .slide-fade").removeClass("slide-active");
        $("#slide-box .slide-wrapper .slide-fade").eq(index).addClass("slide-active");
    },2000);
});
$(function(){
    let index=$("#slide-box1 .slide-wrapper .slide-fade").length-1;
    var timer=null;
    $("#slide-nav1 a").hover(
        function(){
            $("#slide-nav1 a").removeClass("slide_active");
            $(this).addClass("slide_active")
            $("#slide-box1 .slide-wrapper .slide-fade").removeClass("slide-active");
            $("#slide-box1 .slide-wrapper .slide-fade").eq($(this).index()).addClass("slide-active");
        }
    );
    timer=setInterval(function(){
        index++;
        if (index>$("#slide-box1 .slide-wrapper .slide-fade").length-1){
            index=0;
        }
        $("#slide-nav1 a").removeClass("slide_active");
        $("#slide-nav1 a").eq(index).addClass("slide_active");
        $("#slide-box1 .slide-wrapper .slide-fade").removeClass("slide-active");
        $("#slide-box1 .slide-wrapper .slide-fade").eq(index).addClass("slide-active");
    },2000);
    $(".banner-nav a").click(function(){
        $(".banner-nav a").removeClass("on");
        $(this).addClass("on");
        $(".slide-box").css({display:"none"});
        $(".slide-box").eq($(this).index()).css({display:"block"})
    })
});
$(function(){
    $(".new-nav a").hover(function(){
        $(".new-nav a").removeClass("slide-active");
        $(this).addClass("slide-active");
        $(".slide-item2").css({display:"none"})
        $(".slide-item2").eq($(this).index()).css({display:"block"})
    });
    $(".news-nav a").hover(function(){
        $(".news-nav a").removeClass("slide-active");
        $(this).addClass("slide-active");
        $(".slide-item1").css({display:"none"})
        $(".slide-item1").eq($(this).index()).css({display:"block"})
    })
    let left1=1;
    setInterval(function(){
        $(".xianshi ul").css({"left":$(".xianshi ul").position().left-left1});
    },30)

});
$(function(){
    $(".entry-nav a").hover(function(){
        $(".entry-nav a").removeClass("slide-active");
        $(this).addClass("slide-active");
        $(".slide-item3").css({display:"none"});
        $(".slide-item3").eq($(this).index()).css({display:"block"})
    })
});
$(function(){
    let tIndex1 = 0;
    let bIndex1 = 0;
    $(".calendar-box .ul2 li:first-child").clone(true).appendTo($(".calendar-box ul"));

    function next() {
        tIndex1++;
        bIndex1++;
        if (tIndex1 > $(".calendar-box  .ul2 li").length - 1) {
            tIndex1 = 1;
            $(".calendar-box ul").css("left", 0).stop().animate({
                "left": -545
            })
        }
        if (tIndex1 == $(".calendar-box  .ul2 li").length - 1) {
            bIndex1 = 0
        }
        $(".calendar-box  .ul2").stop().animate({
            "left": -tIndex1 * 545
        })
    }

    $(".cal-prev").click(function () {
        tIndex1--;
        bIndex1--;
        if (tIndex1 < 0) {
            tIndex1 = $(".calendar-box  .ul2  li").length - 2;
            $(".calendar-box  .ul2").css("left", -545*6).stop().animate({
                "left": -545*5
            })
        }
        if (bIndex1 < 0) {
            bIndex1 = $(".calendar-box  .ul2 li").length - 2
        }
        $(".calendar-box .ul1").stop().animate({
            "left": -tIndex1 * 545
        })
    })
    $(".cal-next").click(function () {
        next()
    })

});


