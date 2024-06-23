/* let nombre = "juan"

for(let iterador = 1; iterador <= 3; iterador = iterador + 1){
    console.log("me ejecuto")
}

for(let i = 1; i <= 10; i = i + 1){
/*     alert("mail" + i) */

let sumatoria = 0

for (let iterador = 1; iterador <= 3; iterador = iterador + 1) {
    let numero = prompt("ingrese un numero")
    while (!numero || isNaN(numero)) {
        numero = prompt("error: ingrese solamente numeros")
    }
    numero = Number(numero)
    sumatoria = sumatoria + numero
}
alert("resultado: " + sumatoria)
