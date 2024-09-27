const SIZE = 10;

class Gameboard {
    constructor() {
        this.board = [];
        this.isShot = [];
        this.init()
    }

    init() {
        for (let i = 0; i < SIZE; i++) {
            this.board[i] = []
            this.isShot[i] = [];
            for (let j = 0; j < SIZE; j++) {
                this.board[i][j] = null
                this.isShot[i][j] = false
            }
        }
    }

    placeShip(ship, row, column, isVertical) {
        if (!this.isPlacementPossible(ship, row, column, isVertical)) return false

        if (isVertical) {
            for (let i = 0; i < ship.length; i++) {
                this.board[row + i][column] = ship
            }
        } else {
            for (let i = 0; i < ship.length; i++) {
                this.board[row][column + i] = ship
            }
        }
        return true
    }

    isPlacementPossible(ship, row, column, isVertical) {
        // case outside gameboard
        if (row < 0 || row > SIZE - 1 || column < 0 || column > SIZE - 1) return false

        // case ship doesn't fit
        if (isVertical) {
            if (row + ship.length > SIZE) return false
        } else {
            if (column + ship.length > SIZE) return false
        }

        return true
    }

    receiveAttack(row, column) {
        // case outside gameboard
        if (row < 0 || row >= SIZE || column < 0 || column >= SIZE) {
            return false
        }

        if(this.hasShip(row, column)) {
            let ship = this.board[row][column]
            ship.hit([row, column])
        }
        this.isShot[row][column] = true;
    }

    hasShip(row, column) {
        if (this.board[row][column] !== null) return true
        else return false
    }

}

export default Gameboard;