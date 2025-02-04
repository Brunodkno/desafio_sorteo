
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






