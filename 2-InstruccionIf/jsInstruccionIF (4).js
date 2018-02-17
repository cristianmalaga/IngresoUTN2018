function Mostrar()
{
//tomo la edad  
var edad;
edad=document.getElementById('edad').value;
edad=parseInt(edad);
if ( edad>=13 && edad<=17){
alert ( "usted es un adolescente" );
    }
    else 
    { 
        alert(" usted es menor de edad");
    }
}
//FIN DE LA FUNCIÓN