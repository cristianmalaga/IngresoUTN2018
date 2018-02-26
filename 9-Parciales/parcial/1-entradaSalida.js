//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var num;
	var perimetro;

	num = document.getElementById("lado").value;

	perimetro = num*3;

	alert("El perimetro del triangulo es: " + perimetro);
	
}

