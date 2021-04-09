$(function () {
    var target = $('.counterFirst');
    var targetPos = target.offset().top;
    var winHeight = $(window).height();
    var scrollToElem = targetPos - winHeight;
    var isStarted = true;
    $(window).scroll(function () {
        var winScrollTop = $(this).scrollTop();
        if (winScrollTop > scrollToElem && isStarted) {
            isStarted = false;
            $({numberValue: 0}).animate({numberValue: 6}, {
                duration: 4500, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд
                easing: "linear",
                step: function (val) {
                    $(".counterFirst").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
                }
            });
            $({numberValue: 0}).animate({numberValue: 30}, {
                duration: 4500, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд
                easing: "linear",
                step: function (val) {
                    $(".counterSecond").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
                }
            });
            $({numberValue: 0}).animate({numberValue: 21024}, {
                duration: 4500, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд
                easing: "linear",
                step: function (val) {
                    $(".counterThird").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
                }
            });
        }
    });
});


