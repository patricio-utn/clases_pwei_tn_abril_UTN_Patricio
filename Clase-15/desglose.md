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




