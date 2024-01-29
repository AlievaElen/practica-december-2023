// $(document).ready(function(){
//     $("div").click(function(){
//         $("p").hide();
//     });
// });

// $(document).ready(function(){
//     $(".header__button").click(function(){
//         $("button").hide(1000);
//     });
//     $("button").click(function(){
//         $(this).css("background-color", "#ffffff");
//     });
// });
$("button").click(function(){
    $(this).toggle(1000, function(){
        $(this).css("background-color","#363A4D")
    })
})