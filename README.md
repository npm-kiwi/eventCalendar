# eventCalendar
Calendar project
Calendario de eventos

App para añadir eventos en un calendario y aprender a guardar de manera local con local storage

Hacemos 3 archivos un html un css y un js
Vemos el archivo html que contendra los nombre de clases id y demas que luego usaremos para referenciar en el archivo main.js
Primero necesitamos una variable que modificaremos mas adelante , se llamara events y sera igual a un array vacio donde guarderemos toda la info de los eventos
Necesitamos sacar las referencias de cada uno de los elementos los inputs y los botones
Usamos querySelector
Referenciamos taskContainer también con querySelector
Traemos del document a form usando querySelector. Le aplicamos un addEventListener, como sabemos un addEventListener es una función flecha  que recibe como primer parametro el tipo de evento en este caso es un evento “submit”, y como argumento un evento resumido con la letra e entre paréntesis y como cuerpo de la funcion flecha recibira un evento o , e ,que recibe un metodo preventDefault
Creamos un buttonAdd. addEventListener para que cada vez que yo le de enter a cualquiera de mis inputs ,ejecute el método que vamos a implementar aquí que va a ser un preventDefault y luego vamos a hacer debajo un addEvent() este metodo aun no existe pero lo vamos a crear

Hacemos una funcion que se llame addEvent, lo primero que hacemos es validar si eventName.value es igual a vacio  O eventDate.value es igual a vacio quiero que retornes nada
 Es decir que acabe la funcion con el return
Sino tengo que mandar a llamar a una funcion .Porque? Porque yo podria crear un evento con una fecha anterior  a la fecha actual por eso hacvemos la validacion sigueinte 

Si dateDiff es decir la diferencia de fechas entre parentesis eventDate.value tienq ue ser menor a cero entonces tambien que no haga nada y solo acabe con el return

Lo que estamos haciendo es que si la difrencia de la fecha actual en donde estamos creando el evento a la fecha del evento es negativa es decir ya pasaron esos dias quiero que no agregues nada y termines la funcion.
Si eso no pasa es decir estamos ingresando una fecha que es posterior a la fecha actual  y aparte eventName  y eventDate tienen contenido entonces ya podemos crear nuestro nuevo evento

