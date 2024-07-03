Objetos

let edadUsuario = 90
let nombreUsuario = "pepe"
let dineroUsuario = 7000

Se puede hacer algo mejor que esto, usando objetos para llamar a varias propiedades.

let usuario = {
edad: 90,
nombre: "pepe",
dinero:7000
}

console.log(usuario.dinero)
Este modelo tiene un nombre, llamado Key valure. Se puede ir llamando con el console log

Ejercicio

Crear un objeto llamdo producto que tenga, precio, nombre, descripcion, y marca

let producto = {
precio: 5000
nombre: pionner djlet
descripcion: consola DJ
}

console.log(producto.nombre)

Crear un objeto llamado persona, que tenga nombre, edad y mejorAmigo. mejorAmigo debe ser otro objeto que solo tenga nombre y edad.

let persona = {
nombre: "patricio",
edad: 48,
mejorAmiga: {
nombre: "zoe",
edad: 13
}
}

console.log(persona.mejorAmigo.nombre)

Acá pongo un objeto dentro de otro objeto, y se hace con esta sintaxis, y en console.log se va buscando con el puntito el directorio.

Formas de escribir variables.

Camel case

Es escribir asi, por ejemplo holaMeLlamoPatricio

Snake case

Es escribir asi, hola_me_llamo_patricio

Mejorar nuestros objetos

const

Ejemplo

const auto = {nombre: "honda", precio: 6000}

console.log(auto.precio)

LOS OBJETOS, SIEMPRE SE HACEN CON CONST, SIEMPRE. ME PROTEGE MI VARIABLE, ES UNA SEGURIDAD.

Acá usamos otra forma de usar los obejtos, una forma mas ordenada, en linea, en este caso usamos const
Podemos cambiar el nombre y el precio que querramos. Con este ejemplo lo vemos.

const auto = {nombre: "honda", precio: 6000}

auto.precio = 100000

console.log(auto.precio)

Acá dejamos la misma referencia auto y solo cambiamos el precio, esto sirve para hacer moficiaciones, pero no podemos cambiar la referencia solo las propiedades.
Deberia ver en console.log el precio modificado

Tambien le puedo seguir agregando propiedades a mi variable, en este caso auto y lo hago asi.

const auto = {nombre: "honda", precio: 6000}

auto.precio = 100000
auto.anio = 2002

console.log(auto.anio)

agregue a mi codigo el auto.anio = 2002, y lo puedo ver en consola si lo invoco.

Ejercicio

Cambiar el nombre del mejor amigo a pepe y crear la propiedad nro_celular a personaje.

const persona = {
nombre: "patricio",
edad: 48,
mejorAmiga: {
nombre: "zoe",
edad: 13
}
}

persona.mejorAmiga = "Gladys"
persona.nroCelular = "1165738893"

persona.mejorAmiga.nombre = "Gladys"
console.log(persona.nroCelular)

Acá cree con código algunas propiedades de persona, de esta manera modifico por ejemplo el nombre de mejorAmiga y le agregué a persona una propiedad nueva en este caso nroCelular, en luagar de modificar dentro el key value, lo hice por fuera. Siempre ver bien la ruta.

Forma distinta que suelen trabajar algunas empresas.

Algunas empresas ponen un espacio entre un nombre y otro. Por ejemplo esto:

const persona = {
"nombre completo": "patricio bustos",
edad: 48,
mejorAmiga: {
nombre: "zoe",
edad: 13
}
}

Entonces para invocar a nombre completo tengo que usar corchetes, asi:

console.log(persona["nombre completo"])

de esta forma invoco a "nombre completo", esto es en el caso que me lo pongan asi, separado.

                              Arrays

Los arrays se usan para listar elementos.

Ejemplo

let notaTrimestre1 = 9
let notaTrimestre2 = 10
let notaTrimestre3 = 6

Esta forma gasta much amas memoria, por eso se usa arrays, par ahacerlo mas ordenado y mas prolijo, entonces se puede hacer asi:

let notasTrimestre = [9, 10, 6]

Estan posicionados por orden no se dice posicion se dice index o indice.

Esta pocision empieza por el 0(cero), es decir el 9 es el index 0, el 10 es el index 1 y el 6 es el index 2.

Como invocarlo por console.log?
se hace asi:

console.log("tu nota es: " + notasTrimestre[2])
y por consola me va a mostar en este caso un 6, que es el index 2.

Javascript es un lenguaje basado en prototipos.

Como transformar un array en un objeto:

let notasTrimestre = [9, 10, 6]
console.log(Object(notasTrimestre))

creo una consola par allamar a nostasTrimestre y con el constructor de lso objetos lo creo y en consola voy a ver todo el listado y el index de cada nota con las propiedades.

Los arrays se usan siempre con const

Como cambiar el valor de un index:

const notasTrimestre = [5, 7, 9]

notasTrimestre[1] = 10

console.log("Tu nueva nota es: " + notasTrimestre[1])

Acá usando la variable const invoco a notasTrimestr y entre [ ]
pongo el index que quiero cambiar y despues el valor nuevo que voy a poner.
y por consola voy a ver el nuevo valor que puse.

