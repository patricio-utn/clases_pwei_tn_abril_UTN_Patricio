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

Variables
Es un espacio reservado que almacena un dato (referencia), este debe tener un identificador el cual usaremos para obtener el dato.
Javascrip es un lenguaje debilmente tipado y de tipado dinamico.
Debilmente tipado= no necesito especificar que tipo de dato es mi variable.
Tipado dinamico= puede variar una variable de tipo de dato.
Siempre se trabaja en LET, cuando usamos una variable.

ejemplo

var edad = 50 (esta es mi primera referencia)
edad = "pepe" (y acá use una reasignacion, ahora me va a mostrar esta)

console.log(edad)

Tipos de variables
Caracteristicas que deben tener.

Hoisting: es la capacidad de una variable de ser llamada antes de su declaracion.
Declaracion: es cuando creamos nuestra variable.

Nunca hay que hacer una variable sin declarar.

Sintaxis de declaración: (orden en que se debe escrbir correctamente para que se ejecute)
<Tipo de variable (var, let etc)> nombre de la variable (se llamam identificador)= dato (lo que va a variar)
<tipo de varible> identificador = data
var nombre = "pepe"







VAR
Tiene hoisting? 
Si, tiene hoisting

var nombre => aca estamos creando a nustra variable con el identificador edad.

ejemplo:
console.log(edad) aca pusimos el console.log antes de la declaracion de la variable, y me va a dar un Undefined, osea no me va a dar error, pero no me va a dar la variable.
var edad = 50


Se puede reasignar?
Si, se puede reasignar.

ejemplo:
var edad = 50
edad = "pepe"

Se puede redeclarar?
Si, se puede. y me mostraria la ultima var, es como una cascada.

ejemplo:

var edad = 50
var edad = "pepe"


Valor implicito en undefined?
Si, tiene. 



LET
Tiene hoisting?
No, no tiene hoisting

Se puede reasignar?
Si, se puede reasignar

ejemplo:
let nombre
nombre = "pepe"
nombre = "julieta" (me va a devolver la ultima variable)

console.log(nombre)

Se puede redeclarar?
No, no se puede redeclarar, en realidad si se puede redeclarar pero en otro bloque.

Valor implicito en undefined?
Si, es Undefined, al no poner ningun valor, implicitamente va a ser Undefined.

CONST
Tiene hoisting?
Se puede reasignar?
Se puede redeclarar?
Valor implicito en undefined?









 




