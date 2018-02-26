//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var num;
	var porcentaje;

	num = parseInt(prompt("Ingrese el Importe"));

	porcentaje = num*0.21;

	num = num + porcentaje;

	document.getElementById("importe").value = num;
	
}

