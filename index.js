// $(document).ready(function(){
//     $("div").click(function(){
//         $("p").hide();
//     });
// });

$(document).ready(function(){
    $(".header__button").click(function(){
        $("button").hide(1000);
    });
    $("button").click(function(){
        $(this).css("background-color", "#ffffff");
    });
});

// $("button").click(function(){
//     $(this).toggle(1000, function(){
//         $(this).css("background-color","#363A4D")
//     })
// })

$(document).ready(function(){
$("img").on({
    mouseenter:function(){
        $(this).css("width", "+=5px")
        $(this).css( "height", "+=5px")
        $(this).css(  "opacity", "0.8")
    }, 
    mouseleave:function(){
        $(this).css("width", "-=5px")
        $(this).css( "height", "-=5px")
        $(this).css(  "opacity", "1")
    }
})
})
$(document).ready(function(){
$(".main__container").hover(function(){
    $(this).css("background-color", "#bbb")
})

})