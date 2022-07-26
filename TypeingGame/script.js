window.onload = function(){
    $(".frame").hide();
    let isShowStanby = false;
}



function sleep(waitSec, callbackFunc){
    var spanedSec = 0;
    var id = setInterval(function(){
        spanedSec++;
        if (spanedSec >= waitSec){
            clearInterval(id);
            if (callbackFunc){
                callbackFunc();
            }
        }
    }, 1000);
}

function start(){
    $(".title").hide();
    $(".container").hide();
    $(".ready").hide();
    $(".stanby").show();
    $(".frame").show(1000);
    isShowStanby = true;
}

function title(){
    $(".frame").hide();
    $(".title").show(1000);
    isShowStanby = false;
}

function gameStart(){
    $(".stanby").hide();
    $(".ready").show(500);
    sleep(1, function () {
        $(".ready").hide(500);
        $(".container").show(1000);
    });
}

document.addEventListener("keydown",function(e){
    if(isShowStanby){
        if(e.keyCode == 32){
            gameStart();
            isShowStanby = false;
        }
    }
});


