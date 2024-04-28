# si empezamos de cero
git init
git add .
git commit -m "comentario x"
git branch -M main

**debemos crear un repo en GITHUB**

ya tenemos que haber creado un repo, y hacer
git remote add origin https://github.com/patricio-utn/clases_pwei_tn_abril_UTN_Patricio.git
git push -u origin main
# listo con esto tenemos nuestro repo en github listo para irse subiendo lo que vamos haciendo.

# Si estoy actualizando el git que ya tengo echo (después de hacer CTRL+S, osea haber guardado)
git add .
git commit -m "comentario"
git push -u origin main
**para ver que origen remoto tengo usamos **git remote -v**

# ACLARACIONES
**SI ME EQUIVOQUÉ AL PONER EL GIT EL GIT REMOTE USAMOS EL COMANDO**
git remote set-url origin <URL_CORRECTA>
**podemos usar git status para obtener una info detallada del estado de nuestro repo**
g

