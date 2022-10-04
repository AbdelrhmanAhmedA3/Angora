
$(".parents li").eq(0).css({backgroundColor : "red"})
$(".parents li").eq(1).css({backgroundColor : "teal"})
$(".parents li").eq(2).css({backgroundColor : "black"})
$(".parents li").eq(3).css({backgroundColor : "pink"})
$(".parents li").eq(4).css({backgroundColor : "red"})
$(".parents li").eq(0).css({backgroundColor : "red"})
$(".parents li").eq(0).css({backgroundColor : "red"})
$(".parents li").eq(0).css({backgroundColor : "red"})



$(".parents li").click (function () {
    let chanhColor = $(this).css("background-color")
    $(".newColor").css({backgroundColor : chanhColor, transition : "0.5s"})
})