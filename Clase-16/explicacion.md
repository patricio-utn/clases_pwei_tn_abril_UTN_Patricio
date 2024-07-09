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

Una mejor forma de usar el codigo anterior usando for of

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

    for(const personaje of personajes){
        console.log(personaje)
    }

Expplicacion del codigo enterior

Se declara un array llamado personajes qu econtiene 3 objetos, cada uno de ellos representa un personaje con 3 propiedades: nombre , apellido, edad.

for(const personaje of personajes) : este bucle recorre cada objeto en el array personajes, en cada iteracion, la variable creada personaje(se usa esta pero puede ponerse lo que uno quiera, generalmente se usa la variable del array pero en singular) contiene uno de los objetos del array. Usando for of se simplifica muchisimo la linea d ecodigo, solo en algunos casos debemos usar la version anterior, de todas formas se puede usar una u otra de acuerdo anustra preferencia.

console.log(personaje) : en cada iteracion, el objeto actual almacenado en la variable personaje se muestra en consola.

La forma anterior usando la suma total de edades

sumEdad = 0
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

    for(const personaje of personajes){
        console.log(personaje)
        sumEdad = sumEdad + personaje.edad
    } 
console.log("la suma total de edades es " + sumEdad)

for in

Recorre las keys(las propiedades del objeto)

Ejemplo

const datos = {
    nombre: "pepe"
    apellido: "suarez"
    dni: "526587454"
}

for(let propiedad in datos){
    console.log(propiedad)
}

Explicacion del codigo

const datos = {
    nombre: "pepe"
    apellido: "suarez"
    dni: "526587454"
}

Creo un objeto con 3 propiedades, nombre, apellido y dni.

for(let propiedad in datos) : hago un for in con una variable llamada propiedad, la cual recorrera mi objeto y me mostrara las propiedades del mismo.

console.log(propiedad) : me muestra por consola la variable propiedad, donde se fueron guardando las propiedades de mi objeto, nombre, apellido y dni.

Utilizacion practica del codigo anterior

const datos = {
    nombre: "pepe"
    apellido: "suarez"
    dni: "526587454"
}

let resultado = " "

for(let propiedad in datos){
    resultado = resultado + "\n " + propiedad +": " + datos[propiedad];
}

Explicacion del codigo anterior

const datos = {
    nombre: "pepe",
    apellido: "suarez",
    dni: "526587454",
}

const datos: Se declara un objeto datos usando const, lo que significa que no se puede reasignar a otra referencia, pero sus propiedades sí pueden ser modificadas.

El objeto datos contiene tres propiedades:

    nombre: Tiene el valor "pepe".
    apellido: Tiene el valor "suarez".
    dni: Tiene el valor "526587454".

Inicializacion de la variable resultado

let resultado = ""  : Se declara una variable resultado usando let, permitiendo que su valor sea reasignado. Inicialmente, resultado es una cadena vacía (""), se ponen comillas vacias, als cuales luego contendran el resultado de la iteracion. Esto define una cadena vacía llamada resultado que se usará para guardar el resultado final.

for(let propiedad in datos) : con for in, recorro todas las propiedades de un objeto, una por una.

Propiedad, es una variable que representa el nombre de cada propiedad del objeto datos en cada iteracion del bucle.

resultado = resultado + "\n " + propiedad +": " + datos[propiedad]; : 

resultado es una variable que acumula (o guarda) la información que queremos mostrar al final.

"\n" es un código especial que significa "nueva línea", sirve para añadir un salto de línea en el texto. Para que no quede todo junto, sino que se muestren una propiedad del objeto debajo de la otra.

propiedad es el nombre de cada propiedad del objeto datos.

datos[propiedad] es la manera de acceder al valor de cada propiedad del objeto datos. Los corchetes nos permiten acceder al valor de la propiedad, y en cada iteracion se mostrara por consola el valor de cada propiedad.

Metodos avanzados de array

for each

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
personajes.forEach(function (personaje){
        console.log(personaje)
    })

Explicacion del codigo

Con forEach iteramos cada elemento, este caso es un objeto, del array, cuando se usa forEach debemos pasarle una funcion que se ejecutara para cada elemento del array, y se usa usa una funcion anonima, y se llama asi porque no tiene nombre. la funtion toma un parametro en este caso llamado personaje, y representa cada elemento en cada iteracion.

filter

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

    const personajesMayoresDeEdad = personajes.filter(function(personaje){
            return personaje.edad >= 18
        })

        console.log(personajesMayoresDeEdad)

 Filter es un metodo de array que crea un nuevo array con todos los elementos que pasen por una prueba especifica, en este caso los mayores o igual a 18 años. Y en consola me retorna un array con el filtro echo, es decir nos retorna un nuevo array con el filtro que necesitamos o le pedimos. 
Le decimos metodo avanzado a un metodo que recibe una callback.

Que es una callback?

callback es una funcion que defino y luego la entrego a otra funcion, es simplemente una forma de decirle a otra funcion que hacer cuando termine algo, proporcionandole una funcion para que la ejecute mas tarde.

Si el valor de retorno de callback es trurty entonces el elemento se agregara al array resultante.
Si el valor de retorno de callback es falsy entonces se ignorara y se va a pasar al siguiente elemento.
SIEMPRE FILTER RETORNARA UN ARRAY.

Ejercicio

-1-Traer los productos que sean de precio inferior a 2950
-2-Traer los productos de la marca noblex 
-3-Traer lso productos que en su nombre incluyan a string "tv"

Ejercicio 1

const productos = [
            {
                nombre: "tv samsung",
                marca: "samsung",
                id: 1,
                precio: 3000
            },
            {
                nombre: "celular samsung",
                marca: "samsung",
                id: 4,
                precio: 1100
            },
            
            {
                nombre: "tv lg",
                marca: "lg",
                id: 2,
                precio: 2900
            },
            {
                nombre: "tv noblex",
                marca: "noblex",
                id: 2,
                precio: 2300
            },
        ]
        
        const PrecioInferior = productos.filter(function(producto){
        return producto.precio < 2950
        })

        console.log(PrecioInferior)


ejercicio 2


const productos = [
            {
                nombre: "tv samsung",
                marca: "samsung",
                id: 1,
                precio: 3000
            },
            {
                nombre: "celular samsung",
                marca: "samsung",
                id: 4,
                precio: 1100
            },
            
            {
                nombre: "tv lg",
                marca: "lg",
                id: 2,
                precio: 2900
            },
            {
                nombre: "tv noblex",
                marca: "noblex",
                id: 2,
                precio: 2300
            },
        ]
        
        const MarcaNoblex = productos.filter(function(producto){
        return producto.marca.toLowerCase() === ("noblex".toLowerCase())
        })

        console.log(MarcaNoblex)

        ejercicio 3

        const productos = [
            {
                nombre: "tv samsung",
                marca: "samsung",
                id: 1,
                precio: 3000
            },
            {
                nombre: "celular samsung",
                marca: "samsung",
                id: 4,
                precio: 1100
            },
            
            {
                nombre: "tv lg",
                marca: "lg",
                id: 2,
                precio: 2900
            },
            {
                nombre: "tv noblex",
                marca: "noblex",
                id: 2,
                precio: 2300
            },
        ]
        
       const stringTV = productos.filter(function(producto){
                return (producto.nombre.toLowerCase().includes("tv".toLowerCase()))
                })
        
                console.log(stringTV)
en este ejemplo se usa toLowerCase() para que compare minuscula con mayuscula y en el filtrado le sea indistinto mayuscula o minuscula, eso es por si el usuario se equivoca y pone mayuscula en lugar de minuscula. 


