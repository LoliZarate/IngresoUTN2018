function Mostrar()
{

	//var contador=0;
	var numero;
	var mayor;
	var menor;
	var numero;
	var seguir;
	var flag = 0;

	do
	{
		numero = parseInt(prompt("Ingrese un numero: "));
		//contador++;

		//if ( contador == 1)
		//{
		//	menor = numero;
		//	mayor = numero;
		//}
		if(numero > mayor || flag == 0) //(contador > mayor)
		{
			mayor = numero;
		}
		if(numero < menor || flag == 0) //(numero < menor)
		{
			menor = numero;
			flag = 1;
		}

		seguir = prompt("Desea continuar?: ");
	}while(seguir == 's');

document.getElementById("maximo").value = "El mayor es " + mayor;
document.getElementById("minimo").value = "El menor es " + menor;



}//FIN DE LA FUNCIÓN