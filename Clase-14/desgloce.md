clase 14

Quiero un programa que dado un nombre me muestrre una alerta con el nombre 3 veces, tres alertas en total.

let nombre = "juan"

alert (nombre)
alert (nombre)
alert (nombre)

Acá logré lo que me pidieron, pero se repite el código muchas veces y se incumple el principio DRY, hay que buscar una mejor manera sin repetir tanto codigo.

Bucles

FOR se usa para repetir algo tantas veces como queramos, se repite algo x veces.

Sintaxis del for

for(for iterador = valor_inicial; limite (mientras mi iterador sea menor o igual a 3); actualizacion (cuanto va a variar de valor mi iterador))

Ejemplo

let nombre = "juan"

for(let iterador = 1; iterador <= 3 (este es el limite); iterador = iterador + 1){
    console.log("me ejecuto")
}

Explicación: yo creo una variable que se llama iterador, mi iterador empieza en el valor 1, el limite es 3, entonces yo quiero que console.log se ejecute mientras mi operador sea igual o menor a 3, y cada vez que se ejecute la operacion quiero se incrementew el valor en 1.  
Primero se crea la variable iterador, luego se verifica la condicion, javascript pregunta, esta condicion es verdadera o falsa.
En resumen: el iterador vale 1, el limite es <=3, este es el valor maximo donde la condcicion es verdadera, y despues iterador = iterador + 1 le incrementará 1 al valor hasta terminar el bucle, en al primera ejecucion vale 1, a ese 1 se le suma un 1 mas, ahora vale 2, a ese 2 se luego de ejecutarse se le incrementará un 1 más, y como el limitre es 3 hasta llega el bucle, porque luego será un 4 y eso es un falsy, lo cuasl hace que ya no se siga ejecutando.   

ejercicio
mostrar por alerta el conteo del 1 al 10 ( se deben ejecutar 10 alertas)

for(let i = 1; i <= 10; i = i + 1){
    console.log("mail" + i)
}

ejercicio
solicitar al usuario un numero 3 veces, mostyrar al final de las solicitudes un alerta que muestre la sumatoria de los 3 numeros.

let sumatoria = 0

for(let iterador = 1; iterador <=3; iterador = iterador + 1){
    let numero = prompt("ingrese un numero")
    numero = Number(numero)
    sumatoria = sumatoria + numero
}

alert("resultado" + sumatoria")

Descripción del Código

Este código solicita al usuario que ingrese tres números, los suma y luego muestra el resultado de la suma.

let sumatoria = 0 (Se crea una variable llamada sumatoria y se le asigna el valor inicial de 0. Esta variable se usará para almacenar la suma de los números que el usuario ingresará.)

for(let iterador = 1; iterador <= 3; iterador = iterador + 1) (let iterador = 1: Se crea una variable iterador y se le asigna el valor inicial de 1. Esta variable se usa para contar cuántas veces se ha ejecutado el bucle.
iterador <= 3: El bucle se ejecutará mientras el valor de iterador sea menor o igual a 3.
iterador = iterador + 1: Después de cada iteración del bucle, el valor de iterador se incrementa en 1.)

let numero = prompt("ingrese un numero") (Se muestra un cuadro de diálogo que pide al usuario que ingrese un número. El valor ingresado por el usuario se guarda en la variable numero.)

numero = Number(numero) (Convierte el valor ingresado por el usuario (que es un texto) a un número y lo guarda en la variable numero.)

sumatoria = sumatoria + numero (Se suma el valor ingresado (convertido a número) a la variable sumatoria.)

Fin del bucle for:

    El bucle se repite tres veces en total, pidiendo al usuario que ingrese un número en cada iteración, convirtiéndolo a un número y sumándolo a sumatoria.

    alert("resultado: " + sumatoria) (Después de que el bucle se ha ejecutado tres veces, se muestra un cuadro de alerta con el resultado de la suma de los tres números ingresados por el usuario.)

    Resumen

    sumatoria: Se usa para acumular la suma de los números ingresados.
    Bucle for: Ejecuta el bloque de código dentro de él tres veces.
    prompt: Pide al usuario que ingrese un número.
    Number: Convierte el valor ingresado a un número.
    alert: Muestra el resultado final al usuario.

    El caso anterior 
    En este caso quiero que el prompt me vuelva a pedir que ingrese un numero, si se coloca un null, un "", o algun string.

    let sumatoria = 0

for(let iterador = 1; iterador <=3; iterador = iterador + 1){
    let numero = prompt("ingrese un numero")
   
   while(!numero || isNaN(numero))
   

    numero = Number(numero)
    sumatoria = sumatoria + numero
}

alert("resultado" + sumatoria")

Explicacion del while: el isNan me dice si lo que hay dentro es o no un numero, entonces si el numero es un valor falsy (con esto me quito el null y las comillas vacias, ahora solo me queda pasarlo por el isNaN para asegurame que sea un numero, si se cumplen alguna de estas 2 condiciones me va a volver a pedir que ingrese el numero de nuevo.

!numero hace referencia a un "no numero", osea algo que no sea un numero, como ser un nul o comillas vacias, osea no poner nada.
isNaN(numero) hace referencia a si numero es o no un NaN. Entonces seria asi, "es lo que esta en la variable numero un NaN o no. 

Si estas ambas condiciones se cumplen se activa el while y se activaria el prompt con su leyenda, porque seria un verdadero.







