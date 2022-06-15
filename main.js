// Prueba ingresos y alertas con condicionales
let nombre = prompt("Ingresá tu nombre:");
let apellido = prompt("Ingresá tu apellido:");


// Si no define una entrada en alguno de las dos, se pide que se reingresen los datos.
while ((nombre == undefined) || (apellido == undefined)) { 
    nombre = prompt("Por favor, ingresá tu nombre:")
    apellido = prompt("Por favor, ingresá tu apellido:")
}


// Si el nombre ni el apellido están en blanco, aparece un saludo.
if ((nombre !="") && (apellido !="")) {
    alert("¡Hola, " + nombre + " " + apellido + "!");
}
else {
    alert("No ingresaste los datos solicitados.");
    nombre = prompt("Ingresá tu nombre:");
    apellido = prompt("Ingresá tu apellido:");
}


// Saludo reactivado
if ((nombre !="") && (apellido !="")) {
    alert("¡Hola, " + nombre + " " + apellido + "!");
}


// Prueba números
let numeroUno = prompt("Ingrese un número X menor o igual que 100")
let numeroDos = prompt("Ingrese un número Y menor o igual que 100")

let suma = parseFloat(numeroUno)+parseFloat(numeroDos)
let multiplicacion = parseFloat(numeroUno)*parseFloat(numeroDos)
let cuadradoX = parseFloat(numeroUno)*parseFloat(numeroUno)
let cuadradoY = parseFloat(numeroDos)*parseFloat(numeroDos)
let cuboX = parseFloat(numeroUno)*parseFloat(numeroUno)*parseFloat(numeroUno)
let cuboY = parseFloat(numeroDos)*parseFloat(numeroDos)*parseFloat(numeroDos)

while ((numeroUno <= 100) && (numeroDos <= 100)) {
    alert(`La suma de estos es: ${suma}, la multiplicación es: ${multiplicacion}, el cuadrado del primero es ${cuadradoX}, el cuadrado del segundo es ${cuadradoY}, el cubo del primero es ${cuboX} y por último, el cubo del segundo es ${cuboY}`);
}

while ((numeroUno >= 100) && (numeroDos >= 100)) {
    numeroUno = prompt("Error: ingresar un número X menor que 100.");
    numeroUno = prompt("Error: ingresar un número Y menor que 100.");
}


// Muestra de resultados por consola
console.log(suma)
console.log(multiplicacion)
console.log(cuadradoX)
console.log(cuadradoY)
console.log(cuboX)
console.log(cuboY)
