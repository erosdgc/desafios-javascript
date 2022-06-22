  function showMenu() {
    let optionQuality = prompt("Seleccione una opción (ESC para salir)\n 1. .wav (USD 2.5) \n 2. .aiff (USD 2.5)\n 3. .flac (USD 2.5)\n 4. .mp3 (USD 2)\n 5. .m4a (USD 1.5)");
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
  
  function pay() {
    let payment = prompt("Seleccione un Método de Pago:\nTarjeta de Débito (1)\nTarjeta de Crédito (2)\nTransferencia (5% de descuento) (3)")
    if(payment == '3') {
        alert("Ha seleccionado Transferencia. Se aplicará un 5% de descuento.")
        let amount = parseFloat(prompt("Ingrese el monto a pagar en números: ")) 
        let discount = amount * 0.05
        let total = amount - discount
        alert(`Se realizará un pago por un total de ${total}`)
    } else if (payment == '2') {
        alert("Ha seleccionado Tarjeta de Crédito.")
        let amount = parseFloat(prompt("Ingrese el monto a pagar en números: "))
        alert(`Seleccione una de las opciones: `)
        for(let i = 1; i <= 6;) {
            let interest = amount * (i * 0.05)
            let fee = Math.round((amount + interest) / i)
            let total = Math.round(amount + interest)
            alert(`${i} cuota/s de: $ ${fee} \nEn un total de: $ ${total}`)
        } 
        let fee = parseInt(prompt('¿En cuántos pagos desea realizar la compra?'))
        if (fee == 1 || fee == 3 || fee == 6) {
            alert(`Su pago se ha realizado en ${fee} cuota/s.`)
        }
        else {
            alert ("Ingrese una opción válida")
            pay ()
        }
    }
  }

showMenu()