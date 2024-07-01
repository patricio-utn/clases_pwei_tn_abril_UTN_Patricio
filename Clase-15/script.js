/* let usuario = {
    edad: 90,
    nombre: "pepe",
    dinero:7000
}

console.log(usuario.dinero)
alert("hola") */

/* let producto = {
    precio: 5000,
    nombre: "pionner dj",
    descripcion: "consola DJ",
}

console.log(producto.nombre) */
/* 
let persona = {
    nombre: "patricio",
    edad: 48,
    mejorAmiga: {
        nombre: "zoe",
        edad: 13
    }
}

console.log(persona.mejorAmiga) */

/* const auto = {nombre: "honda", precio: 6000}

console.log(auto.precio) */

/* const auto = {nombre: "honda", precio: 6000}

auto.precio = 100000
auto.anio = 2002
/* auto = "luis" */

/* console.log(auto.precio) */

/* const persona = {
    nombre: "patricio",
    edad: 48,
    mejorAmiga: {
        nombre: "zoe",
        edad: 13
    }
}

persona.mejorAmiga.nombre = "Gladys"
persona.nroCelular = "1165738893"

console.log(persona.mejorAmiga.nombre)
console.log(persona.nroCelular) */
/* 
const persona = {
    "nombre completo": "patricio bustos",
    edad: 48,
    mejorAmiga: {
        nombre: "zoe",
        edad: 13
    }
}

console.log(persona["nombre completo"]) */

/* 
console.log("tu nota es: " + notasTrimestre[2]) */
/* let notasTrimestre = [9, 10, 6]
console.log(Object(notasTrimestre)) */

/* 
const notasTrimestre = [5, 7, 9]

notasTrimestre[1] = 10

console.log("Tu nueva nota es: " + notasTrimestre[1]) */
/* 
const notasTrimestre = [5, 7, 9]
console.log(notasTrimestre.length) */
/* const nombres = [
    "pepe",
    "juan",
    "maria",
    "pedro",
    "valentina",
    "alex"
    ]
    nombres.pop()

    console.log(nombres) */

   /*  const nombres = [
        "pepe",
        "juan",
        "maria",
        "pedro",
        "valentina",
        "alex"
        ]
/*         nombres.shift() */
    
/*         console.log(nombres.shift()) */
/* 
const nombres = [
    "pepe",
    "juan",
    "maria",
    "pedro",
    "valentina",
    "alex"
    ]

    let eliminado = nombres.pop()

    console.log(eliminado) */
/* 
    const nombres = [
        "pepe",
        "juan",
        "maria",
        "pedro",
        "valentina",
        "alex"
        ]
    
        nombres.push("leonel")
        
        console.log(nombres)  */

/*         const nombres = [
            "pepe",
            "juan",
            "maria",
            "pedro",
            "valentina",
            "alex"
            ]
        
            nombres.unshift("leonel")
            
            console.log(nombres) */

   /*          const nombres = [
                "pepe",
                "juan",
                "maria",
                "pedro",
                "valentina",
                "alex"
                ]
    
                let posicionMaria = nombres.indexOf("maria")
                nombres[posicionMaria] = "marianela"
                console.log(nombres) */

/*                 const nombres = [
                    "pepe",
                    "juan",
                    "maria",
                    "pedro",
                    "valentina",
                    "alex"
                    ]
 /*    
    nombres.splice(nombres.indexOf("juan"), 1)
    nombres.splice(nombres.indexOf("maria"), 1) */
    
/*     function eliminarNombre(listaDeNombres, nombreAeliminar){
        listaDeNombres.splice(listaDeNombres.indexOf(nombreAeliminar), 1)
    }
    
    console.log() */
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