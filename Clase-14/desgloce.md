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