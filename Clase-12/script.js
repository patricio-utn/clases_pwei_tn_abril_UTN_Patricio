console.log(!"pepe")
console.log()
/* operadores logicos */

/*
!: NOT o negacion
Nos devuelve el valor booleano opuesto al dato que estoy negando

||: OR o O logico
Seleccionar
Si el primer valor es valor falsy, va a seleccionar el segundo valor
Si el primer valor es verdadero, va a seleccioanr al primer valor.

console.log(0 || 'pepe' || 'juan')

&: AND o Y logico
Evalua si el primer valor es un true o falsy

Si es false: devuelve el primer valor
Si es true: devuelve el segundo valor

 */
var estado = false
estado || console.log("holis") /* aca se ejecuta o no el console.log, va a depender si pongo true o  false, en este caso se usa como un condicionador */
