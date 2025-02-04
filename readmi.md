**Juego 🎁** 
-----------------------------------------------------------------------------------------------------------------

Buenas tardes a continuacion subo mi version del desafio propuesto por Alura Latam del Amigo secreto

con el principio de porder fortalecer las habilidades de lógica de programacion implentando lo aprendido con JavaScript

El Juego consiste en agregar nombre de amigos guardandolos en una lista , mostrarlo en pantalla a medida que vayan ingresando, tomar el cuenta que no se puede agregar

un campo vacio y por ultimo sortear de manera aleatoria entre todos los nombres ingresados y mostrar el ganador en pantalla

----------------------------------------------------------------------------------------------------------------
Implementacion de lo aprendido
---------------------------------------------------------------------------------------------------------------
1 Al ingresar el nombre implemtamos lo aprendido de listas y funciones

2 Pare evitar el acceso de un registro sin nombre creamos una estructura condicional IF ya que tenemos que comparar que se ingrese un nombre y que no este vacío el campo

3 Utilizando la interfaz DOM (Document Object Model) hacemos referencia a valores especificos meidante el atributo ID

4 Tomando lo ingresado por el usuario con una funcion llamada mostrarPantalla() podemos mostrar los monbres ingresados

5 Por ultimo creamos una funcion sortearAmigo() la cual usando Math.random realizamos el sorteo de la lista ingresada mostrandolo asi por pantalla
----------------------------------------------------------------------------------------------------------------
Estructura del proyecto
----------------------------------------------------------------------------------------------------------------
1 index.html : Contiene la estructura html de la pagin

2 style.css : Contiene el estilo de la interfaz de usuario

3 app.js : Contiene la logica implentada par que el usuario interactue
----------------------------------------------------------------------------------------------------------------------
Fucionalidades:
-----------------------------------------------------------------------------------------------------------------------
1 Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".

2 Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.

3 Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

4 Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.

