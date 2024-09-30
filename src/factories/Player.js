import Gameboard from "./Gameboard";

class Player {
    constructor(name) {
        this.name = name;
        this.ships = [];
        this.gameBoard = new Gameboard();
    }

    fireShot(location, gameboard) {
        gameboard.receiveAttack(location)
    }

}

export default Player;