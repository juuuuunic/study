$(function () {
    var swiper = new Swiper('.swiper-container02', {
        slidesPerView: 3.8,
        spaceBetween: 30,
        mousewheel: true,
        loop:true,
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },
        breakpoints: {
            880: {
                slidesPerView: 2.5,
                spaceBetween: 20,
            },
            500: {
                slidesPerView: 1.5,
                spaceBetween: 20,
            },
        },

    });
    var swiper = new Swiper('.swiper-container03', {
        slidesPerView:2,
        mousewheel: true,
        loop:true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        breakpoints: {
            1100: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            890: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
        },

});
});

$(function(){
    //紐⑤컮�쇰뜲紐⑤낫湲�
    var k = 0;
    $(".demo_btn").click(function(){
        if(k == 0){
            $(this).children(".demo").addClass("on").show();
            $(".demo").on("click",function(){
                $(".demo").removeClass('on');
                k = 1;
            });
            k = 0;
        }else {
            $(".demo").removeClass('on').hide();
            k = 0;
        }
    });

});
