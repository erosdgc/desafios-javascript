const losslessAudio = [".WAV", ".AIFF", ".FLAC"]
const formatosdeAudio = losslessAudio.slice()
const compressedAudio = formatosdeAudio.splice(0, 3, ".MP3", ".M4A")
// let compressedAudio = formatosAudio.splice(0, 3) + formatosAudio.push[".MP3", ".M4A"] <- De manera alternativa, es correcto el uso de splice y push de esta manera para agregar ".MP3" y ".M4A"?
const formatos = losslessAudio.concat(compressedAudio)
console.log(losslessAudio.length)
console.log(compressedAudio.length)
console.log(formatos.length)

/*
const catalogo = [track1, track2, track3, track4]

let track1 = {nombre: "Kalpa", velocidad: "120 BPM", genero: "Progressive House"}
let track2 = {nombre: "The Adventurer", velocidad: "122 BPM", genero: "Progressive House"}
let track3 = {nombre: "Wandering Souls", velocidad: "124 BPM", genero: "Melodic House & Techno"}
let track4 = {nombre: "Out of Alignment", velocidad: "124 BPM", genero: "Melodic House & Techno"}

const cualidadArchivos = [WAV, AIFF, FLAC, MP3, M4A]

let WAV = {formato: "sin pérdidas", tipo: "sin compresión", precio: 2.5}
let AIFF = {formato: "sin pérdidas", tipo: "sin compresión", precio: 2.5}
let FLAC = {formato: "sin pérdidas", tipo: "sin compresión", precio: 2.5}
let MP3 = {formato: "con pérdidas", tipo: "comprimido", precio: 2}
let M4A = {formato: "con pérdidas", tipo: "comprimido", precio: 1.5}
*/


const formatosAudio = [ { id: 1, formato: ".WAV"},
                        { id: 2, formato: ".AIFF"},
                        { id: 3, formato: ".FLAC"},
                        { id: 4, formato: ".MP3"},
                        { id: 5, formato: ".M4A"}];
for (const formato of formatosAudio) {
    console.log(formato.id);
    console.log(formato.formato);
}
const preciosFormatos = [ { id: 1, formato: "sin pérdidas", tipo: "sin compresión", precio: 2.5},
                          { id: 2, formato: "sin pérdidas", tipo: "sin compresión", precio: 2.5},
                          { id: 3, formato: "sin pérdidas", tipo: "sin compresión", precio: 2.5},
                          { id: 4, formato: "con pérdidas", tipo: "comprimido", precio: 2},
                          { id: 5, formato: "con pérdidas", tipo: "comprimido", precio: 1.5}];
for (const precio of preciosFormatos) {
    console.log(precio.id);
    console.log(precio.precio);
}


class copiaDigital {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre.toUpperCase()
        this.precio = precio
        this.cantidad = cantidad
    }
}


function agregarCopia(){
    let numeroCopias = parseInt(prompt("¿Cuántas copias vas a llevar?"))
    let copias = []

    for(let index = 0; index < numeroCopias; index++){
        let nombre = prompt("Ingrese el nombre")
        let precio = parseFloat(prompt("Ingrese el precio"))
        let cantidad = parseInt(prompt("Ingrese la cantidad de copias"))

        let productoARegistrar = new copiaDigital (nombre, precio, cantidad)
        copias.push(productoARegistrar)
    }

    console.log(copias)
    return copias
}


function mostrarCopias(copias){
    for(const copiaDigital of copias){
        console.log(copiaDigital)
        console.log(copiaDigital.nombre)
    }
}

function calcularCosto(copias){
    let sumatoriaCosto = 0;
    for (const copiaDigital of copias) {
        sumatoriaCosto = copiaDigital.calcularCosto();
    }
    return sumatoriaCosto
}

function main(){
    let copias = agregarCopia()
    mostrarCopias(copias)
    alert("El costo total de las copias es: " + calcularCosto(copias))
}
main();


/* Esto está comentado para que muestre lo de arriba en consola
 function showMenu() {
    let optionQuality = prompt("Ingrese una opción con el número correspondiente (1, 2, 3, 4 o 5, ESC para salir)\n 1. .wav (USD 2.5) \n 2. .aiff (USD 2.5)\n 3. .flac (USD 2.5)\n 4. .mp3 (USD 2)\n 5. .m4a (USD 1.5)");
    if (optionQuality == 1 || optionQuality == '1') {
        alert ('Ha seleccionado la calidad en formato .WAV')
        pay ()
    }
    else if (optionQuality == 2 || optionQuality == '2') {
        alert ('Ha seleccionado la calidad en formato .AIFF')
        pay ()
    }
    else if (optionQuality == 3 || optionQuality == '3') {
        alert ('Ha seleccionado la calidad en formato .FLAC')
        pay ()
    }
    else if (optionQuality == 4 || optionQuality == '4') {
        alert ('Ha seleccionado la calidad en formato .MP3')
        pay ()
    }
    else if (optionQuality == 5 || optionQuality == '5') {
        alert ('Ha seleccionado la calidad en formato .M4A')
        pay ()
    }
    else {
        alert('No ha registrado una opción válida. Debe seleccionar una para continuar.')
        showMenu()
    }
  }

let metodosPago = ["DEBITO", "TRANSFERENCIA", "CREDITO"]

  
  function pay() {
    let payment = prompt("Seleccione un Método de Pago con el número correspondiente (1, 2, o 3):\nTarjeta de Débito (1)\nTarjeta de Crédito (2)\nTransferencia (5% de descuento) (3)")
    if(payment == '3') {
        alert("Ha seleccionado Transferencia. Se aplicará un 5% de descuento.")
        let amount = parseFloat(prompt("Ingrese el monto a pagar en números: ")) 
        let discount = amount * 0.05
        let total = amount - discount
        alert(`Se realizará un pago por un total de $${total}`)
    }
    else if (payment == '2') {
        alert("Ha seleccionado Tarjeta de Crédito.")
        let amount = parseFloat(prompt("Ingrese el monto a pagar en números: "))
        alert(`Seleccione una de las opciones: `)
        for(let i = 1; i <= 6;) {
            let interest = amount * (i * 0.05)
            let fee = Math.round((amount + interest) / i)
            let total = Math.round(amount + interest)
            alert(`${i} cuota/s de: $ ${fee} \nEn un total de: $${total}`)
        } 
        let fee = parseInt(prompt('¿En cuántos pagos desea realizar la compra?'))
        if (fee == 1 || fee == 3 || fee == 6) {
            alert(`Su pago se ha realizado en ${fee} cuota/s.`)
        }
    }
    else if (payment == '1') {
        alert("Ha seleccionado pago con Tarjeta de Débito.")
        let amount = parseFloat(prompt("Ingrese el monto a pagar en números: ")) 
        alert(`Se realizará un pago por un total de $${amount}`)
    }
    else {
        alert ("Ingrese una opción válida")
        return pay()
    }
  }

showMenu() */