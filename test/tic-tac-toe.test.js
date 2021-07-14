const ticTacToe = require('../tic-tac-toe');

describe("Tic-Tac-Toe test", () => {
    test("Init error", () => {
        expect(ticTacToe()).toBe(true);
    });

});