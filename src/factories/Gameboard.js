const SIZE = 10;

class Gameboard {
    constructor() {
        this.board = [];
        this.missedShots = [];
        this.init()
    }

    init() {
        for (let i = 0; i < SIZE; i++) {
            this.board[i] = []
            this.missedShots[i] = [];
            for (let j = 0; j < SIZE; j++) {
                this.board[i][j] = null
                this.missedShots[i][j] = false
            }
        }
    }

    placeShip(ship, row, column, isVertical) {
        // if (!this.isPlacementPossible(ship, row, column, isVertical)) return false

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


}

export default Gameboard;