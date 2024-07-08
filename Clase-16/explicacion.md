clase 16
ejercicio funciones

function esVocal(letra){
if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
return true
}
else{
return false
}
}

const letra = "o";

console.log(esVocal(letra));

Esto me retornará un false o true si es o no vocal

Cuando un afuncion retorna un booleano siempre es conveniente poner un verbo estar.

como mejorar la funcion anterior

function esVocal(letra){
return (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u")
}

console.log(esVocal("a"))

    las comparaciones de igualdad siempre va a ser un booleano.

        en este caso se simplifico, porque si lo que sta en tre () es verdadero me retornara un true, o false si no se cumple, porque las igualdades siempre dan eso.
        en etse ejemplo me return por console un true porqwue "a" esVocal.

Mezclar array y bucles

Ejemplo
Por cada nombre quiero que aparesca un mensaje por consola diciendo "hola" y el nombre.

const nombres = ["pepe", "juan", "maria", "ezequiel"]

Aca tengo un array y para realizar un recorrido en un array tengo que usar el bucle for, porque yo se cuantos elementos tengo, yo quiero que se repita algo la cantidad de elementos que yo tenga.

otro ejemplo (intermedio)

quiero un contador del 0 al 3

for(let iterador = 0; iterador < 4)

aca en este ejemplo pusimos que cuente hasta cuatro, pero si lo quiero automatizar debemos usar lenght, para que siempre cuente el largo de elementos. Pra no poner yo cuantos lelemntos hay.

Se usa asi

const nombres = ["pepe", "juan", "maria", "ezequiel"]

for(let iterador = 0; iterador < nombres.length; iterador = iterador + 1){
console.log(iterador)
}

Me va a mostrar por consola el lenght, si yo agrego otro elemento a mi array me va a mostrar por consola el elemento nuevo, solo el numero, porque use un lenght.

ahora si quiero ver el mensaje "Hola"+ el nombre hago asi.

const nombres = ["pepe", "juan", "maria", "ezequiel"]

for(let iterador = 0; iterador < nombres.length; iterador = iterador + 1){
console.log("Hola " + nombres[iterador])
}

Ahora para mejorar aun mas el array usamos index, porque se cuentan las posiciones en el array, y quedaria asi. Solo para una buena practica.

const nombres = ["pepe", "juan", "maria", "ezequiel"]

for(let index = 0; index < nombres.length; index = index + 1){
console.log("Hola " + nombres[index])
}

o mejor aun se puede poner i y listo, ya quedaria abreviado y ya.

onst nombres = ["pepe", "juan", "maria", "ezequiel"]

for(let i = 0; i < nombres.length; i = i + 1){
console.log("Hola " + nombres[i])
}

     para que se pueda leer mejor vamos a crear una variable, solo par aque se lea mejor y quedde mejor a la vista.

const nombres = ["pepe", "juan", "maria", "ezequiel"]

for(let i = 0; i < nombres.length; i = i + 1){
let nombre = nombres[i]
console.log("Hola " + nombre)
}

Se usaria el singular, y se guarda nombre[i]

Array de objetos

const carrito = [
{
nombre: "tv samsung",
precio: 300,
cantidad: 3
},
{
nombre: "patineta",
precio: 30,
cantidad: 1

    },

]
/\* Por cada elemento de mi carrito mostrar por consola:

Has comprado el producto {producto.nombre} x {producto.cantidad} a un precio unitario de ${producto.precios} \*/

for (let index = 0; index < carrito.length; index = index + 1) {
let producto = carrito[index]

    console.log("Has comprado el producto " + producto.nombre + " x " + producto.cantidad + " a un precio unitario de " + producto.precio)

}

Ejercicio

Por cada personaje mostrar el siguiente mensaje por consola
"Hola mi nombre es {personaje.nombre} {apellido.nombre} y tengo {personaje.edad} años"

opcional
Al finalizar el recorrido mostar por consola "total de edades: {sumatoria de las edades de los usuarios}"

const personajes = [
    {
        nombres: "pepe",
        apellido: "suarez",
        edad: 20
    },

    {
        nombres: "maria",
        apellido: "casanova",
        edad: 40
    },

    {
        nombres: "ezequiel",
        apellido: "rodriguez",
        edad: 35
    },
]

for (let index = 0; index < personajes.length; index = index + 1) {
    let personaje = personajes[index]

    console.log("Hola mi nombre es " + personaje.nombres + " " + personaje.apellido + " y tengo " + personaje.edad + " años")

}

Explicacion del codigo

Tenemos que recorrer el array y por consola nos deberia mostrar "Hola mi nombre es {personaje.nombre} {apellido.nombre} y tengo {personaje.edad} años" 

Deberia aparecer una leyenda parecida por cada personaje con sus datos.

Entonces

Primero creamos un bucle for, con este se recorrera todo el array.

let index = 0; : nos esta indicando que iniciara el recorrido desde el elemento 0, recordemos que los elementos empiezan desde el 0, luego el 1, y asi sucesivamente, por lo tanto el 0 nos indicaria el primer elemento, el 1 segundo elementeo y asi sucesivamente.

index < personajes.length; : esta condicion nos asegura que el bucle recorra todo el array, porque el estamos diciendo con length que recorra todo el "largo" del array, una vez que lo recorrio el bucle for finaliza.


index = index + 1 : esta condicion nos indica que el bucle de saltarse de uno en uno, es decir primero recoore el elemento 0 "pepe", la condicion index = index + 1 nos indica que se pase al siguiente elemento 1 que es "maria", entonces el bucle va pasando de uno en uno los elementos, si por ejemplo pusieramos index = index + 2, el bucle primero pasa por elemento 0 "pepe" y cuando vuelva a recorrer el array pasaria por el elemento 2 que es "ezequiel", salteandose el elemento 1 que es ""maria, en resumen si ponemos 1, recorre de uno en uno todo el array, si ponemos 2 recorre de 2 en 2 el array, si ponemos 3 recorre de 3 en 3 y asi sucesivamente.

y ahora creamos una variable

const personaje = personajes[index]; : esto toma el elemento del array "personajes" en la posicision "index" y lo guarda en la variable const personaje. Siempre es recomendable cuando se hace esta variable utilizar el mismo nombre que usamos para hacxer el array pero usando el singular, por ejemplo si usamos "personajes en el array" cuandfo creemos la variable usamos "personaje", o alguna palabra que nos haga referencia al array, siempre hay que ser declarativos para que sea mas facil de leer.

y ahora console.log

Nos mostrara en consola del navegador el contenido del objeto "personaje" que hemos seleccionado del array "personajes", en este caso nos mostrara los 3 objetos porque asi fue como lo indicamos en index < personajes.length; dentyro del bucle for.
Importante: las " " nos genera un espacio. 

 console.log("Hola mi nombre es " + personaje.nombres + " " + personaje.apellido + " y tengo " + personaje.edad + " años")

y ahora la segunda parte del ejercicio

opcional
Al finalizar el recorrido mostar por consola "total de edades: {sumatoria de las edades de los usuarios}"

let sumatoriaEdad = 0
const personajes = [
    {
        nombres: "pepe",
        apellido: "suarez",
        edad: 20
    },

    {
        nombres: "maria",
        apellido: "casanova",
        edad: 40
    },

    {
        nombres: "ezequiel",
        apellido: "rodriguez",
        edad: 35
    },
]

for (let index = 0; index < personajes.length; index = index + 1) {
    const personaje = personajes[index]

    console.log("Hola mi nombre es " + personaje.nombres + " " + personaje.apellido + " y tengo " + personaje.edad + " años")
    sumatoriaEdad = sumatoriaEdad + personaje.edad
}

console.log("La sumatoria de las edades es " + sumatoriaEdad)

Explicación del codigo

let sumatoriaEdad = 0 : primero creo esta variable al principio del resto del codigo antes de que comience cualquier operacion de suma dentro del bucle for, porque cuando es un acumulador la variable la tengo que poner afuera, y se establece de manera explicita que "sumatoriaEdad" comienza con un valor de cero, esto es importante porque indica desde el principio cual sera el estado inicial de "sumatoiriaEdad" antes de realizar cualquier operacion de suma.

sumatoriaEdad = sumatoriaEdad + personaje.edad : anteriormente habiamos establecido ela variable sumatoriaEdad = 0, en la cual se van a almacenar las edades de todos los personajes, con esta declaracion, sumatoriaEdad = sumatoriaEdad + personaje.edad,  estamos queriendo que en cada iteracion se vaya sumando las edades de los personajes en la variable, sumatoriaEdad.

console.log("La sumatoria de las edades es " + sumatoriaEdad) : nos muestra globalmente por consola la suma de las edades.

Una mejor forma de usar for

