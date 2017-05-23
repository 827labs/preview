
$(document).on('ready', function () {
    var keys = Object.keys(IDIOMAS);
    for (var i = 0; i < keys.length; i++) {
        var idioma = IDIOMAS[keys[i]];
        $('#idioma').append('<option value="' + keys[i] + '">' + idioma.nombre + '</option>');
    }

    
});