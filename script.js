let computerPlay = function() {
    return Math.random() * 3;
    }
let playerCount, computerCount, playerSelection, computerSelection;

let game = function() {
    let singleRound = function (playerSelection, computerSelection) {
        if (playerSelection == "piedra" && computerSelection < 1) {
            alert("Jugador = Piedra\nPc = Piedra\nEmpate!");
        } else if (playerSelection == "piedra" && (computerSelection >= 1 && computerSelection < 2)) {
            computerCount++;
            alert("Jugador = Piedra\nPc = Papel\nPerdiste!");
        } else if (playerSelection == "piedra" && computerSelection > 2) {
            playerCount++;
            alert("Jugador = Piedra\nPc = Tijera\nGanaste!");
        } else if (playerSelection == "papel" && (computerSelection >= 1 && computerSelection < 2) ) {
            alert("Jugador = Papel\nPc = Papel\nEmpate!");
        } else if (playerSelection == "papel" && computerSelection > 2) {
            computerCount++;
            alert("Jugador = Papel\nPc = Tijera\nPerdiste!");
        } else if (playerSelection == "papel" && computerSelection < 1) {
            playerCount++;
            alert("Jugador = Papel\nPc = Piedra\nGanaste!");
        } else if (playerSelection == "tijera" && (computerSelection >= 1 && computerSelection < 2)) {
            playerCount++;
            alert("Jugador = Tijera\nPc = Papel\nGanaste!");
        } else if (playerSelection == "tijera" && computerSelection < 1) {
            computerCount++;
            alert("Jugador = Tijera\nPc = Papel\nPerdiste!");
        } else if (playerSelection == "tijera" && computerSelection > 2) {
            alert("Jugador = Tijera\nPc = Tijera\nEmpate!");
        } else {
            alert("Error ingreso no válido");
        }    
    }
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Ingrese piedra, papel o tijera");
        computerSelection = computerPlay();
        singleRound(playerSelection, computerSelection);
    }
}

game();

if (playerCount > computerCount) {
    alert("Ganaste!");
} else if (playerCount < computerCount) {
    alert("Perdiste!");
} else if (playerCount == computerCount) {
    alert("Empate!");
}



