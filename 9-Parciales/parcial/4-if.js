//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var num1;
	var num2;
	var resultado;

	num1 = parseInt(prompt("Ingrese el Primer Numero"));
	num2 = parseInt(prompt("Ingrese el Segundo Numero"));

	if(num1 == num2)
	{
		resultado = num1*num2;
	}
	else if(num1>num2)
	{
		resultado = num1-num2;
	}
	else
	{
		resultado = num1 + num2;
	}

	document.write("El resultado es: " + resultado);
	
}

