$(document).ready(function () {

    $("button").click(function () {
        $('ul').hide(500);
        $(this).next('ul').toggle(500);
        $('button').removeClass('active');
        $(this).addClass("active");
        /* console.log($(this).next('ul').data().title);*/
        var nextUl = $(this).next('ul')
        var h1Text = $(this).prev().text()
        var likes = nextUl.data().title
        $(this).prev().text(nextUl.data().title)
        $(this).prev().text(h1Text + likes)
        $(this).prev().find('small').text(':');

    });

    /* $(".btn2").click(function () {
         $('button').removeClass('active');
         $(this).addClass("active");
         var delay = 500 / Math.PI;
 
         $(".recipie2").toggle(delay);
 
     });*/
    $(".remove").click(function () {
        $("li").toggleClass('red');
    });
});