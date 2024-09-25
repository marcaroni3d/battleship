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
        console.log(this)
        return this.hits.length === this.length
    }
}

export default Ship