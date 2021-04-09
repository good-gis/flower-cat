$(document).ready(function(){
    $(".main-button-left").sparkle({
        "count": 50, // Количество искр
        "color": "rainbow", // Цвета искр. Можно использовать массив ["#ff0080","#ff0080","#FFF"]
        "minSize": 5, // Минимальный размер искры
        "maxSize": 7, // Максимальный размер искры
        "overlap": 10, // На сколько пикселей выходить за края объекта
        "direction": "both", // Направление движения (both, up, down)
        "speed": 1, // Скорость движения искр
        "fadeSpeed": 1000 // Скорость исчезания/появления
    });

    $(".main-button-right").sparkle({
        "count": 50, // Количество искр
        "color": "rainbow", // Цвета искр. Можно использовать массив ["#ff0080","#ff0080","#FFF"]
        "minSize": 5, // Минимальный размер искры
        "maxSize": 7, // Максимальный размер искры
        "overlap": 10, // На сколько пикселей выходить за края объекта
        "direction": "both", // Направление движения (both, up, down)
        "speed": 1, // Скорость движения искр
        "fadeSpeed": 1000 // Скорость исчезания/появления
    });

    $("#subscribe").sparkle({
        "count": 50, // Количество искр
        "color": "rainbow", // Цвета искр. Можно использовать массив ["#ff0080","#ff0080","#FFF"]
        "minSize": 5, // Минимальный размер искры
        "maxSize": 7, // Максимальный размер искры
        "overlap": 10, // На сколько пикселей выходить за края объекта
        "direction": "both", // Направление движения (both, up, down)
        "speed": 1, // Скорость движения искр
        "fadeSpeed": 1000 // Скорость исчезания/появления
    });

    $(".btn-support").sparkle({
        "count": 45, // Количество искр
        "color": "rainbow", // Цвета искр. Можно использовать массив ["#ff0080","#ff0080","#FFF"]
        "minSize": 2, // Минимальный размер искры
        "maxSize": 5, // Максимальный размер искры
        "overlap": 3, // На сколько пикселей выходить за края объекта
        "direction": "both", // Направление движения (both, up, down)
        "speed": 1, // Скорость движения искр
        "fadeSpeed": 1000 // Скорость исчезания/появления
    });

    $("#bs-navbar").sparkleAlways({
        "count": 150, // Количество искр
        "color": "rainbow", // Цвета искр. Можно использовать массив ["#ff0080","#ff0080","#FFF"]
        "minSize": 2, // Минимальный размер искры
        "maxSize": 5, // Максимальный размер искры
        "overlap": 0, // На сколько пикселей выходить за края объекта
        "direction": "both", // Направление движения (both, up, down)
        "speed": 1, // Скорость движения искр
        "fadeSpeed": 1000 // Скорость исчезания/появления
    });
});
