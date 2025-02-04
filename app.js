// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
/* Fucionalidades:

1 Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".

2 Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.

3 Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

4 Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.*/

1





//------------------------------------------------------------------------------------------------
let nombre = []

function agregarAmigo() {
    let nombreIngresado = document.getElementById("amigo").value;
    if (nombreIngresado == ' ' ) {  
        alert('ingrese un nombre de amigo valido') 
        return;        // que no este vacio el nombre ingresado
                   
        } else{ nombre.push(nombreIngresado)   //agregando elemento al arreglo
                mostrarPantalla()
                 
            }          
     
    document.getElementById("amigo").value= " "             //vaciar el input
}
agregarAmigo()
//-------------------------------------------------------------------------------------------------
function mostrarPantalla() {
   let lista = document.getElementById("listaAmigos");
   lista.innerHTML = " ";
   for (let elementoActual of nombre) {
    lista.innerHTML += `<li> ${elementoActual}   </li>`  ;
    
   }
}   


//--------------------------------------------------------------------------------------------------

function sortearAmigo(resultado) {
    let random = Math.floor(Math.random() * nombre.length);
    document.getElementById("resultado").innerHTML = nombre[random];
    document.getElementById("amigo").value= " "
    nombre= [] //limpiamos el array para poder ingresar amigos y sortear nuevamente
    

}






