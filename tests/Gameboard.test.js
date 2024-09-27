import Gameboard from "../src/factories/Gameboard";
import Ship from "../src/factories/Ship";

describe('Gameboard functions', () => {
    let testBoard;
    let testShip;
    let testObjectArray;
    let testBooleanArray;

    beforeEach(() => {
        testBoard = new Gameboard();
        testShip = new Ship('sub', 3);
        testObjectArray = [];
        testBooleanArray = [];

        for (let i = 0; i < 10; i++) {
            testObjectArray[i] = []
            testBooleanArray[i] = [];
            for (let j = 0; j < 10; j++) {
                testObjectArray[i][j] = null
                testBooleanArray[i][j] = false
            }
        }
    });

    test('creates and initializes a gameboard', () => {
        expect(testBoard).toEqual({
            board: testObjectArray,
            isShot: testBooleanArray,
        })
    });

    test('places a ship', () => {
        testBoard.placeShip(testShip, 1, 1, true)
        testObjectArray[1][1] = testShip
        testObjectArray[2][1] = testShip
        testObjectArray[3][1] = testShip
        expect(testBoard).toEqual({
            board: testObjectArray,
            isShot: testBooleanArray,
        })
    })

    test('receives attack', () => {
        testBoard.receiveAttack(3, 3)
        testBooleanArray[3][3] = true;
        expect(testBoard).toEqual({
            board: testObjectArray,
            isShot: testBooleanArray
        })
    })

    test('attack received by correct ship', () => {
        testBoard.placeShip(testShip, 1, 1, true)
        testBoard.receiveAttack(1, 1)
        expect(testShip.hits).toContainEqual([1, 1])
    })
})