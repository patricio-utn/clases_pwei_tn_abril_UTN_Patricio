/* const nombres = [
    "pepe",
    "juan",
    "maria",
    "pedro",
    "valentina",
    "alex"
    ]
    
        nombres.unshift("leonel")
    
        console.log(nombres) */

/* const nombres = [
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

const nombres = [
    "pepe",
    "juan",
    "maria",
    "pedro",
    "valentina",
    "alex"
];

// Encontrar el índice de 'maria'
let indiceMaria = nombres.indexOf('maria');

console.log("El índice de 'maria' es:", indiceMaria); */ // Esto mostrará el índice de 'maria' en la consola

/* const nombres = [
    "pepe",
    "juan",
    "maria",
    "pedro",
    "valentina",
    "alex"
]
function eliminarNombre(listaDeNombres, nombreAEliminar){
   
    listaDeNombres.splice(listaDeNombres.indexOf(nombreAEliminar), 1)
}

eliminarNombre(nombres, "valentina");

console.log(nombres) */
/* const nombres = [
    "pepe",
    "juan",
    "maria",
    "pedro",
    "valentina",
    "alex"
    ]

nombres.splice(nombres.indexOf("maria"), 0, "carlos", "jose")                   
/* nombres.splice(nombres.indexOf("maria"), 1, "carlos", "jose"); */
/* console.log(nombres) */

/* 
let persona = {
    nombre: "patricio",
    edad: 48,
    mejorAmiga: {
    nombre: "zoe",
    edad: 13
    }
    }
    
    console.log(persona.mejorAmiga.nombre) */
/* 
    let dato = 5 {
        dato = 6
    }
    console.log(dato) */

/* var libroAngular = {
titulo: 'Desarrollo web ágil con AngularJS',
autor: 'Carlos Azaustre',
paginas: 64,
formatos: ["PDF", "ePub", "Mobi"],
precio: 2.79,
publicado: true
};

console.log(libroAngular.publicado) */

/* function suma(num1, num2, num3) {
    return num1 - num2 * 2 / 10 + num3
}


console.log("El resultado es " + suma(1, 2, 3)) */



/* function esVocal(letra){
    if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
    return true
    }
    else{
    return false
    }
    }
    
    const letra = "o";
    
    console.log(esVocal(letra)); */
/*     function esVocal(letra){
        return (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u")
        }
        
        console.log(esVocal("a"))
         */
/* const nombres = ["pepe", "juan", "maria", "Ezequiel"]
 
console.log("hola " + nombres[1]) ) */

/*  for(let iterador = 0; iterador < "4");
 console.log(iterador) */

/*  for (let iterador = 0; iterador < 4; iterador ++) {
      console.log(iterador);
  } */

/* const nombres = ["pepe", "juan", "maria", "Ezequiel", "NANU", "NANCY"]

for (let iterador = 0; iterador < nombres.length; iterador = iterador + 1) {
    console.log(iterador)
} */

/*     const nombres = ["pepe", "juan", "maria", "Ezequiel"]

    for(let iterador = 0; iterador < nombres.length; iterador = iterador + 1){
    console.log("Hola " + nombres[iterador])
    }
 /*     */
/* const nombres = ["pepe", "juan", "maria", "Ezequiel"]

for(let index = 0; index < nombres.length; index = index + 1){
console.log("Hola " + nombres[index])
} */
/* const nombres = ["pepe", "juan", "maria", "Ezequiel"]

for(let i = 0; i < nombres.length; i = i + 1){
console.log("Hola " + nombres[i])
} */

/* const nombres = ["pepe", "juan", "maria", "Ezequiel"]

for(let i = 0; i < nombres.length; i = i + 1){
let nombre = nombres[i]
console.log("Hola " + nombre)
} */
/* const carrito = [
    {
        nombre: "tv Samsung",
        precio: 300,
        cantidad: 3
    },
    {
        nombre: "patineta",
        precio: 30,
        cantidad: 1
    },
]
for (let index = 0; index < carrito.length; index = index + 1) {
    let producto = carrito[index]
    console.log("Has comprado el producto " + producto.nombre + " x " + producto.cantidad + " a un precio unitario de " + producto.precio)

} */
/* const personajes = [
    {
        nombres: "pepe",
        apellido: "Suarez",
        edad: 20
    },

    {
        nombres: "maria",
        apellido: "casanova",
        edad: 40
    },

    {
        nombres: "Ezequiel",
        apellido: "Rodríguez",
        edad: 35
    },
]

for (let index = 0; index < personajes.length; index = index + 1) {
    let personaje = personajes[index]
    console.log("Hola mi nombre es " + personaje.nombres + " " + personaje.apellido + " y tengo " + personaje.edad + " años")
} */

/* let sumatoriaEdad = 0
const personajes = [
    {
        nombres: "pepe",
        apellido: "Suarez",
        edad: 20
    },

    {
        nombres: "maria",
        apellido: "casanova",
        edad: 40
    },

    {
        nombres: "Ezequiel",
        apellido: "Rodríguez",
        edad: 35
    },
]

for (let index = 0; index < personajes.length; index = index + 1) {
    const personaje = personajes[index]

    console.log("Hola mi nombre es " + personaje.nombres + " " + personaje.apellido + " y tengo " + personaje.edad + " años")
    sumatoriaEdad = sumatoriaEdad + personaje.edad
}

console.log("La sumatoria de las edades es " + sumatoriaEdad)

 */

/* const personajes = [
    {
        nombres: "pepe",
        apellido: "Suarez",
        edad: 20
    },

    {
        nombres: "maria",
        apellido: "casanova",
        edad: 40
    },

    {
        nombres: "Ezequiel",
        apellido: "Rodríguez",
        edad: 35
    },
]

for (const personaje of personajes) {
    console.log(personaje)
}
 */

sumEdad = 0
const personajes = [
    {
        nombres: "pepe",
        apellido: "Suarez",
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

for (const personaje of personajes) {
    console.log(personaje)
    sumEdad = sumEdad + personaje.edad
}

console.log("la suma total de edades es " + sumEdad)