como saber la longitud de mi array:

const notasTrimestre = [5, 7, 9]
console.log(notasTrimestre.length)

Usando el length, y por consola voy a ver la cantidad de valores que tengo en mi array.

                       Métodos de los arrays

Los métodos de los arrays en JavaScript son funciones integradas que se utilizan para realizar operaciones comunes en arreglos.

arrays de string

const nombres = [
"pepe",
"juan",
"maria",
"pedro",
"valentina",
"alex"
]

Como eliminar al ultimo elemento de mi array?

const nombres = [
"pepe",
"juan",
"maria",
"pedro",
"valentina",
"alex"
]

    delete nombres[5]

    console.log(nombres)

    y por consola me va a mostrar todos los nombre smenos el ultimo

PERO ESTO ES UNA MALA PRACTICA Y NO SE HACE

Metodo pop
elimina el ultimo elelmento

ejemplo

const nombres = [
"pepe",
"juan",
"maria",
"pedro",
"valentina",
"alex"
]
nombres.pop()

    console.log(nombres)

    y por consola veo como me elimino el ultimo elemento

Metodo shift
elimina el primer elemento

const nombres = [
"pepe",
"juan",
"maria",
"pedro",
"valentina",
"alex"
]
nombres.shift()

    console.log(nombres)

    y por consola veo como me elimino el primer elemento

como ver por consola a que nombre eliminé?

    const nombres = [
        "pepe",
        "juan",
        "maria",
        "pedro",
        "valentina",
        "alex"
        ]

        console.log(nombres.shift())

Poniendo asi veo por consola a quien eliminé.

o puedo poner eso en una variable

const nombres = [
"pepe",
"juan",
"maria",
"pedro",
"valentina",
"alex"
]
nombres.shift()

    console.log(nombres)

    y por consola veo como me elimino el primer elemento

como ver por consola a que nombre eliminé?

    const nombres = [
        "pepe",
        "juan",
        "maria",
        "pedro",
        "valentina",
        "alex"
        ]

        let eliminado = nombres.shift()

        console.log(eliminado)

        y por consola veo a quien eliminé, en este caso en shift, pero puede usarse con pop o etc.

aca lo hice usando pop

const nombres = [
"pepe",
"juan",
"maria",
"pedro",
"valentina",
"alex"
]

    let eliminado = nombres.pop()

    console.log(eliminado)

    y veo por consola al ultimo eliminado.

    shif y pop devuelven el valor que eliminó.

    Metodo push

    Agrega al final

    ejemplo

    const nombres = [
    "pepe",
    "juan",
    "maria",
    "pedro",
    "valentina",
    "alex"
    ]

    nombres.push("leonel")

    console.log(nombres)

    Esto me va a msotrar el array con el nuevo elemento que agregué, en este caso "leonel", me retornan la nueva cantidad que tengo en el array.

unshift
afrega alk inicio un elemento

const nombres = [
"pepe",
"juan",
"maria",
"pedro",
"valentina",
"alex"
]

    nombres.unshift("leonel")

    console.log(nombres)

    me agrego un nuevo elemento al inicio, en este caso leonel y por conbsola puedo ver el retorno de la lsita de array con este nuevo elemento.

    como modificar un nombre por otro?

    indexOf
    me muestar la posicion o el index de un elemento, eso es para no tener que andar adivinando la posicion de un elemento. SOLAMENTE SE USAN EN ARRAYS DE STRING´S.

    se hace asi:

const nombres = [
"pepe",
"juan",
"maria",
"pedro",
"valentina",
"alex"
]

let posicionMaria = nombres.indexOf("maria")
nombres[posicionMaria] = "marianela"
console.log(nombres)


Explicacion: en una variable guardo la ubicacion de "maria", luego creo un array con el nombre que guarde en la variable y lo cambio por el que deseo, en este caso "marianela", y por consola ahora veo la lista con el cambio de elemento, de "maria" ahora lo modifique por "marianela"

SPLICE

ejercicio
eliminar a juan y maria

const nombres = [
                "pepe",
                "juan",
                "maria",
                "pedro",
                "valentina",
                "alex"
                ]

 nombres.splice(nombres.indexOf("juan"), 1)
 nombres.splice(nombres.indexOf("maria"), 1)
    
    console.log(nombres)

Explicacion:

de esta manera usando dos splice elimino a juan y maria, y lo hice de esta manera porque yo no conozco la pocision de ambos. Si hubiera puesto 2 hubiera eliminado a juan y maria o maria y pedro.

Ejercicio

Mejorar el ejercicio anterior, ya qu eel anterior no cumple el principio dry, usando una funcion llamada eliminarNombre.

Como agregar un o varios elementos a mi array

const nombres = [
                    "pepe",
                    "juan",
                    "maria",
                    "pedro",
                    "valentina",
                    "alex"
                    ]

 nombres.splice(nombres.indexOf("maria"), 0, "carlos", "jose")                   


console.log(nombres)

De esta manera agregue despues de maria 2 nombres mas.


