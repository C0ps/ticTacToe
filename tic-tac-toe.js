const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
function ticTacToe() {
    // Generate a sequence of numbers
    // Since the array is initialized with `undefined` on each position,
    // the value of `u` below will be `undefined`
    var matriz = generateMatriz(9);
    var xArray = [];
    var oArray = [];
    var xWin = false;
    var oWin = false;
    var Player = true;

    while (matriz.length && !xWin && !oWin) {
        var position = RandomNumberInArray(matriz);

        if (Player) {
            //printMatriz(matriz, position, player);
            xArray.push(position);
            Player = !Player;
            xWin = checkCondition(xArray);

        } else {
            //printMatriz(matriz, position, player);
            oArray.push(position);
            Player = !Player;
            oWin = checkCondition(oArray);
        }
        matriz.splice(matriz.indexOf(position), 1);
    }

    if (xWin) {
        console.log("PLAYER X WON!");
    } else if (oWin) {
        console.log("PLAYER O WON!");
    } else {
        console.log("GAME ENDS WITH A DRAW!");
    }

    return true;
}

function generateMatriz(lengthMatriz){
    return (Array.from({ length: lengthMatriz }, (u, x) => x))
}

function RandomNumberInArray(matriz){
    return(matriz[Math.floor(Math.random() * matriz.length)]);
}
function checkCondition(array) {
    for (const element of winningConditions) {
        var condition = element.filter(x => array.includes(x)).length;
        if (condition === 3) {
            return true;
        }
    }
    return false;
}

function printMatriz(matriz, position, player) {
    var matrizPrint = ""

    for (var index = 0; index < (matriz.length) / 3; index++) {
        for (var jindex = 0; jindex < (matriz.length) / 3; jindex++) {
            matrizPrint += jindex == 2 ? ' ' : ' |';
        }
        matrizPrint += index == 2 ? '' : '\n' + '-+-+-' + '\n';
    }
    console.log(matriz);
    console.log(matrizPrint);
}

module.exports = ticTacToe;