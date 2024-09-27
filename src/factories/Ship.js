class Ship {
    constructor(name, length) {
        this.name = name;
        this.length = length;
        this.hits = [];
    }

    hit(index) {
        this.hits.push(index);
    }

    isSunk() {
        return this.hits.length === this.length
    }
}

export default Ship