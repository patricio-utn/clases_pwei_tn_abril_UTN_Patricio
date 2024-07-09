/* const nombres = ["pepe", "juan", "maria", "ezequiel"]

for(let i = 0; i < nombres.length; i = i + 1){
    let nombre = nombres[i]
    console.log("Hola " + nombre)
 } */

/* const carrito = [
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
/* Por cada elemento de mi carrito mostrar por consola:
 
Has comprado el producto {producto.nombre} x {producto.cantidad} a un precio unitario de ${producto.precios} */

/* for (let index = 0; index < carrito.length; index = index + 1) {
    let producto = carrito[index]

    console.log("Has comprado el producto " + producto.nombre + " x " + producto.cantidad + " a un precio unitario de " + producto.precio)

}  */

/*     let sumatoriaEdad = 0
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
    
    console.log("La sumatoria de las edades es " + sumatoriaEdad) */
/* 
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
console.log("la suma total de edades es " + sumEdad) */

/* const datos = {
    nombre: "pepe",
    apellido: "suarez",
    dni: "526587454"
}

for(let propie in datos){
    console.log(propie)
} */

/*     const datos = {
        nombre: "pepe",
        apellido: "suarez",
        dni: "526587454",
    }
    
    let resultado =""
    
    for(let propiedad in datos){
        resultado = resultado + propiedad + ": " + datos[propiedad]
    }

    console.log(resultado) */

/*     const personajes = [
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
            edad: 16
        },
    ]

  /*   personajes.forEach(function (personaje){
        console.log(personaje)
    }) */
/* 
        const personajesMayoresDeEdad = personajes.filter(function(personaje){
            return personaje.edad >= 18
        })

        console.log(personajesMayoresDeEdad) */ 

       /*  const productos = [
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
        return producto.precio <= 2950
        })

        console.log(PrecioInferior) */

      /*   const productos = [
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
                marca: "tv",
                id: 2,
                precio: 2900
            },
            {
                nombre: "tv noblex",
                marca: "noblex",
                id: 2,
                precio: 2300
            },
        ] */
        
        /* const MarcaNoblex = productos.filter(function(producto){
        return producto.marca === "noblex"
        })

        console.log(MarcaNoblex) */

        /* const stringTV = productos.filter(function(producto){
            return producto.productos.includes("tv") 
            })
    
            console.log(stringTV) */

            const productos = [
                {
                    nombre: "tV samsung",
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
                    marca: "nobleX",
                    id: 2,
                    precio: 2300
                },
            ]
            
           /* const stringTV = productos.filter(function(producto){
                return (producto.nombre.toLowerCase().includes("tv".toLowerCase()))
                })
        
                console.log(stringTV) */

                const MarcaNoblex = productos.filter(function(producto){
                    return producto.marca.toLowerCase() === ("noblex".toLowerCase())
                    })
            
                    console.log(MarcaNoblex)