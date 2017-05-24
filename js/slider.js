var numeroImagenes = [1, 2];
var slides = [];
var slideActual = 1;

function seleccionarSlide(numeroSlide) {
    $('img.slide[data-img!=' + numeroSlide + ']').hide()
    $('img.slide[data-img=' + numeroSlide + ']').show()

    $('.fa-circle[data-img-ind!=' + numeroSlide + ']').removeClass('active')
    $('.fa-circle[data-img-ind=' + numeroSlide + ']').addClass('active')
    
    $('.barra').remove();
    $('#slider').append('<div class="barra"></div>');
}

function numeroSiguienteSlide() {
    if (numeroImagenes.indexOf(slideActual + 1) === -1) {
        return numeroImagenes[0];
    } else {
        return slideActual + 1;
    }
}

function numeroAnteriorSlide() {
    if (numeroImagenes.indexOf(slideActual - 1) === -1) {
        return numeroImagenes[numeroImagenes.length - 1];
    } else {
        return slideActual - 1;
    }
}


$(document).on('ready', function () {
    var intervalos = 200;
    var intervaloActual = -5;
    setInterval(function () {
        if (intervaloActual > intervalos) {
            intervaloActual = 0;
            var siguiente = numeroSiguienteSlide();
            slideActual = siguiente;
            seleccionarSlide(siguiente);
        }
        else intervaloActual += 2;
        $('.barra').css({ width: (intervaloActual / 2) + '%' })
    }, 75)

    seleccionarSlide(1);

    // Capturar eventos
    $('.adelante').on('click', function (e) {
        e.preventDefault();
        var siguiente = numeroSiguienteSlide();
        slideActual = siguiente;
        seleccionarSlide(siguiente);
        intervaloActual = 0;
    });

    $('.atras').on('click', function (e) {
        e.preventDefault();
        var anterior = numeroAnteriorSlide();
        slideActual = anterior;
        seleccionarSlide(anterior);
        intervaloActual = 0;
    });

    $('.fa-circle[data-img-ind]').each(function () {
        var numSlide = $(this).attr('data-img-ind');
        $('.fa-circle[data-img-ind=' + numSlide + ']').on('click', function (e) {
            e.preventDefault();
            seleccionarSlide(numSlide);
            intervaloActual = 0;
        })
    });
});

