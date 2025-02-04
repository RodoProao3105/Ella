let Listado = []
let Listadocalculo = {}

function cargarpagina() {

}

function procesarTotal() {
    let Numero1 = document.getElementById('Numero1').value
    let Numero2 = document.getElementById('Numero2').value

    let Total = Numero1 * Numero2

    console.log('Total =',Total)

    document.getElementById('Total').value = Total

}

function procesarTabla() {
    let Numero1x = document.getElementById('Numero1').value
    let Numero2x = document.getElementById('Numero2').value
    let Totalx = document.getElementById('Total').value

    Listadocalculo = {
        Numero1: Numero1x,
        Numero2: Numero2x,
        Total: Totalx
    }

    Listado.push(Listadocalculo)

    console.log(Listado)
}
window.onload = cargarpagina