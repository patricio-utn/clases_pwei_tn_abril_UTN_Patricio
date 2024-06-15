Operadores logicos
! :Not o negacion : nos devuelve el valor booleano opuesto al dato que estoy negando
ejemplo:
console.log( ! "pepe") en este caso le estoy pidiendo que me de el valor opuesto a "pepe" como "pepe" es true, me va a devolver un false.

|| : OR o O: seleccionar
Si el primer valor es un falsy, va a seleccionar el segundo valor
Si el primer valor es verdadero, va a seleccionar el primer valor.
Ejemplo:
console.log("" || "pepe")
Acá queda "pepe", porque el primer valor e sun falsy, por lo tanto devolvioel segundo valor.

console.log("pepe" || 0 )
Acá queda pepe, porque el primer valor es verdadero.

console.log("0" || false || null )
Acá queda null, porque el primero es falsy, después me quedó el false, y como es un false elegio al segundo, que era el null,se hace como si fuera con paréntesis.

console.log(Boolean(0 || false || null))
Si lo paso por un Booleano, el valor booleano de null va a ser false. 

console.log(0 || "pepe" || "juan" )
Acá elegiria a pepe, porque el primero es 0, es decir un falsy, entonces eligio a "pepe", despues entre "pepe" y "juan" va a elegir a "pepe".

&&: AND o Y lógico
Evalua, si el primer valor es un true o falsy
Si es false, devuelve el primer valor.
Si es true, devuelve el segundo valor.
Ejemplo:
console.log(0 && 7)
console.log(true && 7)

Un ejemplo con variables
Se usa var, y se pone asi:
var estado = true (como es true la variable cambio y ahora me muestra el segundo mensaje, que a la vez lo ejecuta.)

estado && console.log("amor")

Ejercicios
4 && false || "pepe" 
Acá devolveria a "pepe" porque entre 4 y false me queda el false, y despues entre false y "pepe" me queda "pepe".

8 == "8" || 1 === "1"
Acá me devolveria un true (valor booleano, porque los comparadores devuelven en booleanos), y entre true y 1 === "1" hay un or, me queda el primer valor porque es verdadero. Para comprobar que es, asi pegarlo en la consola del navegador.

(null === NaN) || Boolean (NaN)
NaN no es igual a ningun otro dato, ni siquiera NaN es igual a NaN, por lo tanto ahi me da false, ahora como e sun false, entre false y Boolean (NaN), va a devolver a Boolean (NaN) y esa operacion es un false.

Number ("1") === Numer(1) && Number ("pepe" + 1)
true && Number ("pepe" + 1)
Number ("pepe" + 1) aca el 1 se transforma en string, es decir "1" y "pepe" + "1" es "pepe1"
Number ("pepe1") (este constructor de números, me dice que "pepe1" no es numero, osea un NaN)
NaN









 




