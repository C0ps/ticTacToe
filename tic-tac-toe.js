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
    var matriz = generateMatriz(9);
    var xArray = [];
    var oArray = [];
    var xWin = false;
    var oWin = false;
    //Player X is true, Player is false
    var Player = true;

    while (matriz.length && !xWin && !oWin) {
        var position = randomNumberInArray(matriz);

        if (Player) {
            xArray.push(position);
            Player = !Player;
            xWin = checkCondition(xArray);

        } else {
            oArray.push(position);
            Player = !Player;
            oWin = checkCondition(oArray);
        }
        console.log(printMatriz(9, xArray, oArray));

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

// Generate a sequence of numbers
// Since the array is initialized with `undefined` on each position,
// the value of `u` below will be `undefined`
function generateMatriz(lengthMatriz) {
    return (Array.from({ length: lengthMatriz }, (u, x) => x))
}

//Random item or number from the matriz, only the number available
function randomNumberInArray(matriz) {
    return (matriz[Math.floor(Math.random() * matriz.length)]);
}

//The Intersection from all winning conditions and xArray/oArray (inner Join)
function checkCondition(array) {
    for (const element of winningConditions) {
        var condition = element.filter(x => array.includes(x)).length;
        if (condition === 3) {
            return true;
        }
    }
    return false;
}

//Print the matriz on console
function printMatriz(lengthMatriz, xArray, oArray) {
    var matrizPrint = "";
    var position = 0;

    for (var index = 0; index < lengthMatriz / 3; index++) {
        for (var jindex = 0; jindex < lengthMatriz / 3; jindex++) {
            if (xArray.indexOf(position) > -1) {
                matrizPrint += jindex == 2 ? 'X' : 'X|';
            } else if (oArray.indexOf(position) > -1) {
                matrizPrint += jindex == 2 ? 'O' : 'O|';
            } else {
                matrizPrint += jindex == 2 ? ' ' : ' |';
            }
            position++;
        }
        matrizPrint += index == 2 ? '' : '\n' + '-+-+-' + '\n';
    }
    return (matrizPrint);
}

module.exports = {
    ticTacToe,
    generateMatriz,
    randomNumberInArray,
    checkCondition,
    printMatriz
};