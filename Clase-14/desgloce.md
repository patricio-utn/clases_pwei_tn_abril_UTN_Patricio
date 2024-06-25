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

let iterador = "juan"

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

Funciones
Como crear nuestras propias funciones

ejemplo

primero declaro mi FUNCION

function sumar2mas3(){
console.log("el resultado de la suma es: " 2 + 3)
}

y luedo la invoco

sumar2mas3()

De esta forma llamo a mi fuincion en el console.log

ejemplo

funtion sumar(a, b){
console.log("el resultado de la suma es" + (a + B) )
}

sumar (9, 8)

Aca la función sumar en JavaScript está diseñada para tomar dos argumentos a y b, sumarlos juntos y luego imprimir el resultado en la consola utilizando console.log.

Explicación del Código

    Declaración de la Función sumar:
        Se define una función llamada sumar que toma dos parámetros: a y b.

    Cálculo y Salida del Resultado:
        Dentro de la función, se calcula la suma de a y b utilizando la expresión (a + b).
        Luego, se utiliza console.log para imprimir el resultado en la consola. La cadena "el resultado de la suma es: " se concatena con el resultado de la suma utilizando el operador +.

    Llamada a la Función:
        Fuera de la definición de la función, se llama a sumar con los argumentos 9 y 0. Esto activa la función sumar y pasa estos valores como a y b.
        Resultado Esperado

Cuando ejecutas este código, el resultado esperado en la consola será:
Esto se debe a que 9 + 0 es igual a 9, y por lo tanto, la cadena "el resultado de la suma es: " se concatena con 9 para formar la cadena completa que se imprime.

El mismo codico, ahora usando a los parametros como una variable.

function sumar(a, b){
a = a + 1
b = b \* 2
console.log("el resultado de la suma es: " + (a + b) )
}

sumar (9, 0)

a = a + 1 al poner esto le asigno al parametro "a" un valor nuevo, entonces ahora "a" vale lo que valia antes mas 1.
b = b \* 2 y al poner esto ahora "b" vale lo que valia nates pero multiplicado por 2.

Otro ejemplo

La declaro

function saludar (nombre){
nombre = nombre + "capo"
alert("Hola " + nombre)
}

Y la invoco

saludar ("luis")

De esta forma me aparece ne alert del navegador el saludo mas el nombre. y a nombre le puedo agregar que me diga otras cosas y en este caso al saludo se le va a agregar la palabra capo.

return
me retorna un resultado

Ejemplo

function restar(a, b){
return (a - b)
}

let numero1 = 10
let numero2 = 5
let resultado = restar(numero1, numero2)

console.log(resultado)

En este ejemplo la funcion restar tiene dos parametros, son a y b, con return me vuelve el resultado.
Entonces para eso creo 3 variables, para que me retorne el resultado y se vea por consola.

porque necesitaria el return?

Siempre se debe trabajar con return para poder hacer tareas multiples.

Ejemplo

function sumar(a, b){
return (a + b)
}

console.log("El resultado de la suma es: " + sumar(9, 3))
alert("El resultado de la suma es: " + sumar(9, 3))

En este ejemplo con return puedo usar el console,log y el alert al mismo tiempo.

Ejercicio

calcularIVA(precio) => el valor del iva
calcularIVA(100) =>

hacerlo en chat gpt

calcularMinutos(horas) => cantidad de minutos
calcularminutos(1) => 60

function calcularMinutos(horas){
return horas \* 60}

    hqacerlo con gpt

    tercer ejercicio

obtenerNumero()
Va a solicitar al usuario un numero y va a validar que el dato ingresado sea un numero.
Sino debera volver a solicitarlo
Cuando termine de validar se retornara el numero

function obtenerNumero(){
let num = prompt("ingrese un numero")
while(!num || isNaN(num)){
num = prompt("Error: vuelve a ingresar el numero")
}
num = Number(num)
return num
}

     let nume_x = obtenerNumero()
     alert("este es numero que pusiste antes: " + nume_x)

Explicación Paso a Paso

    Función obtnerNumero:
        Declaración de la Función: Se define una función llamada obtnerNumero (parece que hay un pequeño error tipográfico, debería ser obtenerNumero).

        let num = prompt("ingrese un numero");

    Validación del Número:

    Bucle while:
    while(!num || isNaN(num)){
    num = prompt("Error: vuelve a ingresar el numero");
}
    
    while(!num || isNaN(num)) comprueba dos condiciones:

    !num: verifica si num está vacío o es null (el usuario no ingresó nada).
    isNaN(num): verifica si num no es un número (NaN significa "Not-a-Number").

Si cualquiera de estas condiciones es verdadera, se ejecuta el cuerpo del bucle.
Dentro del bucle, se muestra nuevamente un prompt con el mensaje "Error: vuelve a ingresar el numero". Esto sigue repitiéndose hasta que el usuario ingrese un valor válido (un número).

tercer paso
num = Number(num);

Number(num) convierte la entrada num de una cadena de texto a un número real.

cuarto paso
return num;

La función obtnerNumero devuelve el valor numérico ingresado.

Uso de la Función:

let nume_x = obtnerNumero();
alert("este es numero que pusiste antes: " + nume_x);

let nume_x = obtnerNumero(); llama a la función obtnerNumero y almacena el número devuelto en la variable nume_x.
alert("este es numero que pusiste antes: " + nume_x); muestra una ventana emergente con el mensaje "este es numero que pusiste antes: " seguido del número ingresado por el usuario.

Propiedades de los string

Lenght: me muestra la cantidad de caracteres de un string

ejemplo
console.log("juan".lenght)

Acá me va a decir que "juan" tiene 4 caracteres.

Metodos de lso string

(method) string.toLowerCase() = pasa a minuscula
(method) string.toUpperCase  = pasa a mayuscula
(method) string.trim() = elimina espacios

console.log ("juan".toLowerCase())

tambien se puede concatenar

console.log ("juan hola".toLowerCase().lenght)

trim

console.log ("juan hola".trim()toLowerCase().lenght)

otro metodo

(method) string.includes() = 

otro mas


otro repeat



