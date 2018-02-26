//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var c;
	var notas;
	var sexo;
	var respuesta = true;
	var contador=0;
	var promedio;
	var min;
	var flag=0;
	var varones=0;
	var acumulador=0;

	for(c=0;c<6;c++)
	{
		notas = parseInt(prompt("Ingrese las notas."));

		while(notas<0 || notas>10)
		{
			notas = parseInt(prompt("Reingrese un numero valido."));
		}

		sexo = prompt("Ingrese el sexo");

		while(sexo != "F" && sexo != "M" && sexo != "f" && sexo != "m")
		{
			sexo = prompt("Ingrese un dato valido(F/f o M/m)");
		}

		if(flag==0)
		{
			min=notas;
			flag=1;
		}
		if(min>notas)
		{
			min=notas;
		}
		
		if(sexo=="m" || sexo=="M" && notas<=6)
		{
			varones++;
		}

		acumulador = notas + acumulador;
		contador++;

	}

	promedio = acumulador/contador;

	alert("El promedio de las notas es: " + promedio);
	alert("La nota mas baja es: " + min);
	alert("Varones q su nota es mas de 6: " + varones);

	
	
}

