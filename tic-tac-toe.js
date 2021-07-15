function ticTacToe() {
    return true;
}


function printMatriz(matriz){
    var matrizPrint = ""
    for(var index = 0; index < (matriz.length)/3; index++){
        for(var jindex = 0; jindex < (matriz.length)/3; jindex++){
            matrizPrint += jindex == 2 ? ' ' : ' |';
        }
        matrizPrint += index == 2 ? '' : '\n'+'-+-+-'+'\n';
    }
    console.log(matriz);
    console.log(matrizPrint);
}

module.exports = ticTacToe;