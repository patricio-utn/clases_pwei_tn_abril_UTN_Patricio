<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    
    <script src="./script.js"> <script>
</body>
</html>

Siempre se debe escribir el script por encima de la etiqueta final de <body> y en el src le pongo la direccion del .js y el .js se puede llamar como yo quiera.

Funciones nativas: significa que ya viene incorporado a Javascript.

-isNaN()  es una funcion que recibe un dato y te devuelve un boolean que indica mediante un true o un false si es o no un NaN.
-alert()  es una funcion que recibe un string y lo muestra en un pop up en la pagina. Sirve para mostar datos e interactua con los usuarios.
 Ejemplo de como usar alert con una variable
-Typeof() nos dice que tipo de dato es.

 let variable = isNaN(27)
 alert(variable)

 Acá en este ejemplo isNaN me dice que 27 si es un numero, por lo tanto es falso qeu no sea un numero, ese false me va a parecer en la alert, dentro la la variable. 

  let variable = alert("gladys")
 alert("luis" + variable)

 Acá en este caso primero se va a ejecutar la primera funcion y me va a mostrar gladys, cuando se ejecute la segunda funcion me va a devolver un undefined, la alerta no devuelve nada, por defecto retorna undefined.

 Si una funcion no retorna nada, por defecto retorna undefined.
 cuando devuelve un void no devuelve nada.

 ejemplos:

 alert(typeof(3 + ""))

 esto me dice en el pop up que tipo de dato tengo typeoff

 prompt(27)

 me devuelve un pop up con un imput

otro ejemplo

  let dato = prompt("pepe")

alert(typeof(dato))

aca voy a ver que tipo de dato me devuelve dato

let dato = prompt("pepe")

alert(dato)

esto me devuelve un null

mas ejemplos, en este caso con el constructor de numeros

let dato = prompt("dime tu edad")
dato = Number(dato)
alert(typeof(dato))

aca me va a pedir que ponga la edad, y en alert solo quiero saber que tipo de dato lo que esta en el prompt, solo a modo informativo.

Condisiones

IF: 
ELSE:

ejemplo con IF y ELSE

let edad = prompt("ingresa tu edad")

if(edad >= 18){
    alert("pasa nomas")
} 
else{
    alert("no pases")
}

    En este ejemplo tengo que poner la edad, si es mayor o igual a 18 me mustra el alert que puedo pasar, ni no no puedo pasar.

    Sintaxis de IF y ELSE

    if(condicion){
        bloque de codigo
    }
    else{
        bloque de codigo
    }

El if puede estar solo, el else no.

let dato = prompt("documento")

if (dato === null || dato === "") {
    alert("error:dato no valido")
}
else {
    alert("todo esta OK")
}

let pona = 10+4
console.log(pona)
en este ejemplo estoy poniendo si un dato es estrictamente igua a null (osea vacio) o comillas vacias, osea no pone nada, en ese caso me da error, dato no valido.
Siempre hay que usar el estrictamente igual (===)

El caso anterior mejorado
let dato = prompt("documento")

if (!dato) {
    alert("error:dato no valido")
}
else {
    alert("todo esta OK")
}

let pona = 10+4
console.log(pona)

se agrego !dato

El mas mejorado de todos

let dato = prompt("dime el docu")
if(dato){
    alert("todo esta bien")
}
else{
    alert ("error dato no valido")
}

Aca si el dato es truly ejecuto alert("todo esta bien") sino alert ("error dato no valido")


else if (juntos, es una nueva condicion)

ejemplo

Si el puntaje da entre 0 y 1000 diremos "principiante"
Si el puntaje da entre 1000 y 2000 diremos "avanzado"
Si el puntaje da entre 2000 y 3000 diremos "experimentado"

let puntos = prompt ("ingresa tus puntos")

if(puntos >= 0 && puntos <= 1000){
    alert("principiante")
}
else if(puntos >=1000 && puntos <= 2000){
    alert("avanzado")
}
else if(puntos >=2000 && puntos <= 3000){
    alert("experimentado")
}
let hola = Number(prompt("Introduce un número"));

if (hola === 3) {
    alert("te amo");
} else if (hola === 2 || hola === 1) {
    alert("no te amo");
} else {
    alert("Entrada no válida");
}


Claro, aquí tienes una explicación simple paso a paso:

    Solicitar un número al usuario:
        prompt("Introduce un número") muestra un cuadro de diálogo para que el usuario introduzca un valor.
        Este valor siempre se recibe como una cadena (string).

    Convertir la cadena a número:
        Number(prompt("Introduce un número")) convierte la cadena ingresada por el usuario a un número.

    Almacenar el valor convertido:
        let hola = Number(prompt("Introduce un número")); guarda el valor convertido en la variable hola.

    Comparar el valor con 3:
        if (hola === 3) verifica si el valor es exactamente igual a 3.
        Si es igual a 3, se muestra un mensaje de alerta con el texto "te amo".

    Comparar el valor con 2 o 1:
        else if (hola === 2 || hola === 1) verifica si el valor es exactamente igual a 2 o a 1.
        Si es igual a 2 o 1, se muestra un mensaje de alerta con el texto "no te amo".

    Manejar otros valores (opcional):
        else maneja cualquier otro valor que no sea 1, 2 o 3.
        Si el valor no es 1, 2 o 3, se muestra un mensaje de alerta con el texto "Entrada no válida". Esta parte es opcional y puedes omitirla si no quieres manejar otros valores específicamente.

Bucles:
while: me mantiene en un bucle hasta que se ingrese el dato correcto.

ejemplo:

let nombre = prompt("adivina el nombre y gana 1 millon de dolares")

while()

otro ejemplo:
let nombre = prompt("adivina el nombre y gana un palo verde")
while(nombre !== "gladys"){
    
    nombre = prompt("ingresa otro")
    
}
alert("ganaste")

Acá debo escribir el nombre gladys para que salga el prompt "ganste", si pongo otro nombre distinto me lo va a seguir pidiendo.



  

