function Mostrar()
{

	var contadorNeg = 0;
	var contadorPos = 0;
	var contadorCeros = 0;
	var contadorPares = 0;
	var acumuladorPos = 0;
	var acumuladorNeg = 0;
	var diferencia;
	var seguir;
	var numero;
	var promedioPos = 0;
	var promedioNeg = 0;

	do
	{
		numero = parseInt(prompt("Ingrese un numero: "));
		
		if( numero > 0)
		{
			contadorPos++;
			acumuladorPos = acumuladorPos + numero;
		}
		else if( numero < 0)
		{
			contadorNeg++;
			acumuladorNeg = acumuladorNeg + numero;
		}
		else
		{
			contadorCeros++;
		}
		if(numero % 2 == 0)
		{
			contadorPares++;
		}

		seguir = prompt("Desea continuar?: ");	
	}while(seguir == 's');

if(contadorPos !=0)
{
	promedioPos = acumuladorPos / contadorPos;
}
if(contadorNeg !=0)
{
	promedioNeg = acumuladorNeg / contadorNeg;
}
	diferencia = contadorPos - contadorNeg;
		
	    document.




}//FIN DE LA FUNCIÓN