Entonces hacemos una constante que se llame newEvent va a ser igual a nuevo objeto que va a contener un propiedad id con value   Math.random por cien o el limite que necesites (.toString(36).slice(3), vamos a quitarles los 3 primeros elementos a este id
Luego una propiedad name con value eventName.value
Una propiedad date con value de eventDate.value
Listo ya tenemos nuestro evento y vamos a agregarlo a nuestro arreglo de eventos

Hacemos unshift sobre events, redordar que unshift e para agregar un elemento al incio del arreglo y como parametro de unshift ponemos newEvent

Ponemos eventName.value Y lo igualamos a un string vacio
Mandamos a llamar a renderEvents()

Hasta aca tenemos dos funciones que aun no tenemos dateDiff y renderEvents las cuales las haremos ahora

Hacemos una funcion que se llame dateDiff(d) , esta funcion va a regresar el numero 
De dias que faltan desde la fecha actual a la fecha destino , si el valor es negativo ya vimos que nos va a permitir seguir con la logica que es crear el evento y añadirlo a mi lista o arreglo de evento
Dentro de la funcion creamos una varible que se llame targetDate que va a ser igual a new Date(d)
Creamos otra que se llame today tambien igual a new Date() no lleva parámetro para que no tengan la misma informacion 
Creamos una variable que se llame  difference que va a ser igual a targetDate.getTime() esto va a regresar el tiempo en un  numero y le restamos today.getTime()
Con esto restamos la fecha destino a nuestra fecha de hoy
Esto regresara un numero pero eso no nos dice cuantos dias 
Definimos otra variable que de llame days que es igual a Mat.ceil() para redondear hacia el sigueinte numero y como parametro ponemos la diferencia de mi numero ,entre ,y tengo que dividirlo basado en que 1 dia tiene 24 hs y cada hora tiene 3600 segundos y cada segundo tiene 1000 milisegundos 
(diference / (1000 * 3600 * 24)
Por ultimo retornamos days


Nos falta la funcion para renderizar nuestros eventos
Hacemos una funcion llamada renderEvents , creamos una variable que se llame eventsHTML va a ser igual a , llamamos al arreglo events y le aplicamos un map y ahora para cada evento vamos a ejecutar la siguiente función event => {} 
Dentro de las llaves hacemos un return y abrimos las template strings y creamos una estructura dentro de las template
Un div que tendra la clase event y dentro de ese div hacemos otro div que tendra la clase days dentro de este div colocamos un span con la clase days-number y ya en el span colocaremos la diferencia de dias ${dateDiff(event.date)} , recordar que event es un arreglo con 3 propiedades id, date y name , aca solo estamos extrayendo la propiedad date y como ya tenemos la funcion dateDiff nos dira cuantos dias faltan para ese evento
Creamos otro span hermanado al anterior con la clase days-text y solo colocamos la palabra dias dentro del span
Hacemos otro div hermanado a el div con la clase days 
Allí colocaremos toda la info y las acciones
Tendrá una clase event-name y dentro tendrá nuestra expresión que queremos mostras que seria ${event.name}
Hacemos otro div hermanado también pero con la clase event-date que tendra otra expresion pero en vez de event.name tendra event.date , esto nos muestra la fecha tal cual
Creamos otro div hermanado como el anterior con la clase actions , nos dara el id de lo que vamos a eleiminar y dentro colocaremos un button , este boton nos servira para eliminar uno de esos eventos , le damos el nombre de Eliminar y le ponemos un atributo llamado data-id="${event. id}” y una clase que se llame bDelete 
Ya finalizada la estructura y fuera del map
Hacemos un 
document.querySelector("#tasksContainer").innerHTML = eventsHTML.join("");
Debajo hacemos un querySelectorAll a todos los botones con la clase .bDelete le aplicamos un forEach donde para cada button voy a agregarle su listener es decir hacemos un addEventListener, el listener va a ser de tipo click y queremos obtener le id entonces  creamos una varibale con nombre id y la igualamos a  button.getAtribute y como parametro la propiedad data-id
Despues tenemos que eliminarlo la forma mas faciol de eliminarlo es decirle mi arreglo de event lo igualo a events.filter voy a filtrar cada evento por el event. id sea diferente al id 
events =events.filter(event => event. id !== id)





Mandamos a llamar a renderEvents()

Ahora vamos a ver el tema de almacenar cada uno de  nuestros eventos para despues cargarlos  al momento de abrir nuestra app para eso usaremos el local storage que es como la API de almacenamiento que tenemos en js para nuestro navegador  
Solamente necesitamos guardar informacion de la estructura clave, valor, quiere decir que vamos a asignarle a lo que vayamos  a guardar un nombre y todo lo que vayamos a guardar lo tenemos que guardar como una cadena de texto

Crearemos unas funciones 
Creamos una funcion que se llame save como parametro recibirá data
Dentro de la logica le decimos que localStorage que es el objeto de almacenamiento le aplicamos un metodo que se llama setItem como parametro recibe items, data
Ya con eso guardamos la info en nuestro navegador web
Creamos otra funcion que se llame load y hacemos lo contrtario vamos a regresar la info usando un return localStorage y en ves de setItem usamos el metodo getItem y comom  lo buscmaos por el nombre recibe de parametro ‘items’

Volvemos arriba donde asigamos las variables y creamos otra que se llame const json y la igualamos a load() , acá voy a almacenar lo que tenga guardado en json
Creamos otra variable llamada  arr la igualamos a  lo que tengo en JSON.parse(json) 
Debajo ponemos
 events igual a [...arr]
mandamos a llamar a renderEvents() para que dibuje la info en el caso de traer info
La informacion se va a guardar cada vez que creemos correctamente un evento como por ejem en el events.unshift , entonces vamos a newEvent y debajo de events.unshift(newEvent) ponemos
save(JSON.stringify(events)) lo que le estamos diciendo es que convertiremos en string nuestro arreglo de eventos



