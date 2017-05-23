
var meses = [
	'Enero',
	'Febrero',
	'Marzo',
	'Abril',
	'Mayo',
	'Junio',
	'Julio',
	'Agosto',
	'Septiembre',
	'Octubre',
	'Noviembre',
	'Diciembre'
];

$(document).on('ready', function () {
	var fecha = new Date();
	var dia = fecha.getDate(),
		mes = fecha.getMonth(),
		anio = fecha.getFullYear();
	

	$('#fecha').html('Montevideo, ' + dia + ' de ' + meses[mes] + ' del ' + anio + '.');
	// el JS* no soporta unicode (eñes, tildes, etc)

});