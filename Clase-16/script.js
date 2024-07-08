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