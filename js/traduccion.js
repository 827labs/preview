var LANG_KEY = 'com.827labs.lang';

function setIdiomaActual(idioma) {
    localStorage[LANG_KEY] = idioma;
    rellenarCampos();
}

function getIdiomaActual() {
    if (typeof localStorage[LANG_KEY] === 'undefined') {
        localStorage[LANG_KEY] = 'es';
    }

    return IDIOMAS[localStorage[LANG_KEY]];
}

function rellenarCampos() {
    var idioma = getIdiomaActual();
    
    $('*[data-traduccion]').each(function () {
        var elementTranslatableKey = $(this).attr('data-traduccion');
        var transation = idioma.strings[elementTranslatableKey];
        
        if(!transation) {
            return;
        }

        if (transation.html) {
            $(this).html(transation.html);
        }
        
        if (transation.attr) {
            for (var propiedad in transation.attr) {
                $(this).attr(propiedad, transation.attr[propiedad]);
            }
        }
    });
}

function renderComboIdiomas() {
    var keys = Object.keys(IDIOMAS);
    var actual = localStorage[LANG_KEY];
    
    $('#idioma').html('');
    
    for (var i = 0; i < keys.length; i++) {
        var idioma = IDIOMAS[keys[i]];
        if (keys[i] === actual) {
            $('#idioma').append('<option selected value="' + keys[i] + '">' + idioma.nombre + '</option>');
        } else {
            $('#idioma').append('<option value="' + keys[i] + '">' + idioma.nombre + '</option>');
        }
    }
}

$(document).on('ready', function () {
    
    renderComboIdiomas();
    rellenarCampos();

    $('#idioma').on('change', function () {
        $('#loader').fadeIn('slow');
        setIdiomaActual($(this).val());
        renderComboIdiomas();
        setTimeout(function () {
            $("#loader").fadeOut('slow');
        }, 300);
    })


});