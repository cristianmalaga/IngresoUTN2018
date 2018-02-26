//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var num;
	var acumulador=0;
	var contador=0;
	var max;
	var min;
	var pares=0;
	var promedio;
	var respuesta=true;
	var flag=0

	while(respuesta==true)
	{
		num = parseInt(prompt("Ingrese un numero positivo."));


		while(num<=0)
		{
			num = parseInt(prompt("Ingrese un dato valido."));
		}

		while(flag==0)
		{
			max=num;
			min=num;
			flag=1;
		}

		if(max<num)
		{
			max = num;
		}
		if(min>num)
		{
			min = num;
		}
	
		if(num%2==0 && num != 0)
		{
			pares++;
		}

		acumulador = acumulador + num;

		contador++;

		respuesta = confirm("¿Desea continuar?")
	}
	promedio = acumulador/contador;
	document.write("La cantidad de Numeros pares es: " + pares + "<br>" + "El promedio de todos los numeros es: " + promedio + "<br>" + "La suma de todos los numeros es: " + acumulador + "<br>" + "El numero maximo es: " + max + "<br>" + "El numero minimo es: " + min);

}

