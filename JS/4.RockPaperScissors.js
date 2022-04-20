var miEleccion = 1
var pcEleccion = Math.floor(Math.random() * 3);


const ganador = (miEleccion, pcEleccion) => {
    if (miEleccion === pcEleccion) {
        return "Draw"
    } else if (miEleccion === 1 && pcEleccion === 0 || miEleccion === 2 && pcEleccion === 1 || miEleccion === 0 && pcEleccion === 2) {
        return "You Win"
    } else {
        return "You lose"
    }
}


console.log(ganador(miEleccion, pcEleccion));


