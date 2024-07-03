clase 16
ejercicio funciones

function esVocal(letra){
if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
return true
}
else{
return false
}
}

const letra = "o";

console.log(esVocal(letra));

Esto me retornará un false o true si es o no vocal

Cuando un afuncion retorna un booleano siempre es conveniente poner un verbo estar.

como mejorar la funcion anterior

function esVocal(letra){
return (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u")
}

console.log(esVocal("a"))

    las comparaciones de igualdad siempre va a ser un booleano.

        en este caso se simplifico, porque si lo que sta en tre () es verdadero me retornara un true, o false si no se cumple, porque las igualdades siempre dan eso.
        en etse ejemplo me return por console un true porqwue "a" esVocal.

Mezclar array y bucles

Ejemplo
Por cada nombre quiero que aparesca un mensaje por consola diciendo "hola" y el nombre.

const nombres = ["pepe", "juan", "maria", "ezequiel"]

Aca tengo un array y para realizar un recorrido en un array tengo que usar el bucle for, porque yo se cuantos elementos tengo, yo quiero que se repita algo la cantidad de elementos que yo tenga.

otro ejemplo (intermedio)

quiero un contador del 0 al 3

for(let iterador = 0; iterador < 4) 

aca en este ejemplo pusimos que cuente hasta cuatro, pero si lo quiero automatizar debemos usar lenght, para que siempre cuente el largo de elementos. Pra no poner yo cuantos lelemntos hay.

Se usa asi

const nombres = ["pepe", "juan", "maria", "ezequiel"]

for(let iterador = 0; iterador < nombres.length; iterador = iterador + 1){
    console.log(iterador)
}

Me va a mostrar por consola el lenght, si yo agrego otro elemento a mi array me va a mostrar por consola el elemento nuevo, solo el numero, porque use un lenght.

ahora si quiero ver el mensaje "Hola"+ el nombre hago asi.


const nombres = ["pepe", "juan", "maria", "ezequiel"]

for(let iterador = 0; iterador < nombres.length; iterador = iterador + 1){
    console.log("Hola " + nombres[iterador])
}

Ahora para mejorar aun mas el array usamos index, porque se cuentan las posiciones en el array, y quedaria asi. Solo para una buena practica.

const nombres = ["pepe", "juan", "maria", "ezequiel"]

for(let index = 0; index < nombres.length; index = index + 1){
    console.log("Hola " + nombres[index])
     }

o mejor aun se puede poner i y listo, ya quedaria abreviado y ya. 

const nombres = ["pepe", "juan", "maria", "ezequiel"]

for(let i = 0; i < nombres.length; index = i + 1){
    console.log("Hola " + nombres[i])
     }

     para que se pueda leer mejor vamos a crear una variable, solo par aque se lea mejor y quedde mejor a la vista.

     const nombres = ["pepe", "juan", "maria", "ezequiel"]

for(let i = 0; i < nombres.length; index = i + 1){
let nombre = nombres[i]

    console.log("Hola " + nombre)
     }



