$(document).ready(function(){
    $(window).scroll(function(){
        var sc_top=$(this).scrollTop();
        if(sc_top>200){
            $(".scroll-navbar").show();
            //  $(".navbar").hide();
        }
        else{
            $(".scroll-navbar").hide();
        }
    });
    $('.header li a').click(function(){
        
       $('html,body').animate({scrollTop : $('#' + $(this).data('value')).offset().top}
       ,'slow');
    });
});