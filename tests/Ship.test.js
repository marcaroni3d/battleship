import Ship from "../src/factories/Ship";

describe('Ship Functions', () => {
    let testCarrier;
    let testSubmarine;
    beforeEach(() => {
        testCarrier = new Ship('carrier', [0, 1, 2, 3, 4]);
        testSubmarine = new Ship('submarine', [12, 13, 14]);
    });
    test('accepts a hit', () => {
        testCarrier.hit(0);
        expect(testCarrier.hits).toEqual([0]);
    });
    test('accepts multiple hits', () => {
        testSubmarine.hit(12);
        testSubmarine.hit(13);
        expect(testSubmarine.hits).toEqual([12, 13]);
    });
    test('shows that the boat is not sunk', () => {
        testCarrier.hit(0);
        testCarrier.hit(1);
        expect(testCarrier.isSunk()).toBe(false);
    });
    test('shows that a boat is sunk', () => {
		testSubmarine.hit(12);
		testSubmarine.hit(13);
		testSubmarine.hit(14);
		expect(testSubmarine.isSunk()).toBe(true);
	});

});