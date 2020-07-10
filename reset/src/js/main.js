$(function(){
});


$(document).ready(function(){


    //모바일 체크
    var filter = "win16|win32|win64|mac|macintel";
    var mo = 'pc';
    if ( navigator.platform ) {
        if ( filter.indexOf( navigator.platform.toLowerCase() ) < 0 ) {
            mo = 'mo';
        }
    }
    
});