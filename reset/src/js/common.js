history.scrollRestoration = "manual"; //새로고침시 스크롤 복원안함

$(window).on('load', function() {
    $(".loading-box").fadeOut(200,function(){
        $(this).remove();
    });
});

$(function(){

    fn_scrollTop()
});

//scroll top
function scrollTop(){
    var  st = $( this ).scrollTop();

    if( st > 90){
        $('#header').addClass('fixed-on');
    }else if(st <= 90){
        $('#header').removeClass('fixed-on');
    }
}
function fn_scrollTop(){
    scrollTop();
    $(window).scroll(scrollTop);
}

//Javascript : 스크롤 막기
function scrollDisable(){

    var ev = 'scroll touchmove mousewheel';

    var agent = navigator.userAgent.toLowerCase();
    if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1)){
        ev = 'scroll touchmove';
    }

    $('body').addClass('scrollDisable').on(ev, function(e){
        e.preventDefault();
        e.stopPropagation();

        return false;
    });
}
//Javascript : 스크롤 막기 해지
function scrollAble(){
    var ev = 'scroll touchmove mousewheel';

    var agent = navigator.userAgent.toLowerCase();
    if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1)){
        ev = 'scroll touchmove';
    }
    $('body').removeClass('scrollDisable').off(ev);
}