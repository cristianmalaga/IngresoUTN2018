//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
	var max;
	var min;
	var c;
	var flag=0;

	for(c=0;c<7;c++)
	{
		importe = parseInt(prompt("Ingrese el Importe de las Ventas"));

		while(importe<=0)
		{
			importe = parseInt(prompt("Reingrese un nuevo numero"));
		}

		while(flag==0)
		{
			max = importe;
			min = importe;
			flag=1

		}

		if(max<importe)
		{
			max = importe;
		}
		if(min>importe)
		{
			min = importe;
		}
	}

	alert("El Maximo importe fue: " + max + ". Y el minimo fue: " + min);
	
}

