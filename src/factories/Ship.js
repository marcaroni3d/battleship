class Ship {
    constructor(name, position) {
        this.name = name;
        this.position = position;
        this.hits = [];
    }
    hit(index) {
        this.hits.push(index);
    }
    isSunk() {
        return this.position.every((cell) =>
            this.hits.includes(cell)
        );
    }
}

export default Ship