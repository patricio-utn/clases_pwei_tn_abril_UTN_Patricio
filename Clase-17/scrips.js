function validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function validarPassword(password) {
    return password.length > 6 && password !== password.toLowerCase() && Boolean(password);
}
function obtenerEmail() {
    let email = prompt("Ingrese su email:", "");
    while (!validarEmail(email)) {
        alert("Error, ingrese nuevamente su email");
        email = prompt("Ingrese su email:", "");
    }
    alert("El email está registrado: " + email);
    return email;
}
function obtenerPassword() {
    let password = prompt("Ingrese su contraseña, mínimo 6 caracteres y 1 mayúscula");
    while (!validarPassword(password)) {
        alert("Error, ingrese una contraseña válida. Mínimo 6 caracteres y 1 mayúscula");
        password = prompt("Ingrese su contraseña, mínimo 6 caracteres y 1 mayúscula");
    }
    alert("Contraseña válida registrada.");
    return password;
}
function login() {
    let email = obtenerEmail();
    let password = obtenerPassword();
    return { email: email, password: password }; // 
}

let credencialesUsuario = login();
console.log(credencialesUsuario);
