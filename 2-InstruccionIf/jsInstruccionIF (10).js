function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var numero;
	
var numero = Math.floor(Math.random() * 10) + 1;

if( numero == 9 || numero == 10)

{
    alert("EXCELENTE " + numero);
}
else if( numero > 4)
{
    alert("APROBÓ " + numero);
}
else
{
    alert("Vamos, la próxima se puede " + numero);
}


}//FIN DE LA FUNCIÓN