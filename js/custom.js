$(document).ready(function(){


    //전역 변수 선언
    var i = $(".navi .on").index();
    var wid = $(".visual").width();
    var len = $(".navi li").length;



    // .navi 버튼에 on 클래스 주기

    $(".navi li").click(function(){

        $(".navi li").removeClass("on");
        $(this).addClass("on");

    });

    //prev 구현

    $(".prev").click(function(){

        if(i == 0){
            i = len-1;
        }
        else{
            i = i-1;
        }

        Sliding();
    });

    //next 구현

    $(".next").click(function(){

        if(i == len-1){
            i = 0;
        }
        else{
            i = i+1;
        }

        Sliding();
    });


    //버튼 클릭시 on클래스 주고 그 페이지로 가기


    $(".navi li").click(function(){

        i = $(this).index();

        Sliding();

    });




    //슬라이드 함수 구현

    function Sliding(){

        $(".navi li").removeClass("on");
        $(".navi li").eq(i).addClass("on");
        $(".panel").animate({"margin-left": -wid * i },1500);

    }



    //Sliding 자동실행 함수를 변수로 선언

    var auto = setInterval(function(){

        if(i == len-1){
            i = 0;
        }
        else{
            i = i+1;
        }

        Sliding();

    },2000);


    //stop버튼 클릭시 정지 구현

    $(".stop").click(function(){

        clearInterval(auto);

    });




    //play버튼 클릭시 다시 자동재생 구현


    $(".play").click(function(){

        auto = setInterval(function(){

            if(i == len-1){
                i = 0;
            }
            else{
                i = i+1;
            }

            Sliding();

        },2000);

    });









   //gnb 메뉴 슬라이드 구현

    $(".gnb > li").mouseenter(function(){
        $(this).children("ul").show();
        
    });

    $(".gnb > li").mouseleave(function(){
        $(this).children("ul").hide();
    });


});
