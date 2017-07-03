$(document).ready(function () {
    console.log("hallo");
    $(".btn1").click(function () {
        console.log("hallo2");
        $(".recipie1").toggle(500);
    });

    $(".btn2").click(function () {
        $(".recipie2").toggle(500);
    });
    $(".remove").click(function () {
        $("li").toggleClass('red');
    });
});