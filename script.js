let computerPlay = function() {
    return Math.random() * 3;
    }
let playerCount = 0, computerCount = 0, playerSelection, computerSelection;

let game = function() {
    let singleRound = function (playerSelection, computerSelection) {
        if (playerSelection == "piedra" && computerSelection < 1) {
            alert("Jugador = Piedra\nPc = Piedra\nEmpate!");
        } else if (playerSelection == "piedra" && (computerSelection >= 1 && computerSelection < 2)) {
            computerCount += 1;
            alert("Jugador = Piedra\nPc = Papel\nPerdiste!");
        } else if (playerSelection == "piedra" && computerSelection > 2) {
            playerCount += 1;
            alert("Jugador = Piedra\nPc = Tijera\nGanaste!");
        } else if (playerSelection == "papel" && (computerSelection >= 1 && computerSelection < 2) ) {
            alert("Jugador = Papel\nPc = Papel\nEmpate!");
        } else if (playerSelection == "papel" && computerSelection > 2) {
            computerCount += 1;
            alert("Jugador = Papel\nPc = Tijera\nPerdiste!");
        } else if (playerSelection == "papel" && computerSelection < 1) {
            playerCount += 1;
            alert("Jugador = Papel\nPc = Piedra\nGanaste!");
        } else if (playerSelection == "tijera" && (computerSelection >= 1 && computerSelection < 2)) {
            playerCount += 1;
            alert("Jugador = Tijera\nPc = Papel\nGanaste!");
        } else if (playerSelection == "tijera" && computerSelection < 1) {
            computerCount += 1;
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
    console.log(`Player wins! \nPlayer score: ${playerCount}`);
} else if (playerCount < computerCount) {
    console.log(`PC Wins! \nComputer score: ${computerCount}`);
} else {
    console.log("Draw");
}



