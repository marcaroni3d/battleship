import Ship from "../src/factories/Ship";

describe('Ship Functions', () => {
    let testCarrier;
    let testSubmarine;
    beforeEach(() => {
        testCarrier = new Ship('carrier', 5);
        testSubmarine = new Ship('submarine', 3);
    });
    test('accepts a hit', () => {
        testCarrier.hit(2);
        expect(testCarrier.hits).toContain(2);
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