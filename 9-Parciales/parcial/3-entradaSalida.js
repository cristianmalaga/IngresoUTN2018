//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var ancho;
	var largo;
	var metros;

	ancho = parseInt(document.getElementById("ancho").value);
	largo = parseInt(document.getElementById("largo").value);

	metros = ancho*largo;

	metros = metros*6;

	alert("Se Necesitan " + metros + "m de alambre");
	
}

