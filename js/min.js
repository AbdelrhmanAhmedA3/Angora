
$(".parents li").eq(0).css({backgroundColor : "#ff6a39"})
$(".parents li").eq(1).css({backgroundColor : "teal"})
$(".parents li").eq(2).css({backgroundColor : "pink"})
// $(".parents li").eq(3).css({backgroundColor : "rgb(104, 102, 102)"})



$(".parents li").click (function () {
    let chanhColor = $(this).css("background-color")
    $(".newColor").css({backgroundColor : chanhColor, transition : "0.5s"})
})