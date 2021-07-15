const ticTacToe = require('../tic-tac-toe');
const ticTacToeFunction = ticTacToe.ticTacToe;
const generateMatriz = ticTacToe.generateMatriz;
const randomNumberInArray = ticTacToe.randomNumberInArray;
const checkCondition = ticTacToe.checkCondition;
const printMatriz = ticTacToe.printMatriz;

describe("Tic-Tac-Toe test", () => {
    test("Init error", () => {
        expect(ticTacToeFunction()).toBe(true);
    });
    test("Generate matriz with: 3", () => {
        expect(generateMatriz(3)).toEqual([0, 1, 2]);
    });
    test("Generate matriz with: 16", () => {
        expect(generateMatriz(16)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
    });
    test("Match with random number in array: 4", () => {
        expect(randomNumberInArray([0, 1, 2, 3, 4])).toBeLessThanOrEqual(4);
    });
    test("Match with random number in array: 10", () => {
        expect(randomNumberInArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBeLessThanOrEqual(10);
    });
    test("Check Winning Conditions: True", () => {
        expect(checkCondition([0, 3, 6])).toBe(true);
    });
    test("Check Winning Conditions: True", () => {
        expect(checkCondition([0, 1, 2])).toBe(true);
    });
    test("Check Winning Conditions: False", () => {
        expect(checkCondition([0, 3, 5])).toBe(false);
    });
    test("Check Winning Conditions: False", () => {
        expect(checkCondition([8, 1, 2])).toBe(false);
    });
    test("Check Matriz Print: Player X won with a vertical line", () => {
        expect(printMatriz(9, [ 1, 8, 6, 4, 7 ], [ 2, 3, 5, 0 ])).toBe("O|X|O\n-+-+-\nO|X|O\n-+-+-\nX|X|X");
    });
    test("Check Matriz Print: Player O won with a vertical line", () => {
        expect(printMatriz(9, [ 5, 4, 2 ], [ 6, 0, 3 ])).toBe("O| |X\n-+-+-\nO|X|X\n-+-+-\nO| | ");
    });
    test("Check Matriz Print: Player O won with a diagonal line", () => {
        expect(printMatriz(9, [ 7, 5, 8 ], [ 2, 6, 4 ])).toBe(" | |O\n-+-+-\n |O|X\n-+-+-\nO|X|X");
    });
    test("Check Matriz Print: Player X won with a diagonal line", () => {
        expect(printMatriz(9, [ 0, 2, 8, 4 ], [ 3, 6, 1 ])).toBe("X|O|X\n-+-+-\nO|X| \n-+-+-\nO| |X");
    });
    test("Check Matriz Print: Player O won with a horizontal line", () => {
        expect(printMatriz(9, [ 1, 8, 7, 0 ], [ 3, 2, 4, 5 ])).toBe("X|X|O\n-+-+-\nO|O|O\n-+-+-\n |X|X");
    });
    test("Check Matriz Print: Player X won with a horizontal line", () => {
        expect(printMatriz(9, [ 0, 3, 2, 8, 1 ], [ 6, 7, 4, 5 ])).toBe("X|X|X\n-+-+-\nX|O|O\n-+-+-\nO|O|X");
    });
    test("Check Matriz Print: Game ends with a draw", () => {
        expect(printMatriz(9, [ 4, 8, 1, 3, 2 ], [ 5, 7, 6, 0 ])).toBe("O|X|X\n-+-+-\nX|X|O\n-+-+-\nO|O|X");
    });
});