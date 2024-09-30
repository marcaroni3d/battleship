import Gameboard from "../src/factories/Gameboard";
import Player from "../src/factories/Player";
import Ship from "../src/factories/Ship"

describe('Player functions', () => {
    let testBoard
    let testPlayer
    let testShip

    beforeEach(() => {
        testBoard = new Gameboard;
        testPlayer = new Player('Player');
        testShip = new Ship('submarine', 3);
    })

    test('creates Player with a name', () => {
        expect(testPlayer.name).toEqual('Player')
    })

    test('creates Player with a Gameboard', () => {
        expect(testPlayer.gameBoard).toEqual(testBoard)
    })
})