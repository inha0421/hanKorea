$(document).ready(function(){
   
    $(".gnb > li").mouseenter(function(){
        $(this).children("ul").show();
        
    });
    
    
    $(".gnb > li").mouseleave(function(){
        $(this).children("ul").hide();
    });

});