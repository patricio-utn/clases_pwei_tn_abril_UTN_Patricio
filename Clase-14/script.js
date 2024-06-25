/* /* let nombre = "juan"

for(let iterador = 1; iterador <= 3; iterador = iterador + 1){
    console.log("me ejecuto")
} */
/* 
for(let i = 1; i <= 10; i = i + 1){ */
/*     alert("mail" + i) */

/* let sumatoria = 0

for (let iterador = 1; iterador <= 3; iterador = iterador + 1) {
    let numero = prompt("ingrese un numero")
    while (!numero || isNaN(numero)) {
        numero = prompt("error: ingrese solamente numeros")
    }
    numero = Number(numero)
    sumatoria = sumatoria + numero
}
alert("resultado: " + sumatoria) */

/* isNaN(1)
console. */
/* 
let iterador = "juan"

 */
/* for(let iterador = 1; iterador <= 100; iterador = iterador + 1){
    console.log("me ejecuto") 

    }
 */

   /*  function sumar2mas3(){
    console.log(2 + 3)
"*/

/* function restar(a, b){
    return  (a - b)
    }
    
    let numero1 = 14
    let numero2 = 5
    let resultado = restar(numero1, numero2)
    
    console.log(resultado) */
/* 
    function sumar(a, b){
        return (a + b)
        }
        
        console.log("El resultado de la suma es: " + sumar(9, 3))
        alert("El resultado de la suma es: " + sumar(9, 3)) */

       /*  function calcularIVA(a, b, c){
            return (a * 0.21)
            }
            
            let precio = 200
            let iva = 21
            let totaliva = calcularIVA(precio, iva)

            console.log(totaliva) */
1
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
                