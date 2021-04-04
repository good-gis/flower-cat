$(function () {

    var target_block = $(".counterFirst"); // Ищем блок
    var blockStatus = true;

    $(window).scroll(function () {

        var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));
        if (scrollEvent && blockStatus) {
            blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.

            $({numberValue: 0}).animate({numberValue: 6}, {
                duration: 3000, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд
                easing: "linear",
                step: function (val) {
                    $(".counterFirst").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
                }
            });
            $({numberValue: 0}).animate({numberValue: 30}, {
                duration: 3000, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд
                easing: "linear",
                step: function (val) {
                    $(".counterSecond").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
                }
            });
            $({numberValue: 0}).animate({numberValue: 21024}, {
                duration: 3000, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд
                easing: "linear",
                step: function (val) {
                    $(".counterThird").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
                }
            });
        }
    });
});
