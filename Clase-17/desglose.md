Clase 17

calculadora

CALCULADORA
Funcionalidades:
-tener soporte para las siguientes operaciones: + y -
       validar
       -"+"
       -"-"

HISTORIAL
-historial

LOGIN:
-crear usuario (esta se ejecuta al entrar a la calculadora)
             Tiene que tener
             -email y estar validado

Utilidades:
-Validacion, vamos a validar que solo sea + y -
-opcion de cancelar

Ingreso de datos:
-prompt

Egreso de datos:
-alert


Login:

Prompt va a solicitar al usuario un email
validamos que el email sea un email

RegeEx /expresion regular: (poner la expresion regular desde la pagina regEx) no sretorna un boolean

En caso de que no, volvera a solicitar
En caso de que si sea valido dira email registrado

Reglas:
Todo el logueo debe estar dentro de una funcion

Como se hace
Se empieza siempre en la parte de logueo

1-Promp va a solicitar al usuario un email
Validamos que el email sea un email valido
Para eso se usan expresiones regulares(RegEx) y siempre nos retorna un booleano.

Ejemplo en consola

/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test("luis.patricio.bustos@gmail.com")

Pusimos la expresion regular y al final el .test y entre () el email a verificar.
En caso de no volvera a solicitar
En caso de que si sea valido dira email registrado

Reglas
.Todo el logueo debe estar dentro de una funcion.
.Puedo usar todas las funciones o crear las funciones que crea necesario.
.Debo poner login() y que empieze toda la funcion anterior.


